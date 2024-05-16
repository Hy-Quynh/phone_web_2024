import React from "react";

type ProductItemProps = {
  productId: any,
  productImage: any,
  productName: any,
  salePrice: any,
  productPrice: any,
  productQuantity: any,
  customClassName?: any,
}
export default function ProductItem({
  productId,
  productImage,
  productName,
  salePrice,
  productPrice,
  productQuantity,
  customClassName,
}: ProductItemProps) {

  return (
    <div className={customClassName || "col-lg-3 col-md-4 col-sm-6 pb-1"}>
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={productImage} alt="" />
          <div className="product-action">
            <a
              className="btn btn-outline-dark btn-square"
              href = ''
            >
              <i className="fa fa-shopping-cart" />
            </a>
            {/* <a className="btn btn-outline-dark btn-square" href="">
              <i className="far fa-heart" />
            </a> */}
          </div>
        </div>
        <div className="text-center py-4">
          <a
            className="h6 text-decoration-none text-truncate"
            href={`/product/${productId}`}
          >
            {productName}
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>
              {salePrice > 0 && salePrice !== productPrice ? (
                <h6 style={{ textAlign: "center", color: "red" }}>
                  {salePrice} đ
                </h6>
              ) : (
                <h6 style={{ textAlign: "center", color: "red" }}>
                  {productPrice} đ
                </h6>
              )}
            </h5>
            {salePrice > 0 && salePrice !== productPrice ? (
              <h6 className="text-muted ml-2">
                <del>{productPrice} đ</del>
              </h6>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
