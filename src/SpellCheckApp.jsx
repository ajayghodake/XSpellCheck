import React, { useState } from "react";
const SpellCheckApp = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const [inputText, setInputText] = useState("");
  const [spellWord, setSpellWord] = useState("");

 // const handleInputText = (e) => {
  //   let text = e.target.value;
  //   setInputText(text);

  //   let words = text.split(" ");
  //   const correctedWords = words.map((word) => customDictionary[word.toLowerCase() || word]);

  //   const correctedText = correctedWords.join(" ");

  //   const firstCorrection = words.find((word, index) => word !== correctedText[index]);
  //   setSpellWord(firstCorrection || "");
  // };

  const handleInputText = (e) => {
    let text = e.target.value;
    setInputText(text);

    let words = text.split(" ");

    const correctedWords = words.map(
      (word) => customDictionary[word.toLowerCase() || ""]
    );

    const correctedText = correctedWords.join(" ");

    setSpellWord(correctedText || " ");
  };

  return (
    <>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        name="textArea"
        id="spellCheck"
        value={inputText}
        onChange={handleInputText}
        placeholder="Enter text..."
        rows={5}
        cols={50}
      ></textarea>
      <p>Did you mean: {spellWord === " " ? ("") : (<strong>{spellWord + " " +"?"}</strong>)}</p>
    </>
  );
};

export default SpellCheckApp;
