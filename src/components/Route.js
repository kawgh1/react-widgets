import { useEffect, useState } from 'react'

const Route = ({ path, children}) => {

    // only purpose for this is to get our Route to update when a new nav link is clicked
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    

    // Any time we set up an event listener inside of a Component, 
    // that's usually a sign we need to use the useEffect Hook
    useEffect(() => {

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);


        // useEffect Cleanup Function
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    // return window.location.pathname === path ? children : null;
    return currentPath === path ? children : null;
};


    
    export default Route;