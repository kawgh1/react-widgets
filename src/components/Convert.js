import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    // Hook to handle debounced text, keep from making so many API calls
    useEffect(() => {
        const timerId = setTimeout(() => {

            setDebouncedText(text);
        }, 750);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    // Translation hook to call API
    useEffect(() => {

        // helper function
        const doTranslation = async () => {

            const result = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                // q: text,
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

                }
            });

            setTranslated(result.data.data.translations[0].translatedText);
            
        };

        doTranslation();
        
    // }, [language, text]);
    // only run this hook when debouncedText changes - ie, when user stops typing for 750ms - to call API
    }, [language, debouncedText]);


    return (
    
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    
        );
};

export default Convert;