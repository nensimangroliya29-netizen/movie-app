import { useState } from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Home({ search }) {
  const [sort, setSort] = useState("");

  let filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "az") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "za") {
    filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
        px: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h4">
          Movies
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
          }}
        >
          <Button
            variant={sort === "az" ? "contained" : "outlined"}
            onClick={() => setSort("az")}
            sx={{
              px: 2.5,
              py: 1,
              borderRadius: 3,
              fontWeight: "bold",
              color: "#243554",
              borderColor: "#243554",
              backgroundColor: sort === "az" ? "palegoldenrod" : "transparent",
              "&:hover": {
                backgroundColor: "palegoldenrod",
                borderColor: "#243554",
                color: "#243554",
              },
            }}
          >
            A → Z
          </Button>

          <Button
            variant={sort === "za" ? "contained" : "outlined"}
            onClick={() => setSort("za")}
            sx={{
              px: 2.5,
              py: 1,
              borderRadius: 3,
              fontWeight: "bold",
              color: "#243554",
              borderColor: "#243554",
              backgroundColor: sort === "za" ? "palegoldenrod" : "transparent",
              "&:hover": {
                backgroundColor: "palegoldenrod",
                borderColor: "#243554",
                color: "#243554",
              },
            }}
          >
            Z → A
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {filteredMovies.map((movie) => (
          <Grid
            key={movie.id}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      {filteredMovies.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            py: 5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "palegoldenrod",
            }}
          >
            😔 No movies found
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default Home;

