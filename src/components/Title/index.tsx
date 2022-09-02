import styled from 'styled-components/native';

type TitleProps = {
  size?: number;
  color?: string;
  weight?: 'normal' | 'bold';
  align?: 'left' | 'center' | 'right';
};
export default styled.Text<TitleProps>`
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${({ theme }) => theme.secondary.text};
  text-align: ${props => props.align || 'left'};
`;
