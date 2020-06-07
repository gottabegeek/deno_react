import React, { useState, useEffect } from "https://unpkg.com/es-react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            p: any;
        }
    }
}

const App = () => {
    const [time, setTime] = useState(new Date());
    useEffect((): void => {
        setInterval((): void => setTime(new Date()), 1000);
    });
    return (<p>The current time is {time.toLocaleTimeString()}</p>);
}

export default App;