import { Container } from '../styles/Styles';

/**
 * Her er en enkel komponent som tar i mot en prop kalt myProp
 * Den bruker en Global Styled Component jeg har laget som heter Container
 * Håndterer et enkelt event når vi trykker på en knapp
 */
const Component = ({ myProp }) => {
  const handleEvent = () => {
    console.log('Event handled');
  };
  return (
    <>
      <Container>
        <h1>
          Component with a prop called myProp som har {myProp}-verdi and a
          Global Styled Component
        </h1>
        <button type="button" onClick={handleEvent}>
          Button
        </button>
      </Container>
    </>
  );
};

export default Component;
