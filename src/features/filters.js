import { createSlice } from '@reduxjs/toolkit'
import { ModelsFactorie } from '../factories/models.factorie'

const models = new ModelsFactorie()

const initialState = {
  city: null,
  space:null,
  brand:null,
  model:null,
  years:null,
  priceRange:null,
  version:null,
  list:{
    years:models.getYears(),
    priceRange:models.getPricerange(),
    models:models.getModels(),
    brands:models.getBrands(),
    versions:models.getVersions(),
    space:models.getSpace()
  }
}

export const counterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeStringInfo(state,payload) {
      console.log(payload)
      state[payload.payload.type] = payload.payload.value
    },
    setLists(state,payload) {
      state.list[payload.payload.listType] = payload.payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeStringInfo, setLists } = counterSlice.actions

export default counterSlice.reducer