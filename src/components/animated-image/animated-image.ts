import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./styles";

@customElement("animated-image")
export class AnimatedImage extends LitElement {
  static styles = styles;

  render() {
    return html` <h1>Lenny</h1> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "animated-image": AnimatedImage;
  }
}
