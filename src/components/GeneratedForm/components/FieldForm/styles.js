import styled from 'styled-components';
import { Close } from '../../../../styles/Icons';

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const BoxButton = styled.div`
    align-items: center;
    justify-content: space-between;
`;

export const IconClose = styled(Close)`
  width: 24px;
  height: 24px;

  fill: var(--primary);
`;