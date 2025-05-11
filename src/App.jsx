function App() {
  return (
    <div className="container">
      <h1>Sistema de Registro Comercial</h1>

      <CustomerForm />
      <hr />
      <PurchaseForm />

      {/* Pie de página personalizado */}
      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        <img
          src="/assets/Firma.png"
          alt="Logo de Alejandro Gaviria"
          style={{ maxWidth: '200px', opacity: 0.8 }}
        />
      </footer>
    </div>
  );
}

