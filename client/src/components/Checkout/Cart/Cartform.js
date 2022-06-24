export default function Cartform() {
  return (
    <main className="container cartform--container">
      <form className="cartform">
        <div className="cartform--header">
          <span className="cartform--header--text">Total:</span>
          <span className="cartform--header--total">$750.00</span>
        </div>
        {/* additional comment */}
        <div className="cartform--divider"></div>
        <label>
          <span className="cartform--comments">
            <p>Additional Comments</p>
            <span className="cartform--comments--note">
              <p>NOTE</p>
            </span>
          </span>
          <div className="cartform--textarea">
            <textarea name="" id="" cols="40" rows="10"></textarea>
          </div>
        </label>
        {/* voucher */}
        <div className="cartform--divider"></div>
        <label className="cartform--voucher">
          <input
            type="text"
            className="cartform--voucher--input"
            placeholder="voucher"
          />
          <button className="cartform--voucher--button">
            <p>APPLY VOUCHER</p>
          </button>
        </label>
      </form>
    </main>
  );
}
