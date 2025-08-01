import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

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

const useUserStore = create<{ user: UserState | null } & UserActions>()(
  persist(
    combine(defaultUserContext, (set) => ({
      setUser: (user) => set((state) => ({ ...state, user })),
      clearUser: () => set(() => defaultUserContext)
    })),
    {
      name: 'user-store',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        }
      }
    }
  )
);

export default useUserStore;
