import { create } from 'zustand';

interface useSearchBox {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSearchBox = create<useSearchBox>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
