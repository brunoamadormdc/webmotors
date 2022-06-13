import { createSlice } from '@reduxjs/toolkit'
import { ModelsFactorie } from '../factories/models.factorie'

const models = new ModelsFactorie()

const initialState = {
  city: null,
  space:null,
  brands:{
    name:'',
    id:null
  },
  models:{
    name:'',
    id:null,
  },
  years:null,
  priceRange:null,
  versions:{
    id:null,
    name:'',
  },
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
    changeStringApiInfo(state,payload) {
      console.log(payload)
      state[payload.payload.type].name = payload.payload.name
      state[payload.payload.type].id = payload.payload.id
    },
    setLists(state,payload) {
      
      state.list[payload.payload.type] = payload.payload.value
    },
    clearFilters(state) {
      state.city = null
      state.space = null
      state.brands = {
        name:'',
        id:null
      }
      state.models = {
        name:'',
        id:null,
      }
      state.years = null
      state.priceRange = null
      state.versions = {
        id:null,
        name:'',
      }
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { changeStringInfo, changeStringApiInfo, setLists, clearFilters } = counterSlice.actions

export default counterSlice.reducer