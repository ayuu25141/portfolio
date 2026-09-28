import React from 'react'

function Block() {
  return (
    <>
    <section className=" bg-[#f7f4ea] text-[#4b3500]">
   <div className="mx-auto max-w-2xl px-6 sm:px-10 sm:pt-12">

    <div className="mx-auto max-w-3xl">

     {/* Section Heading with subtle top border to align perfectly with your grid */}
        <div className="flex items-end justify-between border-b border-[#4b3500]/10 pb-2 mb-6">
          <h2 className="text-2xl font-['JetBrains_Mono'] tracking-tight text-[#4b3500]">
           Insight
          </h2>
        
        </div>

   <div className="mt-14 max-w-2xl">
          <p className="font-['JetBrains_Mono'] text-sm leading-7 text-[#876a22]">
         When I’m not coding, I spend a lot of my time following the crypto market.
         <br/>
         <br />I’ve been interested in crypto for years, especially Ethereum and BNB, and I enjoy keeping an eye on the market, studying different projects, tracking price movements, and understanding why the market moves the way it does.<br / >
         <br />
         I follow the market quite closely, especially ETH and BNB, and spend a lot of time looking at projects, charts, market movements, and different opportunities. I enjoy doing my own research before putting money into anything and learning from the trades that don’t go my way as much as the ones that do.


         
         </p>

</div>



    </div>
      </div>
      </section>


    
    
    </>
  )
}

export default Block