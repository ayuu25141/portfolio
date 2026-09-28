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

<section className=" bg-[#f7f4ea] text-[#4b3500]">
   <div className="mx-auto max-w-2xl px-6 sm:px-10 sm:pt-12">

    <div className="mx-auto max-w-3xl">
        
        {/* Section Heading with subtle top border to align perfectly with your grid */}
        <div className="flex items-end justify-between border-b border-[#4b3500]/10 pb-2 mb-6">
          <h2 className="text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4b3500]">
            Capabilities
          </h2>
          <span className="font-['Geist_Mono'] text-sm  uppercase tracking-widest opacity-40 pb-1">
            stack configuration
          </span>
        </div>

        {/* 2. The Technical Matrix Stack */}
        <div className="space-y-5 font-['Geist_Mono'] text-[14.5px]">
          {skillMatrix.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 py-2 border-b border-[#4b3500]/5 last:border-none group"
            >
              {/* Category Identity Identifier */}
              <div className="text-sm  opacity-40 tracking-wider  flex-shrink-0 font-['Geist_Mono'] text-[#4b3500] group-hover:opacity-60 transition-opacity duration-200">
                {item.categoryCode}
              </div>

              {/* Interactive Linear Skill Tokens Array */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 md:justify-end text-left md:text-right max-w-xl">
                {item.skills.map((skill, idx) => (
                  <React.Fragment key={skill}>
                    <span className="font-semibold text-[#4b3500]/90 hover:text-[#4b3500] transition-colors duration-150 cursor-default">
                      {skill}
                    </span>
                    {/* Visual Dot Buffer (Do not print after the final item in the array row) */}
                    {idx < item.skills.length - 1 && (
                      <span className="opacity-30 pointer-events-none select-none text-[12px]">•</span>
                    )}
                  </React.Fragment>
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
