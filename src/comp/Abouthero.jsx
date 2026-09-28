import React from 'react'

function Abouthero() {
  return (
  <>
  <section className="min-h-screen bg-[#f7f4ea] text-[#4b3500]">
   <div className="mx-auto max-w-2xl px-6 sm:px-10 sm:pt-12">
    
       <div className="flex items-end justify-between border-b border-[#4a3500]/10 pb-2 mb-4">
  {/* Left Side: Your Existing Heading */}
  <h2 className="text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4a3500]">
    About
  </h2>

 
</div>



  {/* Description */}
        <div className="mt-14 max-w-4xl">
          <p className="font-['JetBrains_Mono'] text-sm leading-6 text-[#876a22]">
        I’m currently a BCA student at LPU, and most of my time goes into writing backend systems in Golang. I like building things that can actually handle load without falling apart — clean schemas, solid queries, migrations that don’t bite you later.


         </p>
<br/ >
 <p className="font-['JetBrains_Mono'] text-sm leading-7 text-[#876a22]">


       Before Go became my main thing, I spent a good amount of time doing full-stack work (mostly JavaScript). That background still helps a lot — when I need to move fast on the frontend or just ship something end-to-end, I can do it without waiting on anyone else.


 </p>
<br/ >

 <p className="font-['JetBrains_Mono'] text-sm leading-7 text-[#876a22]"> 

  Right now I’m building Urban Bite, learning blockchain development on the side, and slowly getting under the hood of how it actually works. I also dabble in crypto investing — more out of curiosity than anything else. I’m still figuring a lot of it out, but the combination of systems, databases, and decentralized tech is what keeps me hooked.
< br / >
What I’m aiming for next is simple:

<br />
backend systems that scale without drama, blockchain that’s properly integrated (not just bolted on), and enough full-stack strength that I can take an idea from zero to shipped on my own.

<br />
That’s pretty much me. Always building, always learning, and always trying to keep things real.





 </p>

         
     
      
        
        </div>




   </div>
  </section> 

  </>
  )
}

export default Abouthero