import styled from 'styled-components';

export const StyledHeader = styled.header`

	padding: 1rem 2rem 3rem;	
	margin-bottom: 4rem;
	background: url('./images/bg-hero-desktop.svg') no-repeat center center/cover;
	background-color: ${({ theme }) => theme.colors.header};


	@media(max-width: ${({ theme }) => theme.mobile}) {
		background: url('./images/bg-hero-mobile.svg') no-repeat center center/cover;
		background-color: ${({ theme }) => theme.colors.header};
		padding: 1rem 0 3rem;
		text-align: center;
	}	
`;

export const Nav = styled.nav`
	padding: 1rem 0;
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.img`
	width: 11.3rem;

	@media(max-width: ${({ theme }) => theme.mobile}) {
		width: 8.8rem;
	}
`;

export const Hero = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 0;
	gap: 4rem;

	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	p {
		font-family: 'Open Sans', sans-serif;;
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	img {
		width: 25rem;
	}

	& > div {
		flex: 1;
	}


	@media(max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		align-items: center;
	}

`;