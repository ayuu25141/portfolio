import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * DynamicNotch — real-time agent activity indicator.
 *
 * Usage:
 *   <DynamicNotch />                                   // auto-cycles the demo reel
 *   <DynamicNotch active={isAgentRunning} />           // show/hide
 *   <DynamicNotch state={liveState} />                 // fully controlled by real events
 *   <DynamicNotch states={customReel} onCycle={fn} />  // custom demo reel + callbackQ
 *
 * Drop into any existing React page. No external deps beyond React itself.
 * Loads Inter from Google Fonts on mount (skipped if already present).
 */

const DEFAULT_STATES = [
  {
    type: "scanning",
    top: "Analyzing 14,204 tokens",
    bottom: "Thinking",
    color: "#ffc18f",
    duration: 2500,
  },
  {
    type: "reading",
    files: [
      "app-sidebar.tsx",
      "use-agent-state.ts",
      "notch-config.json",
      "globals.css",
      "package.json",
    ],
    bottom: "Reading files",
    color: "#ff99a8",
    duration: 4500,
  },
  {
    type: "planning",
    top: "Synthesizing knowledge",
    bottom: "Drafting plan",
    color: "#c299ff",
    duration: 2500,
  },
  {
    type: "writing",
    file: "DynamicNotch.html",
    bottom: "Writing code",
    color: "#82ff9e",
    duration: 5000,
  },
  {
    type: "terminal",
    commands: ["npm run lint", "tsc --noEmit", "vite build", "vitest run"],
    bottom: "Running checks",
    color: "#ffeb85",
    duration: 3500,
  },
  {
    type: "success",
    top: "Task completed successfully",
    bottom: "Done",
    color: "#8ab4ff",
    duration: 3000,
  },
];

