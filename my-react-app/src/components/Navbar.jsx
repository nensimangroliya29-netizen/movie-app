
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar({ search, setSearch, mode, toggleTheme }) {
  return (
    <Box className="navbar">
      <Typography className="navbar-logo">
        🎬 MoviesApp
      </Typography>

      <TextField
        size="small"
        label="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="navbar-search"
      />

      <Button
        component={Link}
        to="/"
        className="navbar-button"
      >
        Home
      </Button>

      <Button
        component={Link}
        to="/edit"
        className="navbar-button"
      >
        Edit
      </Button>

      <Button
        onClick={toggleTheme}
        className="navbar-button theme-button"
      >
        {mode === "light" ? "🌙" : "☀️"}
      </Button>
    </Box>
  );
}

export default Navbar;

