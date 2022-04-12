import styled from "@emotion/styled";
import Container from "./Container";
import Flex from "./styles/Flex.styled";
import Button from "./styles/Button.styled";
import MQ from "../global/MediaQueries";

const StyledHeader = styled.header`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.header};
  background-image: url("./images/bg-hero-mobile.svg");
  padding: 20px 0;

  ${MQ.desktop} {
    background-image: url("./images/bg-hero-desktop.svg");
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const Logo = styled.img`
  width: 150px;
`;

const Hero = styled.img`
  width: 100%;

  ${MQ.mobile} {
    width: 50%;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="Huddle Logo" />
          <Button secondary>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button primary>Get Started For Free</Button>
          </div>
          <Hero src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
