import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";


const properties = [
  {
    id: "1",
    img: "/Image.png",
    placeName: "Atlantis, The Palm",
    address: "8502 Preston Dubai",
    bedrooms: 2,
    bathrooms: 2,
    space: 2000,
  },

  {
    id: "2",
    img: "/Image.png",
    placeName: "Atlantis, The Palm",
    address: "Dubai",
    bedrooms: 3,
    bathrooms: 2,
    space: 2300,
  },

  {
    id: "3",
    img: "/Image.png",
    placeName: "Atlantis, The Palm",
    address: "29 23rd Dubai",
    bedrooms: 4,
    bathrooms: 3,
    space: 3000,
  },
];


const Properties = () => {
  return (
    <Box sx={{ mt: 5, py: 10 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}>
              Featured Properties
            </Typography>
            <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
              Everything you need to know when looking for a new home!
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField id="location" label="Location" variant="outlined" />
              <TextField id="budget" label="Budget" variant="outlined" />
              <Button type="submit" variant="contained" color="primary" sx={{
                            "&:hover": {
                                backgroundColor: "gold",
                            },
                        }}>Search</Button>
            </Box>
          </Box>
        </Box>


        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "initial" },
            gap: "4rem",
          }}
        >
          {properties.map((property) => (
            <Box
              key={property.id}
              sx={{
                maxWidth: 350,
                backgroundColor: "#fff",
                margin: { xs: "2rem 0", md: "0 2rem" },
                border: "1px solid gold",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Image src={property.img} alt="housePhoto" style={{ maxWidth: "100%" }} />
              </Box>

              <Box sx={{ padding: "1rem" }}>
                <Typography variant="body2" sx={{ fontWeight: "700", color: "gold" }}>
                  {property.placeName}
                </Typography>
                <Typography variant="body2" sx={{ my: 2 }}>
                  {property.address}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image src="/bedroomsIcon.png" alt="bedroomsIcon" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {property.bedrooms}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image src="/bathroomsIcon.png" alt="bathroomssIcon" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {property.bathrooms}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image src="/spaceIcon.png" alt="spaceIcon" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {property.space}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Properties;
