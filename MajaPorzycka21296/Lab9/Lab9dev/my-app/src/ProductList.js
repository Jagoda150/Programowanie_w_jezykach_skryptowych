import React, { useCallback, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"]);

  const removeProduct = useCallback((item) => {
    setProducts((prev) => prev.filter((p) => p !== item));
  }, []);

  return (
    <div>
      <h3>Ćwiczenie 4 – Lista produktów</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}{" "}
            <button onClick={() => removeProduct(product)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
