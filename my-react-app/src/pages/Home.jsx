import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Home({ search }) {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container style={{padding:"25px"}}>
      <Grid container spacing={3}>
        {filteredMovies.map((movie) => (
          <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      {filteredMovies.length === 0 && (
        <Typography variant="h6">
          No movies found.
        </Typography>
      )}
    </Container>
  );
}

export default Home;