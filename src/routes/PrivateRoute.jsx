import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if (user) {
        return children;
    }
  return <Navigate to={'/login'} />
}

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute