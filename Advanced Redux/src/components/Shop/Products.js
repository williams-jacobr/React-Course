import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 5,
    description: "The next book I wrote",
  },
];

const Products = (props) => {
  const products = DUMMY_PRODUCTS.map((item) => (
    <ProductItem
      title={item.title}
      price={item.price}
      description={item.description}
      key={item.id}
      id={item.id}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
