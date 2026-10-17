const request = require("supertest");

// Mock admin middleware so this unit test focuses on the product route
jest.mock("../src/middleware/admin", () => {
  return (req, res, next) => {
    next();
  };
});

// Mock Prisma
jest.mock("../src/prismaClient", () => ({
  product: {
    create: jest.fn(),
  },
}));

const app = require("../src/app");
const prisma = require("../src/prismaClient");

describe("Admin Product API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /api/admin/products should create a product", async () => {
    const newProduct = {
      name: "Samsung Galaxy S24",
      brand: "Samsung",
      description: "Latest Samsung smartphone",
      price: 850000,
      origPrice: 950000,
      stock: 10,
      image: "https://example.com/s24.jpg",
      badge: "New",
      rating: 0,
      reviewCount: 0,
      type: "electronics",
      subcat: "smartphones",
    };

    prisma.product.create.mockResolvedValue({
      id: "test-product-id",
      ...newProduct,
    });

    const response = await request(app)
      .post("/api/admin/products")
      .send(newProduct);

    expect(response.statusCode).toBe(201);

    expect(prisma.product.create).toHaveBeenCalledWith({
  data: {
    name: newProduct.name,
    brand: newProduct.brand,
    description: newProduct.description,
    price: newProduct.price,
    origPrice: newProduct.origPrice,
    stock: newProduct.stock,
    image: newProduct.image,
    badge: newProduct.badge,
    rating: newProduct.rating,
    reviewCount: newProduct.reviewCount,
    type: newProduct.type,
    subcat: newProduct.subcat,
    duration: null,
    delivery: null,
    teamSize: null,
    tagline: null,
    specs: undefined,
  },
  include: {
    specs: true,
  },
});
  });
});