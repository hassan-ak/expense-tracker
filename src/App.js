// Component Imports
import {Header} from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { Summary } from './components/summary/Summary';
import { History } from './components/history/History';
import { AddTransaction } from './components/addTransaction/AddTransaction';
import { Footer } from './components/footer/Footer';

//Functional Component Imports
import { GlobalProvider } from './functionalComponents/GlobalProvider';

// Styles Imports
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Summary/>
        <History/>
        <AddTransaction/>
      </div>
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
