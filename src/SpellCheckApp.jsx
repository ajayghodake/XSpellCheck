import React, { useState } from "react";
const SpellCheckApp = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");


  // // Method 1
  // const handleInputText = (e) => {
  //   let text = e.target.value;
  //   setInputText(text);
  //   let wordsArray = text.split(" ");
  //   const correctedWord = wordsArray.map(
  //     (word) => customDictionary[word.toLowerCase()]
  //   );
  //   const correctedText = correctedWord.join("");
  //   setSuggestedText(correctedText);
  // };

  // // Method 2
  const handleInputText = (e) => {
    let text = e.target.value;
    setInputText(text);

    let words = text.split(" ");
    console.log("Words", words);

    const correctedWords = words.map(
      (word) => customDictionary[word.toLowerCase()] || word
    );
    console.log('correctedWords', correctedWords);

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    console.log(firstCorrection);

    setSuggestedText(firstCorrection || "");
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
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </>
  );
};

export default SpellCheckApp;
