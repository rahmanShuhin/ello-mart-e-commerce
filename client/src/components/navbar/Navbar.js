import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="header">
      <div className="header--wrapper">
        <article className="header--wrapper--contact">
          <div>
            i <span>+88012 3456 7894</span>{" "}
          </div>
          <div>
            i <span>aldflasfj@gmail.com</span>{" "}
          </div>
        </article>
        <article className="header--wrapper--help">
          <div>Faq</div>
          <div>need help</div>
          <div>lang</div>
          <div>currency</div>
        </article>
      </div>
    </nav>
  );
}
