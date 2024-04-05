import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);

    const auth = getAuth(app)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


  const authInfo = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
