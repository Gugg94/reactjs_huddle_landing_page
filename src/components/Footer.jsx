import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Container from "./Container";
import Flex from "./styles/Flex.styled";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: white;

  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;

    & > li {
      display: flex;
      align-items: baseline;
      gap: 20px;
      margin-bottom: 10px;
    }

    p {
      margin: 0;
    }
  }
`;

const Logo = styled.img`
  width: 150px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo src="./images/logo_white.svg" alt="Logo" />
        <Flex>
          <ul>
            <li>
              <i class="fa-solid fa-location-dot" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </li>
            <li>
              <i class="fa-solid fa-phone" />
              <p>+1-543-123-4567</p>
            </li>
            <li>
              <i class="fa-solid fa-envelope" />
              <p>example@huddle.com</p>
            </li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>
              <i class="fa-brands fa-facebook" />
            </li>
            <li>
              <i class="fa-brands fa-twitter" />
            </li>
            <li>
              <i class="fa-brands fa-instagram" />
            </li>
          </ul>
        </Flex>
        <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
