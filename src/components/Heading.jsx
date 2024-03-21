import React from 'react'

const Heading = ({className, title, text}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 | lg:mb-20`}>      {/*the container which wraps the header content*/}
         
         {title && <h2 className='h2'>{title}</h2>}                              {/*checking whether title exists, if yes, render title. */}

         {text && <p className='body-2 mt-4 text-n-4'>{text} </p>}             {/*checking whether text exists, if yes, render text. */}

    </div>
  )
}

export default Heading