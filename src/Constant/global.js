import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    font-size: 20px;
    scroll-behavior: smooth;
}
  body {
  
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #050216;
    


  }

  h1,h2 ,h3 ,p,a{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

  }

  p{
    font-size: clamp(0.8rem, 2vw, 1rem);
    
    font-style: normal;
    font-weight: 500;

    line-height: 1.5rem;
  }
  a{
    font-size: clamp(0.8rem, 2vw, 1rem);
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    

    line-height: 1.5rem;
  }
 h1{
  font-size: clamp(3rem, 10vw, 5rem);

 }
 h2{
  font-size: clamp(1.1rem, 6vw, 3.25rem);
     font-weight: 500;
       font-style: normal;
       color: #fff;

   
   @media screen and (min-width: 800px) {
     

       line-height: 98px;

       
    }
 }
  h3{
    font-size: clamp(1.5rem, 2vw, 1.75rem);
    font-style: normal;
    font-weight: 600;
  }

`;
