// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface AuthState {
//   user: any;
//   token: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action: PayloadAction<AuthState>) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },

//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  error: string | null;
  user: null | { email: string };
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
};

export const loginUser = createAsyncThunk(
  "/patientUi",
  async (email: string, { rejectWithValue }) => {
    // Dummy API simulation
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (email !== "test@gmail.com") {
      return rejectWithValue("Invalid credentials");
    }

    return { email };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
