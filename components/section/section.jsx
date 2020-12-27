import React from 'react';
import styled from 'styled-components';

import { Flex, Heading, Box, Text } from 'rebass/styled-components';

const RoundedBox = styled(Box)`
  border-radius: 10px;
`;

const Image = styled.img`
  display: block;
`;

const Section = ({ title, description, image, background, children, reverse }) => {
  return (
    <Flex my="64px" alignItems="center" flexDirection={reverse ? 'row-reverse' : 'row'}>
      <Box width={1 / 2} px="32px">
        <Heading mb="16px" fontSize={[4]}>
          {title}
        </Heading>
        {description && <Text mb="12px">{description}</Text>}
        {children()}
      </Box>
      <RoundedBox width={1 / 2} bg={background} overflow="hidden">
        <Image src={image} alt={title} />
      </RoundedBox>
    </Flex>
  );
};

export default Section;
