import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducers/reducer';
import { useStateValue } from '../StateProvider';
import '../styles/subtotal.css';
import { useHistory } from 'react-router-dom';
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={(e) => history.push('/payment')}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
