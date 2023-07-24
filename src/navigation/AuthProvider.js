import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);

    return (
      <AuthContext.Provider
        value = {{
          user,
          setUser,
          login: async(email, password) => {
              await auth().signInWithEmailAndPassword(email, password);
              const currentUser = auth().currentUser;
              setUser(currentUser);
              console.log(user)
          },
          register: async(email, password) => {
            await auth().createUserWithEmailAndPassword(email, password);
            const currentUser = auth().currentUser;
            setUser(currentUser);
            console.log(currentUser);
            console.log(user)
          },
          logout: async () => {
             await auth().signOut();
             setUser(null);
           }
          }
        }>
        {children}
      </AuthContext.Provider>
    );
}