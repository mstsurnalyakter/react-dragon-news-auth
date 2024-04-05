
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate } from 'react-router'
import { Spinner } from '@material-tailwind/react'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
       if (loading) {
         return (
           <div className="min-h-screen flex items-center justify-center">
             <Spinner color="red" className="h-16 w-16 text-gray-900/50" />
           </div>
         );
       }
    if (user) {
        return children;
    }
  return <Navigate to={'/login'} />
}

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute