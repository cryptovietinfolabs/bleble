import { create } from 'zustand';

type ILoadStore = {
  load: number;
  loaded: boolean;
  registerLoad: () => void;
  unRegisterLoad: () => void;
};

const useLoadManageStore = create<ILoadStore>()((set) => ({
  load: 0,
  loaded: false,
  registerLoad: (): void =>
    set((state) => {
      const newLoad = state.load + 1;
      return { load: newLoad };
    }),
  unRegisterLoad: (): void =>
    set((state) => {
      const newLoad = state.load - 1;
      return { load: newLoad, loaded: newLoad <= 0 };
    }),
}));

export default useLoadManageStore;
