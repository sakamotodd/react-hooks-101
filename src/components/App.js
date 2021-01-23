import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import EventForm from './EventForm';
import React, { useReducer } from 'react';
import AppContext from '../contexts/AppContext';
import Events from './Events';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};
export default App;
