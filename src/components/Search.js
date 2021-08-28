import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {

    // useState
    const [term, SetTerm] = useState('react');


    // useEffect
    const [results, setResults] = useState([]);

    // console.log(results);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            // this will cause a Component re-render
            setResults(data.query.search);
        }

        // if initial render (no results) run search immediately to display default content
        if (term && !results.length) {
            search();
        } else {

            // wait 600 ms bef
        const timeoutId = setTimeout(() => {
            if (term) {
                search();
                }
        }, 600);

            // CLEAN UP FUNCTION
            return () => {
                clearTimeout(timeoutId);
            };
            
          }

    }, [term]);

        

     // THIS IS NOT ALLOWED - Cannot pass useEffect() an async function or have an await inside the callback
    //  useEffect(async () => {
    //     await axios('asaasdf');
    // }, [term]);

    // LIST RESULTS

    const renderedResults = results.map((result) => {

        return (
            <div className='item' key={result.pageid}>
            <div className='right floated content'>
                <a className='ui button'
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                target="_blank" rel="noreferrer">Go</a>
            </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    });

    return (
    
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input'
                            value={term}
                            onChange={e => SetTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
            {renderedResults}
            </div>
        </div>
    );
};

export default Search;