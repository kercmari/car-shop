import React , { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const OrdenTrabajo = ({  handlePreviousStep }) => {
  const { state, dispatch } = useAppContext();
  const [fechaEntrega, setfechaEntrega] = useState(''); 

 
  
  const handleSubmit = () => {
    let fecha = calcular('sumar', state.diasLaborables);
    
    
    setfechaEntrega(fecha);
    dispatch({ type: 'SET_FECHA_ENTREGA', payload: fechaEntrega });
    alert(
      `Se entregar en ${state.diasLaborables} dias laborables. Fecha de entrega ${fechaEntrega}`
    );
    

  };

  function calcular( operacion, dias) {
    let hoy = new Date(),
        calculado = new Date(),
        dateResul = operacion === "sumar" ? hoy.getDate() + dias : hoy.getDate() - dias;
    calculado.setDate(dateResul);
  
    return (
      calculado.getDate() +
      "/" +
      (calculado.getMonth() + 1) +
      "/" +
      calculado.getFullYear());
  }

  return (
    <form >
      <div>
        <p>Cliente: {state.cliente.nombre}  ID: {state.cliente.identificiacion}</p>
        <p>Email: {state.cliente.email} Telefono: {state.cliente.ncontacto}</p>
        <p>Vehículo: {state.vehiculo.marca} {state.vehiculo.modelo} {state.vehiculo.placa}</p>
        <p>Estado exterior: {state.vehiculo.exterior}</p>
        <p>Servicios Seleccionados:  </p><ul>{state.serviciosSeleccionados.map((option) => (
          <li key={option.value}><span > {option.label}</span></li>
        ))}</ul>
       
      </div>
      <div className="buttons">
        <button type="button" className='btn-confirm' onClick={handleSubmit} >Aprobar Orden</button>
        <button type="button" className='btn-secondary' onClick={handlePreviousStep}>Volver</button>
      </div>
    </form>
  );
};

export default OrdenTrabajo;
