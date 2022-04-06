import { useState } from 'react';
import { Box } from './ItemStyles';

const Item = ({ item }) => {
  return (
    <Box>
      <span>{item.Name}</span>
      <span>{item.DateTimeCreated}</span>
      <span>{item.ImgUrl}</span>
    </Box>
  );
};

export default Item;
