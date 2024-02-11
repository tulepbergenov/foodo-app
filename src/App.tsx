import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import { Providers } from "./app/providers";

export const App = () => {
  return (
    <Providers>
      <main>
        <section>
          <header>
            <h1>Hello World</h1>
          </header>
        </section>
      </main>
    </Providers>
  );
};
