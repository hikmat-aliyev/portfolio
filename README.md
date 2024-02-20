# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



/* Hide default arrows */
.slick-prev,
.slick-next {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);  
  width: 76px; /* Adjust the width as needed */
  height: 76px; /* Adjust the height as needed */
  border-radius: 5px; /* Make it a circle */
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 11111111111;
  margin: -30px;
}


/* Styles for the arrow content (you can use an icon or custom text) */
.slick-prev:before,
.slick-next:before{
  font-size: 30px; /* Adjust the font size as needed */  /* Arrow content color */
  content: '\2190'; /* Unicode character for left arrow */
  color: var(--primary-font-color);
}

.slick-next:before {
  content: '\2192'; /* Unicode character for right arrow */
}