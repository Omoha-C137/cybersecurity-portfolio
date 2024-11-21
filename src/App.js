import React from 'react';
import styled, { keyframes } from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 0 20px
`;

const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: -1;
  overflow: hidden;
`;

const matrixAnimation = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const MatrixColumn = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left}%;
  width: 2%;
  height: 100%;
  color: green;
  font-size: 16px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  animation: ${matrixAnimation} ${({ duration }) => duration}s linear infinite;
`;

const MatrixCharacter = styled.div`
  display: block;
  animation: ${matrixAnimation} ${({ duration }) => duration}s linear infinite;
`;

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: center;
  z-index: 1;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 0;
  z-index: 1;
  position: relative;
`;

const NavLink = styled.a`
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const MainContent = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  margin-bottom: 60px;
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 150px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
`;

function App() {
  const generateMatrixCharacters = () => {
    const characters = 'PHILIP OMOHA';
    return Array.from({ length: 20 }, (_, i) => characters[i % characters.length]).join('');
  };

  const matrixColumns = Array.from({ length: 50 }, (_, i) => (
    <MatrixColumn key={i} left={i * 2} duration={Math.random() * 5 + 5}>
      {generateMatrixCharacters().split('').map((char, index) => (
        <MatrixCharacter key={index} duration={Math.random() * 5 + 5}>
          {char}
        </MatrixCharacter>
      ))}
    </MatrixColumn>
  ));

  return (
    <AppContainer>
      <MatrixBackground>{matrixColumns}</MatrixBackground>
      <Header>
        <h1>Philip Omoha</h1>
      </Header>
      <Nav>
        <NavLink href="/Philip Omoha cv.pdf" download="Philip_Omoha_Resume.pdf">Resume</NavLink>
        <NavLink href="https://www.linkedin.com/in/philip-omoha">Contacts</NavLink>
        <NavLink href="https://medium.com/@philipomoha">Articles</NavLink>
      </Nav>
      <MainContent>
        <Section id="about" style={{ width: '80%', maxWidth: '800px', margin: '0 auto' }}>
          <Image src="/philip.jpg" alt="Portrait" />
          <div>
             <pre>
              <span style={{ color: 'green' }}>philip@omoha</span>:~$ sudo omoha
            </pre>
            
            <h2>Hi, I'm Philip Omoha.</h2>
            <p>A Cyber Security Engineer & Web Developer.</p>
            
            <p>I Work with AI.</p>
            
            <p>Email Address: <a href="mailto:philipomoha@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>philipomoha@gmail.com</a></p>
            <p>My Twitter handle is: <a href="https://twitter.com/philip_omoha" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>@philip_omoha</a>.</p>
            
            <p>More about me can be found <a href="https://github.com/Omoha-C137">here.</a></p>
          </div>
        </Section>
      </MainContent>
      <Footer>
        <p>&copy; 2024 philip omoha</p>
      </Footer>
    </AppContainer>
  );
}

export default App;
