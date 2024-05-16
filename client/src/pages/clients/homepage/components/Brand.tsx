export default function HomepageBrand() {
  const listBrand = [
    {
      _id: 1,
      brand_image:
        'https://cdn.vectorstock.com/i/500p/43/41/apple-logo-computer-ipad-iphone-software-vector-19944341.jpg',
      brand_name: 'Apple',
      total_product: 20,
    },
    {
      _id: 2,
      brand_image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png',
      brand_name: 'Samsung',
      total_product: 20,
    },
  ];

  return (
    <div className='container-fluid pt-5'>
      <h2 className='section-title position-relative text-uppercase mx-xl-5 mb-4'>
        <span className='bg-secondary pr-3'>Thương hiệu</span>
      </h2>
      <div className='row px-xl-5 pb-3'>
        {listBrand?.map((item, index) => {
          return (
            <div
              className='col-lg-3 col-md-4 col-sm-6 pb-1'
              key={`homepage_brand_${index}`}
            >
              <a className='text-decoration-none' href=''>
                <div className='cat-item img-zoom d-flex align-items-center mb-4'>
                  <div
                    className='overflow-hidden'
                    style={{ width: 100, height: 100 }}
                  >
                    <img className='img-fluid' src={item?.brand_image} alt='' />
                  </div>
                  <div className='flex-fill pl-3'>
                    <h6>{item?.brand_name}</h6>
                    <small className='text-body'>
                      {item?.total_product} Sản phẩm
                    </small>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
