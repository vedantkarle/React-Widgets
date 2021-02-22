import { useState, useEffect } from "react";
import axios from "axios";

//https://translation.googleapis.com/language/translate/v2

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const {
        data: { data },
      } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {
          /*body*/
        },
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.translations[0].translatedText);
    };

    translate();
  }, [language, debounceText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
