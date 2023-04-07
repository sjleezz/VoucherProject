import { createSlice } from '@reduxjs/toolkit';

export interface DataState {
    timeout: number,
    authToken: string,
    authTokenLogin: string,
    mode: string,
    context: string,
}

const initialState: DataState = {
    timeout: 10,
    authToken: '',
    authTokenLogin: '',
    mode: '',
    context: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTimeout : (state, action) => {
        state.timeout = action.payload
    },
    setAuthToken : (state, action) => {
        state.authToken = action.payload
    },
    setAuthTokenLogin : (state, action) => {
        state.authTokenLogin = action.payload
    },
    setMode : (state, action) => {
        state.mode = action.payload
    },
    setContext : (state, action) => {
        state.context = action.payload
    },

  },
});

const { actions, reducer: dataReducer } = dataSlice;

export const { setTimeout, setAuthToken, setAuthTokenLogin, setMode, setContext } = actions;

export default dataReducer;