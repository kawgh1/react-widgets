import React from 'react'
import Accordion from './components/Accordian'
import Search from './components/Search';


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


class App extends React.Component {

    render() {
    return (
        // <Accordion items={items}/>
        <Search />
    
    );
    }
};

export default App;