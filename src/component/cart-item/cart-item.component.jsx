import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='cart-info'>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
