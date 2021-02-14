
export function setStorage<T>(key: string, value: T): void {
    console.log(value);
    const json = JSON.stringify(value);
    const encoded = btoa(json);
    localStorage.setItem(key, encoded);
  }
  
  export function getStorage<T>(key: string): T {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      return newFunction();
    }
    const decoded = atob(storedValue);
    return JSON.parse(decoded) as T;

      function newFunction(): any {
          return null;
      }
  }