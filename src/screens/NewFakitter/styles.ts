import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.primary.background};
`;

export const TextArea = styled.TextInput`
  margin: 100px 10px;
  border-radius: 6px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.primary.border};
  width: 70%;
  padding: 10px;
`;
