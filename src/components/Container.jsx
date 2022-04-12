import { css } from "@emotion/react";

const style = css`
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

function Container({ children }) {
  return <div css={style}>{children}</div>;
}

export default Container;
