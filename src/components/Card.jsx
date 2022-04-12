import { css } from "@emotion/react";
import styled from "@emotion/styled";
import MQ from "../global/MediaQueries";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: column;
  text-align: center;
  gap: 20px;

  & > div {
    flex: 1;
  }

  img {
    max-width: 80%;
  }

  ${MQ.mobile} {
    flex-direction: ${({ flexDirection }) => flexDirection};
    text-align: left;
  }
`;

function Card({ item: { index, title, description, image } }) {
  return (
    <StyledCard flexDirection={index % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h1
          css={css`
            font-weight: 600;
          `}
        >
          {title}
        </h1>
        <p
          css={css`
            opacity: 0.5;
          `}
        >
          {description}
        </p>
      </div>
      <div
        css={css`
          text-align: center;
        `}
      >
        <img src={`./images/${image}`} alt="Card illustration" />
      </div>
    </StyledCard>
  );
}

export default Card;
