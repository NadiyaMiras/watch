import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countReducer';
import loginReducer from './loginReducer'
const store = configureStore({
    reducer: {
        count: countReducer,
        loginValue: loginReducer,
    }
})
export default store;
