import { brainwaveSymbol, check } from "../assets"
import { collabApps, collabContent, collabText } from "../constants"
import Button from "./Button"
import Section from "./section"
import {LeftCurve, RightCurve} from "./design/Collaboration"

const Collaboration = () => {
  return (
    <Section crosses className="mb-[10rem]">
        <div className="container lg:flex">
            <div className="max-w-[25rem] mb-8 | lg:mb-0">
                <h2 className="h2 mb-4 md:mb-8">AI chat App for seamless collaboration</h2>     {/* title of the section */}
                
                <ul className="max-w-[22rem] mb-10 | md:mb-14">                                 {/* list of all benifits */}
                    
                    {collabContent.map((item)=>(                                                // mapping through each item present in constants file
                        <li key={item.id} className="mb-3 py-3">
                            <div className="flex items-center">

                                <img src={check} width={24} height={24} alt="check" />          {/* logos of checkmark */}
                                <h6 className="body-2 ml-5">{item.title}</h6>                   {/* each benifit title */}
                                
                            </div>
                            {item.text && (<p className="body-2 mt-3 text-n-4">{item.text}</p>)}          {/* if any additional text exists in a benifit object, then render it in this p tag*/}
                        </li>
                    ))}
                </ul>

                <Button>                                                                          {/* try it now button */}
                    Try it now
                </Button>
            </div>

{/* -------------------------------------------right part of the screen (below part for small devices)------------------------------------ */}
        
            <div className="mt-4 | lg:ml-auto | xl:w-[38rem]">
                <p className="body-2 mb-15 text-n-4 | md:mb-16 | lg:mb-32 lg:w-[22rem] lg:mx-auto">{collabText}</p>                  {/* promotional message imported from constants file */}

                <div className="w-[17rem] relative left-1/2 flex  aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 | md:w-[22rem] md:scale-100">                      {/*(outer circle) wrapper of the illustration containing  the logos in circular form */}
                    
                    <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">                                 {/* inner circle */}  
                        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">                     {/* border gradient of the center svg */}  
                            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                <img src={brainwaveSymbol} width={48} height={48} alt="companyLogo" />                                                                  {/*  center svg */}
                            </div>
                        </div>
                    </div> 

                    <ul>                                                                                {/*wrapper of the collab apps logos */}                                                                                                                                                     
                        
                        {collabApps.map((app, index)=>(                                                 //  mapping through each logo svgs and rendering them as an image
                            
                            <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>           {/* rotating each logos by its index multiplied by 45 to place them in a circle (45 because there are 8 logos, 8*45=360 forming a circle) */} 
                                
                                <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                                    <img src={app.icon} className="m-auto " width={app.width} height={app.height} alt={app.title} />                                       {/* collab apps logos */} 
                                </div>

                            </li>
                        ))}                                                                          
                    </ul>     

                    <LeftCurve/>                                            {/* svg connecting the try it now button to the circle */} 
                    <RightCurve/>                                           {/* svg at the right of the circle*/} 

                </div>                                                                        
            </div>
        </div>
    </Section>
  )
}

export default Collaboration