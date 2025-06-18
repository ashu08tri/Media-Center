import {
    Box,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
    Modal,
    Stack,
    Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";

export default function Advertisement() {
    const [ads, setAds] = useState([]);
    const [selectedAd, setSelectedAd] = useState(null);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchAds = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/advertise?page=${page}`);
            setAds(res.data.ads);
            setTotalPages(res.data.pages);
        } catch (err) {
            console.error(err);
        }
    };

    const approveAd = async (id) => {
        await axios.patch(`http://localhost:5000/api/advertise/edit/${id}`);
        fetchAds();
    };

    const deleteAd = async (id) => {
        await axios.delete(`http://localhost:5000/api/advertise/delete/${id}`);
        fetchAds();
    };

    useEffect(() => {
        fetchAds();
    }, [page]);

    return (
        <AdminLayout>
            <Box p={4}>
                <Typography variant="h4" gutterBottom>
                    🧾 Advertisement Requests
                </Typography>

                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ads.map((ad) => (
                                <TableRow key={ad._id}>
                                    <TableCell onClick={() => { setSelectedAd(ad); setOpen(true); }} style={{ cursor: "pointer" }}>
                                        {ad.name}
                                    </TableCell>
                                    <TableCell>{ad.email}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }}>{ad.status}</TableCell>
                                    <TableCell align="center">
                                        {ad.status === "requested" && (
                                            <Button color="success" size="small" onClick={() => approveAd(ad._id)}>
                                                Approve
                                            </Button>
                                        )}
                                        <Button color="error" size="small" onClick={() => deleteAd(ad._id)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Box p={2} display="flex" justifyContent="center">
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={(e, val) => setPage(val)}
                            color="primary"
                        />
                    </Box>
                </Paper>

                {/* Modal for viewing full ad details */}
                <Modal open={open} onClose={() => setOpen(false)}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "90%", sm: 500 },
                            bgcolor: "#fff",
                            boxShadow: 24,
                            borderRadius: 2,
                            p: 4,
                        }}
                    >
                        {selectedAd && (
                            <>
                                <Typography variant="h6" mb={2}>
                                    🧾 Advertisement Details
                                </Typography>
                                <Stack spacing={1}>
                                    <Typography><strong>Name:</strong> {selectedAd.name}</Typography>
                                    <Typography><strong>Email:</strong> {selectedAd.email}</Typography>
                                    <Typography><strong>Phone:</strong> {selectedAd.phone}</Typography>
                                    <Typography><strong>Details:</strong> {selectedAd.details}</Typography>
                                    <Typography><strong>Status:</strong> {selectedAd.status}</Typography>
                                </Stack>
                            </>
                        )}
                    </Box>
                </Modal>
            </Box>
        </AdminLayout>
    );
}
