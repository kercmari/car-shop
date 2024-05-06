import React, { useState } from 'react';
import ClienteForm from '../ClienteForm/ClienteForm'; // Importa tus componentes de paso
import VehiculoForm from '../VehiculoForm/VehiculoForm';
import ServiciosForm from '../ServiciosForm/ServiciosForm';
import OrdenTrabajo from '../OrdenTrabajo/OrdenTrabajo';
import './stylesForm.css'; 
const FormularioMultiStep = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Lógica para enviar el formulario o realizar alguna acción final
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>Paso {step}</h4>
      </div>
      <div className="card-body">
        {step === 1 && <ClienteForm handleNextStep={handleNextStep} />}
        {step === 2 && <VehiculoForm handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
        {step === 3 && <ServiciosForm handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
        {step === 4 && <OrdenTrabajo handleSubmit={handleSubmit} handlePreviousStep={handlePreviousStep} />}
      </div>
    </div>
  );
};

export default FormularioMultiStep;
