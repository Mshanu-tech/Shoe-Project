import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    let user = { name, password };

    console.log("sdwer", user);
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then((res) => {
      console.log("suss");
      navigate('/login');
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handlesubmit}>
        <div className="card">

          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    value={name}
                    onChange={e => namechange(e.target.value)}
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    value={password}
                    onChange={e => passwordchange(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <Link to={'/login'} className="btn btn-danger ml-2">
              Close
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
