import { useState, useEffect } from 'react';

export default function useDark() {
  const [theme, setTheme] = useState(true); // Default theme is light (false)

  useEffect(() => {
    const element = document.getElementById('root');

    if (!theme) {
      // Dark mode
      element.style.color = 'white';
      element.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 21%, rgba(50, 50, 50, 0.9) 46%, rgba(0, 0, 0, 1) 91%)';
      document.getElementById('header').style.backgroundColor ="rgba(50, 50, 50, 0.4) ";
   document.getElementById('connect').style.backgroundColor='rgba(50, 50, 50, 0.6)'
   const paragraphs = document.getElementsByTagName('p'); // Get all <p> elements

   // Loop through all <p> elements and change their color
   for (let i = 0; i < paragraphs.length; i++) {
     paragraphs[i].style.color = "white";
   }
   const h2= document.getElementsByTagName('h2'); // Get all <p> elements

   // Loop through all <p> elements and change their color
   for (let i = 0; i < h2.length; i++) {
     h2[i].style.color = "white";
   }


    } else {
      // Light mode
      element.style.color = 'black';
      element.style.backgroundImage =
        'linear-gradient(180deg, rgba(200,221,233,1) 21%, rgba(235,217,251,1) 46%, rgba(255,255,255,1) 91%)';
        document.getElementById('header').style.backgroundColor =" rgb(200, 221, 233 , .4) ";
        document.getElementById('connect').style.backgroundColor='#f9f9f9'
        const paragraphs = document.getElementsByTagName('p'); // Get all <p> elements

        // Loop through all <p> elements and change their color
        for (let i = 0; i < paragraphs.length; i++) {
          paragraphs[i].style.color = "gray";
        }
        const h2= document.getElementsByTagName('h2'); // Get all <p> elements

        // Loop through all <p> elements and change their color
        for (let i = 0; i < h2.length; i++) {
          h2[i].style.color = "black";
        }
   
    }
  }, [theme]); // Re-run effect whenever theme changes

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme); // Toggle between true and false
  };

  return { theme, toggleTheme, setTheme };
}
