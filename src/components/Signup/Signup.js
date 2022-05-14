import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={`container ${classes["form-container"]}`}>
      <div className="m-auto">
        <h1 className="ms-3">Sign Up</h1>
        <form
          className={`row g-3 needs-validation ${classes["form-signin"]}`}
          noValidate
        >
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustomEmail" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <input
                type="email"
                className="form-control"
                id="validationCustomEmail"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please enter valid email.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label
              htmlFor="validationCustomContactNumber"
              className="form-label"
            >
              Contact Number
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="validationCustomContactNumber"
                aria-describedby="inputGroupPrepend"
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustomLoginId" className="form-label">
              LoginId
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomLoginId"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a loginId.</div>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustomPassword" className="form-label">
              Password
            </label>
            <div className="input-group has-validation">
              <input
                type="password"
                className="form-control"
                id="validationCustomPassword"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a loginId.</div>
            </div>
          </div>
          <div className="col-md-4">
            <label
              htmlFor="validationCustomConfirmPassword"
              className="form-label"
            >
              Confirm Password
            </label>
            <div className="input-group has-validation">
              <input
                type="password"
                className="form-control"
                id="validationCustomConfirmPassword"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a loginId.</div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-dark w-100" type="submit">
              Submit form
            </button>
          </div>
          <div className="col-12 d-flex">
            <p className="mt-5 mb-3 mx-auto">
              already a member?{" "}
              <a href="/#" className="link-dark">
                sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
