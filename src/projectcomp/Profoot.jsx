import React, { useState, useEffect } from 'react';

export default function Profoot() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12;
      hours = hours ? hours : 12;

      const formattedHours = String(hours).padStart(2, '0');

      setTime(`${formattedHours}:${minutes} ${ampm} ist`);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const links = [
    { name: 'github', url: 'https://github.com/ayuu25141' },
    { name: 'x', url: 'https://x.com/CRYPTOAYUSH2' },
    { name: 'linkedin', url: 'https://linkedin.com/in/ayush-chauhan-671841367' },
    { name: 'email', url: 'mailto:chauhanayush654345@gmail.com' },
    { name: 'whatsapp', url: 'https://api.whatsapp.com/send/?phone=919389187034&text&type=phone_number&app_absent=0' },
  ];

  return (
    <section className=" bg-[#f7f4ea] text-[#4b3500]">

      <div className="mx-auto max-w-2xl px-4 sm:px-10">

        {/* Border same width as content */}
        <div className="border-t-2 border-[#4b3500]/10 pt-8 sm:pt-12 pb-8">

          <footer className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-['JetBrains_Mono'] text-base leading-7 text-[#876a22]">

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4b3500] hover:underline underline-offset-4 decoration-[#4b3500]/40 transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Live Time */}
            <div className="text-[#4b3500]/70 tabular-nums">
              {time || '11:40 am ist'}
            </div>

          </footer>

        </div>

      </div>

    </section>
  );
}