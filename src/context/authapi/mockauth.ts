import { createAsyncThunk } from "@reduxjs/toolkit";




const UserLogin = async (credentials: { email: string; password: string }) => {
    return new Promise<{user: {id: number, email: string, password: string}}>((resolve, reject) => {
        setTimeout(() => {
            if (credentials.email === 'example@mail.com' && credentials.password === 'password') {
                resolve(
                    {user: {id: 1, email: 'example@mail.com', password: 'password'}}
                )
            } else
                reject(new Error('Invalid email or password'))
        }, 1000)
    });
};



export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      // Replace with your actual login API call
      const response = await UserLogin(credentials);
      return response.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);