import React, { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts()
      .then((data) => setProducts(data))
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "8px",
          width: "300px",
          borderRadius: "5px",
        }}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <Link
              to={`/post/${product.id}`}
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              <strong>{product.title}</strong> - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
