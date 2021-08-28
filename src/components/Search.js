import React, {useState, useEffect} from 'react'

const Search = () => {

    // useState
    const [term, SetTerm] = useState('');

    // useEffect
    useEffect(() => {
        console.log('asasdf')
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
        </div>
    );
};

export default Search;