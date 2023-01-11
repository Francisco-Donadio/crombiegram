import * as React from "react";

export const ThemeColorContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light",
});

const ThemeColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  return (
    <ThemeColorContext.Provider value={{ ...colorMode, mode }}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColorContext = () => React.useContext(ThemeColorContext);

export default ThemeColorProvider;
