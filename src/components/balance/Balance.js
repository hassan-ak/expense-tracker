// React Imports
import React , { useContext } from 'react';

// Functional Component Imports
import { GlobalContext } from "../../functionalComponents/GlobalContext";

// styles Import
import './Balance.css';

export const Balance = () => {

    // use GloablContext to fetch data
    const context = useContext(GlobalContext);

    // Extarct amounts from data
    const amounts = context.transactions.map(transaction => transaction.amount);

    // Sum of Income Amounts
    const total1 = amounts.reduce((acc,item)=>(acc+=item),0);
    const total = total1.toFixed(2);

    // Determine while total amount is +ve or -ve
    const sign = total < 0 ?  '-' : '';

    return (
        // Balance Container
        <div className="balance">

            {/* Section Heading */}
            <h4>Balance</h4>

            {/* Balance Amount */}
            <h1>
                <span>{sign}</span>
                <span>${total}</span>
            </h1>

        </div>
    )
}
