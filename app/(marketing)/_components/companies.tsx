import React from "react";
import "./companies.css";

export const Companies = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          The experience behind our coaches
        </h2>
        <div className="carousel-container mx-auto mt-10 overflow-hidden">
          <div className="carousel ">
            {[
              // Duplicate logos for a continuous loop
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg",
              "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Loud_House_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/68/Financial_Times_masthead.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/65/BBC_logo_%281997-2021%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/e/e0/Inside_Job_logo.png",

              // Duplicate logos for a continuous loop
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg",
              "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Loud_House_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/68/Financial_Times_masthead.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/65/BBC_logo_%281997-2021%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/e/e0/Inside_Job_logo.png",

              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg",
              "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Loud_House_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/68/Financial_Times_masthead.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/65/BBC_logo_%281997-2021%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/e/e0/Inside_Job_logo.png",

              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg",
              "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Loud_House_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/68/Financial_Times_masthead.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/65/BBC_logo_%281997-2021%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/e/e0/Inside_Job_logo.png",

              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg",
              "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Loud_House_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/68/Financial_Times_masthead.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/65/BBC_logo_%281997-2021%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/e/e0/Inside_Job_logo.png",

              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg",
              "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Loud_House_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/68/Financial_Times_masthead.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/65/BBC_logo_%281997-2021%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/4/48/The_Telegraph_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/e/e0/Inside_Job_logo.png",
            ].map((logo, index) => (
              <img
                key={index}
                className="carousel-item"
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-center font-semibold leading-8 text-gray-900">
        And More!
      </h3>
    </div>
  );
};
