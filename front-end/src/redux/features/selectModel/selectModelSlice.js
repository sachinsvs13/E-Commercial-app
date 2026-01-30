import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const initialState = {
    modelItems : []
}

const selectModelSlice = createSlice({
    name:'Model',
    initialState,
    reducers:{
        selectModel : (state, action) => {
            const selectedModel = state.modelItems.find(item => item.name === action.payload.name);
            if (!selectedModel) {
                state.modelItems.push(action.payload)
            }
        }
    }
})

export const {selectModel} = selectModelSlice.actions;
export default selectModelSlice.reducer