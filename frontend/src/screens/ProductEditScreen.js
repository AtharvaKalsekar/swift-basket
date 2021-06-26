import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  productDetailsAction,
  updateProductAction,
} from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Product } from "../constants/productConstants";
import axios from "axios";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [uploading, setUploading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProductAction({
        _id: productId,
        name,
        description,
        brand,
        category,
        countInStock,
        price,
        image,
      })
    );
  };

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: Product.PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product || !product.name || product._id !== productId) {
        dispatch(productDetailsAction(productId));
      } else {
        setName(product.name);
        setBrand(product.brand);
        setCategory(product.category);
        setImage(product.image);
        setPrice(product.price);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [product, productId, dispatch, history, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/uploads", formData, config);

      setImage(data);
      setUploading(false);
    } catch (e) {
      console.error(e);
      setUploading(false);
    }
  };

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{error}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <FormGroup controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="price">
              <FormLabel>Price</FormLabel>
              <FormControl
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="desciption">
              <FormLabel>Description</FormLabel>
              <FormControl
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="cis">
              <FormLabel>Count in Stock</FormLabel>
              <FormControl
                type="number"
                placeholder="Count in Stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="img">
              <FormLabel>Image</FormLabel>
              <FormControl
                type="text"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></FormControl>
              <Form.File
                id="image-file"
                label="Choose file"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </FormGroup>

            <FormGroup controlId="brand">
              <FormLabel>Brand</FormLabel>
              <FormControl
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="cat">
              <FormLabel>Category</FormLabel>
              <FormControl
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></FormControl>
            </FormGroup>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
