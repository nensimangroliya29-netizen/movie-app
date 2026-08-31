import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

function MovieCard({ movie }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="350"
          image={movie.image}
          alt={movie.title}
        />

        <CardContent>
          <Typography>{movie.title}</Typography>

          <Typography>
            Year: {movie.year}
          </Typography>

          <Typography>
            Genre: {movie.genre}
          </Typography>

          <Button
            onClick={() => setOpen(true)}
            style={{
              marginTop: "10px",
              backgroundColor: "#1976D2",
              color: "white",
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
          style={{
            width: "500px",
            margin: "50px auto",
            padding: "20px",
          }}
        >
          <Typography>
            {movie.title}
          </Typography>

          <CardMedia
            component="img"
            image={movie.image}
            style={{
              width: "200px",
              height: "280px",
              objectFit: "cover",
              border: "2px solid #243554",
              borderRadius: "8px",
            }}
          />

          <Typography>
            Description: {movie.description}
          </Typography>

          <Typography>
            Duration: {movie.duration}
          </Typography>

          <Typography>
            Release Date: {movie.releaseDate}
          </Typography>

          <Typography>
            Cast: {movie.cast}
          </Typography>

          <Typography>
            Director: {movie.director}
          </Typography>

          <Typography>
            Producer: {movie.producer}
          </Typography>

          <Button
            href={movie.trailer}
            target="_blank"
            style={{
              marginTop: "10px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            Trailer
          </Button>

          <Button
            onClick={() => setOpen(false)}
            style={{
              marginTop: "10px",
              marginLeft: "10px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Close
          </Button>
        </Card>
      </Modal>
    </>
  );
}

export default MovieCard;