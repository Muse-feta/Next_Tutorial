import React from 'react'

const layout = ({
  children,
  users,
  analytics,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  analytics: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLogin: boolean = false
  return isLogin ? <div>{children}
  <h1>{users}</h1>
  <h1>{analytics}</h1>
  <h1>{notification}</h1>
  </div> : (
    login
  )
};

export default layout