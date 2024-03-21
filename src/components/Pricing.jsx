//This component is the pricing section of the page

import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import PricingList from "./PricingList"
import Section from "./section"
import {LeftLine, RightLine} from "./design/Pricing";


const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">   {/*wrapper of the whole pricing section */}

        <div className="container relative z-2">

            <div className="hidden relative justify-center mb-[6.5rem] | lg:flex">                          {/*div for the sphere and the stars */}
                
                <img src={smallSphere} className="relative z-1" width={255} height={255} alt="sphere" />    {/*sphere image imported from assets */}
                
                <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img src={stars} className="w-full " width={950} height={400} alt="stars" />                                  {/*background star image imported from assets */}
                </div>

            </div>

            <Heading className="md:text-center" tag="Get started with Kairocraft" title="Pay once, use forever"/>         {/*heading of the pricing section */}
        
            <div className="relative">
                <PricingList/>
                <LeftLine/>
                <RightLine/>
            </div>

            <div className="flex justify-center mt-10">
                <a href="./pricing" className="text-xs font-code font-bold tracking-wider uppercase border-b">See the full details</a> 
            </div>
            
        </div>

    </Section>
  )
}

export default Pricing