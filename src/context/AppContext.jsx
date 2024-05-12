import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  cliente: {},
  vehiculo: {},
  serviciosSeleccionados: [],
  fechaEntrega:'',
  diasLaborables: 10,
  isValid: false,
};

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLIENTE':
      return { ...state, cliente: action.payload };
    case 'SET_VEHICULO':
      return { ...state, vehiculo: action.payload };
    case 'SET_SERVICIOS':
      return { ...state, serviciosSeleccionados: action.payload };
    case 'SET_FECHA_ENTREGA':
      return { ...state, fechaEntrega: action.payload };
    case 'SET_VALIDATION': // Nuevo caso para actualizar el estado de validación
      return { ...state, isValid: action.payload };
    default:
      return state;
  }
};



export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
