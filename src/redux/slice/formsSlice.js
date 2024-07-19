// src/store/formsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FORM_API_URL = process.env.REACT_APP_API_URL + '/forms';

export const fetchForms = createAsyncThunk('forms/fetchForms', async () => {
    const response = await axios.get(FORM_API_URL);
    return response.data;
});

export const fetchFormByID = createAsyncThunk('forms/fetchFormByID', async (id) => {
    const response = await axios.get(`${FORM_API_URL}/${id}`);
    return response.data;
});

export const createForm = createAsyncThunk('forms/createForm', async (formData) => {
    const response = await axios.post(FORM_API_URL, formData);
    return response.data;
});

export const submitFormResponse = createAsyncThunk('forms/submitFormResponse', async ({ formId, responseData }) => {
    const response = await axios.post(`${FORM_API_URL}/${formId}/submit`, responseData);
    return response.data;
});

const formsSlice = createSlice({
    name: 'forms',
    initialState: {
        list: [],
        currentForm: {
            title: '',
            description: '',
            questions: [],
            responses: []
        },
        status: 'idle',
        error: null,
        submissionStatus: 'idle',
        submissionError: null,
    },
    reducers: {
        addNewForm: (state) => {
            state.currentForm = {
                title: '',
                description: '',
                questions: [],
                responses: []
            };
            state.currentForm.questions.push({ label: '', type: 'text', options: [] });
        },

        updateFormField: (state, action) => {
            const { field, value } = action.payload;
            state.currentForm[field] = value;
        },
        addQuestion: (state) => {
            state.currentForm.questions.push({ label: '', type: 'text', options: [] });
        },
        updateQuestion: (state, action) => {
            const { index, field, value } = action.payload;
            state.currentForm.questions[index][field] = value;
        },
        copyQuestion: (state, action) => {
            const insertQuestion = state.currentForm.questions[action.payload];
            state.currentForm.questions.push(insertQuestion);
        },
        removeQuestion: (state, action) => {
            state.currentForm.questions.splice(action.payload, 1);
        },
        addOption: (state, action) => {
            const { questionIndex, option } = action.payload;
            state.currentForm.questions[questionIndex].options.push(option);
        },
        updateOption: (state, action) => {
            const { questionIndex, optionIndex, value } = action.payload;
            state.currentForm.questions[questionIndex].options[optionIndex] = value;
        },
        removeOption: (state, action) => {
            const { questionIndex, optionIndex } = action.payload;
            state.currentForm.questions[questionIndex].options.splice(optionIndex, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForms.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchForms.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchForms.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchFormByID.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFormByID.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentForm = action.payload;
            })
            .addCase(fetchFormByID.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createForm.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list.push(action.payload);
                state.currentForm = {
                    title: '',
                    description: '',
                    questions: [],
                    responses: []
                };
            })
            .addCase(createForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(submitFormResponse.pending, (state) => {
                state.submissionStatus = 'loading';
            })
            .addCase(submitFormResponse.fulfilled, (state, action) => {
                state.submissionStatus = 'succeeded';
                state.currentForm.responses.push(action.payload);
            })
            .addCase(submitFormResponse.rejected, (state, action) => {
                state.submissionStatus = 'failed';
                state.submissionError = action.error.message;
            });
    },
});

export const {
    addNewForm,
    updateFormField,
    addQuestion,
    updateQuestion,
    removeQuestion,
    addOption,
    updateOption,
    removeOption,
    copyQuestion
} = formsSlice.actions;

export default formsSlice.reducer;

export const selectAllForms = (state) => state.forms.list;
export const selectCurrentForm = (state) => state.forms.currentForm;
export const selectFormsStatus = (state) => state.forms.status;
export const selectFormsError = (state) => state.forms.error;
export const selectSubmissionStatus = (state) => state.forms.submissionStatus;
export const selectSubmissionError = (state) => state.forms.submissionError;