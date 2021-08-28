import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {

    // useState
    const [term, SetTerm] = useState('');

    // useEffect
    useEffect(() => {
        const search = async () => {
            await axios.get('someUrl');
        }

        search();
        
    }, [term]);

     // THIS IS NOT ALLOWED - Cannot pass useEffect() an async function or have an await inside the callback
    //  useEffect(async () => {
    //     await axios('asaasdf');
    // }, [term]);

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
        </div>
    );
};

export default Search;