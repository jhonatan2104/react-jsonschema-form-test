import { ADD_INPUT, REMOVE_INPUT, EDIT_INPUT, CREATE_NEW_FORM } from '../constants';

export const createForm = (title, description) => ({
    type: CREATE_NEW_FORM,
    payload: {
        title,
        description,
    },
});

export const createInput = (key, schema, uiSchema) => ({
    type: ADD_INPUT,
    payload: {
        key,
        schema,
        uiSchema,
    },
});

export const removeInput = (key) => ({
    type: REMOVE_INPUT,
    payload: {
        key
    },
});

export const EditInput = (key, schema, uiSchema) => ({
    type: EDIT_INPUT,
    payload: {
        key,
        schema,
        uiSchema
    },
});
