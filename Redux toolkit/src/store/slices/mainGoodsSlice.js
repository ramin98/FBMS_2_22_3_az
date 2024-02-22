import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const goodsFetch = createAsyncThunk("content/goodsFetch", async () => {
  const res = await fetch("http://localhost:5000/goods");
  const data = await res.json();
  return data;
});

const goodsSlice = createSlice({
  name:'goods',
  initialState:{
    mainGoods: [],
    isLoading: false,
    error: null
  },
  reducers:{

  },
  extraReducers: (builder) => {
    builder.addCase(goodsFetch.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(goodsFetch.fulfilled, (state, action) => {
      state.mainGoods = action.payload
      state.isLoading = false
    })
    builder.addCase(goodsFetch.rejected, (state, action) => {
      state.isLoading = false
      state.error = true
    })
  }
})

export const { } = goodsSlice.actions

export default goodsSlice.reducer

