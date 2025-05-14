import { Router } from "express";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} from "../controllers/product.controller.js";
import { verifyJWT, authorizeRoles } from "../../../middlewares/auth.middleware.js";
import { upload } from "../../../middlewares/upload.middleware.js";
// import { validateCreateProduct, validateUpdateProduct } from '../../../validations/product.validation.js'; // Assuming you create these validations

const router = Router();

// Protected routes (requires authentication)
router.use(verifyJWT);

// Admin only routes
router.route("/").post(authorizeRoles("admin"), upload.single("image"), createProductController);

// Admin and User routes
router.route("/").get(getAllProductsController);
router.route("/:id").get(getProductByIdController);
router.route("/:id").patch(authorizeRoles("admin"), upload.single("image"), updateProductController);
router.route("/:id").delete(authorizeRoles("admin"), deleteProductController);

export default router;
