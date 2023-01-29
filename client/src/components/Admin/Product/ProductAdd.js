import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { GoCloudUpload } from "react-icons/go";
import ImageUploading from "react-images-uploading";
import { MAIN_CATEGORIES } from "../../../assets/data/category";
import SIZE from "../../../assets/data/Size";
import { SUB_CATEGORIES } from "../../../assets/data/subCategory";

export default function ProductAdd() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [productSize, setProductSize] = useState([]);
    const [stock, setStock] = useState("");
    const [brand, setBrand] = useState("");
    const [SKU, setSKU] = useState("");
    const [productColor, setProductColor] = useState("");
    const [discount, setDiscount] = useState();
    const [productType, setProductType] = useState("");
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState();
    const [categoryID, setCategoryId] = useState();
    const [subCategory, setSubCategory] = useState();
    const [productDescription, setProductDescription] = useState("");
    const maxNumber = 4;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        setImages(imageList);
    };

    const handleCategoryId = (e) => {
        setCategory(e.target.value);
        const categoryIndex = MAIN_CATEGORIES.find(
            ({ category }) => category === e.target.value
        );
        setCategoryId(categoryIndex.id);
    };

    const formData = new FormData();
    formData.append("title", productName);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("discount", discount);
    formData.append("colors", productColor);
    formData.append("sku", SKU);
    formData.append("brand", brand);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("productType", productType);

    images.forEach((size) => {
        formData.append("sizes", size);
    });

    images.forEach((image) => {
        formData.append("images", image.data_url);
    });
    return (
        <div className="productCreate">
            <p>Create Product</p>
            <>
                {/* image upload  */}
                <div className="productCreate__box">
                    <div>
                        <p>Featured Image</p>
                        <small>Upload your product featured image here</small>
                    </div>
                    <div className="product__image__upload">
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <div>
                                        <button
                                            style={
                                                isDragging
                                                    ? { color: "red" }
                                                    : null
                                            }
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            <GoCloudUpload fontSize={24} />
                                            <span>Upload an image</span>
                                            or drag and drop PNG,JPG
                                        </button>
                                        &nbsp;
                                        {/* <button onClick={onImageRemoveAll}>
                                            Remove all images
                                            </button> */}
                                    </div>
                                    <div className="image-item-wrapper">
                                        {imageList.length > 0 && (
                                            <h4>Preview Image:</h4>
                                        )}
                                        {imageList.map((image, index) => (
                                            <div
                                                key={index}
                                                className="image-item"
                                            >
                                                <img
                                                    src={image.data_url}
                                                    alt=""
                                                    width="100%"
                                                />
                                                <div className="image-item__btn-wrapper">
                                                    <button
                                                        onClick={() =>
                                                            onImageRemove(index)
                                                        }
                                                    >
                                                        <ClearIcon fontSize="16px" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>
                {/* image upload  end*/}

                <div className="productCreate__box">
                    <div>
                        <p>Description</p>
                        <small>
                            Create your product description and necessary
                            information from here
                        </small>
                    </div>
                    <form>
                        <div className="productCreate__box__wrapper">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="title">
                                        Product title:
                                    </label>
                                    <br />

                                    <input
                                        className="form-input"
                                        type="text"
                                        id="title"
                                        max="40"
                                        value={productName}
                                        onChange={(e) =>
                                            setProductName(e.target.value)
                                        }
                                        placeholder=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price:</label>
                                    <br />
                                    <input
                                        className="form-input"
                                        type="number"
                                        id="price"
                                        value={productPrice}
                                        onChange={(e) =>
                                            setProductPrice(e.target.value)
                                        }
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <br />
                                    <select
                                        className="form-input"
                                        name="division"
                                        id="division"
                                        value={category}
                                        onChange={handleCategoryId}
                                    >
                                        <option hidden={true}>
                                            select category
                                        </option>
                                        {MAIN_CATEGORIES.map(
                                            ({ id, category }) => (
                                                <option
                                                    key={id}
                                                    value={category}
                                                >
                                                    {category}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subCategory">
                                        Sub Category
                                    </label>
                                    <br />
                                    <select
                                        className="form-input"
                                        name="subCategory"
                                        id="subCategory"
                                        value={subCategory}
                                        onChange={(e) =>
                                            setSubCategory(e.target.value)
                                        }
                                    >
                                        <option hidden={true}>
                                            select sub category
                                        </option>
                                        {SUB_CATEGORIES.map(
                                            ({ id, subCategory, cat_id }) =>
                                                cat_id === categoryID ? (
                                                    <option
                                                        key={id}
                                                        value={subCategory}
                                                    >
                                                        {subCategory}
                                                    </option>
                                                ) : null
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="form-group">
                                    <label htmlFor="stock">Stock:</label>
                                    <br />
                                    <input
                                        className="form-input"
                                        type="number"
                                        id="stock"
                                        value={stock}
                                        onChange={(e) => {
                                            setStock(e.target.value);
                                        }}
                                        placeholder=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="discount">Discount:</label>
                                    <br />
                                    <input
                                        className="form-input"
                                        type="number"
                                        id="discount"
                                        value={discount}
                                        onChange={(e) => {
                                            setDiscount(e.target.value);
                                        }}
                                        placeholder=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="productType">
                                        Product Type
                                    </label>
                                    <br />
                                    <select
                                        className="form-input"
                                        name="productType"
                                        id="productType"
                                        value={productType}
                                        onChange={(e) =>
                                            setProductType(e.target.value)
                                        }
                                    >
                                        <option> select type </option>
                                        <option value="on-sale">
                                            {" "}
                                            On sale{" "}
                                        </option>
                                        <option value="new-collection">
                                            {" "}
                                            New Collection{" "}
                                        </option>
                                        <option value="limited-addition">
                                            {" "}
                                            Limited edition{" "}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label>
                                        Product Size:
                                        <div className="form-input-checkbox-group">
                                            {SIZE.map((size, i) => (
                                                <>
                                                    <input
                                                        key={i}
                                                        type="checkbox"
                                                        value={size}
                                                        checked={productSize.includes(
                                                            size
                                                        )}
                                                        onChange={(e) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                setProductSize([
                                                                    ...productSize,
                                                                    e.target
                                                                        .value,
                                                                ]);
                                                            } else {
                                                                setProductSize(
                                                                    productSize.filter(
                                                                        (
                                                                            size
                                                                        ) =>
                                                                            size !==
                                                                            e
                                                                                .target
                                                                                .value
                                                                    )
                                                                );
                                                            }
                                                        }}
                                                    />
                                                    {size}
                                                </>
                                            ))}
                                        </div>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Product Color:
                                        <input
                                            className="form-input"
                                            type="text"
                                            value={productColor}
                                            onChange={(e) =>
                                                setProductColor(e.target.value)
                                            }
                                        />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="sku">SKU:</label>
                                    <br />
                                    <input
                                        className="form-input"
                                        type=""
                                        id="SKU"
                                        value={SKU}
                                        onChange={(e) => {
                                            setSKU(e.target.value);
                                        }}
                                        placeholder=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brand">Brand:</label>
                                    <br />
                                    <input
                                        className="form-input"
                                        type=""
                                        id="brand"
                                        value={brand}
                                        onChange={(e) => {
                                            setBrand(e.target.value);
                                        }}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="description">
                                        Product Description:
                                    </label>
                                    <br />
                                    <textarea
                                        className="form-input"
                                        type=""
                                        id="description"
                                        value={productDescription}
                                        rows="7"
                                        onChange={(e) => {
                                            setProductDescription(
                                                e.target.value
                                            );
                                        }}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="create-product--btn">
                            Create Product
                        </button>
                    </form>
                </div>
            </>
        </div>
    );
}
