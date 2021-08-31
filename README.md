# Simple React Project exploring Hooks

- Live site https://relaxed-jones-1f80b2.netlify.app/

- ## Each Component Widget makes use of different hooks
    - ### Accordion - **useState**
    - ### Search - **useState, useEffect**
    - ### Dropdown - **useState, useEffect, useRef**
    - ### Translate - **useState, useEffect, useRef**

## Tools Used
- Semantic UI
    - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
- AXIOS
  - **$ npm install axios**
      - For API calls - fetch, etc.

## Things I Learned
- ### dangerouslySetInnerHTML - vulnerable to XSS attacks 
  - by passing HTML code from a third-party into a Component Function we run the risk of receiving malicious JS or other code within that HTML
  - Root takeover of our React App is possible here
  - only user dangerouslySetInnerHTML from 1qa  third-party source you trust
  
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

- ### How to close Dropdowns by clicking elsewhere in the DOM
    - #### The DOM
        - html
            - body
                - div#root
                    - Dropdown Component
                        - div.ui.form
                            - div.ui.selection **onClick**
                                - div.ui.menu
                                    - div.item **onClick**
                                    - div.item **onClick**
                                    - div.item **onClick**

        - The Dropdown Component needs to detect a `click event` on ***any element*** besides one it created
        - The Dropdown Component has a hard time setting up `event handlers` on elements that it does not create
        - Event Bubbling is a thing
    - #### Solution
        - The Dropdown Component can set up a `manual event listener` (without React) on the body element.
            - A click on any element will bubble up to the body!

                 // this is used so that clicking outside the Dropdown Component closes the Dropdown Component
                        useEffect(() => {
                            const onBodyClick = (event) => {
                            // this checks - was the element clicked on inside our ref element? 
                            // <div ref={ref} className='ui form'>?
                            if (ref.current.contains(event.target)) {
                                return;
                            }
                            setOpen(false);
                            };

                            document.body.addEventListener("click", onBodyClick, { capture: true });
                        
                            // useEffect CleanUp function
                            return () => {
                                // turn off the body click listener if the dropdown is not visible
                                document.body.removeEventListener("click", onBodyClick, {
                                    capture: true,
                                });
                            };
                        }, []);
    - #### Reference
        - https://reactjs.org/blog/2020/08/10/react-v17-rc.html#fixing-potential-issues

- ### Navigation w/o React Router
    - Implement identical navigational functionality without using React Router
        - **Why?** 
            - **React Router has had a breaking change almost every year since it was released**
    - #### Solution
        - User Flow
            - User clicks on Header Link item (ex. 'Dropdown')
            - Change the URL, but *don't do a full page refresh*

                File: Link.js

                    ...
                     const onClick = (event) => {

                        event.preventDefault();
                        // force URL change even tho we aren't loading a new page, only loading a Component
                        window.history.pushState({}, '', href )
                    };

            - Each Route should detect the URL has changed
            - Route should updated piece of state tracking the current pathname
            - Each Route re-renders, showing/hiding components appropriately

        - We essentially update the URL with the Link the User clicks and preventDefault of the page load
        - This can be verified in Dev Tools under Network - clicking around should only load API calls, no bundles or logos or other running JS requests

- ### Any time we set up an event listener inside of a Component, that's usually a sign we need to use the useEffect Hook
    - Route.js

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
  - **We configure the useEffect() hook to run some code automatically in one of three scenarios**
      - Option 1). When the Component is rendered *for the first time* ***only***
      - Option 2). When the Component is rendered ***for the first time AND any other time it re-renders after that***
      - Option 3). When the Component is rendered **for the first time AND (any other time it re-renders after that AND some piece of Component data has changed)**
  - Which option to be used is determined by the **second argument** passed into **useEffect(( ) => {...}, ___ )**


            // Option 1 - [] - run on initial render

            useEffect(() => {
                console.log('I ONLY RUN ONCE')
            }, []);

            // Option 2 - ...nothing... - run at initial render and every re-render

            useEffect(() => {
                console.log('I RUN AT INITIAL RENDER AND AFTER EVERY RE-RENDER')
            });

            // Option 3 - [data] - run at initial render and run after every re-render if data has changed

            useEffect(() => {
                console.log('I RUN AT INITIAL RENDER AND AFTER EVERY RE-RENDER IF COMPONENT DATA HAS CHANGED')
            }, [term]);


 - #### THIS IS NOT ALLOWED - Cannot directly pass useEffect() an **async** function or have an **await** inside the callback
  

        useEffect(async () => {
            await axios('someUrl');
        }, [term]);

- ### Have to write it like this

        useEffect(() => {
            const search = async () => {
                await axios.get('someUrl');
            }

            search();
            
        }, [term]);

        // or this - same thing

        useEffect(() => {
            
            (async () => {
                await axios.get('someUrl');
            })();
            
        }, [term]);

        // or just use regular Promises

        useEffect(() => {
            
            axios.get('someUrl')
            .then((response) => {
                console.log(response.data);
            });
            
        }, [term]);
- ## useEffect()'s Cleanup Function
  - does not run on initial render
  - runs first on every subsequent re-render

- ### Class Components vs Function Components w/ Hooks

![class-vs-functions-with-hooks](https://github.com/kawgh1/react-widgets/blob/main/diagrams/class-vs-functions-with-hooks.png)
- ### Primitive Hooks
![primitive-hooks](https://github.com/kawgh1/react-widgets/blob/main/diagrams/primitive-hooks.png)



- ### Custom Hooks
![custom-hooks](https://github.com/kawgh1/react-widgets/blob/main/diagrams/cutsom-hooks.png)
