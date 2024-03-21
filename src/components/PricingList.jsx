//This component is created to display the pricing list

import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">              {/*container for all the pricing cards */}

      {pricing.map((item) => (                                      // mapping through all the card details imported from constants file

        <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">  {/*container for each card */}

          <h4 className="h4 mb-4">{item.title}</h4>                 {/*pricing card title */}

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">    {/*pricing card description */}
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">       {/*price of service */}
            {item.price && (
              <>
                <div className="h3">₹</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button className="w-full mb-6" href={item.price ? "/pricing" : "mailto:officialpallabmondal000@gmail.com"} white={!!item.price}>       {/*get started button */}

            {item.price ? "Get started" : "Contact us"}

          </Button>

          <ul>
            {item.features.map((feature, index) => (                //mapping through all features present in each card and rendering them one by one        

              <li key={index} className="flex items-start py-5 border-t border-n-6">

                <img src={check} width={24} height={24} alt="Check" loading="lazy"/>
                <p className="body-2 ml-4">{feature}</p>

              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
