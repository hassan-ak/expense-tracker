// React Imports
import React, { useContext } from 'react';

// Sub-component Imports
import { Transactions } from './Transactions';

// Functional Component Imports
import { GlobalContext } from "../../functionalComponents/GlobalContext";

// Styles Import
import './History.css';

export const History = () => {

    // use GloablContext to fetch data
    const context = useContext(GlobalContext)

    return (
        // Header Container
        <div className="transaction-history">

            {/* Section Heading */}
            <h3>Transaction History</h3>

            {/* list to show transaction History */}
            <ul className="list">

                {/* create list elements by maping through transactions */}
                {context.transactions.map(transaction => (
                    <Transactions
                        key = {transaction.id}
                        transaction = {transaction}
                        delete = {context.deleteTransaction}
                    />
                ))}
            </ul>
        </div>
    )
}
