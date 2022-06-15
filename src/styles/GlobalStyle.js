import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html { 
  :root{
    /* color */
    --gray-color: rgba(58,58,58,1);
    --gray-color900: rgba(58,58,58,0.9);
    --gray-color800: rgba(58,58,58,0.8);
    --gray-color600: rgba(58,58,58,0.6);
    --gray-color400: rgba(58,58,58,0.4);

    /* font size */
    --font-big: 48px;
    --font-large: 36px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 14px;
    --font-micro: 12px;
  }
  body { 
    padding : 0;
    margin: 0;
    box-sizing: border-box;
    font-family:'Noto Sans KR';
    #root { 
      width: 100%;
    }; 
    h1,h2,h3,h4,p{
      margin: 0;
      padding: 0;
    }
  };
  @keyframes up-down {
		from {
			opacity: 0;
			transform: translatey(20px);
		}
		to {
			opacity: 100;
			transform: translatey(0px);
		}
	}
}`;
