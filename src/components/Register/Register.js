
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './Register.css';


export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  // const { setUser } = useUser(); // Get the setUser function from context

  const onSubmit = async (data) => {
    const { name, email, password, reEnterPassword } = data;

    if (password !== reEnterPassword) {
      return alert("Passwords do not match.");
    }

    try {
      const response = await axios.post("http://localhost:3000/register", { name, email, password });
      alert(response.data.message);
      console.log("Response from server:", response.data);
      // setUser({ name, email }); // Set the user information in context
      navigate('/patient-dashboard');
    } catch (error) {
      console.error("Registration failed:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="registerContainer">
      <h1>Register</h1>
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

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

        <input
          type="password"
          placeholder="Re-enter your password"
          {...register("reEnterPassword", { required: "Please re-enter your password" })}
        />
        {errors.reEnterPassword && <p>{errors.reEnterPassword.message}</p>}

        <div className="buttonContainer">
          <Button variant="primary" type="submit">Register</Button>
          <Button variant="secondary" type="button" onClick={() => navigate('/login')}>Login</Button>
        </div>
      </form>
    </div>
  );
};
