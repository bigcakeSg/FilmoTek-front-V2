export const REMEMBER_ME_KEY = 'rememberMe';

// Save remember me preference in local storage
export const setRememberMePreference = (rememberMe: boolean): void => {
  localStorage.setItem(REMEMBER_ME_KEY, rememberMe.toString());
  sessionStorage.setItem(REMEMBER_ME_KEY, rememberMe.toString());
};

// Retrieve remember me preference from local storage
export const getRememberMePreference = (): {
  local: boolean;
  session: boolean | null;
} => {
  return {
    local: localStorage.getItem(REMEMBER_ME_KEY) === 'true',
    session: JSON.parse(sessionStorage.getItem(REMEMBER_ME_KEY) || 'null')
  };
};

// Clear remember me preference from local storage
export const clearRememberMePreference = (): void => {
  localStorage.removeItem(REMEMBER_ME_KEY);
};

// Get the appropriate storage based on rememberMe preference
export const getDynamicStorage = (): Storage => {
  return getRememberMePreference() ? localStorage : sessionStorage;
};

// Clear all authentication-related data from both storages
export const clearAllAuthData = (): void => {
  const authKeys = ['auth-tokens-development', 'user-store'];

  authKeys.forEach((key) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  });

  clearRememberMePreference();
};
