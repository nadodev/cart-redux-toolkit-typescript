import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface  Languages {
    name: string,
    favorite: boolean
}


const INITAL_STATE: Languages[] = [
  {
    name: "Português",
    favorite: true,
  },
  {
    name: "Inglês",
    favorite: false,
  },
  {
    name: "Espanhol",
    favorite: false,
  },
  {
    name: "Francês",
    favorite: true,
  },
];


const sliceLanguage = createSlice({
  name: "language",
  initialState: INITAL_STATE,
  reducers: {
    addLanguage(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, favorite: false }];
    },
    toggleFavorite(state, { payload }: PayloadAction<number>) {
      state[payload].favorite = !state[payload].favorite;
    },
  },
});


export default sliceLanguage.reducer;

export const  { addLanguage } = sliceLanguage.actions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLanguages = ( state: any )=> {
    return state.languages as Languages[];
}