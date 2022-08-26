import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import gsap from "gsap";

import { styles } from "./styles";
import img_default from "@assets/images/img_default.svg";

@customElement("animated-image")
export class AnimatedImage extends LitElement {
  static styles = styles;

  constructor() {
    super();
    console.log("constructor");
  }

  connectedCallback(): void {
    super.connectedCallback();

    console.log("connected callback", this.getElements().image);
    this.addEventListener("mousemove", this.handleMouseMove);
    this.addEventListener("mouseleave", this.handleReset);
  }

  firstUpdated() {
    console.log("firstUpdated", this.getElements().image);
  }

  updated() {
    console.log("updated", this.getElements().image);
  }

  handleMouseMove(event) {
    const { image, squares } = this.getElements();
    if (!image) return;

    const { clientWidth, clientHeight } = event.target;
    const { offsetX, offsetY } = event;
    const x = Math.abs(offsetX / 10) - clientWidth / 20;
    const y = Math.abs(offsetY / 10) - clientHeight / 20;

    squares.forEach((square, index) => {
      const squareX = x * 0.25 * (index === 0 ? 1 : -4);
      const squareY = y * 0.25 * (index === 0 ? 1 : -4);

      square.style.transform = `translate(${squareX}px, ${squareY}px)`;
    });

    this.style.setProperty("--position-x", `${x}px`);
    this.style.setProperty("--position-y", `${y}px`);
    this.style.setProperty("--square2--clr-1", offsetX);
    this.style.setProperty("--square2--clr-2", offsetY);
  }

  handleReset() {
    this.style.setProperty("--position-x", "0");
    this.style.setProperty("--position-y", "0");
    this.style.setProperty("--square2--clr-1", "12");
    this.style.setProperty("--square2--clr-2", "250");

    const { squares } = this.getElements();
    if (!squares) return;

    squares.forEach((square) => {
      square.style.transform = `translate(0px, 0px)`;
    });
  }

  getElements() {
    return {
      component: this.renderRoot,
      image: this.renderRoot.querySelector<this>("img"),
      squares: this.renderRoot.querySelectorAll<HTMLDivElement>(".squares"),
    };
  }

  render() {
    return html` <div class="animated-title">
      <img src=${img_default} alt="default" />
      <div class="squares"></div>
      <div class="squares"></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "animated-image": AnimatedImage;
  }
}
