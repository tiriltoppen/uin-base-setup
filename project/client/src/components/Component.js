import styled from 'styled-components/macro';
import { Container } from '../styles/Styles';

/**
 * Her er en enkel komponent som tar i mot en prop kalt myProp
 * Den bruker en Global Styled Component jeg har laget som heter Container
 * Den har også en "lokal" Styled Component som gir <h1> stiler
 * Komponenten håndterer et enkelt event når vi trykker på en knapp
 */

const CustomH1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const Component = ({ myProp }) => {
  const handleEvent = () => {
    console.log('Event handled');
  };
  return (
    <>
      <Container>
        <CustomH1>
          Component with a prop called myProp som har {myProp}-verdi and a
          Global Styled Component
        </CustomH1>
        <button type="button" onClick={handleEvent}>
          Button
        </button>
      </Container>
    </>
  );
};

export default Component;
