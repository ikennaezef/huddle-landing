import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${({theme}) => theme.colors.body};
		font-family: 'Poppins', sans-serif;
		color: ${({theme}) => theme.colors.text};
	}

	h1, h2, h3 {
		font-weight: 600;
	}

	p {
		font-family: 'Open Sans', sans-serif;
	}

	img {
		max-width: 100%;
	}

	ul {
		list-style: none;
	}



	@media(min-width: ${({ theme }) => theme.large}) {
		html {
			font-size: 20px;
		}
	}
`;

