import styled from 'styled-components'

export const StyledCard = styled.div`
	padding: 3rem;
	margin: 1rem 0;
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: ${({reverse}) => reverse && 'row-reverse'};
	gap: 3rem;
	align-items: center;

	h2 {
		margin-bottom: 1rem;
		font-size: 1.7rem;
	}

	p {
		font-size: 0.9rem;
		line-height: 1.6;
		color: ${({ theme }) => theme.colors.lightText};
	}

	img {
		width: 80%;
	}


	@media(max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column-reverse;
		text-align: center;
		padding: 3rem 1rem;

		h2 {
			font-size: 1.5rem;
		}

		img {
			width: 100%;
		}
	}
`;