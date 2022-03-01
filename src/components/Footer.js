import {StyledFooter, Logo, FooterLinks, Socials} from './styles/Footer.styled';
import {Container} from './styles/Container.styled';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Logo src="./images/logo_white.svg" alt="huddle-logo"/>
				<FooterLinks>
					<ul>
						<li>
							<img src="./images/icon-location.svg" alt="location-icon"/>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Velit aliquid placeat architecto, doloremque dolore cupiditate!</p>
						</li>
						<li>
							<img src="./images/icon-phone.svg" alt="phone-icon"/>
							<p>+1-543-123-4567</p>
						</li>
						<li>
							<img src="./images/icon-email.svg" alt="email-icon"/>
							<p>example@huddle.com</p>
						</li>
					</ul>

					<ul>
						<li>
							<button>About Us</button>
						</li>
						<li>
							<button>What We Do</button>
						</li>
						<li>
							<button>FAQ</button>
						</li>
					</ul>
					<ul>
						<li>
							<button>Career</button>
						</li>
						<li>
							<button>Blog</button>
						</li>
						<li>
							<button>Contact Us</button>
						</li>
					</ul>
					<Socials>
						<button><FaFacebookF/></button>
						<button> <FaTwitter/> </button>
						<button> <FaInstagram/> </button>
					</Socials>
				</FooterLinks>
				<p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
				
			</Container>
		</StyledFooter>
	)
}

export default Footer