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
        // Idhar hamne direct drive link set kar diya hai
        {
            id: "Resume",
            path: "https://drive.google.com/file/d/11JRkF9_tBQ-gij0_aRdNbIFI_stQD-9w/view?usp=sharing", 
            icon: FileUser,
            isExternal: true, // Ek flag lagaya check karne ke liye
        },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 sm:p-12 select-none">
            {/* THE MORPHING NAVBAR */}
            <div className="relative flex items-center justify-center">
                <nav className="relative flex items-center p-2 rounded-full bg-[#fffefb] dark:bg-[#181622]/90 border border-black/10 dark:border-white/12 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.6)] transition-colors duration-200">
                    
                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        // Agar tab external link (Resume) hai toh simple HTML <a> anchor tag use hoga
                        if (tab.isExternal) {
                            return (
                                <a
                                    key={tab.id}
                                    href={tab.path}
                                    target="_blank"      // Naye tab me kholne ke liye
                                    rel="noreferrer"     // Security ke liye
                                    className="relative flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        <Icon size={18} strokeWidth={2} />
                                    </span>
                                    <span className="relative z-10 text-[14px] font-semibold tracking-wide">
                                        {tab.id}
                                    </span>
                                </a>
                            );
                        }

                        // Baaki normal tabs ke liye NavLink route chalega
                        return (
                            <NavLink
                                key={tab.id}
                                to={tab.path}
                            >
                                {({ isActive }) => (
                                    <div
                                        className={`relative flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors duration-300 cursor-pointer ${
                                            isActive
                                                ? 'text-black dark:text-white'
                                                : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                                        }`}
                                    >
                                        {/* The Sliding Background Bubble */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTabBubble"
                                                className="absolute inset-0 bg-black/[0.08] dark:bg-white/[0.12] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 420,
                                                    damping: 30
                                                }}
                                            />
                                        )}

                                        <span className="relative z-10 flex items-center justify-center">
                                            <Icon
                                                size={18}
                                                strokeWidth={isActive ? 2.4 : 2}
                                            />
                                        </span>

                                        <span className="relative z-10 text-[14px] font-semibold tracking-wide">
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
