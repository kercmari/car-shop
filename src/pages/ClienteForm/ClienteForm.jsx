import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';


const ClienteForm = ({handleNextStep}) => {
  const {state, dispatch } = useAppContext();
  const [cliente, setCliente] = useState({
    nombre: state.cliente.nombre || '',
    apellido: state.cliente.apellido || '',
    identificiacion: state.cliente.identificiacion || '',
    ncontacto: state.cliente.ncontacto || '',
    email: state.cliente.email || '',
    tipoIdentificacion: state.cliente.tipoIdentificacion || 'cedula',
  }); 



  const handleClienteChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
    dispatch({ type: 'SET_CLIENTE', payload: { ...cliente, [name]: value } });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_CLIENTE', payload: cliente });
    handleNextStep();
  };

  return (
    <>
      
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
        
        <button type="submit" className='btn-primary'>Siguiente</button> 
      
      </form>
    </>
  );
};

export default ClienteForm;
