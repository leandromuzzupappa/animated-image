import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { styles } from "./styles";
import img_default from "@assets/images/img_default.svg";

@customElement("animated-image")
export class AnimatedImage extends LitElement {
  static styles = styles;

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
