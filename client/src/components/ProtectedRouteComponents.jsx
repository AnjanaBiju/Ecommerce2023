import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import UserChatComponent from './UserChatComponent';

const ProtectedRouteComponents = ({admin}) => {
  // let auth = false;
  if(admin){
    let adminAuth = true;
    return adminAuth ? <Outlet/> :<Navigate to="/login"/>
  }else{
    let userAuth = true;
    return userAuth ? <><UserChatComponent/><Outlet/></>:<Navigate to="/login"/>
  }
  
}

export default ProtectedRouteComponents
