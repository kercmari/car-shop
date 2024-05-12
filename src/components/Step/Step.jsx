
import './Step.css';
const Step= ({ curstep, step })=> {
  return <div className='step'>

    <div className={`step-num ${step === curstep ? 'active' : ''}`}>
      {curstep}
    </div>

    <div className="step-info">
      <p>STEP {curstep}</p>
      <h4>{curstep === 1 && 'Datos del Cliente'}</h4>
      <h4>{curstep === 2 && 'Datos del Vehículo'}</h4>
      <h4>{curstep === 3 && 'Selección de Servicios'}</h4>
      <h4>{curstep === 4 && 'Orden de Trabajo'}</h4>
    </div>

  </div >
}
export default Step;