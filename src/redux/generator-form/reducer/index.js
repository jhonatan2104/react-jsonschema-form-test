import { ADD_INPUT, EDIT_INPUT, CREATE_NEW_FORM } from '../constants';

const INIT_STORE = {
    schema: {
        title: 'Step Template',
        description: '',
        type: "object",
        required: [],
        properties: {
            nome: {
                type: 'string',
                title: "name"
            }
        },
    },
    uiSchema: {},
    formData: null,
}

export default function(state = INIT_STORE, { type, payload }) {
    let key = null;
    let allSchemas = null;
    let allUiSchemas = null;

    switch(type) {
        case ADD_INPUT:
            key = payload.key;

            allSchemas = state.schema;
            allUiSchemas = state.uiSchema;

            allSchemas.properties[`${key}`] = payload.schema;

            console.log(allSchemas.properties);
            // allUiSchemas[key] = payload.uiSchema;

            return {
                ...state,
                schema: {
                    ...state.schema,
                    properties: allSchemas.properties,
                },
                uiSchema: allUiSchemas,
                formData: state.formData ? null : true,
            };
        case CREATE_NEW_FORM:
            const { title, description } = payload;

            return {
                ...state,
                schema: {
                    ...state.schema,
                    title,
                    description
                }
            }
        case EDIT_INPUT:
            key = payload.key;

            allSchemas = state.schema;
            allUiSchemas = state.uiSchema;

            allSchemas.properties[key] = payload.schema;
            allUiSchemas[key] = payload.uiSchema;

            return {
                ...state,
                schema: {
                    ...state.schema,
                    properties: allSchemas.properties,
                },
                uiSchema: allUiSchemas,
            };
        default:
            return state;       
    }
}
