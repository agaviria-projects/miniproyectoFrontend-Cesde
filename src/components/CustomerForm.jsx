import { useState } from 'react';
import axios from 'axios';

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://miniproyectocesde-production.up.railway.app/api/customers', formData);
      alert('Cliente registrado con éxito');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error(error);
      alert('Error al registrar cliente');
    }
  };

  return (
    <h3 className="seccion-titulo">Registrar Cliente</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      /><br />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        required
      /><br />
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
      /><br />
      <button type="submit">Guardar Cliente</button>
    </form>
  );
}
