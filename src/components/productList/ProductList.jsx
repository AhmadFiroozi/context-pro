import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../productItem/ProductItem";
import { useState } from "react";
import ProductsList from "../../db";
function ProductList() {
  const [products, setProducts] = useState(ProductsList);

  return (
    <Container className="py-4">
      <Row className="gy-4">
        {products.map((item) => {
          return (
            <Col key={item.id} sm={6} md={4} lg={3}>
              <ProductItem {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default ProductList;
