
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary">
      {"Copyright © "}
        Szymon Słowiński <></> 
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'row',
        justifyItems: "center",
        justifyContent: "center"
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          width: "100vw",
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900]
        }}
      >
        <Container sx={{
          display: 'flex',
          justifyItems: 'center',
          justifyContent: 'center'
        }} maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
