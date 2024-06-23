import { LightAndDark } from "./components/LightAndDark";
import createReveal from "./reveal";
function App() {
  const { Reveal } = createReveal();
  return (
    <div use:Reveal={{}} class="reveal">
      <div class="slides">
        <section>
          <h1>
            💫 <span class="underlined">Super</span> app 📱
          </h1>
          <h6>Presentation </h6>
          <p>
            <span class="text-primary">khodro45</span> - maziyar gholami
          </p>
        </section>
        <section>
          <LightAndDark />
        </section>
      </div>
    </div>
  );
}

export default App;
