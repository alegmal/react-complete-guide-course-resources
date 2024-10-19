import Header from "./components/Header";
import Concept from "./components/Concept";

import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Concept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <Concept 
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
            />
            <Concept 
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
            />
            <Concept 
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
            />

            {/* {CORE_CONCEPTS.map((concept) => {
              <Concept
                title={concept.title}
                description={concept.title}
                image={concept.image}
              />;
            })} */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
