export const translate = (englishWord, wantedLanguage) => {
    if(typeof englishWord !== 'string' || typeof wantedLanguage !== 'string'){
        return "unavailable";
    }

    const frenchDictionary = {hello: bonjour}; //etc etc

    let translatedWord = "unavailable";

    if(englishWord == "hello"){
        if(wantedLanguage == "french"){
            translatedWord = "bonjour";
        } else if (wantedLanguage == "german"){
            translatedWord = "hallo";
        }
    }

    if(englishWord == "good morning"){
        if(wantedLanguage == "french"){
            translatedWord == "bonjour";
        } else if (wantedLanguage == "german"){
            translatedWord = "guten morgen";
        }
    }

    return translatedWord;
}