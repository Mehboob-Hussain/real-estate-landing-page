"use client"
import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

const QuickServiceForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        budget: "",
        property: "",
    });

    const [state, handleSubmit] = useForm("xleqplkn"); // Replace "xleqplkn" with your Formspree form ID

    useEffect(() => {
        if (state.succeeded) {
            alert("Form submitted successfully");
            setFormData({
                name: "",
                phone: "",
                location: "",
                budget: "",
                property: "",
            });
        }
    }, [state.succeeded]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isFormValid = () => {
        return formData.name.trim() !== "" && /^\d+$/.test(formData.phone) && /^\d+$/.test(formData.budget);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            handleSubmit(e);
        } else {
            alert("Please fill in all required fields correctly.");
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "md", margin: "auto" }}>
            <Typography variant="h2" sx={{ color: "black", marginBottom: 3 }}>Get Quick Assistance</Typography>
            <Box sx={{ border: "2px solid gold", padding: 3, borderRadius: 1, width: "60%" }}>
                <form onSubmit={handleSubmitForm}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            id="phone"
                            name="phone"
                            label="Phone No."
                            variant="outlined"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            type="tel"
                        />
                        <TextField
                            id="location"
                            name="location"
                            label="Location"
                            variant="outlined"
                            value={formData.location}
                            onChange={handleChange}
                        />
                        <TextField
                            id="budget"
                            name="budget"
                            label="Budget"
                            variant="outlined"
                            value={formData.budget}
                            onChange={handleChange}
                            type="number"
                        />
                        <FormControl variant="outlined" required>
                            <InputLabel id="property-label">Property</InputLabel>
                            <Select
                                labelId="property-label"
                                id="property"
                                name="property"
                                label="Property"
                                value={formData.property}
                                onChange={handleChange}
                            >
                                <MenuItem value="house">House</MenuItem>
                                <MenuItem value="apartment">Apartment</MenuItem>
                                <MenuItem value="condo">Office</MenuItem>
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" sx={{
                            "&:hover": {
                                backgroundColor: "gold",
                            },
                        }}>Submit</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default QuickServiceForm;
