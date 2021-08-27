import React from 'react'
import Accordion from './components/Accordian'


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


export default () => {

    return (
        <Accordion items={items}/>
    );
    
};