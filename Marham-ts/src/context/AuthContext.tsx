import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  FacebookAuthProvider, // Import FacebookAuthProvider
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext<any>(null); // Provide 'null' as the default value

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, facebookSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
