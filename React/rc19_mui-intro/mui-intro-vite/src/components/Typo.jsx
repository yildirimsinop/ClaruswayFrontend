// import { Typography } from "@mui/material";
import { Box, Button, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography"; //? Performans acisindan daha mantikli

const Typo = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid tomato",
        }}
      >
        <Typography variant="h3" component="h1" color="lightcoral" mt={4}>
          MUI Typo
        </Typography>
        <Typography variant="subtitle2" color="palegreen">
          MUI Typo
        </Typography>
        <Typography variant="button">Button TEXT</Typography>

        <Typography
          variant="body1"
          sx={{ color: "blue", backgroundColor: "palevioletred", mt: "1rem" }}
          align="center"
        >
          Button TEXT
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={1}
        mt={4}
        justifyContent={"center"}
        alignItems="center"
      >
        <Button variant="outlined" color="primary">
          Click
        </Button>
        <Button variant="contained" color="secondary">
          Click
        </Button>
        <Button variant="contained" color="error">
          Click
        </Button>
        <Button variant="contained" color="success">
          Click
        </Button>
        <Button variant="contained" color="warning">
          Click
        </Button>
        <Button variant="outlined" color="error">
          Click
        </Button>
      </Stack>
    </Container>
  );
};

export default Typo;
