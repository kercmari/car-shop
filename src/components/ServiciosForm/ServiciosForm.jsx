import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';

const ServiciosForm = ({ handleNextStep, handlePreviousStep }) => {
  const { state, dispatch } = useAppContext();
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  useEffect(() => {
    setServiciosSeleccionados(state.serviciosSeleccionados);
  }, [state.serviciosSeleccionados]);

  const handleServiciosChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServiciosSeleccionados([...serviciosSeleccionados, value]);
    } else {
      setServiciosSeleccionados(serviciosSeleccionados.filter(servicio => servicio !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SERVICIOS', payload: serviciosSeleccionados });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" name="servicio" value="Cambio de aceite" onChange={handleServiciosChange} /> Cambio de aceite
      </label>
      <label>
        <input type="checkbox" name="servicio" value="Cambio de frenos" onChange={handleServiciosChange} /> Cambio de frenos
      </label>
      {/* Otros servicios */}
      <button type="submit">Siguiente</button> {/* Botón para pasar al siguiente paso */}
      <button type="button" onClick={handlePreviousStep}>Volver</button> {/* Botón para volver al paso anterior */}
    </form>
  );
};

export default ServiciosForm;
