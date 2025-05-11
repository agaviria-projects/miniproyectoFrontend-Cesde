import './App.css';
import CustomerForm from './components/CustomerForm';
import PurchaseForm from './components/PurchaseForm';
import logo from './assets/Firma.png'; // ✅ Importar logo

function App() {
  return (
    <div className="container">
      <h1>Sistema de Registro Comercial</h1>
      <h2 className="author">Proyecto Integrador - Alejandro Gaviria</h2>
      <h3>CESDE 2025</h3>

      <CustomerForm />
      <hr />
      <PurchaseForm />

      {/* Pie de página personalizado */}
      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        <img
          src={logo}
          alt="Logo de Alejandro Gaviria"
          style={{ maxWidth: '200px', opacity: 0.8 }}
        />
      </footer>
    </div>
  );
}

export default App;
