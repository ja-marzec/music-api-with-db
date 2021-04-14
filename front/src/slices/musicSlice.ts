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
      action: {type: string, payload: {keyName: keyof Music, val: string}}) => {
        state.musicToPost[action.payload.keyName] = action.payload.val
    },
    resetDataToSend: (state) => {
      //  @ts-ignore
      let setAll = (obj:Music, val: string) => Object.keys(obj).forEach((k : keyof Music ) => obj[k] = val);
      let setNull = (obj:Music ) => setAll(obj, "");
      setNull(state.musicToPost);
    },
    addMusic: (state, action: PayloadAction<Music>) => {
      const newState = [...state.music, ...[action.payload]];
      console.log(newState);
      state.music = newState;
    },
    deleteItemFromDisplay: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      
        const newState = [...state.music]
        const filtedState = newState.filter((item : any) =>  (item._id !== action.payload))

        console.log(filtedState)
        state.music = filtedState;

    } 
  },
});

export const { setMusic, setDataToSend, addMusic, resetDataToSend, deleteItemFromDisplay
 } = counterSlice.actions;


export const incrementAsync = (music: [Music] ): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(setMusic(music));
  }, 1000);
};


export const selectMusic = (state: RootState) => state.music

export default counterSlice.reducer;
