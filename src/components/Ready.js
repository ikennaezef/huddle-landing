import {StyledReady} from './styles/Ready.styled';
import {StyledButton} from './styles/Button.styled';

const Ready = () => {
	return (
		<StyledReady>
			<h2>Ready To Build Your Community?</h2>
			<StyledButton bg={({theme}) => theme.colors.accent} color="#fff" >Get Started For Free</StyledButton>
		</StyledReady>
	)
}

export default Ready