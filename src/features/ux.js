import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabActive: 0,
  news:false,
  used:false,

}

export const uxSlicer = createSlice({
  name: 'ux',
  initialState,
  reducers: {
    toggleTab: (state) => {
      if(state.tabActive === 0) state.tabActive = 1
      else state.tabActive = 0
    },
    changeCars(state,payload) {
      if(payload.payload.type === 'news') {
          state.news = payload.payload.status
         
      }
      else {
        state.used = payload.payload.status
        
      }
    }
   
    
  },
})

// Action creators are generated for each case reducer function
export const { toggleTab, changeCars } = uxSlicer.actions

export default uxSlicer.reducer