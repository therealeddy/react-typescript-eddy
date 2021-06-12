import React, { ReactNode } from 'react';

import { Container } from './styles';

interface AuthProps {
  children: ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Auth;
