import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch, mode, toggleTheme }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <div style={{ flexGrow: 1 }}>
        Movies
      </div>

      <Button
        color="inherit"
        component={Link}
        to="/"
      >
        Home
      </Button>

      <Button
        color="inherit"
        component={Link}
        to="/edit"
      >
        Edit
      </Button>

      <Button
        color="inherit"
        component={Link}
        to="/sort"
      >
        Sort
      </Button>

      <Button
        color="inherit"
        onClick={toggleTheme}
      >
        {mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </Button>

      <TextField
        size="small"
        label="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          backgroundColor: "white",
          borderRadius: 1,
          ml: 2,

          "& input": {
            color: "black",
          },

          "& label": {
            color: "black",
          },
        }}
      />
    </div>
  );
}

export default Navbar;
