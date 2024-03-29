import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

// Type for our state
export interface UserState {
    villainName: string;
    currentFunds: number;
}

// Initial state
const initialState: UserState = {
    villainName: '',
    currentFunds: 100_000,
};

// Actual Slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setVillainName(state, action) {
            return { ...state, villainName: action.payload };
        },
        updateCurrentFunds(state, action) {
            return {
                ...state,
                currentFunds: state.currentFunds + action.payload,
            };
        },
    },
});

export const { setVillainName } = userSlice.actions;

export const selectUserState = (state: AppState): UserState => state.user;

export default userSlice.reducer;
