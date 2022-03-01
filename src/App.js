import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Header  from './components/Header';
import Card  from './components/Card';
import Ready  from './components/Ready';
import Footer  from './components/Footer';
import content from './content';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme= { theme } >
      <>
        <GlobalStyles/>
        <Header/>
        <Container>
          { content.map((item, index) => <Card data = { item } key={index} />)  }
          <Ready />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
