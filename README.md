## Simple React Project exploring Hooks

## Tools Used
- Semantic UI
    - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

## Hooks Notes
- ### Hooks System
![hooks-system](https://github.com/kawgh1/react-widgets/blob/main/hooks-system.png)
- ## useState()
    - probably the most common hook
  
        File: Accordion.js

            const Accordion = ({ items }) => {
                const things = useState(null);
                const activeIndex = things[0];
                const setActiveIndex = things[1];
            }

            // is the same as

            const Accordion = ({ items }) => {
                const [activeIndex, setActiveIndex] = useState(null);
            }

    - no new array is being created
    - `activeIndex` is a piece of State we are trying to keep track of
        -  a reference to a value that will change over time
   - `setActiveIndex` is a `function` that we call to update our piece of State
       - any time we call `setActiveIndex` - because State is changing - it will force an automatic re-render of the component
           - So be careful when, how often and where you call it
   - `useState(null)`
       - takes one argument and that will be the `default` value for that piece of State defined by `activeIndex`

    ![setstate](https://github.com/kawgh1/react-widgets/blob/main/setstate.png)
- Examples
    - **const [ activeIndex, setActiveIndex ] = useState(null);**
    - **const [ name, setName ] = useState("");**
    - **const [ counter, setCounter ] = useState(0);**
    - **const [ color, setColor ] = useState("green");**

- ### Class Components vs Function Components w/ Hooks

![class-vs-functions-with-hooks](https://github.com/kawgh1/react-widgets/blob/main/class-vs-functions-with-hooks.png)
- ### Primitive Hooks
![primitive-hooks](https://github.com/kawgh1/react-widgets/blob/main/primitive-hooks.png)



- ### Custom Hooks
![custom-hooks](https://github.com/kawgh1/react-widgets/blob/main/cutsom-hooks.png)
