import { PRODUCT_DATA } from '../../../assets/data/productData';
import Card from '../../Card/Card';
import './_cardContainer.scss';

const CardContainer = ({setModalType}) => {
  return (
    <section className="card--container">
        <div className="card--container--header">
            <h3>
                Flash deals
            </h3>
            <span>
                View all {">"}
            </span>
        </div>
        <div className="card--container--wrapper"> 
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
    </section>
  )
}

export default CardContainer