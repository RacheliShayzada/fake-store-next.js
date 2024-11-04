"use client";

import React from 'react';
import useStore from '../stores/useStore';
import './counter.modules.css'


const Counter = () => {
    const {count } = useStore(); // משיכת המצב והפונקציות מהחנות

    return (
        <div>
            <h1 className="title">Welcome to the Counter App</h1>
            <h1 className="counter">Counter: {count}</h1>
        </div>
    )
}

export default Counter