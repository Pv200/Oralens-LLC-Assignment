import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Dashboard = () => {
  const [formData, setFormData] = useState({ name: "", age: "", file: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("age", formData.age);
    form.append("file", formData.file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      alert("Submission Successful: " + JSON.stringify(data));
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h1>Healthcare Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
          sx={{ marginBottom: "20px" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          style={{ marginBottom: "20px" }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Dashboard;
