import * as S from './styles';

export interface IPostCard {
  slug: string;
  title: string;
  image?: string;
  publishedAt: string;
}

export default function PostCard({
  slug,
  title,
  image = 'https://miro.medium.com/max/14720/1*O0Hdjnu6jioFNut3Bix-NQ.jpeg',
  publishedAt,
}: IPostCard) {
  return (
    <S.PostCardContainer>
      <S.PostCardImage src={image} alt={title} />
      <S.PostCardTitle>{title}</S.PostCardTitle>
      <S.PostCardDate>{publishedAt}</S.PostCardDate>
    </S.PostCardContainer>
  );
}
