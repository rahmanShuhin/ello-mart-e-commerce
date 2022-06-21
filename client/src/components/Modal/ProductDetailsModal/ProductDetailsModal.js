import { useState } from 'react';
import { fakeData } from '../../../assets/data/fakeData';
import StarIcon from '../../IconComponents/star';

const ProductDetailsModal = () => {

    const [activeImg, setActiveImg] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState(0);
    
  return (
    
        <div className="Product--Details">
            <div className="Product--Details--left">
                <div className="Product--Details--left--imgActive">
                    {/* ----image magnifier--------*/}
                    <img src={fakeData.images[activeImg]} alt=""/>
                </div>
                <div className="Product--Details--left--imgGallery">
                    {fakeData.images.map((img, index) => (
                    <div
                        key={img}
                        onClick={() => setActiveImg(index)}
                        className={index === activeImg ? "active" : ''}
                    >
                        <img src={img} alt="" />
                    </div>
                    ))}
                </div>
            </div>
            <div className="Product--Details--right">
                <h1>{fakeData.title}</h1>
                <p>
                    {" "}
                    <span>Brand:</span> &nbsp;Ziomi
                </p>
                <p>
                    <span>Rated: &nbsp;</span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    &nbsp; (50)
                </p>
                <p>${fakeData.price}</p>
                <p>Stock Available</p>
                <div className="Product--Details--right--sizes">
                    <p>
                    <span>Size : </span>
                    {fakeData.sizes[size]}
                    </p>
                    <div>
                    {fakeData.sizes.map((siz, index) => (
                        <p
                        key={siz}
                        className={index === size ? "active" : ''}
                        onClick={() => setSize(index)}
                        >
                        {siz}
                        </p>
                    ))}
                    </div>
                </div>
                <div className="Product--Details--right--colors">
                    <p>
                    <span>Color : </span>
                    {fakeData.colors[color]}
                    </p>
                    <div>
                    {fakeData.colors.map((col, index) => (
                        <span className={index === color ? "active" : ''}>
                        <span
                            key={col}
                            style={{ backgroundColor: col }}
                            onClick={() => setColor(index)}
                        />
                        </span>
                    ))}
                    </div>
                </div>
                <div className="Product--Details--right--cartButton">
                    <button className="btn-primary">Add to Cart</button>
                    <p>Quantity : </p>
                    <div className="add--to--cart">
                    <span className="cart--icon--wrapper">-</span>
                    <span className="counter-text">1</span>
                    <span className="cart--icon--wrapper">+</span>
                    </div>
                </div>
                <p>
                    <span>Sold By:</span> &nbsp;Mobile Store
                </p>
            </div>
        </div>
  )
}

export default ProductDetailsModal;