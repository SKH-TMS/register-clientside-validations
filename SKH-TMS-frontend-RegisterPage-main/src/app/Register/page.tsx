"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // validation to check empty fields
    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }
  
    // validate email pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // validate password length
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
  
    // check password and confirm password
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    
    alert('Validation passed! Now you can proceed with registration.');
    
  };

  return (
    <div className="screenMiddleDiv">
      <div className="formDiv">
      <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-center">Create Account</h2>

          <div>
            <label htmlFor="name" className="formLabel">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="email" className="formLabel">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="password" className="formLabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="confirmPassword" className="formLabel">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="formButton">
            Register
          </button>

          <div className="text-center mt-4">
            Already have an account?
            <a href="#">
              <button className="buttonTiny">Login</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
