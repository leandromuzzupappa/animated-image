import { css } from "lit";

export const styles = css`
  :host {
    --squares-bradius: 20px;
    --squares-bg: linear-gradient(180deg, #5453d0 0%, #317cfa 100%);

    --squares-bg2: linear-gradient(
      to bottom,
      hsl(var(--square2--clr-1, 12), 50%, 50%),
      hsl(var(--square2--clr-2, 250), 50%, 50%)
    );

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
    translate: var(--position-x, 0) var(--position-y, 0);
    transform-origin: center;
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
    transform-origin: center;
  }

  .squares:nth-child(2) {
    top: -30px;
    left: 60%;
    width: 70%;
    translate: -50% 0%;
    background: var(--squares-bg2);
    box-shadow: 0px 0px 16px var(--squares-bg);
  }
`;
