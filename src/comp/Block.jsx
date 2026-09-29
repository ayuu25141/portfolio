import React from 'react'

function Block() {
  return (
    <>
    <section className=" bg-[#f7f4ea] text-[#4b3500]">
   <div className="mx-auto max-w-2xl px-4 pt-4 sm:px-10 sm:pt-12">

    <div className="mx-auto max-w-3xl">

     {/* Section Heading with subtle top border to align perfectly with your grid */}
    <div className="flex items-end justify-between border-b border-[#4a3500]/10 pb-2 mt-2 sm:mt-14 w-full">
  {/* Left Side: Heading */}
  <h2 className="text-xl sm:text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4a3500]">
  Insight
  </h2>

  {/* Right Side: See More Link */}

</div>




<div className="mt-8 max-w-2xl">
  <div className="font-['JetBrains_Mono'] text-[13px] sm:text-sm leading-[1.65] text-[#876a22] space-y-2.5">
    <p>When I'm not coding, I spend a lot of my time following the crypto market.</p>
    <p>
      I've been interested in crypto for years, especially Ethereum and BNB, and
      I enjoy keeping an eye on the market, studying different projects, tracking
      price movements, and understanding why the market moves the way it does.
    </p>
    <p>
      I follow the market quite closely, especially ETH and BNB, and spend a lot
      of time looking at projects, charts, market movements, and different
      opportunities. I enjoy doing my own research before putting money into
      anything and learning from the trades that don't go my way as much as the
      ones that do.
    </p>
  </div>
</div>



    </div>
      </div>
      </section>


    
    
    </>
  )
}

export default Block