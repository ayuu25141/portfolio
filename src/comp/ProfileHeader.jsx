
import myimage from "../assets/myimages/my.png"
const ProfileHeader = () => {
  return (
    <section className="min-h-screen bg-[#f7f4ea] text-[#4b3500]">
      <div className="mx-auto max-w-2xl px-6 pt-8 sm:px-8 sm:pt-12">

        {/* Profile Row */}
       {/* Profile Row */}
{/* Mobile par column aur center, small screen (sm:) se row aur left-align */}
<div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">

  {/* Profile Image */}
  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[#b8b5aa] bg-gray-200 shadow-sm sm:h-28 sm:w-28">
    <img
      src={myimage}
      alt="Profile"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Name + Details */}
  <div className="min-w-0 w-full">
    <h1 className="text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4a3500] sm:text-3xl">
      Ayush Chauhan
    </h1>

    {/* 🌟 FIX: gap ko manage kiya aur text size ko mobile ke liye halka sa tight (text-[13px]) kiya taaki dots ke sath fit ho sake */}
    <p className="mt-3 font-['IBM_Plex_Serif'] font-medium tracking-wide text-[#876817] text-[13px] sm:text-sm flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-1">
      <span>Full stack Developer</span>
      <span className="text-[#876817]/50 select-none">·</span>
      
      <span>Golang / Java</span>
      <span className="text-[#876817]/50 select-none">·</span>
      
      <span>Databases & Native Systems</span>
      <span className="text-[#876817]/50 select-none">·</span>
      
      <span>Blockchain</span>
    </p>
  </div>

</div>


        {/* Description */}
        <div className="mt-6 sm:mt-14 max-w-4xl">
          <p className="font-['JetBrains_Mono'] text-sm leading-7 text-[#876a22]">
         backend engineer, i build heavy, scalable systems in golang. before that it was js and full stack, so i still move fast on the frontend when i need to. 
         <br/>right now building urban bite, and learning blockchain development on the side, slowly getting into how it actually works under the hood.
         
         </p>
<br/ >
 <p className="font-['JetBrains_Mono'] text-sm leading-7 text-[#876a22]">


         i like living close to the database. schemas, queries, migrations, the stuff that quietly breaks everything if you get it even slightly wrong.
 </p>
<br/ >

 <p className="font-['JetBrains_Mono'] text-sm leading-7 text-[#876a22]"> 

   what i want to work on next is tying it all together, backend systems that scale without drama, blockchain that's actually integrated and not just bolted on, and full stack strong enough that i never have to wait on anyone else to ship.

 </p>

         
     
      
        
        </div>

      </div>
    </section>
  );
};

export default ProfileHeader;