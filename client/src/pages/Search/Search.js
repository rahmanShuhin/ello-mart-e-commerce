
import MultiRangeSlider from "multi-range-slider-react";
import { useState } from 'react';
import Select from 'react-select';
import { COLOR_LIST } from '../../assets/data/ColorList';
import { categories } from '../../assets/data/navdata';
import { PRODUCT_DATA } from '../../assets/data/productData';
import Card from '../../components/Card/Card';


const sortingOptions = [
  { value: 'best-match', label: 'Best match' },
  { value: 'low-to-high', label: 'Price low to high' },
  { value: 'high-to-low', label: 'Price high to low' }
]

const categoryOptions = [
    categories?.map((item)=>(
        { value: item.text, label: item.text }
    ))
]

const colorOptions = [
    COLOR_LIST.map((item)=>(
        { value: item.color, label: item.color }
    ))
]

const ratingOptions = [
    
        { value: 1, label:'⭐ (1 star)'},
        { value: 2, label:'⭐⭐ (2 star'},
        { value: 3, label:'⭐⭐⭐ (3 star)'},
        { value: 4, label:'⭐⭐⭐⭐ (4 star)'},
        { value: 5, label:'⭐⭐⭐⭐⭐(5 star)'},
]

const Search = () => {

    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(5000);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
};


  return (
    <section className="search--section">
        <div className="container">
            <div className="search--section--top--bar">
                <div>Search result for "mobile" <br/> 
                    <span>23 result found</span>
                </div>
                <span>
                    Sort by : 
                    <Select options={sortingOptions} />
                </span>
            </div>
            <div className="search--section--wrapper">
                <div className="search--section--wrapper--left">
                    <div className="search--section--wrapper--left--container">
                        <div className='filter--input--group'>
                        <label htmlFor='price'>Price range :</label> 
                        <span id='price'>
                        <MultiRangeSlider
                                min={0}
                                max={5000}
                                step={5}
                                ruler={false}
                                label={true}
                                preventWheel={false}
                                minValue={minValue}
                                maxValue={maxValue}
                                onInput={(e) => {
                                    handleInput(e);
                                }}
                            />
                            </span>
                        </div>
                        <div className='filter--input--group'>
                            <label htmlFor='category'>Category : </label>
                            <span id='category'>
                                <Select options={categoryOptions[0]} />
                            </span>
                        </div>
                        <div className='filter--input--group'> 
                        <label htmlFor='color'>color :</label>
                        <span id='color'>
                                <Select options={colorOptions[0]} />
                            </span> 
                        </div>
                        <div className='filter--input--group'>
                            <label htmlFor='rating'>Rating :</label> 
                                <span id='rating'>
                                    <Select options={ratingOptions}/>
                                </span> 
                            </div>
                        <div className='filter--btn--group'>
                            <button className="apply-btn">Apply filter</button>
                            <button className="reset-btn">Reset</button>
                        </div>
                    </div>
                </div>
                <div className="search--section--wrapper--right">
                    {
                        PRODUCT_DATA && PRODUCT_DATA.length > 0 && 
                        PRODUCT_DATA.map((product,i)=>(
                            <Card 
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.images}
                                key={i}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search