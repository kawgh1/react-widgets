# Simple React Project exploring Hooks

- ## Each Component Widget makes use of different hooks
    - ### Accordion - **useState**
    - ### Search - **useState, useEffect**
    - ### Dropdown - **useState, useEffect, useRef**
    - ### Translate - **useState, useEffect, useRef**

## Tools Used
- Semantic UI
    - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

## Hooks Notes
- ### Hooks System
![hooks-system](https://github.com/kawgh1/react-widgets/blob/main/diagrams/hooks-system.png)
- ## useState()
    - probably the most common hook
  
        File: Accordion.js

            const Accordion = ({ items }) => {
                const things = useState(null);
                const activeIndex = things[0];
                const setActiveIndex = things[1];

                const onTitleClicked = (index) => {
                    setActiveIndex(index);
                }
            }

      

            // is the same as

            const Accordion = ({ items }) => {
                const [activeIndex, setActiveIndex] = useState(null);

                const onTitleClicked = (index) => {
                    setActiveIndex(index);
                }
            }

            

    - no new array is being created
    - `activeIndex` is a piece of State we are trying to keep track of
        -  a reference to a value that will change over time
   - `setActiveIndex` is a `function` that we call to update our piece of State
       - any time we call `setActiveIndex` - because State is changing - it will force an automatic re-render of the component
           - So be careful when, how often and where you call it
   - `useState(null)`
       - takes one argument and that will be the `default` value for that piece of State defined by `activeIndex`

    ![setstate](https://github.com/kawgh1/react-widgets/blob/main/diagrams/setstate.png)
- Examples
    - **const [ activeIndex, setActiveIndex ] = useState(null);**
    - **const [ name, setName ] = useState("");**
    - **const [ counter, setCounter ] = useState(0);**
    - **const [ color, setColor ] = useState("green");**

    export default function App() {
    
        const [ count, setCount ] = useState(0);
        
        const onButtonClick = () => {
            setCount(count+1);
        };
        
        return (
            <div>
                <button onClick={onButtonClick}>Click Me!</button>
                <h1>Current Count: {count}</h1>
            </div>
        );
    }

- ## useEffect()
  - Allows Function Components to use ***something like*** LifeCycle Methods
  - **We configure the hook to run some code automatically in one of three scenarios**
      - 1. When the Component is rendered *for the first time* ***only***
      - 2. When the Component is rendered ***for the first time AND any other time it re-renders after that***
      - 3. When the Component is rendered **for the first time AND any other time it re-renders after that AND some piece of Component data has changed**

- ### Class Components vs Function Components w/ Hooks

![class-vs-functions-with-hooks](https://github.com/kawgh1/react-widgets/blob/main/diagrams/class-vs-functions-with-hooks.png)
- ### Primitive Hooks
![primitive-hooks](https://github.com/kawgh1/react-widgets/blob/main/diagrams/primitive-hooks.png)



- ### Custom Hooks
![custom-hooks](https://github.com/kawgh1/react-widgets/blob/main/diagrams/cutsom-hooks.png)
