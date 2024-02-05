import React from 'react'
import './Shop.css'
import Header from './components/Header'
import axios from 'axios'

const baseURL = "https://mystiqueapi.onrender.com/products"
// const baseURL = "http://localhost:3000/products"

function Shop() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      console.log(res)
      const productList = res.data;
      setPost(productList);
      post.map((ele) => {
        console.log(ele.title);
      })
    });
  }, []);

  if (!post) return null;

  return (
    <div className='shop'>
      <Header headerTitle={"Shop"} />

      <div className='product-cards'>

        {
          post.map((ele) => {
            return (
              <div className='card-pro'>
                <img src={ele.image} />
                <h4> {ele.title} </h4>
                <h5>{ele.subcategory}</h5>
                <h4>Rs.   {ele.price}</h4>
              </div>
            )
          })
        }

      </div>

    </div>
  );
}

export default Shop
