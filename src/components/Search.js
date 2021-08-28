import React, {useState} from 'react'

const Search = () => {

    const [term, SetTerm] = useState('');

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