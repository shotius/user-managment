import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface ModalsState {
  isInviteModalOpen: boolean;
  isUserSetupModalOpen: boolean;
  isUserDeleteModalOpen: boolean;
}

const initialState: ModalsState = {
  isInviteModalOpen: false,
  isUserDeleteModalOpen: false,
  isUserSetupModalOpen: false,
};

export const counterSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openInviteModal: (state) => {
      state.isInviteModalOpen = true;
    },
    closeInviteModal: (state) => {
      state.isInviteModalOpen = false;
    },
    openUserSetupModal: (state) => {
      state.isUserSetupModalOpen = true;
    },
    closeUserSetupModal: (state) => {
      state.isUserSetupModalOpen = false;
    },
    openUserDeleteModal: (state) => {
      state.isUserDeleteModalOpen = true;
    },
    closeUserDeleteModal: (state) => {
      state.isUserDeleteModalOpen = false;
    },
  },
});

export const {
  openInviteModal,
  closeInviteModal,
  openUserSetupModal,
  closeUserSetupModal,
  openUserDeleteModal,
  closeUserDeleteModal,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectInviteModal = (state: RootState) => state.modals.isInviteModalOpen
export const selectUserSetupModal = (state: RootState) => state.modals.isUserSetupModalOpen
export const selectUserDeleteModal = (state: RootState) => state.modals.isUserDeleteModalOpen

export default counterSlice.reducer;
