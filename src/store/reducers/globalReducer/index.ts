import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../../shared/types/userType';
import { GlobalModalType } from '../../../shared/components/modal/globalModal/GlobalModal';

interface GlobalStore {
  modal: GlobalModalType;
}

const initialState: GlobalStore = {
  modal: {
    visible: false,
    text: '',
    title: '',
  },
};

export const GlobalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setModalAction: (state, action: PayloadAction<GlobalModalType>) => {
      state.modal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModalAction } = GlobalSlice.actions;

export default GlobalSlice.reducer;
