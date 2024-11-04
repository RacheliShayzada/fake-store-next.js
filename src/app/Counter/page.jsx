
"use client";

import React from 'react';
import useStore from '../stores/useStore';
import Countrer from './Counter'
import './counter.modules.css'

const CounterPage = () => {
    const { increment, decrement, reset } = useStore(); // משיכת המצב והפונקציות מהחנות

    return (
        <div className="container">
            <Countrer />
            <div className="buttonContainer">
                <button className="button" onClick={increment}>Increment</button>
                <button className="button" onClick={decrement}>Decrement</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default CounterPage;
