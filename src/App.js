import React from 'react';
import {Provider} from 'react-redux'
import store from './components/redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import OliveContainer from './components/OliveContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <HooksCakeContainer>
          </HooksCakeContainer>
          <CakeContainer />
          <IceCreamContainer />
          <OliveContainer />
      </div>
    </Provider>
  );
}

export default App;
