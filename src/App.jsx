import styled from "styled-components";
import GlobalSytles from "./styles/GlobalStyles";
function App() {
  const H1 = styled.h1`
    color: red;
    font-size: 2rem;
    font-weight: 100;
  `;

  return (
    <>
      <GlobalSytles />
      <H1>Hello World</H1>;
    </>
  );
}

export default App;
