import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__about-me">
        <img
          src="https://spoonacular.com/recipeImages/73420-312x231.jpg"
          className="footer__image"
          alt="Author's image"
        />
        <div className="footer__texts">
          <div className="footer__title">About Me</div>
          <div className="footer__text">
            Hello, I am Tony Jin, a full-stack software developer skilled in
            ReactJS, JavaScript, HTML, CSS, NodeJS, ExpressJS, MongoDB, and
            Google Cloud Platform.
          </div>
        </div>
      </div>
      <div className="footer__credits">
        <div className="footer__text-grey">
          © 2023 Tony Jin, Powered by Spoonacular API
        </div>
        <div className="footer__buttons">
          <button className="footer__button">Home</button>
          <button className="footer__button">Portfolio</button>
          <button className="footer__button footer__button-github" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
