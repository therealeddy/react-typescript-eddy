import React, { ReactNode } from 'react';

import { Container } from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DefaultLayout;
