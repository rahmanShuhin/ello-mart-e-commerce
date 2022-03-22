import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header--wrapper">
          <article className="header--wrapper--contact">
            <div>
              📞<span> +88012 3456 7894</span>{" "}
            </div>
            <div>
              📧<span> aldflasfj@gmail.com</span>{" "}
            </div>
          </article>
          <article className="header--wrapper--help">
            <div>Faq</div>
            <div>need help</div>
            <div>lang</div>
            <div>currency</div>
          </article>
        </div>
      </header>

      <nav className="navbar">
        <section className="navbar--wrapper">
          <article>logo</article>
          <article>search</article>
          <article>icon</article>
        </section>
      </nav>
    </>
  );
}
