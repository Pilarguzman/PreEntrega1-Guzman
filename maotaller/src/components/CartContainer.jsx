import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartContainer = () => {
    return (
        <div className="p-3 position-relative">
            <CartIcon color=""/>
            <CartItems count= {6} />           
        </div>
    );
};

export default CartContainer;