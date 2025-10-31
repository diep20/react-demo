import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../services/api";

export default function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPost(id)
      .then((data) => setProduct(data))
      .catch(() => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!product) return null;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to List</Link>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", borderRadius: "8px", margin: "10px 0" }}
      />
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>{product.description}</p>
    </div>
  );
}

