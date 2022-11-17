import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return  <button type="button" class="bg-red-900 rounded-full" disabled>
        <svg class="motion-safe:animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
         
        </svg>
        
      </button>
    }
    if (user) {

        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
};

export default PrivateRoute;