import React from 'react';
import * as S from './styles';
import profilePic from '@/../public/me.png';
import { PostCard } from '@/common';
import { IPost } from '@/types/post';

interface IHomeLayoutProps {
  posts: IPost[];
  hasMorePosts: boolean;
}

export default function HomeLayout({ posts = [] }: IHomeLayoutProps) {
  return (
    <>
      <S.HomeWrapper>
        <S.MyImage src={profilePic} width={300} height={300} layout="fixed" />
        <S.MyName>Breno Nunes</S.MyName>
        <S.MyBio>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br />
          <br /> It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </S.MyBio>
        <S.SubtitleWrapper />
        <S.PostsWrapper>
          {posts.map(({ sys, title, slug }) => (
            <PostCard
              key={sys.id}
              slug={slug}
              title={title}
              publishedAt={sys.publishedAt}
            />
          ))}
        </S.PostsWrapper>
      </S.HomeWrapper>
    </>
  );
}
