import { TechStackItem } from "./components/TechStackItem";
import createReveal from "./reveal";
function App() {
  const { Reveal } = createReveal();
  return (
    <div use:Reveal={{}} class="reveal">
      <div class="slides">
        <section class="relative w-screen h-screen flex flex-nowrap">
          <div class="flex w-full h-full justify-center items-center">
            <div class="flex-1 p-2">
              <img src="/logo.png" alt="" />
              <h3>
                💫 <span class="underlined">Super</span> app 📱
              </h3>
              <h6>Presentation </h6>
              <p>
                - FrontEnd Team -
              </p>
            </div>
            <div class="w-56 relative h-screen">
              <div class="h-ful w-full">
                <img class={'h-auto w-full object-cover rounded z-10 relative transition-all duration-300'} src="/dark.png" alt="" />
                <img class={'h-auto w-full object-cover rounded absolute -top-5 -left-5 hover:z-20 transition-all duration-300'} src="/light.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1>What we did</h1>
        </section>
        <section>
          <h1>we are presenting show case</h1>
        </section>
        <section>
          <h1>Tech Stack</h1>
          <div class="flex gap-1 justify-center">
            <TechStackItem link={'/vite.svg'} />
            <TechStackItem link={"/storybook.png"} />
            <TechStackItem link="/pwa.svg" />
            <TechStackItem link="/turborepo.png" />
            <TechStackItem link="/react.svg" />
            <TechStackItem link="/tailwind.png" />
          </div>
        </section>

        <section>
          <h1>Monorepo</h1>
          <img src="/monorepo.png" alt="" />
        </section>
        <section>
          <h1>Design System</h1>
          <img src="/designSystem.png" alt="" />
        </section>


        <section>
          <h1>Packages</h1>
          <p>
            idioma - ui - scripts - auth - icons - config
          </p>
        </section>

        <section class="text-center !flex flex-col items-center justify-center">
          <h4>apps</h4>
          <p>
            core - onboarding - dealer - docs
          </p>
          <img class="mx-auto" width={500} height={500} src="/Core.png" alt="" />
        </section>
        <section class="text-center !flex flex-col items-center justify-center">
          <h4 class="!m-0">superapp</h4>
          <img class="mx-auto !m-0" width={500} height={500} src="/PWA.png" alt="" />

        </section>

        <section class="text-center !flex flex-col items-center justify-center">
          <h4 class="!m-0">module federation</h4>
          <img class="mx-auto !m-0" width={500} height={500} src="/moduleFederation.png" alt="" />

        </section>


        <section class="text-center !flex flex-col items-center justify-center">
          <h4 class="!m-0">the way we implemented</h4>
          <img class="mx-auto !m-0" width={500} height={500} src="/module.png" alt="" />


        </section>
        <section class="text-center !flex flex-col items-center justify-center">
          <h4 class="!m-0">standalone and library</h4>
          <img class="mx-auto !m-0" width={500} height={500} src="/stanalone.png" alt="" />
        </section>
        <section class="text-center !flex flex-col items-center justify-center">
          <h4 class="!m-0">multiple BuildConfig</h4>

          <img class="mx-auto !m-0" width={500} height={500} src="/multiple.png" alt="" />
        </section>

        <section class="text-center !flex flex-col items-center justify-center">
          <h4 class="!m-0">keep track of package.json</h4>
          <img class="mx-auto !m-0" width={500} height={500} src="/package.png" alt="" />
        </section>



        <section class="text-center !flex flex-col items-center justify-center">
          <h1>
            PWA
          </h1>
          <img class="mx-auto !m-0" width={500} height={500} src="/pwa-twa.png" alt="" />

        </section>
        <section class="text-center !flex flex-col items-center justify-center">
          <h1>
            TWA
          </h1>
          <img class="mx-auto !m-0" width={500} height={500} src="/TWA.png" alt="" />

        </section>
        <section class="text-center !flex flex-col items-center justify-center">
          <h1>BubbleWrap</h1>
          <img class="mx-auto !m-0" width={500} height={500} src="/android.png" alt="" />

        </section>

        <section class="text-center !flex flex-col items-center justify-center">
          <h1>Notif flow</h1>
          <img src="/notif-flow.png" alt="" />

        </section>

      </div >
    </div >
  );
}

export default App;
