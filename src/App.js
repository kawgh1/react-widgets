import React, {useState, useEffect, useRef} from 'react'
import Accordion from './components/Accordian'
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'React is used by creating Components'
    },
];

// since this is a static array that won't change, doesn't matter where we define it
const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
];


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
              {/* <Accordion items={items}/> */}
        {/* <Search /> */}
        {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
        
        {/* {showDropdown ?
            <Dropdown 
            selected={selected}
            onSelectedChange={setSelected} 
            options={options}

            />
            : null
        } */}

            <Translate />

        </div>
       
    
    );
    
};