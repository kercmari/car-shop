import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';

const ClienteForm = ({ handleNextStep }) => {
  const {state, dispatch } = useAppContext();
  const [cliente, setCliente] = useState({ nombre: '', apellido: '', identificiacion: '', ncontacto: '', email: '', tipoIdentificacion: 'cedula' });
  
  useEffect(() => {
    setCliente(state.cliente);
  }, [state.cliente]);

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
    <>
      <h2>Datos Personales</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="identificiacion" value={cliente.identificiacion} onChange={handleClienteChange} placeholder="Identifiación Fiscal" required />
        <select name="tipoIdentificacion" value={cliente.tipoIdentificacion} onChange={handleClienteChange} placeholder="Tipo Identifiación" required>
          <option value="">Seleccione</option>
          <option value="cedula">Cédula</option>
          <option value="ruc">RUC</option>
          <option value="pasaporte">Pasaporte</option>
        </select>

        <input type="text" name="nombre" value={cliente.nombre} onChange={handleClienteChange} placeholder="Nombres" required />
        <input type="text" name="apellido" value={cliente.apellido} onChange={handleClienteChange} placeholder="Apellidos" required />
        <input type="email" name="email" value={cliente.email} onChange={handleClienteChange} placeholder="Email" required />
        <input type="number" name="ncontacto" value={cliente.ncontacto} onChange={handleClienteChange} placeholder="Numero Conctacto" required />

        {/* Otros campos del cliente */}
        <button type="submit">Siguiente</button> {/* Botón para pasar al siguiente paso */}
      </form>
    </>
  );
};

export default ClienteForm;
