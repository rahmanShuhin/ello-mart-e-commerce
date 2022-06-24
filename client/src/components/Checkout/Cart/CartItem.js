export default function CartItem() {
  return (
    <>
      <div className="cartitem--container cartitem">
        <div className="cartitem--image">
          <img src="https://via.placeholder.com/150" alt="product" />
        </div>
        <div className="cartitem--component">
          <div className="cartitem--component--info">
            <h4>Product Name</h4>
            <div className="cartitem--component--info--delete">
              <button className="cartitem--btn cartitem--btn--delete">X</button>
            </div>
          </div>
          <div className="cartitem--component--action">
            <div className="cartitem--price">
              <span className="cartitem--price--details">$250x1</span>
              <span className="cartitem--price--total">$250</span>
            </div>
            <div className="cartitem--component--action--quantity">
              <button className="cartitem--btn cartitem--btn--subtract">
                <p>-</p>
              </button>
              <p>1</p>
              <button className="cartitem--btn cartitem--btn--add">
                <p>+</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
