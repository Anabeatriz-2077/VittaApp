import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  /*
  Busca favoritos salvos
  */
  const [favorites, setFavorites] = useState(() => {

    const saved =
      localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];

  });

  function addFavorite(item) {

    const updated = [...favorites, item];

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}