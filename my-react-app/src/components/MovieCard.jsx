import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function MovieCard({ movie }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: 560,
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={movie.image}
          alt={movie.title}
          sx={{
            height: 300,
            objectFit: "contain",
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {movie.title}
          </Typography>

          <Typography fontWeight="bold">
            • {movie.year}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            {movie.description}
          </Typography>

          <Button
            onClick={() => setOpen(true)}
            sx={{
              mt: "auto",
              backgroundColor: "palegoldenrod",
              color: "#243554",
              fontWeight: "bold",
            }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Card
          sx={{
            width: 550,
            maxWidth: "90%",
            maxHeight: "90vh",
            overflowY: "auto",
            margin: "40px auto",
            padding: 3,
            borderRadius: 2,
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            {movie.title}
          </Typography>

          <CardMedia
            component="img"
            image={movie.image}
            alt={movie.title}
            sx={{
              width: 220,
              height: 300,
              objectFit: "cover",
              margin: "0 auto 25px",
              borderRadius: 2,
            }}
          />

          <Typography sx={{ mb: 2 }}>
            <strong>Description:</strong> {movie.description}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Duration:</strong> {movie.duration}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Release Date:</strong> {movie.releaseDate}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Cast:</strong> {movie.cast}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            <strong>Director:</strong> {movie.director}
          </Typography>

          <Typography sx={{ mb: 3 }}>
            <strong>Producer:</strong> {movie.producer}
          </Typography>

          <Button
            variant="contained"
            color="error"
            href={movie.trailer}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Trailer
          </Button>
        </Card>
      </Modal>
    </>
  );
}

export default MovieCard;

