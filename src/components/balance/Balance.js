// React Imports
import React from 'react';

// styles Import
import './Balance.css';

export const Balance = () => {
    return (
        // Balance Container
        <div className="balance">

            {/* Section Heading */}
            <h4>Balance</h4>

            {/* Balance Amount */}
            <h1>
                <span>-</span>
                <span>$100</span>
            </h1>

        </div>
    )
}
