import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  isPlaying: false,
  activeRadioStation: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveRadioStation: (state, action) => {
      state.activeRadioStation = action.payload;
      state.isActive = true;
    },
    resetActiveRadioStation: (state, action) => {
      state.activeRadioStation = action.payload;
      state.isActive = false;
      state.isPlaying = false;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveRadioStation, playPause, resetActiveRadioStation } = playerSlice.actions;

export default playerSlice.reducer;
