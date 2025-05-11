import './App.css'
import CustomerForm from './components/CustomerForm';
import PurchaseForm from './components/PurchaseForm';

function App() {
  return (
    <div className="container">
       <h1>Sistema de Registro Comercial</h1>
       <h2>Proyecto Integrador - Alejandro Gaviria</h2>
       <h3>CESDE 2025</h3>
      <CustomerForm />
      <hr />
      <PurchaseForm />
    </div>
  );
}

export default App;
