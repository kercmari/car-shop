import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const VehiculoForm = ({ handleNextStep, handlePreviousStep }) => {
  const { state, dispatch } = useAppContext();
  const [vehiculo, setVehiculo] = useState({
    marca: state.vehiculo.marca || '',
    modelo: state.vehiculo.modelo || '',
    placa: state.vehiculo.placa || '',
    nivelGasolina: state.vehiculo.nivelGasolina || '',
    exterior: state.vehiculo.exterior || '',
   
  }); 

 

  const handleVehiculoChange = (e) => {
    const { name, value } = e.target;
    setVehiculo({ ...vehiculo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_VEHICULO', payload: vehiculo });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="marca" value={vehiculo.marca} onChange={handleVehiculoChange} required placeholder="Marca" />
      <input type="text" name="modelo" value={vehiculo.modelo} onChange={handleVehiculoChange} required placeholder="Modelo" />
      <input type="text" name="placa" value={vehiculo.placa} onChange={handleVehiculoChange} required placeholder="Placa" />
      <input type="text" name="nivelGasolina" value={vehiculo.nivelGasolina} onChange={handleVehiculoChange} required placeholder="Nivel Tanque Gasolina" />
      <textarea type="text" name="exterior" value={vehiculo.exterior} onChange={handleVehiculoChange} required placeholder="Estado exterior " />
      <div className="buttons">
     <button type="submit" className='btn-primary'> Siguiente </button>
      <button type="button"  className='btn-secondary' onClick={handlePreviousStep}>Volver</button> 
      </div>
    </form>
  );
};

export default VehiculoForm;
