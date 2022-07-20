import React, { ReactNode } from 'react';

import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
      <style global jsx>{`
        .wrapper {
          background-color: red;
          border: 1px solid blue;
        }
      `}</style>
    </div>
  );
};

export default Layout;
