import React from 'react';

import { Container, BoxProperties, Title } from './styles';

function ObjectFiledForm({properties, title, description}) {
  return (
      <Container>
          <Title>{title}</Title>
          <BoxProperties>
            {properties && properties.map(prop => (
            <div
            key={prop.content.key}>
            {prop.content}
            </div>
            ))}
          </BoxProperties>
          {description}
      </Container>
  );
}

export default ObjectFiledForm;