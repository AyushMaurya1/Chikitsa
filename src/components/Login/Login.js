
import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Login.css';
// import { useUser } from '../../UserContext'; // Import the context

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const { setUser } = useUser(); // Get the setUser function from context

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });
      alert(response.data.message);
      if (response.data.message === "Login Successful") {
        // setUser({ name: response.data.name, email }); // Assuming name is returned from the server
        navigate("/patient-dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <div>
        <div className="buttonContainer">
          <Button variant="primary" type="submit">Login</Button>
          <Button variant="secondary" type="button" onClick={() => navigate('/register')}>Register</Button>
        </div>

        </div>
      </form>
    </div>
  );
};
