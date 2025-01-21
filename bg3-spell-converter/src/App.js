import React, { useState } from "react";

const App = () => {
  const [jsonObject, setJsonObject] = useState(null);

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
      {jsonObject && (
        <div style={{ marginTop: "20px" }}>
          <h2>Imported JSON:</h2>
          <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
            {JSON.stringify(jsonObject, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default App;