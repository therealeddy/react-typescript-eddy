import React from 'react';

import { Container } from './styles';

interface RocketProps {
  color?: string;
}

const Rocket: React.FC<RocketProps> = ({ color }) => {
  console.tron.log(color);

  return (
    <Container>
      <span role="img" aria-label="rocket">
        🚀
      </span>
    </Container>
  );
};

export default Rocket;
