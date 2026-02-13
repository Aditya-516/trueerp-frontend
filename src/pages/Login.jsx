import "./Login.css";
import bgImage from "../assets/images.jpeg";
import logo from "../assets/logo.png"; // optional if you add logo

export default function Login() {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-card">
        <img src={logo} alt="TrueERP Logo" className="logo" />

        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <button className="login-btn">SIGN IN</button>
      </div>
    </div>
  );
}
