import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiError } from "../../../utils/apiError.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../../../services/product.service.js";

const createProductController = asyncHandler(async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  const imageUrl = req.file?.path; // Get image path from multer

  if (
    [name, description, price, category, stock].some(
      (field) => field?.trim() === ""
    )
  ) {
    // TODO: Add image validation if image is required
    throw new ApiError(400, "All fields are required");
  }

  const product = await createProduct({
    name,
    description,
    price,
    category,
    stock,
    imageUrl,
  });

  if (!product) {
    throw new ApiError(500, "Something went wrong while creating the product");
  }

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: product,
  });
});

const getAllProductsController = asyncHandler(async (req, res) => {
  const products = await getAllProducts();

  return res.status(200).json({
    success: true,
    message: "Products fetched successfully",
    data: products,
  });
});

const getProductByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await getProductById(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res.status(200).json({
    success: true,
    message: "Product fetched successfully",
    data: product,
  });
});

const updateProductController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const imageUrl = req.file?.path;

  if (imageUrl) {
    updateData.imageUrl = imageUrl;
  }

  const updatedProduct = await updateProduct(id, updateData);

  if (!updatedProduct) {
    throw new ApiError(404, "Product not found or unable to update");
  }

  return res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: updatedProduct,
  });
});

const deleteProductController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await deleteProduct(id);

  if (!deleted) {
    throw new ApiError(404, "Product not found or unable to delete");
  }

  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

export {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
};
