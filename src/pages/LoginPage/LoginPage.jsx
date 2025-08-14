import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">Sign in to access your dashboard</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <div className="login-footer">
          <a href="/forgot-password" className="login-link">
            Forgot password?
          </a>
          <span>
            New here?{" "}
            <Link to="/signup" className="login-link">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
