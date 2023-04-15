import { createSlice } from '@reduxjs/toolkit';
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user_role: "public",
        user_id: "100",
    },
    reducers: {
        loginValue: (state, action) => {
            state.user_role = action.payload.category;
            state.user_id = action.payload.id;
        },
    }

})
export default loginSlice.reducer;
export const { loginValue } = loginSlice.actions;