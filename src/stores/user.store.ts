import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export interface UserState {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
}

export interface UserActions {
  setUser: (user: UserState) => void;
  clearUser: () => void;
}

const defaultUserContext: { user: UserState | null } = {
  user: null
};

const useUserStore = create<{ user: UserState | null } & UserActions>(
  combine(defaultUserContext, (set) => ({
    setUser: (user) => set((state) => ({ ...state, user })),
    clearUser: () => set(() => defaultUserContext)
  }))
);

export default useUserStore;
