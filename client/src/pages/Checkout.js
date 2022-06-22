import CartItem from "../components/Checkout/Cart/CartItem";
export default function Checkout() {
  return (
    <main className="container">
      <section className="checkout">
        <div className="checkout--content">home</div>
        <div className="checkout--arm"></div>
        <div className="checkout--content">details</div>
        <div className="checkout--arm"></div>
        <div className="checkout--content">payment</div>
        <div className="checkout--arm"></div>
        <div className="checkout--content">review</div>
      </section>
      <section>
        <CartItem />
      </section>
    </main>
  );
}
