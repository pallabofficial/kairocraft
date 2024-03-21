//This file is a component for the services section of the webpage

import { service1, service2, service3, check } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Generating from "./Generating"
import Heading from "./Heading"
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services"
import Section from "./section"

const Services = () => {
  return (
    <Section id="how-to-use" crosses>

        <div className="container">

            <Heading title="Generative AI made for creators" text="Kairocraft unlocks the potential of AI-powered applications"/>          {/*Heading and text of the section*/}
        
            <div className="relative">     {/*the whole bento box wrapper*/}


{/* ---------------------------------------------------(service-1) box-1(large box of the bento box)------------------------------------ */}
                
                
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden | lg:p-20 | xl:h-[46rem]">         {/*large box of the bento box*/}
                    
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none | md:w-3/5 | xl:w-auto">                                                                    {/*image wrapper div*/}
                        <img src={service1} className="w-full h-full object-cover | md:object-right" width={800} height={730} alt="Smartest AI" loading="lazy" />                                      {/*image of the large box of the bento box imported from assets folder*/}
                    </div>

                    <div className="relative z-1 max-w-[17rem] ml-auto ">                                    {/*wrapper div containing the services descriptions in text*/}
                        <h4 className="h4 mb-4">Smartest AI</h4>
                        <p className="body-2 mb-[3rem] text-n-3">Kairocraft unlocks the potential of AI-powered applications</p>
                        
                        <ul className="body-2">
                            {brainwaveServices.map((item, index)=>(                                          //mapping through all services and rendering them as li element 
                                <li key={index} className="flex items-start py-4 border-t border-n-6">
                                    <img src={check} width={24} height={24} alt="" loading="lazy"/>
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border | lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 "/>                     {/*AI is generating box imported from Generating.jsx component*/}
                
                </div>

{/* ---------------------------------------------------(service-2) box-2 of the bento box------------------------------------ */}


                <div className="relative z-1 grid gap-5 | lg:grid-cols-2">

                    <div className="relative min-h-[39rem] border-n-1/10 rounded-3xl overflow-hidden">

                        <div className="absolute inset-0">                                                                          {/*image wrapper for the second box*/}
                            <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="robot" loading="lazy"/>      {/*image  for the second box imported from assets*/}
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 | lg:p-15 ">                                    {/*wrapper div containing the services descriptions in text*/}
                        
                            <h4 className="h4 mb-4">Photo editing</h4>
                            <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!</p>
                        
                        </div>

                        <PhotoChatMessage/>                                   {/*chat message component imported from design*/}


                    </div>

                


{/* ---------------------------------------------------(service-3) box-3 of the bento box------------------------------------ */}


                    <div className="p-4 bg-n-7 rounded-3xl overflow-hiddenlg:min-h-[46rem]">

                        <div className="py-12 px-4 | xl:px-8">                        {/*wrapper div for the description of the services*/}
                        
                            <h4 className="h4 mb-4">Video generation</h4>
                            <p className="body-2 mb-[2rem] text-n-3">The world&apos;s most powerful AI photo and video art generation engine. What will you create?</p>
                        
                            <ul className="flex items-center justify-between">
                                
                                {brainwaveServicesIcons.map((item, index)=>(          //mapping through each icons imported from the assets
                                    
                                    <li key={index} className={`rounded-2xl flex items-center justify-center ${index===2 ? 'w-[4.5rem] h-[4.5rem] p-0.25 bg-conic-gradient  md:h-[4.5rem]' : 'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'}`}>      {/*the third icon has a conic background*/}
                                        
                                        <div className={index===2 ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]' : "" }>
                                            
                                            <img src={item} width={24} height={24} alt={item} loading="lazy"></img>            {/*icon*/}
                                        
                                        </div>

                                    </li>

                                ))}
                                
                            </ul>

                        </div>

                        <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden | md:h-[25rem]">
                            
                            <img src={service3} className="w-full h-full object-cover " width={520} height={400} alt="evil robot" loading="lazy" />        {/*evil robot image*/}
                            
                            <VideoChatMessage/>    {/*video chat message svg*/}

                            <VideoBar/>            {/*video play button svg*/}

                        </div>

                    </div>

                </div>
{/* ----------------------------------------------------------------------------------------------------------------- */}

                <Gradient/>


            </div>



        </div>

    </Section>
  )
}

export default Services