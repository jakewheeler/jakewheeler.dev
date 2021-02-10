import { Box } from '@chakra-ui/react';

type Props = {
  content: string;
};

function PostBody({ content }: Props) {
  return <Box dangerouslySetInnerHTML={{ __html: content }} />;
}

export default PostBody;
