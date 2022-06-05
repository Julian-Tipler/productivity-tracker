import React, { useContext, useState, useEffect } from "react";
import { createCategory } from "../api/Categories/createCategory";

export const CategoryFormContext = React.createContext({});

export function CategoryFormProvider({ children }: { children: any }) {
  useEffect(() => {}, []);

  const value = {
    createCategory,
  };

  return (
    <CategoryFormContext.Provider value={value}>
      {children}
    </CategoryFormContext.Provider>
  );
}
