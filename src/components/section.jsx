//This component is a skeleton to wrap all sections of the webpage

import SectionSvg from '../assets/svg/SectionSvg';           //importing the cross svg for using with the separation horizontal line after each section

const Section = ({ className, id, crosses, crossesOffset, customPaddings, children }) => {
  return (

                              // -------------wrapper of each section--------- 

    <div id={id} className={`relative ${customPaddings || 'py-10 lg:py-16 xl:py-20'} ${crosses ? 'lg:py-32 xl:py-40' : ''} ${className || ''}`}>
      {children}

                   {/* -------------left and right vertical lines in each section--------- */}

      <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none | md:block | lg:left-7.5 | xl:left-10'/>
      <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none | md:block | lg:right-7.5 | xl:right-10'/>
       
                                    {/* -------------cross svg------------ */}

      {crosses && (
        <>
          <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none | lg:block | xl:left-10 right-10`}/>
          <SectionSvg crossesOffset={crossesOffset}/>
        </>
      )}
    </div>
  );
};

export default Section;
