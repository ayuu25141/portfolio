import React, { useState, useEffect } from 'react';

export default function Footer() {
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
   <section className="bg-[#f7f4ea] text-[#4b3500]">
  <div className="mx-auto max-w-2xl px-4 sm:px-10">

    {/* Border same width as content */}
    {/* Spacing ko normalize kiya taaki content upar se chipka na lage */}
    <div className="border-t border-[#4b3500]/10 pt-6 sm:pt-10 pb-8">

      <footer className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-3 gap-x-6 font-['JetBrains_Mono'] text-xs sm:text-sm text-[#876a22]">

        {/* Social Links */}
        {/* Mobile par elements easily flow karenge aur hover parameters perfectly work karenge */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
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
        {/* Mobile par opacity and proper safe sizes apply kiye hain */}
        <div className="text-[#4b3500]/60 tabular-nums font-medium whitespace-nowrap pt-1 sm:pt-0">
          {time || '11:40 am ist'}
        </div>

      </footer>

    </div>
  </div>
</section>

  );
}