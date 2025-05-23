import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PurchaseForm() {
  const [formData, setFormData] = useState({
    product: '',
    amount: '',
    purchaseDate: '',
    customerId: ''
  });

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://miniproyectocesde-production.up.railway.app/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error cargando clientes', error));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://miniproyectocesde-production.up.railway.app/api/purchases', {
        product: formData.product,
        amount: parseFloat(formData.amount),
        purchaseDate: formData.purchaseDate,
        customer: { id: parseInt(formData.customerId) }
      });
      alert('Compra registrada correctamente');
      setFormData({ product: '', amount: '', purchaseDate: '', customerId: '' });
    } catch (error) {
      console.error(error);
      alert('Error al registrar compra');
    }
  };

  return (
    <h3 className="seccion-titulo">Registrar Compra</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="product"
        placeholder="Producto"
        value={formData.product}
        onChange={handleChange}
        required
      /><br />
      <input
        type="number"
        name="amount"
        placeholder="Monto"
        value={formData.amount}
        onChange={handleChange}
        required
      /><br />
      <input
        type="date"
        name="purchaseDate"
        value={formData.purchaseDate}
        onChange={handleChange}
        required
      /><br />
      <select name="customerId" value={formData.customerId} onChange={handleChange} required>
        <option value="">Seleccionar Cliente</option>
        {customers.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select><br />
      <button type="submit">Guardar Compra</button>
    </form>
  );
}
