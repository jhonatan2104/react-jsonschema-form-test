import styled from 'styled-components';
import { AddBox } from '../../styles/Icons';
import Form from 'react-jsonschema-form';

export const Container = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: center;
   background: var(--primary);
`;

export const ReactForma = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;

  align-items: center;
  justify-content: center;

  

  input {
    background: var(--white);
    border-radius: 5px;
    height: 30px;
    width: 100%;
  }
`;

export const Main = styled.div`
  height: 100%;
  position: relative;

  display: flex;

  justify-content: center;
  align-items: flex-start;

  width: min(70%, 415px);

  background: var(--base-freme);
`;

export const Menu = styled.div`
  width: 70%;
  height: 40px;

  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;


  background: var(--white);
  align-self: center;
  bottom: 0;
`;

export const ActionAdd = styled(AddBox)`
  width: 24px;
  height: 24px;

  fill: var(--primary);
`;

