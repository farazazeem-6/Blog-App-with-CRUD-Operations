import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, backgroundColor: "#fafafa" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            GOSTO Blog - All rights reserved.
          </Typography>
          <Box>
            <IconButton aria-label="Facebook">
              <FacebookIcon sx={{ fontSize: 18, color: "black" }} />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon sx={{ fontSize: 18, color: "black" }} />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon sx={{ fontSize: 18, color: "black" }} />
            </IconButton>
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon sx={{ fontSize: 18, color: "black" }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
