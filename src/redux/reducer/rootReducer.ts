// import { combineReducers } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   main: 
// });

// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;


import { combineReducers } from '@reduxjs/toolkit'

// Import your reducer functions here
import mainSlice from '../slice/mainSlice';


const rootReducer = combineReducers({
  // Add your reducer functions to the root reducer here
  main: mainSlice
})

export default rootReducer