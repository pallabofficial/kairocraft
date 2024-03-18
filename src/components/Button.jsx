// import ButtonSvg from "../assets/svg/ButtonSvg";

// const Button = ({ className, href, onClick, children, px, white }) => {
//   const classes= `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white? 'text-n-8':'text-n-1'} ${className || ''}`; //classes for the button
//   const spanClasses = 'relative z-10';   //classes for the text inside a button
  
  
//   const renderButton = () => (     //Note:- here we are using parenthesis, not curly braces because we are using an implicit return
//     //button element
//     <button className={classes} onClick={onClick} >  
//       <span className={spanClasses}>{children}</span> 
//       {ButtonSvg(white)}
//     </button>
//   );

//   const renderLink=()=>(          
//     <a href={href} className={classes}>
//       <span className={spanClasses}>{children}</span>
//       {ButtonSvg(white)}
//     </a>
//   )

//   return href             //if href exists inside the Button component in App.jsx
//     ? renderLink()        //it will return the renderLink function
//     : renderButton();     //else, it will return the renderButton function
// };

// export default Button;




import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
