import styled from 'styled-components';

export const StyledReady = styled.div`
	max-width: 44rem;
	margin: 2rem auto;
	border-radius: 1rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	background-color: #fff;
	padding: 4rem 2rem;
	text-align: center;
	transform: translateY(30%);

	h2 {
		margin-bottom: 2rem;
	}

	@media(max-width: ${({ theme }) => theme.mobile}) {
		padding: 3rem 1rem;


		h2 {
			font-size: 1.4rem;
			margin-bottom: 1rem;
		}
	}
`;