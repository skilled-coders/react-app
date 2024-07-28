import './styles/ProductBox.css'

function ProductBox() {
    return (
        <>
            <div className="product-box-wrapper">
                <div className="icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="8" width="32" height="2" fill="#222222" />
                        <rect x="4" y="30" width="32" height="2" fill="#222222" />
                        <rect x="30" y="4" width="2" height="32" fill="#222222" />
                        <rect x="8" y="4" width="2" height="32" fill="#222222" />
                    </svg>
                </div>
                <div className="title">
                    <span>
                        30+
                    </span>
                </div>
                <div className="info">
                    <span>
                        Frequent and reusable templates all screens
                    </span>
                </div>
            </div>
        </>
    )
};

export default ProductBox
