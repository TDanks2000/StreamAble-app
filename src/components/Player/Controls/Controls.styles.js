import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: ${({ hideControls }) => (!hideControls ? 1 : 0)};
`;

export const WrapperWithBg = styled(LinearGradient).attrs(() => ({
  colors: ["rgba(0, 0, 0, 0.05)", "rgba(0, 0, 0, 0.45)"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  padding: 25px;
  background: rgba(0, 0, 0, 0.35);
  z-index: 11;
`;

export const WrapperFlex = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const GoBackWrapper = styled(LinearGradient).attrs(() => ({
  colors: ["rgba(0, 0, 0, 0.05)", "rgba(0, 0, 0, 0.45)"],
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0 },
}))`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  z-index: 10;
  width: 100%;
`;

export const FlexBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const GoBackWrapperPressable = styled.Pressable``;

export const EpisodeTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${({ theme }) => theme.text.primary};
  font-size: 11px;
  font-family: ${({ theme }) => theme.text.font.secondary};
  margin-left: 15px;
  margin-top: -10px;
`;

export const EpisodeNumber = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  width: 100%;
  flex: 2;
  color: ${({ theme }) => theme.text.offWhite};
  margin-left: 40px;
  margin-top: -13px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.text.font.primary};
`;

export const ClickToDismiss = styled.Pressable`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
