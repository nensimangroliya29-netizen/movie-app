import { useState } from "react";
import movies from "../data/movies";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";

function Sort() {
  const [sort, setSort] = useState("");
  
  let sortedMovies = [...movies];

  if (sort === "az") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "za") {
    sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sort === "low") {
    sortedMovies.sort((a, b) => a.year - b.year);
  }

  if (sort === "high") {
    sortedMovies.sort((a, b) => b.year - a.year);
  }

  return (
    <Box style={{padding:'20px'}}>
      <Typography variant="h4">
        Sort Movies
      </Typography>

      <FormControl  style={{ width: 250,padding:'12px' }}>
        <InputLabel>Sort By</InputLabel>

        <Select
          value={sort}
          label="Sort By"
          onChange={(e) => setSort(e.target.value)

          }
        >
          <MenuItem value="az">A → Z</MenuItem>
          <MenuItem value="za">Z → A</MenuItem>
          <MenuItem value="low">Year Low → High</MenuItem>
          <MenuItem value="high">Year High → Low</MenuItem>
        </Select>
      </FormControl>

      {sortedMovies.map((movie) => (
        <Box
          key={movie.id}
          style={{
            border: "1px solid #ddd",
            padding:'10px'
          }}
        >
          <Typography variant="h6">
            {movie.title}
          </Typography>

          <Typography>
            Year: {movie.year}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Sort;