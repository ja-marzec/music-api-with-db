import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

export type Music = {
    title: string,
    author: string,
    genre: string,
    url: string
}

interface CounterState {
  music: Array<Music> | []
  musicToPost: Music 
}

const initialState: CounterState = {
  music: [],
  musicToPost: {
    title: "",
    author: "",
    genre: "",
    url: ""
  }
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMusic: (state, action: PayloadAction<Array<Music>>) => {
      state.music = action.payload;
    },
    setDataToSend: (state, 
      action: {type: string, payload: {key: keyof Music, val: string}}) => {
        state.musicToPost[action.payload.key] = action.payload.val
    }
  },
});

export const { setMusic, setDataToSend } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (music: [Music] ): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(setMusic(music));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMusic = (state: RootState) => state.music

export default counterSlice.reducer;
