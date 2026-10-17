import { useState } from "react";
import { addProduct } from "../api";

export default function AddProduct({ C, F, onSuccess, onCancel }) {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    origPrice: "",
    stock: "",
    image: "",
    badge: "",
    rating: "",
    reviewCount: "",
    type: "electronics",
    subcat: "",
    duration: "",
    delivery: "",
    teamSize: "",
    tagline: "",
    specs: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !product.name ||
      !product.brand ||
      !product.description ||
      !product.price ||
      !product.origPrice ||
      !product.stock ||
      !product.image
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: product.name,
        brand: product.brand,
        description: product.description,

        price: Number(product.price),
        origPrice: Number(product.origPrice),
        stock: Number(product.stock),

        image: product.image,

        badge: product.badge || null,

        rating: Number(product.rating || 0),
        reviewCount: Number(product.reviewCount || 0),

        type: product.type || "electronics",
        subcat: product.subcat || null,

        duration: product.duration || null,
        delivery: product.delivery || null,
        teamSize: product.teamSize || null,
        tagline: product.tagline || null,

        specs: product.specs
          ? product.specs
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean)
          : [],
      };

      const result = await addProduct(payload);

      console.log("PRODUCT CREATED:", result);

      alert("Product added successfully!");
if (onSuccess) {
  onSuccess(result.product || result);
}
    } catch (err) {
      console.error("ADD PRODUCT ERROR:", err);
      setError(err.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
        padding: 24,
        background: C?.surface || "#fff",
        border: `1px solid ${C?.border || "#ddd"}`,
        borderRadius: 16,
      }}
    >
      <h2
        style={{
          marginBottom: 24,
          color: C?.text || "#111",
          fontFamily: F?.display,
        }}
      >
        ➕ Add Product
      </h2>

      {error && (
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            background: "#ffe5e5",
            color: "#c00",
            borderRadius: 8,
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <input
          name="name"
          placeholder="Product Name *"
          value={product.name}
          onChange={handleChange}
        />

        {/* Brand */}
        <input
          name="brand"
          placeholder="Brand *"
          value={product.brand}
          onChange={handleChange}
        />

        {/* Price */}
        <input
          name="price"
          type="number"
          placeholder="Price *"
          value={product.price}
          onChange={handleChange}
        />

        {/* Original Price */}
        <input
          name="origPrice"
          type="number"
          placeholder="Original Price *"
          value={product.origPrice}
          onChange={handleChange}
        />

        {/* Stock */}
        <input
          name="stock"
          type="number"
          placeholder="Stock *"
          value={product.stock}
          onChange={handleChange}
        />

        {/* Image */}
        <input
          name="image"
          placeholder="Image URL *"
          value={product.image}
          onChange={handleChange}
        />

        {/* Badge */}
        <input
          name="badge"
          placeholder="Badge e.g. NEW, SALE"
          value={product.badge}
          onChange={handleChange}
        />

        {/* Type */}
        <select
          name="type"
          value={product.type}
          onChange={handleChange}
        >
          <option value="electronics">Electronics</option>
          <option value="service">Service</option>
        </select>

        {/* Subcategory */}
        <input
          name="subcat"
          placeholder="Subcategory"
          value={product.subcat}
          onChange={handleChange}
        />

        {/* Tagline */}
        <input
          name="tagline"
          placeholder="Tagline"
          value={product.tagline}
          onChange={handleChange}
        />

        {/* Duration */}
        <input
          name="duration"
          placeholder="Duration"
          value={product.duration}
          onChange={handleChange}
        />

        {/* Delivery */}
        <input
          name="delivery"
          placeholder="Delivery"
          value={product.delivery}
          onChange={handleChange}
        />

        {/* Team Size */}
        <input
          name="teamSize"
          placeholder="Team Size"
          value={product.teamSize}
          onChange={handleChange}
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description *"
          value={product.description}
          onChange={handleChange}
          rows={5}
        />

        {/* Specs */}
        <textarea
          name="specs"
          placeholder={"Specifications - one per line\n8GB RAM\n256GB Storage\n5G"}
          value={product.specs}
          onChange={handleChange}
          rows={5}
        />

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 20,
          }}
        >
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 20px",
              background: C?.accent || "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {loading ? "Saving..." : "Save Product"}
          </button>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: "10px 20px",
                background: "transparent",
                border: "1px solid #999",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}