import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, RootState } from "../store";
import { ProductType } from "../types";

export default function ProductTable() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const totalPrice = products
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleDelete = (id: string) => {
    dispatch(removeProduct(id));
  };

  let content;
  if (products.length > 0) {
    content = products.map((product: ProductType) => (
      <TableRow
        key={product.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {product.name}
        </TableCell>
        <TableCell align="right">{product.quantity}</TableCell>
        <TableCell align="right">{product.price.toFixed(2)}</TableCell>
        <TableCell align="right">
          {(product.price * product.quantity).toFixed(2)}
        </TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="delete"
            size="small"
            color="error"
            onClick={() => handleDelete(product.id)}>
            <RemoveCircle />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  } else {
    content = (
      <TableRow>
        <TableCell colSpan={5}>No products found. </TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <caption>
          Total Price
          <Typography variant="h6">${totalPrice}</Typography>
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{content}</TableBody>
      </Table>
    </TableContainer>
  );
}
