import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInWithPopup, } from "firebase/auth";
import { auth, provaiderFacebook, provider } from "../../firebase";
import { IUser } from "../../models/IUser";

interface UserState {
    user: IUser
}

const initialState: UserState = {
    user: {
        displayName: null,
        photoURL: null,
        uid: null
    }
}

export const signInWithGoole = createAsyncThunk(
    'users/signInWithGoole',
    async () => {
        await signInWithPopup(auth, provider)
    }
)

export const signInWithFacebook = createAsyncThunk(
    'users/signInWithFacebook',
    async () => {
        await signInWithPopup(auth, provaiderFacebook)
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        logoutUser(state) {
            state.user.displayName = null
            state.user.photoURL = null
            state.user.uid = null
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;