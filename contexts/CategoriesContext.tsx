import React, { useContext, useState, useEffect } from "react";
import { getCategories } from "../api/Categories/getCategories";

export const CategoriesContext = React.createContext({});

export function CategoriesProvider({ children }: { children: any }) {
  const [categories,setCategories] = useState([])

  const value = {
    categories,
    setCategories,
    getCategories,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
