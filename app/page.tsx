import { Container, Typography } from "@mui/material";
import Homepage from "./components/Home";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Homepage />
    </Container>
  );
}
