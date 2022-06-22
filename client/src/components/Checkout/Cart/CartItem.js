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
              <button>delete</button>
            </div>
          </div>
          <div className="cartitem--component--action">
            <p>250x2</p>
            <div className="cartitem--component--action--quantity">
              <button>@#@#</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
