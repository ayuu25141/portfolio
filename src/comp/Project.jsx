import React from 'react';
import {Accordion} from "@heroui/react";

export default function Project() {
  // 1. Projects Data Object Array
 
const projects = [
  {
          id: 1,
    title: "Oneupload Webapp",
    description: "Oneupload is free webapp to share photos with privacy password with expires time and more",
    bulletpoint : ["point","point2"],
    tech: ["Golang","fiber","postgres","react","cloudinary"],
    github: "https://github.com/ayuu25141/Oneupload",
    demo: "https://oneuploadme.vercel.app",
 
  },
  {
          id: 2,
  title: "TreeifyJson",
  description:
    "TreeifyJSON is a web application that transforms complex JSON data into an interactive tree structure, making it easy to visualize, explore, and understand nested objects and arrays.",
  tech: ["React", "JS", "Golang","Fiber", "Tailwind CSS"],
  github: "https://github.com/ayuu25141/TreeifyJson",
  demo: "https://treeifyjson.vercel.app",

},
 {
          id: 3,
    title: "Full-Stack Task App",
    description: "A task management web app with user authentication, offline support, and real-time updates.",
    tech: ["React", "Golang", "PostgreSQL", "Axios", "TanStack Query"],
    github: "https://github.com/ayuu25141/Full-Stack-TaskManage-webapp",
    demo: "https://nextaskme.vercel.app",

  },
  

];





  return (

<section className="bg-[#f7f4ea] text-[#4b3500]">
  <div className="mx-auto max-w-2xl px-4 sm:px-10 pt-6 sm:pt-12">

    {/* Header Row */}
    <div className="flex items-end justify-between border-b border-[#4a3500]/10 pb-2">
      <h2 className="text-lg sm:text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4a3500]">
        Projects
      </h2>
      <a
        href="/projects"
        rel="noopener noreferrer"
        className="font-['Geist_Mono'] font-semibold text-xs sm:text-sm text-[#4a3500]/70 hover:text-[#4a3500] underline underline-offset-4 decoration-[#4a3500]/30 hover:decoration-[#4a3500] transition-all duration-200 pb-0.5"
      >
        see more <span className="text-base sm:text-lg inline-block transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5">↗</span>
      </a>
    </div>

    {/* Project List */}
    <div className="py-6 space-y-6 sm:space-y-8">
      {projects.map((project) => (
        <div key={project.id} className="group">

          {/* Title + Tech Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-y-1 gap-x-4 mb-2">
            <p className="font-['IBM_Plex_Serif'] tracking-tight text-[15px] sm:text-base font-semibold text-[#4a3500]">
              {project.title}
            </p>

            {project.tech?.length > 0 && (
              <p className="font-['JetBrains_Mono'] text-[11px] sm:text-sm leading-5 sm:leading-7 text-[#876a22] flex flex-wrap justify-start sm:justify-end gap-x-1 gap-y-0.5 text-left sm:text-right">
                {project.tech.map((techItem, index) => (
                  <span key={index} className="flex items-center whitespace-nowrap">
                    {techItem}
                    {index < project.tech.length - 1 && (
                      <span className="mx-1.5 opacity-60">·</span>
                    )}
                  </span>
                ))}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="font-['JetBrains_Mono'] text-[13px] sm:text-sm leading-6 sm:leading-7 text-[#876a22] mb-3">
            {project.description}
          </p>

          {/* Bullet points */}
          {project.bulletpoint?.length > 0 && (
            <ul className="space-y-1.5 mb-3 pl-1">
              {project.bulletpoint.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#7a6f55] leading-relaxed"
                >
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#b8a88a] flex-shrink-0" />
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          )}

          {/* 🌟 NEW: Action Actionable Project Links Wrapper */}
          {/* Mobile aur Computer screen dono par left side se uniform flow honge */}
          {(project.github || project.demo) && (
            <div className="flex items-center gap-x-4 font-['Geist_Mono'] text-[12px] sm:text-sm mt-3 mb-1 select-none">
              
              {/* Github Action */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#4a3500]/70 hover:text-[#4a3500] transition-colors duration-200 underline underline-offset-4 decoration-[#4a3500]/20 hover:decoration-[#4a3500]"
                >
                  source <span className="opacity-60 text-xs">↗</span>
                </a>
              )}

              {/* Live URL Demo Action */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#4a3500]/70 hover:text-[#4a3500] transition-colors duration-200 underline underline-offset-4 decoration-[#4a3500]/20 hover:decoration-[#4a3500]"
                >
                  live demo <span className="opacity-60 text-xs">↗</span>
                </a>
              )}

            </div>
          )}

          {/* Divider — last project ke baad hide */}
          <div className="mt-6 border-t border-[#e5dcc8] group-last:hidden" />
        </div>
      ))}
    </div>

  </div>
</section>



        
    
    


  
  );
}






    //  <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-6">
    //       {projectsData.map((project) => (
    //         <div 
    //           key={project.id}
    //           className="group flex flex-col justify-between p-6 bg-white/40 dark:bg-black/[0.02] border border-[#4b3500]/10 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(75,53,0,0.04)] hover:-translate-y-0.5"
    //         >
    //           <div>
    //             {/* Project Title */}
    //             <h3 className="font-[''] text-2xl font-semibold tracking-tight text-[#4b3500] mb-3">
    //               {project.title}
    //             </h3>

    //             {/* Project Description */}
    //             <p className=" font-['JetBrains_Mono'] text-sm leading-relaxed text-[#4b3500]/80 tracking-tight mb-6">
    //               {project.description}
    //             </p>
    //           </div>

    //           <div>
    //             {/* Tech Stack Tags (Separated by middle dots) */}
    //             <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1  font-['JetBrains_Mono'] text-sm text-[#4b3500]/60 mb-6">
    //               {project.tech.map((tech, index) => (
    //                 <React.Fragment key={tech}>
    //                   <span className="hover:text-[#4b3500] transition-colors duration-150">
    //                     {tech}
    //                   </span>
    //                   {index < project.tech.length - 1 && (
    //                     <span className="opacity-40 select-none">•</span>
    //                   )}
    //                 </React.Fragment>
    //               ))}
    //             </div>

    //             {/* Links Row */}
    //             <div className="flex items-center gap-5 font-['JetBrains_Mono'] text-[14px]">
    //               {/* GitHub Link */}
    //               <a 
    //                 href={project.github}
    //                 target="_blank" 
    //                 rel="noopener noreferrer"
    //                 className="flex items-center gap-1 hover:text-[#4b3500] underline underline-offset-4 decoration-[#4b3500]/30 hover:decoration-[#4b3500] transition-all duration-200"
    //               >
    //                 GitHub 
    //                 <span className="text-[10px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
    //               </a>

    //               {/* Live Link (Render only if exists) */}
    //               {project.demo && (
    //                 <a 
    //                   href={project.demo}
    //                   target="_blank" 
    //                   rel="noopener noreferrer"
    //                   className="flex items-center gap-1 text-[#4b3500]/90 font-semibold underline underline-offset-4 decoration-[#4b3500]/30 hover:decoration-[#4b3500] transition-all duration-200"
    //                 >
    //                   Live Demo 
    //                   <span className="text-[10px]">↗</span>
    //                 </a>
    //               )}
    //             </div>
    //           </div>

    //         </div>
    //       ))}
    //     </div>
