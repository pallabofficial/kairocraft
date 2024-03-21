//This section is a component used for heading/title of a section

import Tagline from './Tagline'

const Heading = ({className, title, text, tag}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 | lg:mb-20`}>      {/*the container which wraps the header content*/}
         
         {tag && (<Tagline className="mb-4 | md:justify-center">{tag}</Tagline>                                       //checking whether tag exists, if yes, render tagline.
         
        ) }
         
         {title && <h2 className='h2'>{title}</h2>}                              {/*checking whether title exists, if yes, render title. */}

         {text && <p className='body-2 mt-4 text-n-4'>{text} </p>}             {/*checking whether text exists, if yes, render text. */}
           
        
    </div>
  )
}

export default Heading