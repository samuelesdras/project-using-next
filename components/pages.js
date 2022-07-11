import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../context';
import { Pagination } from 'react-bootstrap';

const Pages = () => {
  const [number, setNumber] = useState(1);
  const [minusOnePage, setMinusOnePage] = useState(false);
  const [plusOnePage, setPlusOnePage] = useState(false);

  const context = useContext(MyContext);

  context.setNumber(number);

  useEffect(() => {
    context.number <= 1 ? setMinusOnePage(true) : setMinusOnePage(false);
  }, [context.number]);

  return (
    <Pagination>
      <Pagination.Prev
        disabled={minusOnePage}
        onClick={() => setNumber(number - 1)}
      />
      <Pagination.Item active>{context.number}</Pagination.Item>
      <Pagination.Next
        disabled={plusOnePage}
        onClick={() => setNumber(number + 1)}
      />
    </Pagination>
  );
};

export default Pages;
