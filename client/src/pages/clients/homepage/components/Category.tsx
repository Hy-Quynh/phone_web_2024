export default function HomepageCategory() {
  const listCategory = [
    {
      _id: 1,
      category_name: 'Điện thoại',
      category_image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818',
      total_product: 20,
    },
    {
      _id: 2,
      category_name: 'Tai nghe',
      category_image:
        'https://antien.vn/uploaded/Bose%20Headphone%20700/tai-nghe-bluetooth-chong-on-bose-headphones-700.jpg',
      total_product: 20,
    },
  ];

  return (
    <div className='container-fluid pt-5'>
      <h2 className='section-title position-relative text-uppercase mx-xl-5 mb-4'>
        <span className='bg-secondary pr-3'>Danh mục</span>
      </h2>
      <div className='row px-xl-5 pb-3'>
        {listCategory?.map((item, index) => {
          return (
            <div
              className='col-lg-3 col-md-4 col-sm-6 pb-1'
              key={`home-page-category-${index}`}
            >
              <a className='text-decoration-none' href=''>
                <div className='cat-item img-zoom d-flex align-items-center mb-4'>
                  <div
                    className='overflow-hidden'
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      className='img-fluid'
                      src={item?.category_image}
                      alt=''
                    />
                  </div>
                  <div className='flex-fill pl-3'>
                    <h6>{item?.category_name}</h6>
                    <small className='text-body'>
                      {' '}
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
