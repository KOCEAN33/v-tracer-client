import { create } from 'zustand';

interface useCreateAccountModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreateAccountModal = create<useCreateAccountModalProps>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }),
);
