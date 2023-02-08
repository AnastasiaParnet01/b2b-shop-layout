const STORAGE_TOKEN = 'token';

export const localStorageService = (() => {
  function privateGetToken() {
    return localStorage.getItem(STORAGE_TOKEN);
  }
  function privateSetToken(token: string) {
    localStorage.setItem(STORAGE_TOKEN, token);
  }
  function privateClearStorage() {
    localStorage.clear();
  }

  return {
    getToken: privateGetToken,
    setToken: privateSetToken,
    clearStorage: privateClearStorage,
  };
})();
