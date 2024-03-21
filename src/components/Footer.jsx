//This file is created as a component to display the footer section of the webpage

import React from 'react'
import Section from './section'
import { socials } from '../constants'

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">        {/*entire footer*/}

        <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
            
            <p className='caption text-n-4 | lg:block'>© {new Date().getFullYear()}. All rights reserved</p>    {/*current date */}

            <ul className='flex gap-5 flex-wrap'>
                
                {socials.map((item)=>(                //mapping through each social media icons        

                    <a key={item.id} href={item.url} target="_blank" className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6'> 
                        
                        <img src={item.iconUrl} width={16} height={16} alt={item.title} loading='lazy'/>       {/*social media icon*/}

                    </a>

                ))}

            </ul>

        </div>
    </Section>
  )
}

export default Footer