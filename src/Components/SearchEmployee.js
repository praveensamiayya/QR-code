import React, { useState } from "react";
import axios from "axios";

const SearchEmployee = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!name) {
      alert("Please enter a name");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:5000/search/${name}`);

      if (res.data.length === 0) {
        setError("No record found ❌");
        setData(null);
      } else {
        setData(res.data[0]);
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("Server error ❌");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          minWidth: "350px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Search Employee</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "12px 15px",
            width: "80%",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "12px 25px",
            marginLeft: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Search
        </button>

        {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}

        {data && (
          <table
            border="1"
            cellPadding="10"
            style={{
              marginTop: "25px",
              width: "100%",
              borderCollapse: "collapse",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <thead style={{ backgroundColor: "#4CAF50", color: "#fff" }}>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>{data.position}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SearchEmployee;
