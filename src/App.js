import React from 'react';
import {Provider} from 'react-redux'
import store from './components/redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import OliveContainer from './components/OliveContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UsersContainer from './components/UsersContainer';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          {/* <ItemContainer cake> </ItemContainer>
          <ItemContainer />
          <HooksCakeContainer>
          </HooksCakeContainer>
          <CakeContainer />
          <IceCreamContainer />
          <OliveContainer />
          <NewCakeContainer /> */}
          <UsersContainer />
          <PostContainer />
      </div>
    </Provider>
  );
}

export default App;
