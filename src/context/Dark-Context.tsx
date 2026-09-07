import { createContext, useContext, useState, type ReactNode } from "react";


interface DarkContextType {
  isDark: boolean;
  toggleDark: () => void;
}

const DarkContext = createContext<DarkContextType | undefined>(
  undefined,
);

export function DarkProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(false);

  function toggleDark() {
    setIsDark((prev) => !prev);
  }

  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
}

// custom hook untuk mencegah error
export function useDark() {
  const context = useContext(DarkContext);
  if (!context)
    throw new Error("useDark harus digunakan di dalam Provider");
  return context;
}