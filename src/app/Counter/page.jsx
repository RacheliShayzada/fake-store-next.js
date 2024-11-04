
"use client";

import React from 'react';
import useStore from '../stores/useStore';
import Countrer from './Counter'
import './counter.modules.css'

const CounterPage = () => {
    const { increment, decrement, reset } = useStore(); // משיכת המצב והפונקציות מהחנות

    return (
        <div className="Countercontainer">
            <Countrer />
            <div className="buttonContainer">
                <button className="Counterbutton" onClick={increment}>Increment</button>
                <button className="Counterbutton" onClick={decrement}>Decrement</button>
                <button className="Counterbutton" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default CounterPage;
