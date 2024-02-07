import styled from "styled-components";

const Heading = styled.h1`
  ${(props) => `${props.color ? "" : ""}`}
`;

export default Heading;
