import { StyledHeader, Nav, Logo, Hero } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import {StyledButton} from './styles/Button.styled'

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src="./images/logo.svg" alt="huddle-logo" />
					<StyledButton>Try It Free</StyledButton>
				</Nav>
				<Hero>
					<div>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
						</p>
						<StyledButton bg={({theme}) => theme.colors.accent} color="#fff" >Get Started For Free</StyledButton>
					</div>
					<div>
						<img src="./images/illustration-mockups.svg" alt="illustration"/>
					</div>					
				</Hero>

			</Container>
		</StyledHeader>
	)
}

export default Header