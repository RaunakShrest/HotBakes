import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  token: '',
  role:'',
  
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
       //console.log(action.payload)
      state.token = action.payload
    },

    setRole:(state,action)=>{
      state.role=action.payload
    },
    logout:(state,action)=>{ //initial state khali pardini
      return{
        ...initialState
      }
    }
    // Special reducer for hydrating the state
  }
});

export const { setToken, setRole,logout } = userSlice.actions;
//export const selectComments = (state) => state.comments.value;
export default userSlice.reducer;