import React from 'react';

import { Container, Text } from './styles';

function TitleWidget({ title }) {
  return (
      <Container>
          <Text >{title}</Text>
      </Container>
  );
}

export default TitleWidget;