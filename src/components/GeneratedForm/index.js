import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import FormModal from './components/FormModal';

import ObjectFiledForm from './components/ObjectFiledForm';
import FieldForm from './components/FieldForm';

import { Container, Main, Menu, ActionAdd, ReactForma } from './styles';

function GeneratedForm() {
  const { schema, formData } = useSelector(store => store.GeneratorForm);

  const [open, handleOpen] = useState(false);

  return (
        <Container>
          <FormModal {...{ open, handleOpen}}/>
          <Main>
          {
            schema.properties ? (
                <ReactForma  ObjectFieldTemplate={ObjectFiledForm} FieldTemplate={FieldForm} {...{ schema, formData }}>
                  <div />
                </ReactForma>
              ) : (
                  <h1>Schema em branco</h1>
              )
          }
            <Menu>
              <button onClick={() => handleOpen(true)}>
                <ActionAdd />
              </button>
            </Menu>
          </Main>
        </Container>
  );
}

export default GeneratedForm;