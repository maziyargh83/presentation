import { createSignal } from "solid-js";
import Reveal from "reveal.js";
const defaultOptions: Reveal.Options = {};
const getRevealElement = (
  el: HTMLDivElement,
  RevealJs?: Reveal.Api,
  option?: Reveal.Options
) => {
  if (!RevealJs) {
    const r = new Reveal(el, Object.assign(defaultOptions, option));
    return r;
  }
  return RevealJs;
};
const RevealLogic = () => {
  const [RevealJs, setRevealJs] = createSignal<Reveal.Api>();

  return () => {
    return {
      Reveal: (el: HTMLDivElement, option?: Reveal.Options) => {
        const r = getRevealElement(el, RevealJs(), option);
        if (!RevealJs()) setRevealJs(r);
        r.initialize();
      },
      RevealJs,
    };
  };
};

export default RevealLogic();
