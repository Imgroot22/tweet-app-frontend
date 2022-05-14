const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand my-auto" href="/#">
          Tweet App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav w-100 justify-content-evenly">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
          </ul>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
