import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
  Modal,
  TextField,
  Snackbar,
  Alert,
  Paper,
  Container,
  Grid,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Campaign,
} from "@mui/icons-material";
import axios from "axios";
import contactBg from "../assets/farmers-bg.jpg";
import farmerIcon from "../assets/farmer-icon.png";
import Footer from "../components/Footer";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500 },
  bgcolor: "white",
  backdropFilter: "blur(15px)",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const [adData, setAdData] = useState({ name: "", email: "", phone: "", details: "" });
  const [feedback, setFeedback] = useState({ success: false, error: "" });

  const handleAdSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/advertise", adData);
      setFeedback({ success: true, error: "" });
      setAdData({ name: "", email: "", phone: "", details: "" });
      setOpen(false);
    } catch (err) {
      setFeedback({
        success: false,
        error: err.response?.data?.message || "Submission failed",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 6,
          px: 2,
        }}
      >
        <Container>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(12px)",
              color: "#000",
            }}
          >
            <Grid container spacing={4} justifyContent="center" alignItems="center">

              <Grid item xs={12} style={{width: "100%"}}>
                <Box display="flex" justifyContent="flex-start" mb={1}>
                  <Link to='/' style={{ textDecoration: 'none', fontWeight: 'bold', color: '#00712D' }}>
                    ← Back
                  </Link>
                </Box>

                <Box display="flex" justifyContent="center" mb={3}>
                  <img
                    src={farmerIcon}
                    alt="Farmer"
                    style={{
                      width: "100px", 
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h3" color="green" fontWeight="bold" gutterBottom>
                  🌾 Kisan Satta
                </Typography>
                <Typography variant="body1" mb={3} style={{ color: "white" }}>
                  Stay connected with India's trusted voice for farmers and the environment. We welcome your queries, feedback, and advertisement proposals.
                </Typography>

                <Stack spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Email color="primary" />
                    <Typography style={{ color: "white" }}>kisansatta1@gmail.com</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone color="primary" />
                    <Typography style={{ color: "white" }}>+91 99999 99999</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOn color="primary" />
                    <Typography style={{ color: "white" }}>Lucknow, Uttar Pradesh, India</Typography>
                  </Stack>
                  <Button
                    startIcon={<Campaign />}
                    variant="contained"
                    sx={{
                      mt: 2,
                      bgcolor: "#2e7d32",
                      "&:hover": { bgcolor: "#1b5e20" },
                      width: "fit-content",
                    }}
                    onClick={() => setOpen(true)}
                  >
                    Advertise with Us
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        {/* Advertisement Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={modalStyle}>
            <Typography variant="h5" fontWeight="bold" mb={2} color="green">
              📢 Advertise with Kisan Satta
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Full Name"
                value={adData.name}
                onChange={(e) => setAdData({ ...adData, name: e.target.value })}
                fullWidth
              />
              <TextField
                label="Email Address"
                value={adData.email}
                onChange={(e) => setAdData({ ...adData, email: e.target.value })}
                fullWidth
              />
              <TextField
                label="Phone Number"
                value={adData.phone}
                onChange={(e) => setAdData({ ...adData, phone: e.target.value })}
                fullWidth
              />
              <TextField
                label="Advertisement Details"
                multiline
                rows={3}
                value={adData.details}
                onChange={(e) => setAdData({ ...adData, details: e.target.value })}
                fullWidth
              />
              <Button
                variant="contained"
                onClick={handleAdSubmit}
                sx={{ bgcolor: "#2e7d32", "&:hover": { bgcolor: "#1b5e20" } }}
              >
                Submit Request
              </Button>
            </Stack>
          </Box>
        </Modal>

        {/* Feedback */}
        <Snackbar
          open={feedback.success || feedback.error}
          autoHideDuration={4000}
          onClose={() => setFeedback({ success: false, error: "" })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity={feedback.success ? "success" : "error"} variant="filled">
            {feedback.success ? "Advertisement request submitted!" : feedback.error}
          </Alert>
        </Snackbar>

      </Box>
      <Footer />
    </>
  );
}
