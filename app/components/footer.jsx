import { Box, Container, Typography } from "@mui/material";
import React from "react";


const Footer = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container sx={{ display: "flex", justifyContent: "space-around", gap: 5, flexDirection: { xs: "column", sm: "row" }, textAlign: { xs: "center" } }}>
        <Box>
          <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: "700", mb: 2 }}>
            Products
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Listing
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Properties
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Agents
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Blog
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: "700", mb: 2 }}>
            Resources
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Our Homes
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Stories
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Video
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Free Trial
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: "700", mb: 2 }}>
            Company
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Partnerships
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Terms of use
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Privacy
          </Typography>
          <br />
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "300", cursor: "pointer", "&:hover": { color: "#FFD700" } }}>
            Sitemap
          </Typography>
        </Box>

       
      </Container>
    </Box>
  );
};

export default Footer;
