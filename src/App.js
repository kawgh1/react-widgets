import React from 'react'
import Accordion from './components/Accordian'
import Search from './components/Search';
import Dropdown from './components/Dropdown';


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


class App extends React.Component {

    render() {
    return (
        // <Accordion items={items}/>
        // <Search />
        <Dropdown options={options}/>
    
    );
    }
};

export default App;