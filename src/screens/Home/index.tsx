import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import {
  Container,
  HeaderContainer,
  HeaderContent,
  HeaderUser,
  LogoutButton,
  LogoutButtonIcon,
} from './styles';
import { Fakitter, getFakittersService } from '../../services/fakitters';
import Title from '../../components/Title';
import FakitterComp from '../../components/Fakitter';

export const Home = () => {
  const { user, signOut } = useAuth();
  const [fakitters, setFakitters] = useState<Fakitter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [refreshing, isRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const loadFakitters = async () => {
      if (page === 1) {
        const fakitterData = await getFakittersService({ page, pageSize: 10 });
        setFakitters(fakitterData);
      }
    };

    loadFakitters();
  }, [page]);

  const getMoreFakitters = async () => {
    isRefreshing(true);
    const newPage = page + 1;
    const additionalFakitters = await getFakittersService({
      page: newPage,
      pageSize: 10,
    });
    setFakitters([...fakitters, ...additionalFakitters]);
    setPage(newPage);
    isRefreshing(false);
  };

  const refreshFakitters = async () => {
    isRefreshing(true);
    const fakitterData = await getFakittersService({ page: 1, pageSize: 10 });
    setFakitters(fakitterData);
    setPage(1);
    isRefreshing(false);
  };

  const signOutHandler = async () => {
    signOut();
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => (
          <HeaderContainer>
            <HeaderContent>
              <HeaderUser>
                <Title size="25px" weight="bold">
                  {user.name};
                </Title>
                <Text>@{user.username}</Text>
              </HeaderUser>
              <LogoutButton onPress={signOutHandler}>
                <LogoutButtonIcon />
              </LogoutButton>
            </HeaderContent>
          </HeaderContainer>
        )}
        data={fakitters}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshFakitters}
          />
        }
        onEndReached={getMoreFakitters}
        renderItem={({ item }) => <FakitterComp fakitter={item} />}
      />
    </Container>
  );
};
