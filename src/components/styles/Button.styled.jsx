import styled from "@emotion/styled";

const Button = styled.button`
  padding: 10px 50px;
  background-color: ${(props) =>
    props.primary ? props.theme.colors.accent : "white"};
  color: ${(props) => (props.primary ? "white" : "black")};
  border: none;
  border-radius: 25px;
  min-height: 40px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    opacity: ${(props) => props.primary && 0.66};
    color: ${(props) => props.secondary && props.theme.colors.textSecondary};
  }
`;

export default Button;
