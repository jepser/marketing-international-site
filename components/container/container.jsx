import React from 'react';
import { Box } from 'rebass/styled-components';

const Container = ({ children, ...props }) => {
  return (
    <Box maxWidth="1140px" margin="0 auto" {...props}>
      {children}
    </Box>
  );
};

export default Container;
