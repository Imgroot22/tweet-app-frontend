import { useAuth } from "../../../store/auth-context";
import NavLink from "./NavLink/NavLink";
import SearchForm from "./SearchForm/SearchForm";

const Header = () => {
  const auth = useAuth();

  return (
    <div className="container-fluid bg-dark flex-grow-0 flex-shrink-1">
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="navbar"
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand my-auto"
            to={auth.isLoggedIn ? "/home" : "/welcome"}
          >
            Tweet App
          </NavLink>
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
              {auth.isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClass="active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
              )}
              {auth.isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClass="active"
                    to={"/tweets/" + auth.user.loginId}
                  >
                    My Tweets
                  </NavLink>
                </li>
              )}
              {!auth.isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClass="active"
                    to="/login"
                  >
                    sign in
                  </NavLink>
                </li>
              )}
              {!auth.isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClass="active"
                    to="/register"
                  >
                    sign up
                  </NavLink>
                </li>
              )}
              {auth.isLoggedIn && (
                <li className="nav-item">
                  <div
                    className="nav-link"
                    onClick={auth.logout}
                    style={{ cursor: "pointer" }}
                  >
                    logout
                  </div>
                </li>
              )}
            </ul>
            {auth.isLoggedIn && <SearchForm />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
