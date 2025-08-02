import { User } from '@/interfaces/user.interfaces';
import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

export interface UserActions {
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

const defaultUserContext: { user: User | null } = {
  user: null
};

const useUserStore = create<{ user: User | null } & UserActions>()(
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
