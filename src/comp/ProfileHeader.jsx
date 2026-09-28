
import myimage from "../assets/myimages/my.png"
const ProfileHeader = () => {
  return (
    <section className="min-h-screen bg-[#f7f4ea] text-[#4b3500]">
      <div className="mx-auto max-w-2xl px-6 pt-8 sm:px-10 sm:pt-12">

        {/* Profile Row */}
        <div className="flex items-center gap-4">

          {/* Profile Image */}
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border border-[#b8b5aa] bg-gray-200 shadow-sm">
            <img
              src={myimage}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name + Details */}
          <div>
            <h1 className="text-3xl font-['JetBrains_Mono'] tracking-tight text-[#4a3500]">
              Ayush Chauhan
            </h1>

        <p className="mt-3 font-['IBM_Plex_Serif'] font-medium tracking-wide text-[#876817]">
  Full stack Developer <span className="mx-2">·</span>
  Golang / Java <span className="mx-2">·</span>
  databases & native systems <span className="mx-2">·</span>
  Blockchain
</p>

          </div>

        </div>

        {/* Description */}
        <div className="mt-14 max-w-4xl">
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