import { Add } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";

function Form() {
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>(0);

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !quantity || quantity < 0) return;
    console.log("Submit");
    dispatch(
      addProduct({
        id: Math.floor(Math.random() * 1000).toString(),
        name: name,
        quantity: quantity,
        price: price,
      })
    );
    // Reset the form
    setName("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="product-name"
        size="small"
        label="Product Name"
        variant="outlined"
        style={{ margin: "8px" }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          size="small"
          type="number"
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          value={price}
          inputProps={{
            min: 0,
            step: "0.01",
          }}
          onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
        />
      </FormControl>
      <TextField
        id="product-quantity"
        size="small"
        label="Quantiy"
        type="number"
        variant="outlined"
        style={{ margin: "8px" }}
        value={quantity}
        inputProps={{
          min: "1",
        }}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
      />
      <Button
        variant="contained"
        type="submit"
        size="medium"
        style={{ margin: "8px", minHeight: "40px" }}
        startIcon={<Add />}>
        Add Product
      </Button>
    </form>
  );
}

export default Form;
