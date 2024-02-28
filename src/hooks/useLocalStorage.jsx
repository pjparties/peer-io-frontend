import { useEffect, useState } from "react";

const PREFIX = "peer-io-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = "1234-5678-9012-3456";
    // const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return (jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // useEffect(() => {
  //   localStorage.setItem(prefixedKey, JSON.stringify(value));
  // }, [prefixedKey, value]);
  return [value, setValue];
}
