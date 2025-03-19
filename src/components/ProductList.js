import React, { useEffect, useState } from "react";
import config from "./config";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchProducts();
  }, [search, minPrice, maxPrice, sortOrder, currentPage]);

  const fetchProducts = () => {
    const url = new URL(config.apiBaseUrl);

    url.searchParams.append("name", search);
    url.searchParams.append("minPrice", minPrice);
    url.searchParams.append("maxPrice", maxPrice);
    url.searchParams.append("sortOrder", sortOrder);
    url.searchParams.append("limit", itemsPerPage);
    url.searchParams.append("offset", (currentPage - 1) * itemsPerPage);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
          setTotalPages(Math.ceil(data.totalProducts / itemsPerPage));
        } else {
          setProducts([]);
          setTotalPages(1);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);
  const handleSortOrderChange = (e) => setSortOrder(e.target.value);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product List</h1>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control"
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={fetchProducts}>
            Apply
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image_url}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-truncate">{product.description}</p>
                  <p className="card-text fw-bold">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;
