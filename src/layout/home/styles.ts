import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 940px;
  margin: 0 auto;
  padding: 70px 0;
  height: 100%;
  gap: 25px;
`;

export const MyImage = styled(Image)`
  border-radius: 50%;
`;

export const MyName = styled.h1`
  color: #73262a;
  font-weight: bold;
  font-size: 43px;
  font-family: 'Spartan', sans-serif;
`;

export const MyBio = styled.p`
  color: #73262a;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Arimo', sans-serif;
`;

export const PostsWrapper = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 39px 76px;
  width: 100%;
`;

export const SeePostsLink = styled(Link)`
  font-family: Arimo;
  font-style: italic;
  font-size: 24px;
  text-decoration-line: underline;
  color: #73262a;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
`;
