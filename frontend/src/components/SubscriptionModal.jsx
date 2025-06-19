import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Stack,
} from "@mui/material";
import { Mail, Agriculture } from "@mui/icons-material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#f4f7f5",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function SubscriptionModal({ open, handleClose }) {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("digital");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ success: false, error: "" });

  const handleSubmit = async () => {
    if (!email || !type) return;

    setLoading(true);
    try {
      await axios.post("https://api.kisansatta.com/api/subscribe", { email, type });
      setFeedback({ success: true, error: "" });
      setEmail("");
      setType("digital");
    } catch (err) {
      setFeedback({
        success: false,
        error: err.response?.data?.message || "Something went wrong",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack spacing={2}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{ color: "#2e7d32", display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}
            >
              <Agriculture fontSize="large" />
              Kisan Satta
            </Typography>

            <Typography variant="body1" textAlign="center" sx={{ color: "#4e4e4e" }}>
              🌱 Join our farmer-first magazine focused on agriculture, nature & environment. Choose your subscription to stay informed!
            </Typography>

            <FormControl fullWidth>
              <InputLabel>Subscription Type</InputLabel>
              <Select
                value={type}
                label="Subscription Type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="digital">💻 Digital - ₹299</MenuItem>
                <MenuItem value="print">📬 Print - ₹499</MenuItem>
                <MenuItem value="both">🌐 Both - ₹699</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: <Mail sx={{ mr: 1 }} />,
              }}
            />

            <Button
              variant="contained"
              size="large"
              fullWidth
              disabled={loading}
              onClick={handleSubmit}
              sx={{
                bgcolor: "#388e3c",
                "&:hover": { bgcolor: "#2e7d32" },
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Subscribe Now"}
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Snackbar
        open={feedback.success || feedback.error}
        autoHideDuration={3000}
        onClose={() => setFeedback({ success: false, error: "" })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={feedback.success ? "success" : "error"} variant="filled">
          {feedback.success ? "🎉 Subscription successful!" : feedback.error}
        </Alert>
      </Snackbar>
    </>
  );
}
