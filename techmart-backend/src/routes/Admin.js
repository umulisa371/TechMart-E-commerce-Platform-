const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient");
const admin = require("../middleware/admin");

// Temporary admin
const ADMIN = {
  email: "admin@techmart.com",
  password: "123456",
};

// =========================
// ADMIN LOGIN
// =========================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== ADMIN.email || password !== ADMIN.password) {
      return res.json({
        success: false,
        message: "Invalid admin credentials",
      });
    }

    const token = jwt.sign(
      {
        email,
        isAdmin: true,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.json({
      success: true,
      token,
    });
  } catch (err) {
    console.error("Admin login error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// =========================
// STATS
// =========================

router.get("/stats", admin, async (req, res) => {
  try {
    const users = await prisma.user.count();
    const orders = await prisma.order.count();
    const products = await prisma.product.count();

    const revenueAgg = await prisma.order.aggregate({
      _sum: {
        total: true,
      },
    });

    res.json({
      users,
      orders,
      products,
      revenue: revenueAgg._sum.total || 0,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// DASHBOARD
// =========================

router.get("/dashboard", admin, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const orders = await prisma.order.findMany({
      include: {
        items: true,
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const products = await prisma.product.findMany({
      include: {
        specs: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const revenueAgg = await prisma.order.aggregate({
      _sum: {
        total: true,
      },
    });

    res.json({
      users,
      orders,
      products,

      analytics: {
        users: users.length,
        orders: orders.length,
        products: products.length,
        revenue: revenueAgg._sum.total || 0,
      },
    });
  } catch (err) {
    console.error("Dashboard error:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// ADD PRODUCT
// =========================

router.post("/products", admin, async (req, res) => {
  try {
    const {
      name,
      brand,
      description,
      price,
      origPrice,
      stock,
      image,
      badge,
      rating,
      reviewCount,
      type,
      subcat,
      duration,
      delivery,
      teamSize,
      tagline,
      specs,
    } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        brand,
        description,
        price: Number(price),
        origPrice: Number(origPrice),
        stock: Number(stock),
        image,

        badge: badge || null,
        rating: Number(rating || 0),
        reviewCount: Number(reviewCount || 0),

        type: type || "electronics",
        subcat: subcat || null,
        duration: duration || null,
        delivery: delivery || null,
        teamSize: teamSize || null,
        tagline: tagline || null,

        specs: specs?.length
          ? {
              create: specs.map((s) => ({
                spec: s,
              })),
            }
          : undefined,
      },

      include: {
        specs: true,
      },
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    console.error("ADD PRODUCT ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// =========================
// UPDATE PRODUCT
// =========================

router.put("/products/:id", admin, async (req, res) => {
  try {
    const {
      name,
      brand,
      description,
      price,
      origPrice,
      stock,
      image,
      badge,
      rating,
      reviewCount,
      type,
      subcat,
      duration,
      delivery,
      teamSize,
      tagline,
    } = req.body;

    const product = await prisma.product.update({
      where: {
        id: req.params.id,
      },

      data: {
        name,
        brand,
        description,
        price: Number(price),
        origPrice: Number(origPrice),
        stock: Number(stock),
        image,

        badge: badge || null,

        rating: Number(rating || 0),
        reviewCount: Number(reviewCount || 0),

        type: type || "electronics",
        subcat: subcat || null,

        duration: duration || null,
        delivery: delivery || null,
        teamSize: teamSize || null,
        tagline: tagline || null,
      },
    });

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    console.error("Update product error:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// DELETE PRODUCT
// =========================

router.delete("/products/:id", admin, async (req, res) => {
  try {
    await prisma.product.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error("Delete product error:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// UPDATE ORDER STATUS
// =========================

router.put("/orders/:id", admin, async (req, res) => {
  try {
    const { status } = req.body;

    const order = await prisma.order.update({
      where: {
        id: req.params.id,
      },

      data: {
        status,
      },
    });

    res.json({
      success: true,
      order,
    });
  } catch (err) {
    console.error("Update order error:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});
router.post("/products", admin, async (req, res) => {
  try {
    const {
      name,
      brand,
      description,
      price,
      origPrice,
      stock,
      image,
      badge,
      rating,
      reviewCount,
      type,
      subcat,
      duration,
      delivery,
      teamSize,
      tagline,
      specs,
    } = req.body;

    if (
      !name ||
      !brand ||
      !description ||
      price === undefined ||
      origPrice === undefined ||
      stock === undefined ||
      !image
    ) {
      return res.status(400).json({
        error: "Required product fields are missing",
      });
    }

    const product = await prisma.product.create({
      data: {
        name,
        brand,
        description,
        price: Number(price),
        origPrice: Number(origPrice),
        stock: Number(stock),
        image,
        badge: badge || null,
        rating: Number(rating || 0),
        reviewCount: Number(reviewCount || 0),
        type: type || "electronics",
        subcat: subcat || null,
        duration: duration || null,
        delivery: delivery || null,
        teamSize: teamSize || null,
        tagline: tagline || null,

        specs: {
          create: Array.isArray(specs)
            ? specs.map((spec) => ({
                spec: spec,
              }))
            : [],
        },
      },
      include: {
        specs: true,
      },
    });

    res.status(201).json({
      product,
      message: "Product created successfully",
    });
  } catch (err) {
    console.error("CREATE PRODUCT ERROR:", err);

    res.status(500).json({
      error: err.message,
    });
  }
});
;
module.exports = router;