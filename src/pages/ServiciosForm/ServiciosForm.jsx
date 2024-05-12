import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import options from '../../services';
import MultiSelect from '../../components/MultiSelect/MultiSelect';

const ServiciosForm = ({ handleNextStep, handlePreviousStep }) => {
  const { state, dispatch } = useAppContext();
  const [showMessage, setShowMessage] = useState(false);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState(state.serviciosSeleccionados || []);
  
  
  // 

  const handleServiciosChange = (selectedOptions) => {
    // Obtener los valores seleccionados
    const selectedValues = selectedOptions.map(option => option.value);
    

    // Actualizar el estado con los valores seleccionados
    setServiciosSeleccionados(selectedOptions);
    setShowMessage(selectedValues.length === 0);
    // Despachar la acción con los valores seleccionados
    dispatch({ type: 'SET_SERVICIOS', payload: selectedValues });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviciosSeleccionados.length > 0) {
      setServiciosSeleccionados(serviciosSeleccionados);
      dispatch({ type: 'SET_SERVICIOS', payload: serviciosSeleccionados });
      handleNextStep();
    } else {
      setShowMessage(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <MultiSelect
        value={serviciosSeleccionados}
        options={options}
        onChange={handleServiciosChange}
        placeholder="Selecione el servico"
      />
      {showMessage && (
        <div style={{ color: 'red', marginTop: '8px' }}>
          Seleccione al menos un servicio antes de continuar.
        </div>
      )}
      <label>
        Seleccionastes {serviciosSeleccionados.length} servicios
      </label>
      <div className="buttons">
        <button type="submit" className='btn-primary'> Siguiente </button>
        <button type="button" className='btn-secondary' onClick={handlePreviousStep}>Volver</button>
      </div>

    </form>
  );
};

export default ServiciosForm;
