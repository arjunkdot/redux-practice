import { Container, Divider } from "@mui/material";
import Form from "./components/Form";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Container maxWidth="md">
      <Form />
      <Divider style={{ margin: "1rem 0" }} />
      <ProductList />
    </Container>
  );
}

export default App;
