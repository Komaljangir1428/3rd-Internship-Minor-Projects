// Components/UserDetails.js
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true });
    }
  }, [data, navigate]);

  if (!data) return null;

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Here are the details</h2>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
