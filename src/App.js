import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './redux';
import './styles/GlobalStyles.css';
import { device } from './styles/SizeDevice';
import { Form } from './components';

export const ToggleMenu = styled.div`
  height: 100%;
  background: black;
  width: 25%;

  @media ${device.tablet} {
    display: none;
  }
`;

export const View = styled.div`
  height: 100%;
  width: 75%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Nav = styled.div`
  height: 70px;
  width: 100%;
  background: black;

  @media ${device.tablet} {
    display: none;
  }
`;

const store = configureStore();

function App() {
  return (
    <Provider {...{ store }} >
      <div className="App">
        <ToggleMenu />
        <View>
          <Nav/>
          <Form />
        </View>
      </div>
    </Provider>
    
  );
}

export default App;
