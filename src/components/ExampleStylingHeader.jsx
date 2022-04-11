import { css } from "@emotion/react";
import styled from "@emotion/styled";

// Option 1: Styled component
const Header = styled.h1`
  background-color: ${({ theme }) => theme.colors.header};
  &:hover {
    background-color: green;
  }
  @media (min-width: 768px) {
    background-color: beige;
  }
`;

function HeaderStyled(props) {
  return <Header>{props.title}</Header>;
}
// END Option 1

// Option 2: CSS with Styles object
const Styles = {
  header: (theme) => css`
    background-color: ${theme.colors.header};
    &:hover {
      background-color: green;
    }
  `,
};

function HeaderCssWithObject({ title }) {
  return <h1 css={Styles.header}>{title}</h1>;
}
// END Option 2

// Option 3: CSS without parent object
const headerStyle = (theme) => css`
  background-color: ${theme.colors.header};
  &:hover {
    background-color: green;
  }
`;

function HeaderCssWithoutObject({ title }) {
  return <h1 css={headerStyle}>{title}</h1>;
}
//END Option 3

// Option 1
// export default HeaderStyled;

// Option 2
// export default HeaderCssWithObject;

// Option 3
export default HeaderCssWithoutObject;
