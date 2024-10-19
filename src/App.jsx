import Header from "./components/Header";
import Concept from "./components/Concept";
import Button from "./components/Button";

import { CORE_CONCEPTS } from "./data";
import headerImage from "./assets/react-core-concepts.png";

function App() {
  return (
    <div>
      <Header image={headerImage} />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <Concept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <Button>Component</Button>
        </section>
      </main>
    </div>
  );
}

export default App;
