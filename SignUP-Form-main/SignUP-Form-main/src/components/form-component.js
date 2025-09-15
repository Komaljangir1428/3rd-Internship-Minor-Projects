import React from "react";
import { useNavigate } from "react-router-dom";

export class SignupForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    phoneCode: "+91",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
    errors: {},
    submitted: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (this.state.submitted) this.validateField(name);
    });
  };

  toggleShowPassword = () => {
    this.setState((prev) => ({ showPassword: !prev.showPassword }));
  };

  validateField = (field) => {
    const val = this.state[field];
    let errors = { ...this.state.errors };

    switch (field) {
      case "firstName":
      case "lastName":
      case "username":
      case "country":
      case "city":
        errors[field] = val.trim() ? "" : "This field is required";
        break;
      case "email":
        errors.email = val.includes("@") ? "" : "Invalid email";
        break;
      case "password":
        errors.password = val.length >= 8 ? "" : "Password must be 8+ chars";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          val === this.state.password ? "" : "Passwords do not match";
        break;
      case "phoneNumber":
        errors.phoneNumber =
          val.match(/^\d{7,15}$/) ? "" : "Invalid phone number";
        break;
      case "pan":
        errors.pan = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(val.toUpperCase())
          ? ""
          : "Invalid PAN format";
        break;
      case "aadhar":
        errors.aadhar = /^\d{12}$/.test(val) ? "" : "Aadhar must be 12 digits";
        break;
      default:
        break;
    }

    this.setState({ errors });
  };

  isFormValid = () => {
    const fields = [
      "firstName",
      "lastName",
      "username",
      "email",
      "password",
      "confirmPassword",
      "phoneNumber",
      "country",
      "city",
      "pan",
      "aadhar",
    ];

    this.setState({ submitted: true });

    for (let f of fields) {
      this.validateField(f);
      if (!this.state[f] || this.state.errors[f]) return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      const {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        phoneCode,
        phoneNumber,
        country,
        city,
        pan,
        aadhar,
      } = this.state;

      const formData = {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        phone: `${phoneCode} ${phoneNumber}`,
        country,
        city,
        pan,
        aadhar,
      };

      this.props.navigate("/details", { state: formData });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      showPassword,
      phoneCode,
      phoneNumber,
      country,
      city,
      pan,
      aadhar,
      errors,
    } = this.state;

    const commonInputStyle = {
      height: "40px",
      padding: "0 12px",
      fontSize: "1rem",
      border: "1.5px solid #ddd",
      borderRadius: "6px",
      boxSizing: "border-box",
      marginBottom: "12px",
      width: "100%",
    };

    return (
      <div className="main" style={{ maxWidth: 400, margin: "0 auto" }}>
        <h3>SignUp Form</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange}
            onBlur={() => this.validateField("firstName")}
            style={commonInputStyle}
          />
          {errors.firstName && <small>{errors.firstName}</small>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChange}
            onBlur={() => this.validateField("lastName")}
            style={commonInputStyle}
          />
          {errors.lastName && <small>{errors.lastName}</small>}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
            onBlur={() => this.validateField("username")}
            style={commonInputStyle}
          />
          {errors.username && <small>{errors.username}</small>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            onBlur={() => this.validateField("email")}
            style={commonInputStyle}
          />
          {errors.email && <small>{errors.email}</small>}

          <div style={{ position: "relative", marginBottom: "12px" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              onBlur={(e) => {
                this.validateField("password");
              }}
              style={{
                ...commonInputStyle,
                paddingRight: "70px",
              }}
            />
            <button
              type="button"
              onClick={this.toggleShowPassword}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#007BFF",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}

          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            onBlur={() => this.validateField("confirmPassword")}
            style={commonInputStyle}
          />
          {errors.confirmPassword && <small>{errors.confirmPassword}</small>}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <select
              name="phoneCode"
              value={phoneCode}
              onChange={this.handleChange}
              style={{
                height: "40px",
                fontSize: "1rem",
                border: "1.5px solid #ddd",
                borderRadius: "6px",
                padding: "0 8px",
                boxSizing: "border-box",
                appearance: "none", // Prevent browser differences
              }}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={this.handleChange}
              onBlur={() => this.validateField("phoneNumber")}
              style={{
                height: "40px",
                fontSize: "1rem",
                border: "1.5px solid #ddd",
                borderRadius: "6px",
                padding: "0 12px",
                flex: 1,
                boxSizing: "border-box",
              }}
            />
          </div>
          
         <select
            name="country"
            value={country}
            onChange={this.handleChange}
            onBlur={() => this.validateField("country")}
            style={commonInputStyle}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <small>{errors.country}</small>}

          <select
            name="city"
            value={city}
            onChange={this.handleChange}
            onBlur={() => this.validateField("city")}
            style={commonInputStyle}
          >
            <option value="">Select City</option>
            {country === "India" && (
              <>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
              </>
            )}
            {country === "USA" && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
              </>
            )}
            {country === "UK" && (
              <>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
              </>
            )}
          </select>
          {errors.city && <small>{errors.city}</small>}

          <input
            type="text"
            name="pan"
            placeholder="PAN No."
            value={pan}
            onChange={this.handleChange}
            onBlur={() => this.validateField("pan")}
            maxLength={10}
            style={{ ...commonInputStyle, textTransform: "uppercase" }}
          />
          {errors.pan && <small>{errors.pan}</small>}

          <input
            type="text"
            name="aadhar"
            placeholder="Aadhar No."
            value={aadhar}
            onChange={this.handleChange}
            onBlur={() => this.validateField("aadhar")}
            maxLength={12}
            style={commonInputStyle}
          />
          {errors.aadhar && <small>{errors.aadhar}</small>}

          <button
            type="submit"
            disabled={
              Object.values(errors).some((e) => e) ||
              !firstName ||
              !lastName ||
              !username ||
              !email ||
              !password ||
              !confirmPassword ||
              !phoneNumber ||
              !country ||
              !city ||
              !pan ||
              !aadhar
            }
            style={{
              marginTop: 10,
              padding: "10px 16px",
              width: "100%",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// Wrapper to inject navigate into class component
export default function FormComponent(props) {
  const navigate = useNavigate();
  return <SignupForm {...props} navigate={navigate} />;
}
