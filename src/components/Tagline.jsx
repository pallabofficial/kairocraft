//This file is a reusuable component created for using it for tagline of any section

import React from 'react'
import brackets from "../assets/svg/Brackets"

const Tagline = ({className, children}) => {
  return (
    <div className={`tagline flex items-center ${className || ''}`}>

        {brackets('left')}                              {/*left bracket svg imported from assets */}
        
        <div className='mx-3 text-n-3'>{children}</div>  {/*the tagline text content */}

        {brackets('right')}                             {/*right bracket svg imported from assets */}

    </div>
  )
}

export default Tagline