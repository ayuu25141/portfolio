import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderKanban, FileUser } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function MorphingTabNavbarShowcase() {
  const tabs = [
    {
      id: "Home",
      path: "/",
      icon: Home,
    },
    {
      id: "About",
      path: "/about",
      icon: User,
    },
    {
      id: "Projects",
      path: "/projects",
      icon: FolderKanban,
    },
    {
      id: "Resume",
      path: "https://drive.google.com/file/d/11JRkF9_tBQ-gij0_aRdNbIFI_stQD-9w/view?usp=sharing",
      icon: FileUser,
      isExternal: true,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:p-6 select-none">
      {/* THE MORPHING NAVBAR */}
      <div className="relative flex items-center justify-center max-w-full sm:max-w-md">
        <nav className="relative flex items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-full bg-[#fffefb] dark:bg-[#181622]/90 border border-black/10 dark:border-white/12 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.6)] transition-colors duration-200">
          
          {tabs.map((tab) => {
            const Icon = tab.icon;

            // External link (Resume)
            if (tab.isExternal) {
              return (
                <a
                  key={tab.id}
                  href={tab.path}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
                  </span>
                  {/* Label hidden on very small screens */}
                  <span className="relative z-10 hidden sm:inline text-xs sm:text-[13px] md:text-[14px] font-semibold tracking-wide">
                    {tab.id}
                  </span>
                </a>
              );
            }

            // Internal routes
            return (
              <NavLink key={tab.id} to={tab.path}>
                {({ isActive }) => (
                  <div
                    className={`relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-colors duration-300 cursor-pointer min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 ${
                      isActive
                        ? 'text-black dark:text-white'
                        : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {/* Sliding Background Bubble */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBubble"
                        className="absolute inset-0 bg-black/[0.08] dark:bg-white/[0.12] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center justify-center">
                      <Icon
                        size={16}
                        className="sm:w-[20px] sm:h-[20px]"
                        strokeWidth={isActive ? 2.4 : 2}
                      />
                    </span>

                    {/* Label hidden on very small screens */}
                    <span className="relative z-10 hidden sm:inline text-xs sm:text-[13px] md:text-[14px] font-semibold tracking-wide">
                      {tab.id}
                    </span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}