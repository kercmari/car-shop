import React from 'react';
import { useAppContext } from '../../context/AppContext';

const OrdenTrabajo = ({ handleSubmit, handlePreviousStep }) => {
  const { state } = useAppContext();

  return (
    <div>
      <h2>Resumen de la orden de trabajo</h2>
      <p>Cliente: {state.cliente.nombre}</p>
      <p>Email: {state.cliente.email}</p>
      <p>Vehículo: {state.vehiculo.marca} {state.vehiculo.modelo}</p>
      <p>Servicios Seleccionados: {state.serviciosSeleccionados.join(', ')}</p>
      {/* Otros detalles de la orden de trabajo */}
      <button type="submit" onClick={handleSubmit}>Confirmar Orden</button> {/* Botón para confirmar la orden */}
      <button type="button" onClick={handlePreviousStep}>Volver</button> {/* Botón para volver al paso anterior */}
    </div>
  );
};

export default OrdenTrabajo;
