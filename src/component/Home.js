import React from 'react';
import Product from './Product';
import '../styles/home.css';
import TopCarousel from './TopCarousel';
import ProductCarousel from './ProductCarousel';
function Home() {
  return (
    <>
      <TopCarousel />
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            <Product
              id="1"
              title="2020 Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
              image="https://b2c-contenthub.com/wp-content/uploads/2021/04/ipad-pro-11-2021.jpg?quality=50&strip=all"
              rating={4}
              price={500}
            />
            <Product
              id="2"
              title="Windows Laptop Computer 15.6 inch, 8GB RAM 128GB M.2 SSD Windows 10 Pro PC Laptops"
              image="https://s.turkcell.com.tr//SiteAssets/Cihaz/notebook-tablet/hp/laptop-15s-fq2045nt-2n2n8ea/cg/3.png"
              price={450.99}
              rating={3}
            />
            <Product
              id="3"
              image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/44-alum-blue-sport-deepnavy-6s-nc?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1599811389000"
              price={250}
              title="Apple Watch Series 4 (GPS + Cellular, 44MM) - Space Gray Aluminum Case with Black Sport Band"
              rating={3}
            />
            <Product
              id="4"
              image="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw11075a4a/products/L0674296/large/L0674296.JPG"
              price={280}
              title="Apple Watch Series 4 (GPS + Cellular, 44MM) - Space Gray Aluminum Case with Black Sport Band"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="5"
              rating={4}
              price={999.99}
              image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/110664_large.jpg"
              title="New Apple iPhone 12 (64GB, Blue) [Locked] + Carrier Subscription "
            />
            <Product
              id="6"
              rating={3}
              price={800}
              image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/117735-ana_large.jpg"
              title="Samsung Galaxy S21 Ultra 5G SM-G998B/DS 256GB 12GB RAM "
            />
            <Product
              id="7"
              rating={3}
              price={700}
              image="https://img.gkbcdn.com/s3/p/2020-03-28/HUAWEI-P40-Pro-6-58--8GB-512GB-5G-Smartphone-Gold-900427-.jpg"
              title="Huawei Mate 40 Pro 5G NOH-NX9 256GB 8GB RAM "
            />
            <Product
              id="8"
              image="https://www.techadvisor.com/cmsdata/features/3800980/sony_xperia_compact_2021_leaked_press_image_source_onleaks_voice.jpg"
              title='Sony Xperia 1 Unlocked Smartphone 6.5" 4K HDR OLED CinemaWide Display, 128GB - Black '
              price={650}
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="9"
              rating={5}
              price={600}
              image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg"
              title="SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White  "
            />
          </div>
          <div className="home__row">
            <Product
              id="10"
              rating={5}
              price={1100.5}
              image="https://macmarketi.com/7758/imac-27-in%C3%A7-5k-retina-i9-36ghz-2tb-fusion-drive-8gb-2666mhz.jpg"
              title="2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Blue "
            />
            <Product
              id="11"
              rating={4}
              price={1200.99}
              image="https://images.macrumors.com/t/-ypvbiP9dl-gAVMtb4e3iHGQMs8=/1600x/https://images.macrumors.com/article-new/2013/09/macbook_pro_2016_roundup_header.jpg"
              title="Apple MacBook Pro 13in Core i5 Retina 2.7GHz (MF840LL/A), 8GB Memory, 512GB Solid State Drive "
            />
          </div>
        </div>
      </div>
      <div>
        <ProductCarousel />
      </div>
    </>
  );
}

export default Home;
