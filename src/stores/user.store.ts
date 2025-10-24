import { create } from 'zustand';
import { combine, createJSONStorage, persist } from 'zustand/middleware';
import { User } from '@interfaces/user.interfaces';

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
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useUserStore;
