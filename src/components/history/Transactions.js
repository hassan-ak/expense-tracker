// React Imports
import React from 'react';

export const Transactions = (props) => {

    // Determine while transaction amount is income or expense
    const sign = props.transaction.amount < 0 ?  '-' : '+';

    // Determine style based upon transaction type
    const style = props.transaction.amount < 0 ?  'expense-h' : 'income-h';


    return (
        <div>
            {/* List elements for each transaction */}
            <li className={style}>
                
                {/* Display transaction Description */}
                {props.transaction.description}

                {/* Display transaction amount */}
                <span>
                    {sign}${Math.abs(props.transaction.amount)}
                </span>

                    {/* button fro deleting a transaction */}
                    <button className="del">X</button>
                </li>
        </div>
    )
}
