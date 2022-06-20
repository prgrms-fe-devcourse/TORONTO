import StyledLink from '@/components/atoms/StyledLink';
import Card from '@/components/atoms/Card';
import Header from '@/components/atoms/Header';
import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';
import styled from 'styled-components';
// import { useUsersState } from '@/contexts/UserContext';

const StyledLi = styled.li`
  list-style: none;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostItem = ({ post }) => {
  // const state = useUsersState();
  // const { data: user } = state.user;
  // const userId = user?._id;
  const { _id: postId, image } = post;
  const { postTitle, postContent } = JSON.parse(post.title);

  return (
    <StyledLi>
      <Card
        padding={10}
        hover={true}
        radius={5}
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        <PostContainer>
          <TitleContainer>
            <Header
              level={3}
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {postTitle}
            </Header>
          </TitleContainer>
          <StyledLink to={`/controversy/${postId}`} style={{ color: 'black' }}>
            <ContentContainer>
              <Image
                src={image || 'https://via.placeholder.com/200'}
                width={'100%'}
                height={200}
                mode={'cover'}
              />
              <Text size='normal' style={{ paddingTop: 20 }}>
                {postContent}
              </Text>
            </ContentContainer>
          </StyledLink>
        </PostContainer>
      </Card>
    </StyledLi>
  );
};

export default PostItem;
