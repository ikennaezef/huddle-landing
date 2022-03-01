import styled from 'styled-components';

export const StyledButton = styled.button`
	padding: 0.8rem 3.5rem;
	font-family: 'Open Sans', sans-serif;
	font-size: 0.8rem;
	font-weight: 700;
	color: ${({ color }) => color || '#333'};
	background-color: ${({ bg }) => bg || '#fff'};
	border: none;
	outline: none;
	border-radius: 2rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		transform: scale(0.98);
		opacity: 0.8;
	}


	@media(max-width: ${({ theme }) => theme.mobile}) {
		padding: 0.8rem 2rem;
	}

`;