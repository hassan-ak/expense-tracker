// React Imports
import React from 'react';

// Styles Import
import './Summary.css';

export const Summary = () => {
    return (
        // Summary Container
        <div className="income-expense">

            {/* Income Summary */}
            <div>
                <h4>Income</h4>
                <p className="income-m">
                    $ 0.00
                </p>
            </div>

            {/* Expense Summary */}
            <div>
                <h4>Expense</h4>
                <p className="expense-m">
                    $ 0.00
                </p>
            </div>
        </div>
    )
}
