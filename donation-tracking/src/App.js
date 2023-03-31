
import './App.css';
import DonationTable from './components/DonationTable';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">
    <Header/>
    <h1> Your Donations</h1>
    <DonationTable/>
    <Footer/>
    </div>
  );
}

export default App;
