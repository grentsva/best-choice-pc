import axios from 'axios';
import { useEffect, useState } from 'react';
import Preloader from '../Common/Preloader';
import Item from './Item';
import { ItemListWrapper } from './ItemListStyles';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const getItems = () => {
    axios
      .get(`https://best-choice-pc-default-rtdb.firebaseio.com/response.json`)
      .then((result) => {
        setItems(result.data);
        setLoaded(true);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => getItems(), []);

  return (
    <>
      {!isLoaded ? (
        <Preloader />
      ) : (
        <ItemListWrapper>
          {items.map((item) => (
            <Item key={item.Id} item={item} />
          ))}
        </ItemListWrapper>
      )}
    </>
  );
};

export default ItemList;
