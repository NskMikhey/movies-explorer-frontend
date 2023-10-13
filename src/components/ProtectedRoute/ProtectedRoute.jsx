import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { PATH_TO } from '../../utils/constants';

const ProtectedRoute = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={PATH_TO.MAIN} replace />
  );
};

export default ProtectedRoute;
