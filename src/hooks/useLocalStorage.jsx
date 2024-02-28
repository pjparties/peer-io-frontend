import { useEffect, useState } from "react";

const PREFIX = "peer-io-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(prefixedKey);
      if (storedValue !== null && storedValue !== "undefined") {
        return JSON.parse(storedValue);
      } else {
        console.log(initialValue, storedValue)
        return initialValue;
      }
    }

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    }
  }, [prefixedKey, value]);

  return [value, setValue];
}
