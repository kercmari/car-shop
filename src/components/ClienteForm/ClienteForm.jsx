import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const ClienteForm = ({ handleNextStep }) => {
  const { state, dispatch } = useAppContext();
  const [cliente, setCliente] = useState({ nombre: '', email: '' });

  const handleClienteChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_CLIENTE', payload: cliente });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={cliente.nombre} onChange={handleClienteChange} required />
      <input type="email" name="email" value={cliente.email} onChange={handleClienteChange} required />
      {/* Otros campos del cliente */}
      <button type="submit">Siguiente</button> {/* Botón para pasar al siguiente paso */}
    </form>
  );
};

export default ClienteForm;
