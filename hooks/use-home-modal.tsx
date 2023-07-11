import { create } from 'zustand';

interface useHomeModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useHomeModal = create<useHomeModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
