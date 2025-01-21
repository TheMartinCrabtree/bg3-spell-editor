import React, { useState } from "react";
import SpellDisplay from "./components/SpellDisplay";

const example = {
  "casting_time": "1 action",
  "classes": [
      "sorcerer",
      "wizard"
  ],
  "components": {
      "material": false,
      "raw": "V, S",
      "somatic": true,
      "verbal": true
  },
  "description": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\n\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
  "duration": "Instantaneous",
  "level": "cantrip",
  "name": "Acid Splash",
  "range": "60 feet",
  "ritual": false,
  "school": "conjuration",
  "tags": [
      "sorcerer",
      "wizard",
      "cantrip"
  ],
  "type": "Conjuration cantrip"
}


const App = () => {
  const [jsonObject, setJsonObject] = useState(null);

  const _renderSpells=()=>{
    return jsonObject && jsonObject.map((spellData, index)=><SpellDisplay spellData={spellData} key={index}>test</SpellDisplay>);
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setJsonObject(jsonData);
          console.log("JSON imported successfully:", jsonData);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
          alert("The selected file is not a valid JSON file.");
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>JSON File Importer</h1>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      {/* {jsonObject && (
        <div style={{ marginTop: "20px" }}>
          <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
            {JSON.stringify(jsonObject, null, 2)}
          </pre>
        </div>
      )} */}
      {jsonObject && (<div>{_renderSpells()}</div>)}
      
    </div>
  );
};

export default App;