// React Imports
import React from 'react';

// Styles Import
import './History.css';

export const History = () => {
    return (
        <div className="transaction-history">
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="income-h">
                    In
                    <span>$100</span>
                    <button className="del">X</button>
                </li>
                <li className="expense-h">
                    Out
                    <span>-$100</span>
                    <button className="del">X</button>
                </li>
                <li className="income-h">
                    In1
                    <span>$250</span>
                    <button className="del">X</button>
        	    </li>
                <li className="expense-h">
                    Out1
                    <span>-$70</span>
                    <button className="del">X</button>
                </li>
            </ul>
        </div>
    )
}
