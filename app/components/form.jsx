"use client"
import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useForm } from "@formspree/react";

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
    const formFieldStyles = {
        color: "white",
        "& .MuiInputLabel-root": { color: "white" },
        "& .MuiInputLabel-root.Mui-focused": { color: "white" },
        "& .MuiInputBase-input": { color: "white" },
        "& label.Mui-focused": { color: "white" },
        "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "gold" }
        },
        "& .MuiSelect-root": {
            color: "white",
            "&:hover": { color: "white" },
            "&:focus": { color: "white" }
        },
        "& .MuiSelect-icon": {
            color: "white"
        },
        "& .MuiMenu-paper": {
            backgroundColor: "#333"
        }
    };



    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    background: '#002147',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "50px",
                    color: "white",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, gap: "20px", alignItems: "center", width: "100%", maxWidth: "md" }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h2">Get Quick Assistance</Typography>
                        <Typography variant="body1" sx={{ marginTop: "20px" }}>Fill in the form below to get quick assistance with your property needs.</Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ border: "2px solid gold", padding: 3, borderRadius: 1, width: "100%" }}>
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
                                        sx={formFieldStyles}
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
                                        sx={formFieldStyles}
                                    />
                                    <TextField
                                        id="location"
                                        name="location"
                                        label="Location"
                                        variant="outlined"
                                        value={formData.location}
                                        onChange={handleChange}
                                        sx={formFieldStyles}
                                    />
                                    <TextField
                                        id="budget"
                                        name="budget"
                                        label="Budget"
                                        variant="outlined"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        type="number"
                                        sx={formFieldStyles}
                                    />
                                    <FormControl variant="outlined" required sx={{ color: "white", "& label.Mui-focused": { color: "white" }, "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" }, "&.Mui-focused fieldset": { borderColor: "white" } } }}>
                                        <InputLabel id="property-label">Property</InputLabel>
                                        <Select
                                            labelId="property-label"
                                            id="property"
                                            name="property"
                                            label="Property"
                                            value={formData.property}
                                            onChange={handleChange}
                                            sx={formFieldStyles}

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
                </Box>
            </Box>
            <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10 container">
                <div className="flex md:space-x-10 space-x-4">
                    <div className="mt-10 space-y-4 ">
                        <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
                            <h1 className="text-xl font-bold">Good Services</h1>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                harum eius quaerat?
                            </p>
                        </div>
                        <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">

                            <h1 className="text-xl font-bold">Buy Dream Your House</h1>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                harum eius quaerat?
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
                            {/* <MdHomeRepairService size={"1.8rem"} /> */}
                            <h1 className="text-xl font-bold">Sell Your House Easily</h1>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                harum eius quaerat?
                            </p>
                        </div>
                        <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
                            {/* <MdHomeRepairService size={"1.8rem"} /> */}
                            <h1 className="text-xl font-bold">Good Services</h1>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                harum eius quaerat?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 md:w-1/2 space-y-5">
                    <h1 className="text-6xl font-bold">
                        Know <span className="text-yellow-400">About us</span>{" "}
                    </h1>
                    <p className="text-sm text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                        consequuntur iusto voluptas dolorem possimus, atque eum omnis dolores
                        cumque autem saepe molestias sapiente ipsa facere suscipit adipisci,
                        ab quasi repudiandae doloremque doloribus? Delectus, dolorem quaerat.
                    </p>
                    <button className="px-5 py-2 rounded-md bg-yellow-400">
                        Read more
                    </button>
                </div>
            </div>
        </>
    );
};

export default QuickServiceForm;
