import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoutIcon from '../../assets/img/logout-icon.svg';

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.primary.background};
`;

export const ListContainer = styled.View`
  margin: 10px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
`;

export const HeaderContent = styled.View`
  margin: 16px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`;

export const HeaderUser = styled.View`
  color: ${({ theme }) => theme.primary.text};
  justify-content: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  color: ${({ theme }) => theme.primary.text};
  justify-content: center;
`;

export const LogoutButtonIcon = styled(LogoutIcon).attrs(({ theme }) => ({
  fill: theme.secondary.text,
}))`
  margin-right: 10px;
`;
