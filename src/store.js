import { configureStore } from '@reduxjs/toolkit' 
import ItemResponse from './Modules/Layout/Home/reducer'
import CardFunctionality from './Modules/Layout/Card/reducer'

export default configureStore({ 
reducer: {
    cardReducer:ItemResponse,
    CardDetailReducer:CardFunctionality,
} //add reducers here 
}) 