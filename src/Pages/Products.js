import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>
        <h1>The Product Page</h1>
      </h1>
      <ul>
        <li>
          <Link to="/product/P1">A book</Link>
        </li>
        <li>
          <Link to="/product/P2">A Carpet</Link>
        </li>
        <li>
          <Link to="/product/P3">Online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
