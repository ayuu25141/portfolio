import React from 'react'

function Abouthero() {
  return (
    <>
      {/* 🌟 FIX 1: min-h-screen ko h-fit kiya taaki ye layout content ke hisab se automatic space le */}
      <section className="h-fit bg-[#f7f4ea] text-[#4b3500]">
        <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-10 sm:pt-12">
          
          {/* About Header Row */}
          {/* Mobile par heading text thoda responsive kiya (text-xl sm:text-2xl) */}
          <div className="flex items-end justify-between border-b border-[#4a3500]/10 pb-2 mb-4">
            <h2 className="text-xl sm:text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4a3500]">
              About
            </h2>
          </div>

          {/* Description Container */}
          {/* 🌟 FIX 2: mt-14 ko mobile par mt-6 kiya taaki heading ke theek niche se start ho */}
          {/* 🌟 FIX 3: space-y-5 lagaya taaki saare paragraphs ke beech automatic clean spacing aaye */}
          <div className="mt-6 sm:mt-14 max-w-2xl space-y-5">
            
            <p className="font-['JetBrains_Mono'] text-sm leading-6 sm:leading-7 text-[#876a22]">
              I’m currently a BCA student at LPU, and most of my time goes into writing backend systems in Golang. I like building things that can actually handle load without falling apart — clean schemas, solid queries, migrations that don’t bite you later.
            </p>

            <p className="font-['JetBrains_Mono'] text-sm leading-6 sm:leading-7 text-[#876a22]">
              Before Go became my main thing, I spent a good amount of time doing full-stack work (mostly JavaScript). That background still helps a lot — when I need to move fast on the frontend or just ship something end-to-end, I can do it without waiting on anyone else.
            </p>

            <p className="font-['JetBrains_Mono'] text-sm leading-6 sm:leading-7 text-[#876a22]">
              Right now I’m building Urban Bite, learning blockchain development on the side, and slowly getting under the hood of how it actually works. I also dabble in crypto investing — more out of curiosity than anything else. I’m still figuring a lot of it out, but the combination of systems, databases, and decentralized tech is what keeps me hooked.
            </p>

            {/* Sub-text block for goals */}
            <div className="pt-2 space-y-3 font-['JetBrains_Mono'] text-sm leading-6 sm:leading-7 text-[#876a22]">
              <p className="font-semibold text-[#4a3500]">What I’m aiming for next is simple:</p>
              
              {/* Bullet styles logic visually cleaner than raw text line breaks */}
              <ul className="list-disc pl-4 space-y-1 text-[#876a22]/90">
                <li>Backend systems that scale without drama</li>
                <li>Blockchain that’s properly integrated (not just bolted on)</li>
                <li>Enough full-stack strength that I can take an idea from zero to shipped on my own</li>
              </ul>
              
              <p className="pt-2 italic text-[#4a3500]/80">
                That’s pretty much me. Always building, always learning, and always trying to keep things real.
              </p>
            </div>

          </div>

        </div>
      </section> 
    </>
  )
}

export default Abouthero
