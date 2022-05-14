const Header = () => {
  return (
    <div className="container-fluid bg-dark">
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand my-auto" href="/#">
            Tweet App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav w-100 justify-content-evenly">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  sign up
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
    </div>
  );
};

export default Header;
