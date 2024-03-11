import { useState } from "react";
import { EXAMPLES } from "../Button/data.js"
import TabButton from "../Button/Button.js"
import Section from "../Section/Section.js"
import Tabs from "../Tabs/Tabs.js"
import Card from "../Card/Card.js";
import { PiShareNetworkLight } from "react-icons/pi";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import { PiBriefcase } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  let tabContent = "Click para ver detalhes";

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <Section title="Detalhes do Evento" id="examples" style={{color:'#814C38'}}>
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
            <Card
            titulo="Networking"
            icon={<PiShareNetworkLight/>}
            />
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              <Card
            titulo="Palestras"
            icon={<PiPersonArmsSpreadLight/>}
            />
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
                <Card
            titulo="Cases"
            icon={<PiBriefcase/>}
            />
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
                <Card
            titulo="Tendências"
            icon={<FiSearch />}
            />
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {selectedTopic && (
        <div id="tab contents" className="tab-contents" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr',alignItems:'center'}}>
           <div>
            <img src={EXAMPLES[selectedTopic].image} style={{width:'75%'}}/>
          </div>
          <div>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
