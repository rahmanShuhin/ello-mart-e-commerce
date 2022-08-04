import React from "react";
import ImageUploading from "react-images-uploading";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClearIcon from "@mui/icons-material/Clear";

export default function ProductAdd() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
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
          <div>
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
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <div>
                    <button
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <CloudUploadIcon />
                      <span>Upload an image</span> or drag and drop PNG,JPG
                    </button>
                    &nbsp;
                    {/* <button onClick={onImageRemoveAll}>
                      Remove all images
                    </button> */}
                  </div>
                  <div className="image-item-wrapper">
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageRemove(index)}>
                            <ClearIcon />
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
              Edit your product description and necessary information from here
            </small>
          </div>
          <div></div>
        </div>
      </>
    </div>
  );
}
