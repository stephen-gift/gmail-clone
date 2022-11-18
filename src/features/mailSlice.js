import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageisOpen: false,
};

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const mailSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    sendMessageisOpen: (state) => {
      state.sendMessageisOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageisOpen = false;
    },
  },
});

export const { sendMessageisOpen, closeSendMessage } = mailSlice.actions;

export const selectmail = (state) => state.mail.sendMessageisOpen;

export default mailSlice.reducer;
