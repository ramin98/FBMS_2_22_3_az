import { configureStore } from '@reduxjs/toolkit'
import goodsReducer  from './slices/mainGoodsSlice'
import myBagReducer  from './slices/myBagSlice'


const applicationStore = configureStore({
    reducer:{
        goods: goodsReducer,
        myBag: myBagReducer
    }
})

export default applicationStore