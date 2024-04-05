import { createContext } from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "alex",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
