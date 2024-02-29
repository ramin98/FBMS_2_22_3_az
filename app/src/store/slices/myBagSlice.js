import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const myBagGoodsFetch = createAsyncThunk("content/myBagGoodsFetch", async () => {
    const res = await fetch("http://localhost:5000/my-bag");
    const data = await res.json();
    return data;
  });

const myBagSlice = createSlice({
  name:'myBagGoods',
  initialState:{
    myBagGoods:[],
    isLoading: false,
    error: null
  },
  reducers:{

  },
  extraReducers: (builder) => {
    builder.addCase(myBagGoodsFetch.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(myBagGoodsFetch.fulfilled, (state, action) => {
      state.myBagGoods = action.payload
      state.isLoading = false
    })
    builder.addCase(myBagGoodsFetch.rejected, (state, action) => {
      state.isLoading = false
      state.error = true
    })
  }
})

export const { } = myBagSlice.actions

export default myBagSlice.reducer

