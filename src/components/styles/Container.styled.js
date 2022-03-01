import styled from 'styled-components';

export const Container = styled.div`
	max-width: 70rem;
	padding: 0 1.3rem;
	margin: 0 auto;

	@media(max-width: ${({ theme }) => theme.mobile}) {
		padding: 0 15px;
	}
`;