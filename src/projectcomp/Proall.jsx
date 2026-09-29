import React from 'react';
import {Accordion} from "@heroui/react";

export default function Proall() {
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
    {
              id: 4,
    title: "Generative Webapp ",
    description: "Genreate the Html form with Ai with Good Design",
    tech: ["React","Golang"],
    github: "https://github.com/ayuu25141/Full-Stack-WebApp-GenAi",
    demo: "https://formgenai.vercel.app",
    
  },
  {
          id: 5,
  title: "Montre Luxe",
  description:
    "A premium luxury watch website with a modern and elegant design. Built using React with smooth animations, responsive layouts, and a high-end shopping experience.",
  tech: ["React", "JavaScript", "Tailwind CSS"],
  github: "https://github.com/ayuu25141/",
  demo: "https://montreluxe.vercel.app",
 
},

 {
          id: 6,
  title: "Trekking Site",
  description: "A simple trekking website made with React. It’s fast and easy to use with clean pages.",
  tech: ["React", "Javascript", "Tailwind"],
  github: "https://github.com/ayuu25141/",
  demo: "https://trekkingwebsite.vercel.app",
  
},


];





  return (


 <section className="h-fit bg-[#f7f4ea] text-[#4b3500]">
      {/* Main Responsive Padding Wrapper */}
      <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-10 sm:pt-12">

        {/* Projects Header Row */}
        <div className="flex items-end justify-between border-b border-[#4a3500]/10 pb-2 mb-4 w-full">
          {/* Left Side: Heading */}
          <h2 className="text-xl sm:text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4a3500]">
            Projects
          </h2>
        </div>

        {/* 2. Responsive Grid System / Project List */}
        {/* 🌟 FIX 2: Nested background container, extra hardcoded px aur py padding hata di taaki look seamless lage */}
        <div className="w-full py-4 space-y-6 sm:space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              
              {/* Title + Tech Row */}
              {/* 🌟 FIX 3: flex-wrap hata kar 'flex-col sm:flex-row' kiya taaki phone par tech stack humesha next line se hi start ho */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-y-1 gap-x-4 mb-2">
                {/* Project Title */}
                <p className="font-['IBM_Plex_Serif'] tracking-tight text-base font-semibold text-[#4a3500]">
                  {project.title}
                </p>

                {/* Tech tags */}
                {project.tech?.length > 0 && (
                  /* 🌟 FIX 4: whitespace-nowrap hataya aur mobile par text-left rakha taaki automatic clean wrap ho */
                  <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#876a22] flex flex-wrap gap-1 text-left sm:text-right">
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
              <p className="font-['JetBrains_Mono'] text-sm leading-6 sm:leading-7 text-[#876a22] mb-3">
                {project.description}
              </p>

              {/* Bullet points */}
              {project.bulletpoint?.length > 0 && (
                <ul className="space-y-1.5 mb-4 pl-1">
                  {project.bulletpoint.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[14px] text-[#7a6f55] leading-relaxed"
                    >
                      <span className="mt-[8px] w-1 h-1 rounded-full bg-[#b8a88a] flex-shrink-0" />
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              )}  

              {/* Thin line divider — last element ke baad hide karne ke liye group-last:hidden check call kiya */}
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
