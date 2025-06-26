// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../../Services/AuthService";
// import "./Register.css";

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await registerUser(formData);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register</h2>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password (min 6 characters)"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         {error && <p className="error-text">{error}</p>}
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account?{" "}
//         <span className="link" onClick={() => navigate("/login")}>
//           Login
//         </span>
//       </p>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/AuthService";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    try {
      await registerUser(formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Minimum 6 characters"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">Select Role</label>
        <select id="role" name="role" value={formData.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="submit-btn">Register</button>

        <p className="switch-auth">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
