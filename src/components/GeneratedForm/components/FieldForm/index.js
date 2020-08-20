import React from 'react';
import TitleWidget from '../TitleWidget';
import { Container, Title, BoxButton, IconClose} from './styles';

function FieldForm({
    id, 
    classNames, 
    label, 
    help, 
    required, 
    description, 
    errors, 
    children
}) {
  
  return (
    <Container className={classNames}>
        {id !== 'root' && (
          <Title>
            <TitleWidget title={label} />
            <BoxButton>
              <button onClick={() => console.log("Test")}>
                <IconClose />
              </button>
            </BoxButton>
          </Title>
        )}
        {description}
        {children}
        {errors}
        {help}
    </Container>
  );
}

export default FieldForm;