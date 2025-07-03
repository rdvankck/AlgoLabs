'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUserProfile, saveUserProfile } from '@/utils/localStorageUtils';

interface UserContextType {
  userName: string | null;
  setUserName: (name: string | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userName, setUserNameState] = useState<string | null>(null);

  useEffect(() => {
    const lastLoggedInUser = localStorage.getItem('algolabs_last_logged_in_user');
    if (lastLoggedInUser) {
      setUserNameState(lastLoggedInUser);
    }
  }, []);

  const setUserName = (name: string | null) => {
    setUserNameState(name);
    if (name) {
      localStorage.setItem('algolabs_last_logged_in_user', name);
      // Ensure profile exists or is created
      saveUserProfile(getUserProfile(name));
    } else {
      localStorage.removeItem('algolabs_last_logged_in_user');
    }
  };

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
