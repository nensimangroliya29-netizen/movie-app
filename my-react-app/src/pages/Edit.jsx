import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import movies from "../data/movies";

function Edit() {
  const [rows, setRows] = useState(movies);

  const editMovie = (id) => {
    const title = prompt("Enter new title");

    if (title) {
      setRows(
        rows.map((movie) =>
          movie.id === id
            ? { ...movie, title: title }
            : movie
        )
      );
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "title",
      headerName: "Movie Title",
      width: 200,
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => editMovie(params.row.id)}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <h2>Edit Movies</h2>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

export default Edit;