// Cell index 0-8 (3x3 grid). Cell 4 (centre) is the invisible "eye".
const PIXEL_DELAYS = [0.1, 0.8, 0.3, 0.9, null, 0.4, 0.7, 0.2, 0.6];

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Notch({
  states,
  active = true,
  state: controlledState,
  onCycle,
}) {
  const stateList = states && states.length ? states : DEFAULT_STATES;
  const isControlled = Boolean(controlledState);

  const notchRef = useRef(null);
  const tickIntervalRef = useRef(null);
  const fadeTimeoutRef = useRef(null);
  const cycleTimeoutRef = useRef(null);
  const mountedRef = useRef(false);

  const [visible, setVisible] = useState(true);
  const [color, setColor] = useState(
    (isControlled ? controlledState.color : stateList[0]?.color) || "#ffffff"
  );
  const [topMain, setTopMain] = useState("");
  const [topExtra, setTopExtra] = useState(null); // { text, color }
  const [bottomLabel, setBottomLabel] = useState("");

  // Load Inter once, skip if the host page already has it.
  useEffect(() => {
    const id = "dnotch-inter-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const clearTick = () => {
    if (tickIntervalRef.current) {
      clearInterval(tickIntervalRef.current);
      tickIntervalRef.current = null;
    }
  };

  // Hidden-ghost width measurement — called once per state entry, with the
  // widest plausible string for ticker states so the notch never jiggles.
  const measureWidth = useCallback((topStr, bottomStr) => {
    const ghost = document.createElement("div");
    ghost.style.cssText =
      "position:absolute;visibility:hidden;white-space:nowrap;" +
      "font-family:'Inter',sans-serif;padding:0 28px;display:flex;" +
      "flex-direction:column;top:-9999px;left:-9999px;";
    ghost.innerHTML =
      '<div style="font-size:13px;font-weight:500;font-variant-numeric:tabular-nums;">' +
      topStr +
      '</div><div style="display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600;">' +
      '<div style="width:14px;"></div><div>' +
      bottomStr +
      "</div></div>";
    document.body.appendChild(ghost);
    const w = ghost.offsetWidth + 12;
    document.body.removeChild(ghost);
    if (notchRef.current) notchRef.current.style.width = w + "px";
  }, []);

  // Applies one state object to the DOM/text/interval — no fade, no scheduling.
  const enterState = useCallback(
    (thisState) => {
      clearTick();
      setColor(thisState.color);
      setBottomLabel(thisState.bottom || "");

      if (thisState.type === "reading") {
        const files =
          thisState.files && thisState.files.length ? thisState.files : ["file.ts"];
        let fileIdx = 0;
        let lines = 10;
        let tick = 0;
        const render = () => {
          setTopMain(`Read ${files[fileIdx]}`);
          setTopExtra({ text: `${lines} lines`, color: null });
        };
        render();
        measureWidth("Read app-sidebar.tsx 999 lines", thisState.bottom || "");
        tickIntervalRef.current = setInterval(() => {
          fileIdx = (fileIdx + 1) % files.length;
          tick += 1;
          lines = tick % 3 === 0 ? 10 : lines + rand(12, 52);
          render();
        }, 180);
      } else if (thisState.type === "writing") {
        let written = 0;
        const render = () => {
          setTopMain(`Update ${thisState.file}`);
          setTopExtra({ text: `+${written} lines`, color: "#82ff9e" });
        };
        render();
        measureWidth(
          "Update DynamicNotch.html +999 lines",
          thisState.bottom || ""
        );
        tickIntervalRef.current = setInterval(() => {
          written += rand(1, 6);
          render();
        }, 90);
      } else if (thisState.type === "terminal") {
        const commands =
          thisState.commands && thisState.commands.length
            ? thisState.commands
            : ["run"];
        let cmdIdx = 0;
        const render = () => {
          setTopMain(`> ${commands[cmdIdx]}`);
          setTopExtra({ text: `${rand(120, 720)}ms`, color: null });
        };
        render();
        measureWidth("> vite build 850ms", thisState.bottom || "");
        tickIntervalRef.current = setInterval(() => {
          cmdIdx = (cmdIdx + 1) % commands.length;
          render();
        }, 800);
      } else {
        // static states: scanning, planning, success, or any custom type
        setTopMain(thisState.top || "");
        setTopExtra(null);
        measureWidth(thisState.top || "", thisState.bottom || "");
      }

      if (onCycle) onCycle(thisState);
    },
    [measureWidth, onCycle]
  );

  // Auto-cycle path: fade out -> swap -> fade in -> wait duration -> repeat.
  const goToIndex = useCallback(
    (index) => {
      const len = stateList.length;
      const thisState = stateList[((index % len) + len) % len];

      setVisible(false);
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        enterState(thisState);
        setVisible(true);

        clearTimeout(cycleTimeoutRef.current);
        cycleTimeoutRef.current = setTimeout(() => {
          if (!mountedRef.current) return;
          goToIndex(index + 1);
        }, thisState.duration || 3000);
      }, 250);
    },
    [enterState, stateList]
  );

  // Controlled path: same fade choreography, but no auto-advance timer.
  const goToControlled = useCallback(
    (thisState) => {
      setVisible(false);
      clearTimeout(fadeTimeoutRef.current);
      clearTimeout(cycleTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        enterState(thisState);
        setVisible(true);
      }, 250);
    },
    [enterState]
  );

  useEffect(() => {
    mountedRef.current = true;
    if (isControlled) {
      goToControlled(controlledState);
    } else {
      goToIndex(0);
    }
    return () => {
      mountedRef.current = false;
      clearTick();
      clearTimeout(fadeTimeoutRef.current);
      clearTimeout(cycleTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to controlled-state changes after mount.
  useEffect(() => {
    if (isControlled && mountedRef.current) {
      goToControlled(controlledState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlledState]);

  const glowDim = hexToRgba(color, 0.15);

  return (
    <>
      <style>{`
        .dnotch-bezel {
          position: absolute; top: 0; left: 0; right: 0; height: 14px;
          background: #000; z-index: 10;
        }
        .dnotch-container {
          position: absolute; top: 14px; left: 50%;
          transform: translate(-50%, -100%);
          background: #000;
          border-bottom-left-radius: 22px;
          border-bottom-right-radius: 22px;
          height: 58px;
          padding: 0 28px;
          z-index: 9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Inter", sans-serif;
          box-shadow: 0 15px 35px rgba(0,0,0,0.10), 0 25px 60px var(--glow-color-dim);
          transition:
            width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
            transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.6s ease;
        }
        .dnotch-container.dnotch-active { transform: translate(-50%, 0); }
        .dnotch-container::before,
        .dnotch-container::after {
          content: "";
          position: absolute;
          top: -1px;
          width: 20px;
          height: 20px;
        }
        .dnotch-container::before {
          right: 100%;
          border-top-right-radius: 20px;
          box-shadow: 10px -10px 0 10px #000;
        }
        .dnotch-container::after {
          left: 100%;
          border-top-left-radius: 20px;
          box-shadow: -10px -10px 0 10px #000;
        }
        .dnotch-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          width: 100%;
          transition: opacity 0.2s ease;
        }
        .dnotch-content.dnotch-hidden { opacity: 0; }
        .dnotch-content.dnotch-shown { opacity: 1; }
        .dnotch-top {
          font-size: 13px;
          font-weight: 500;
          color: var(--muted);
          letter-spacing: -0.2px;
          font-variant-numeric: tabular-nums;
        }
        .dnotch-top-extra { opacity: 0.6; }
        .dnotch-bottom-row { display: flex; align-items: center; gap: 10px; }
        .dnotch-pixel-icon {
          width: 14px; height: 14px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 1px;
          color: var(--glow-color);
          filter: drop-shadow(0 0 6px currentColor);
          flex-shrink: 0;
        }
        .dnotch-pixel-icon span {
          background: currentColor;
          border-radius: 1px;
          animation: dnotch-pixel-flicker 1s infinite alternate ease-in-out;
        }
        .dnotch-pixel-icon span.dnotch-cell-eye {
          opacity: 0;
          animation: none;
          background: transparent;
        }
        @keyframes dnotch-pixel-flicker {
          0%, 15% { opacity: 0.1; }
          85%, 100% { opacity: 1; }
        }
        .dnotch-bottom-text {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.1px;
          background: linear-gradient(110deg,
            #ffffff 0%, rgba(255,255,255,0.7) 20%, var(--glow-color) 40%,
            #ffffff 60%, rgba(255,255,255,0.7) 80%, var(--glow-color) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: dnotch-text-shimmer 3s linear infinite;
        }
        @keyframes dnotch-text-shimmer { to { background-position: -200% center; } }
        @media (max-width: 480px) {
          .dnotch-top { font-size: 12px; }
          .dnotch-bottom-text { font-size: 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .dnotch-pixel-icon span { animation: none !important; opacity: 1; }
          .dnotch-bottom-text { animation: none !important; }
          .dnotch-container {
            transition: width 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
          }
          .dnotch-content { transition: none !important; }
        }
      `}</style>

      <div className="dnotch-bezel" />
      <div
        ref={notchRef}
        className={`dnotch-container${active ? " dnotch-active" : ""}`}
        style={{
          "--glow-color": color,
          "--glow-color-dim": glowDim,
          "--muted": "#8c8c8c",
        }}
      >
        <div
          className={`dnotch-content ${
            visible ? "dnotch-shown" : "dnotch-hidden"
          }`}
        >
          <div className="dnotch-top">
            {topMain}
            {topExtra && (
              <span
                className="dnotch-top-extra"
                style={{ color: topExtra.color || "inherit" }}
              >
                {" "}
                {topExtra.text}
              </span>
            )}
          </div>
          <div className="dnotch-bottom-row">
            <div className="dnotch-pixel-icon">
              {PIXEL_DELAYS.map((delay, i) =>
                delay === null ? (
                  <span key={i} className="dnotch-cell-eye" />
                ) : (
                  <span key={i} style={{ animationDelay: `${delay}s` }} />
                )
              )}
            </div>
            <div className="dnotch-bottom-text">{bottomLabel}</div>
          </div>
        </div>
      </div>
    </>
  );
}
