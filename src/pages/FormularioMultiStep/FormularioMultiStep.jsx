import React, { useState } from "react";
import ClienteForm from "../ClienteForm/ClienteForm"; // Importa tus componentes de paso
import VehiculoForm from "../VehiculoForm/VehiculoForm";
import ServiciosForm from "../ServiciosForm/ServiciosForm";
import OrdenTrabajo from "../OrdenTrabajo/OrdenTrabajo";
import Container from "../../components/Container/Container";
import Nav from "../../components/Nav/Nav";
import Step from "../../components/Step/Step";
import { data } from "../../data.js";
import Header from "../../components/Header/Header.jsx";
import DarkModeSwitch from "../../components/DarkModeSwitch/DarkModeSwitch.jsx";

const FormularioMultiStep = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [step, setStep] = useState(1);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };


  return (
    <>
    <DarkModeSwitch toggleDarkMode={toggleDarkMode} isDarkMode= {isDarkMode}/>
    
      <Container>
        <Nav>
          {data.map((item) => (
            <Step curstep={item.step} step={step} key={item.step} />
          ))}
        </Nav>
        <main>
          {data.map(item => item.step === step && <Header title={item.title} info={item.info} key={item.step} />)}

          <div className='main-content'>
            {step === 1 && <ClienteForm handleNextStep={handleNextStep} />}
            {step === 2 && (
              <VehiculoForm
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {step === 3 && (
              <ServiciosForm
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {step === 4 && (
              <OrdenTrabajo

                handlePreviousStep={handlePreviousStep}
              />
            )}

            {/* <div className="buttons">
            {(step > 1 && step < 5) && <Button className='btn-secondary' onClick={handlePreviousStep}>Go Back</Button>
            }
            {(step < 4) && <Button className='btn-primary' onClick={handleNextStep}>Next Step</Button>}
            {step === 4 && <Button className='btn-confirm' onClick={handleNextStep}>Confirm</Button>}
          </div> */}
          </div>
        </main>
      </Container>
    </>
  );
};

export default FormularioMultiStep;
