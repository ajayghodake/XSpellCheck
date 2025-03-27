// import React, { useState } from "react";
// const SpellCheckApp = () => {
//   const customDictionary = {
//     teh: "the",
//     wrok: "work",
//     fot: "for",
//     exampl: "example",
//   };

//   const [inputText, setInputText] = useState("");
//   const [spellWord, setSpellWord] = useState("")

//  // const handleInputText = (e) => {
//   //   let text = e.target.value;
//   //   setInputText(text);

//   //   let words = text.split(" ");
//   //   const correctedWords = words.map((word) => customDictionary[word.toLowerCase() || word]);

//   //   const correctedText = correctedWords.join(" ");

//   //   const firstCorrection = words.find((word, index) => word !== correctedText[index]);
//   //   setSpellWord(firstCorrection || "");
//   // };

//   const handleInputText = (e) => {
//     let text = e.target.value;
//     setInputText(text);

//     let words = text.split(" ");

//     const correctedWords = words.map(
//       (word) => customDictionary[word.toLowerCase()]
//     );

//     const correctedText = correctedWords.join("");

//     setSpellWord(correctedText);
//   };

//   return (
//     <>
//       <h1>Spell Check and Auto-Correction</h1>
//       <textarea
//         name="textArea"
//         id="spellCheck"
//         value={inputText}
//         onChange={handleInputText}
//         placeholder="Enter text..."
//         rows={5}
//         cols={50}
//       ></textarea>
//       {spellWord && (
//         <p>Did you mean: <strong>{spellWord}</strong>?</p>
//       )}
//     </>
//   );
// };

// export default SpellCheckApp;

import React from "react";

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

class SpellCheckApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      suggestedText: "",
    };
  }

  handleInputChange = (e) => {
    const text = e.target.value;
    this.setState({ inputText: text });

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    this.setState({ suggestedText: firstCorrection || "" });
  };

  render() {
    return (
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={this.state.inputText}
          onChange={this.handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {this.state.suggestedText && (
          <p>
            Did you mean: <strong>{this.state.suggestedText}</strong>?
          </p>
        )}
      </div>
    );
  }
}

export default SpellCheckApp;
