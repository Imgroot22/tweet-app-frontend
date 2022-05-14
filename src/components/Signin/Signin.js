import classes from "./Signin.module.css";
import logo from "../../assest/logo.svg";
const Signin = () => {
  return (
    <div className={classes["form-container"]}>
      <div className={`text-center ${classes["form-signin"]}`}>
        <form className="needs-validation" noValidate>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Login Id"
            />
            <label htmlFor="floatingInput">Login Id</label>
            <div className="invalid-feedback">Invalid Login Id</div>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
            <div className="invalid-feedback">Invalid Password</div>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3">
            Not a member?{" "}
            <a href="/#" className="link-dark">
              sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
