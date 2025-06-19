import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  Stack,
  Paper,
  Chip,
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

const Subscription = () => {
  const [users, setUsers] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://api.kisansatta.com/api/subscribers", {
        params: {
          status: statusFilter,
          date: dateFilter,
          type: typeFilter,
        },
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [statusFilter, dateFilter, typeFilter]);

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`https://api.kisansatta.com/api/subscriber/edit/${id}`, { status: newStatus });
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://api.kisansatta.com/api/subscriber/delete/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          📬 Subscription Dashboard
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-between"
          >
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={statusFilter}
                label="Status"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="unpaid">Unpaid</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={typeFilter}
                label="Type"
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="digital">Digital</MenuItem>
                <MenuItem value="print">Print</MenuItem>
                <MenuItem value="both">Both</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Date"
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Stack>
        </Paper>

        <Paper elevation={2} sx={{ overflowX: "auto", borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#f3f4f6" }}>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Price (₹)</TableCell>
                <TableCell>Subscribed Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>{user.type}</TableCell>
                  <TableCell>{user.price}</TableCell>
                  <TableCell>{dayjs(user.subscribedAt).format("DD MMM YYYY")}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      color={user.status === "paid" ? "success" : "warning"}
                      variant="outlined"
                      sx={{ textTransform: "capitalize" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {user.status === "unpaid" && (
                      <Button
                        onClick={() => updateStatus(user._id, "paid")}
                        color="success"
                        size="small"
                        sx={{ mr: 1 }}
                      >
                        Mark Paid
                      </Button>
                    )}
                    <Button
                      onClick={() => deleteUser(user._id)}
                      color="error"
                      size="small"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {users.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No subscriptions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </AdminLayout>
  );
};

export default Subscription;
