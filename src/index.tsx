/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./app.css";
import Reveal from "reveal.js";
const root = document.getElementById("root");
declare module "solid-js" {
  namespace JSX {
    interface Directives {
      Reveal: Reveal.Options;
    }
  }
}
render(() => <App />, root!);
