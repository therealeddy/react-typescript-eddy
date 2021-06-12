import React from 'react';

import { Rocket } from '~/components';
import { useColors } from '~/hooks/theme';
import documentTitle from '~/utils/documentTitle';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  documentTitle('Login');

  const colors = useColors();

  return (
    <Container>
      <Title>
        <Rocket color={colors.primary} /> React TS Eddy <Rocket />
      </Title>
    </Container>
  );
};

export default SignIn;
