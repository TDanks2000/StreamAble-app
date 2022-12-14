import { View, Text, Linking } from "react-native";
import React from "react";
import { useGetViewerQuery } from "../../utils/graphql/generated";
import {
  Bold,
  Bottom,
  Container,
  GeneralText,
  Image,
  LeftText,
  RightText,
  Texts,
  Top,
  UserName,
} from "./User.styles";
import { useAccessToken } from "../../contexts";

const User = () => {
  const { accessToken, setAccessToken } = useAccessToken();
  const {
    loading: loadingProfile,
    data: profileData,
    refetch,
  } = useGetViewerQuery({
    notifyOnNetworkStatusChange: false,
    skip: !accessToken,
  });

  if (loadingProfile) return null;
  if (!accessToken) return null;

  const Viewer = profileData?.Viewer || {};
  const avatar = Viewer.avatar || {};
  const name = Viewer.name || {};
  const statistics = Viewer.statistics || {};

  const anime = statistics?.anime || {};
  const manga = statistics?.manga || {};

  //convert minutes to days hours and minutes
  const convertMinutes = (minutes) => {
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const mins = Math.floor((minutes % 1440) % 60);

    if (days === 0 && hours === 0 && mins === 0) return "0";
    if (days === 0 && hours === 0) return `${mins}m`;
    if (days === 0) return `${hours}h ${mins}m`;

    return `${days < 10 ? `0${days}` : days}d ${
      hours < 10 ? `0${hours}` : hours
    }h ${mins < 10 ? `0${mins}` : mins}m`;
  };

  const spentWatchingAnime = convertMinutes(anime.minutesWatched);

  const openProfile = () => {
    Linking.openURL(`https://anilist.co/user/${name}`);
  };

  return (
    <Container>
      <Top onPress={openProfile}>
        <Image source={{ uri: avatar?.large }} />
        <UserName numberOfLines={1}>{name}</UserName>
      </Top>
      <Bottom>
        <Texts>
          <LeftText>
            Anime: <Bold>{anime?.count || 0}</Bold>
          </LeftText>
          <RightText>
            <Bold> {spentWatchingAnime}</Bold>
          </RightText>
        </Texts>
        <Texts style={{ marginTop: 8 }}>
          <LeftText>
            Manga: <Bold>{manga?.count || 0}</Bold>
          </LeftText>
        </Texts>
      </Bottom>
    </Container>
  );
};

export default User;
