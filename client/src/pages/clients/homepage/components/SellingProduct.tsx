import ProductItem from "../../../../components/productItem";

export default function SellingProduct() {
  const listSellingProduct = [
    {
      _id: '1',
      product_image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png',
      product_name: 'Iphone 15',
      product_price: '25.000.000',
      sale_price: 0,
      current_quantity: 10
    },
    {
      _id: '2',
      product_image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png',
      product_name: 'Iphone 15',
      product_price: '25.000.000',
      sale_price: 0,
      current_quantity: 10
    },
    {
      _id: '3',
      product_image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png',
      product_name: 'Iphone 15',
      product_price: '25.000.000',
      sale_price: 0,
      current_quantity: 10
    },
    {
      _id: '4',
      product_image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png',
      product_name: 'Iphone 15',
      product_price: '25.000.000',
      sale_price: 0,
      current_quantity: 10
    }
  ]

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Sản phẩm bán chạy</span>
      </h2>
      <div className="row px-xl-5">
        {listSellingProduct?.map((item, index) => {
          return (
            <ProductItem
              productId={item?._id}
              productImage={item?.product_image}
              productName={item?.product_name}
              productPrice={item?.product_price}
              salePrice={item?.sale_price}
              productQuantity={item?.current_quantity}
              key={`product-item-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
