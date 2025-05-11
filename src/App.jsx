import './App.css';
import CustomerForm from './components/CustomerForm';
import PurchaseForm from './components/PurchaseForm';
import logo from './assets/Firma.png'; // ✅ Importar logo

function App() {
  return (
    <div className="container">
      <h1>Sistema de Registro Comercial</h1>
      <h3 className="seccion-titulo">Registrar Cliente</h3>
      <CustomerForm />
      <hr />
      <h3 className="seccion-titulo">Registrar Compra</h3>
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
