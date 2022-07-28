import './checkout.styles.scss';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';
import { useContext } from 'react';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';

const CheckOut = () => {
  const { currentCartItem } = useContext(CartDropDownContext);

  return (
    <div className='checkout-container'>
      <table className='checkout-table'>
        <tr className='row'>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {currentCartItem.map((item) => {
          return <CheckoutItem key={item.id} checkoutItem={item} />;
        })}
      </table>
      <span className='total-text'>
        TOTAL:{' '}
        {currentCartItem.reduce((total, item) => {
          return (total += item.quantity * item.price);
        }, 0)}
        $
      </span>
    </div>
  );
};
export default CheckOut;
