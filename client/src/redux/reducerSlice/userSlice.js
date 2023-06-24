import { createSlice } from '@reduxjs/toolkit';
//redux -> user: u
const initialState = {
  token: '',
  role: '',
  id: '',
  phoneNumber:'',
  fullName:'',
  productName:''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const {token , role ,id, phoneNumber,fullName,productName } = action.payload
      return {
        ...state,
        token, id, role, phoneNumber,fullName,productName
      }
    },
    logout:  (state, action) => {
        return {
          ...initialState
        }
     },
  },
});




export const { setUserDetails ,logout} = userSlice.actions;
export default userSlice.reducer;