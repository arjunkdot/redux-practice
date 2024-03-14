import { Typography } from "@mui/material";
import ProductItem from "./ProductTable";

function ProductList() {
  return (
    <div style={{ padding: "8px" }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <ProductItem />
    </div>
  );
}

export default ProductList;
