import React from 'react';

export default function Skills() {
  // 1. Structural Skill Data Object
  const skillMatrix = [
    {
      categoryCode: "01 // CORE ENGINE",
      skills: ["Golang", "Java", "JavaScript (ES6+)","Fiber","Node js","Springboot"]
    },
    {
      categoryCode: "02 // INFRA & SYSTEMS",
      skills: ["Redis", "PostgreSQL", "Mongodb", "gRPC","Microservices" ]
    },
    {
      categoryCode: "03 // FRONTEND OVERRIDES",
      skills: ["React", "Redux", "Next.js", "TanstackQuery","React Native"]
    }
  ];

  return (

<section className="bg-[#f7f4ea] text-[#4b3500]">
  <div className="mx-auto max-w-2xl px-4 sm:px-10 pt-6 sm:pt-12">
    <div className="mx-auto max-w-3xl">
        
      {/* Heading Row */}
      {/* items-end class ko double duplicate hone se saaf kiya */}
      <div className="flex items-baseline justify-between border-b border-[#4b3500]/10 pb-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4b3500] whitespace-nowrap">
          Capabilities
        </h2>
        <span className="font-['Geist_Mono'] text-[10px] sm:text-sm uppercase tracking-widest opacity-40 pb-0.5 text-right selection:bg-transparent">
          stack configuration
        </span>
      </div>

      {/* 2. The Technical Matrix Stack */}
      {/* Mobile par font size ko tight (text-[11.5px]) kiya hai taaki aamne-saamne fit ho sake */}
      <div className="space-y-3 sm:space-y-5 font-['Geist_Mono'] text-[11.5px] sm:text-[14.5px]">
        {skillMatrix.map((item, index) => (
          <div
            key={index}
            
            className="grid grid-cols-3 sm:flex sm:flex-row sm:items-baseline sm:justify-between gap-x-4 gap-y-1 py-3 border-b border-[#4b3500]/5 last:border-none group"
          >
            {/* Category Identity Identifier */}
            {/* col-span-1 se category 33% screen layout lock karegi */}
            <div className="col-span-1 text-[10px] sm:text-sm opacity-40 tracking-wider text-[#4b3500] group-hover:opacity-60 transition-opacity duration-200 uppercase leading-relaxed">
              {item.categoryCode}
            </div>

            {/* Skill tokens */}
            {/* col-span-2 se skills bachi hui 66% horizontal space cover karengi */}
            <div className="col-span-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 justify-start sm:justify-end sm:max-w-xl">
              {item.skills.map((skill, idx) => (
                <span key={skill} className="inline-flex items-baseline whitespace-nowrap">
                  <span className="font-semibold text-[#4b3500]/90 hover:text-[#4b3500] transition-colors duration-150 cursor-default">
                    {skill}
                  </span>
                  {/* Dot balance spacer */}
                  {idx < item.skills.length - 1 && (
                    <span className="ml-2 opacity-30 pointer-events-none select-none text-[10px] sm:text-[12px]">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>







   
  
  );
}
