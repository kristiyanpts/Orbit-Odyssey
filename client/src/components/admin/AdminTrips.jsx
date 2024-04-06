import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Table } from "flowbite-react";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
import { useState } from "react";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
];

function createData(name, description, price) {
  return { name, description, price };
}

const trips = [
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
  {
    name: "Space Shit",
    description:
      "Very cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thingVery cool thing",
    price: 1000.99,
  },
];

const rows = trips.map((item) =>
  createData(item.name, item.description, item.price)
);

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 500,
  },
});

const AdminTrips = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="relative w-full h-full flex p-10 box-border flex-col gap-4">
      <div className="relative w-full flex justify-between">
        <div className="text-3xl font-bold">Trips</div>
        <div className="relative w-fit flex gap-1">
          <button className="relative w-fit p-2 px-5 box-border bg-header text-white rounded flex gap-3 items-center hover:bg-green-500 transition-all">
            <span>Create New</span>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default AdminTrips;
