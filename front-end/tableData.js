import { width } from "@mui/system";
import { useMemo } from "react";

export const columns = useMemo(() => [
  {
    fire: "name",
    headerName: "Name",
    width: 170,
  },
  {
    field: "id",
    headerName: "User ID",
    width: 170,
  },
  {
    field: "department",
    headerName: "Department",
    width: 170,
  },
  {
    field: "alert",
    headerName: "Alert",
    width: 170,
  },
  {
    field: "status",
    headerName: "Status",
    width: 170,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 170,
    renderCell: (params) => (
      <button onClick={() => handleEditRow(params.row)}>Edit</button>
    ),
  },
], [rowId]
);
