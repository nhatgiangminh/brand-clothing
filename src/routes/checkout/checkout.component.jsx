import { CheckoutContainer, CheckoutTable, TotalText } from './checkout.styles';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import { selectCurrentCartItem } from '../../store/cart/cart.selector';
import { selectTotalCost } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CheckOut = () => {
  const currentCartItem = useSelector(selectCurrentCartItem);
  const totalCost = useSelector(selectTotalCost);

  return (
    <>
      {currentCartItem.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>OOPS you have no item in cart</h1>
      ) : (
        <CheckoutContainer>
          <CheckoutTable>
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
          </CheckoutTable>
          <TotalText>TOTAL: {totalCost}$</TotalText>
        </CheckoutContainer>
      )}
    </>
  );
};
export default CheckOut;
