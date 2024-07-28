import ProductBox from '../ProductBox';
import './styles/ProductInfo.css';

function ProductInfo() {
    return (
        <>
            <h2 className='product-info-header'>What’s inside?</h2>
            <p className='product-info-about'>Build scalable web pages by using the same components</p>
            <ProductBox />
        </>

    )
}

export default ProductInfo;
