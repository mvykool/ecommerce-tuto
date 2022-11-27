
import { Product, FooterBanner, HeroBanner} from '../components'
import { client } from '../lib/client';

export default function Home({ products, bannerData }) {
  return (
    <div>

       {/**hero banner */}
       <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
       {/**content */}
       <div className='products-heading'>
        <h2>Best selling Keys</h2>
        <p>Kayboards of many veriations</p>
       </div>

       <div className='products-container'>
        { products?.map((product)=> <Product key={product._id} product={product} />)}
       </div>

       {/**footer */}
       <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>
    </div>
  )
}

//server side props

export const getServerSideProps = async () => {
 const query = '*[_type == "product"]';
 const products = await client.fetch(query);

 const bannerQuery = '*[_type == "banner"]';
 const bannerData = await client.fetch(bannerQuery);

 return {
  props: { products, bannerData }
 }
}
