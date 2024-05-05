import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const VehiculoForm = ({ handleNextStep, handlePreviousStep }) => {
  const { state, dispatch } = useAppContext();
  const [vehiculo, setVehiculo] = useState({ marca: '', modelo: '', placa: '' });

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
      {/* Otros campos del vehículo */}
      <button type="submit">Siguiente</button> {/* Botón para pasar al siguiente paso */}
      <button type="button" onClick={handlePreviousStep}>Volver</button> {/* Botón para volver al paso anterior */}
    </form>
  );
};

export default VehiculoForm;
