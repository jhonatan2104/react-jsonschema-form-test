import React, { useState, useCallback } from 'react';
import Form from 'react-jsonschema-form';
import { Modal } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createInput } from '../../../../redux/generator-form/actions';
import { generatedSchema } from '../../utils';

const schema = {
  title: 'New Properties',
  description: '',
  type: "object",
  required: [],
  properties: {
    Name: {
      type: "string"
    },
    Tipo: {
      type: "string",
      enum: ["string", "number", "boolean"]
    }
  }
}

function FormModal({ open, handleOpen }) {
  const dispatch = useDispatch();
  const [newProperties, setNewProperties] = useState({});

  const onSubmit = useCallback(() => {
    if (newProperties && newProperties.Name && newProperties.Tipo) {
      dispatch(createInput(newProperties.Name, generatedSchema(newProperties.Tipo), {}));
      handleOpen(false);
    }
  }, [newProperties, dispatch, handleOpen]);

  return (
    <Modal
        open={open}
        onClose={() => handleOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <Form {...{ schema, onSubmit }} formData={newProperties} onChange={(e) => {setNewProperties(e.formData)}}/>
    </Modal>
  );
}

export default FormModal;