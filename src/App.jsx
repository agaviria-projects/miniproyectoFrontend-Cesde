import './App.css'
import CustomerForm from './components/CustomerForm';
import PurchaseForm from './components/PurchaseForm';

function App() {
  return (
    <div className="container">
      <h1>Proyecto “Customer & Purchase”</h1>
      <h2>CESDE 2025</h2>
      <CustomerForm />
      <hr />
      <PurchaseForm />
    </div>
  );
}

export default App;
