import { create } from 'zustand';
// https://github.com/pmndrs/zustand

// TS Definition to define the shape of the store
type AppStore = {
  bearCount: number;
  incrementBears: () => void;
  decrementBears: () => void;
  clearBears: () => void;
};

// The Store implementation
const useAppStore = create<AppStore>()((set) => ({
  bearCount: 2,
  incrementBears: () => set((state) => ({ bearCount: state.bearCount + 1 })),
  decrementBears: () => set((state) => ({ bearCount: Math.max(0, state.bearCount - 1) })),
  clearBears: () => set(() => ({ bearCount: 0 })),
}));

export default useAppStore;
