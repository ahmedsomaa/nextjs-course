import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function CssInJs() {
  return (
    <div>
      <Title>Styled Component</Title>
      <h2 style={{ color: "black" }}>Css In Js Styling</h2>
    </div>
  );
}
