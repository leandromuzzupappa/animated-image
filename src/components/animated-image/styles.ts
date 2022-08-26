import { css } from "lit";

export const styles = css`
  :host {
    --squares-bradius: 20px;
    --squares-bg: linear-gradient(180deg, #5453d0 0%, #317cfa 100%);
    --squares-bg2: linear-gradient(to bottom, #8f94fb, #4e54c8);

    position: relative;
    display: grid;
    place-items: center;
    width: 500px;
    aspect-ratio: 1/1;
  }

  img {
    position: relative;
    display: block;
    width: 100%;
    border: 0;
    z-index: 1;
  }

  .squares {
    position: absolute;
    inset: 0;
    left: 50%;
    translate: -50% 0%;
    display: block;
    width: 80%;
    height: 100%;
    background: var(--squares-bg);
    border-radius: var(--squares-bradius);
    opacity: 0.8;
  }

  .squares:nth-child(2) {
    top: -30px;
    left: 60%;
    width: 70%;
    background: var(--squares-bg2);
  }
`;
