import React from 'react'

const Link = ({ className, href, children}) => {

    const onClick = (event) => {

        // open link in new window if user does ctrl+click
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        // force URL change even tho we aren't loading a new page, only loading a Component
        window.history.pushState({}, '', href )

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick}
                className={className} href={href} >{children}</a>;
}

export default Link;