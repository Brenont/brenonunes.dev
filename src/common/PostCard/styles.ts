import styled from 'styled-components';

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 24px;
  background: #ffffff;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
`;

export const PostCardImage = styled.img`
  height: 194px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;

export const PostCardTitle = styled.h2`
  font-family: 'Arimo', sans-serif;
  font-size: 28px;
  line-height: 32px;
  color: #73262a;
  padding: 0 15px;
`;

export const PostCardDate = styled.p`
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #979797;
  padding: 0 15px;
`;
