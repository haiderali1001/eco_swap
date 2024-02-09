import React from 'react'
import './Shop.css'
import Header from './Header'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// const baseURL = "https://mystiqueapi.onrender.com"
const baseURL = "http://localhost:3000"

function Shop() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/products`).then((res) => {
      console.log(res);
      const productList = res.data;
      setPost(productList);
      post.map((ele) => {
        console.log(ele.title);
      })
    });
  }, []);

  const addToCart = async (p_id, u_id, p_name) => {
    try{await axios.patch(`${baseURL}/products/${p_id}/${u_id}`, {pid : p_id}).then((res)=>{
      console.log(res.data);
      toast.success(`${p_name} has been added to the cart successfully`);
    }).catch((err)=>{

    })} catch(error){
      console.log(error);
    }
  }

  if (!post) return null;

  return (
    <>
    <ToastContainer />
    <div className='shop'>
      <Header headerTitle={"Shop"} />
      <div className="filter-bar">Sort functionality is being added</div>
      <div className='product-cards'>

        {
          post.map((ele) => {
            return (
              <div key={ele._id} className='card-pro'>
                <div className='pro-overlay'>
                  <button className='add-cart-btn' onClick={()=>{
                    addToCart(ele._id, "65c49929eb50c4f65c871069", ele.title);
                    console.log("tang mt kr bhai");
                  }}>Add to cart</button>
                </div>
                <img src={ele.image} />
                {/* <div className="dark-bg-card"> */}
                  <h4> {ele.title} </h4>
                  <h5>{ele.subcategory}</h5>
                  <h4>Rs.   {ele.price}</h4>
                {/* </div> */}
              </div>
            )
          })
        }

      </div>

    </div>
    </>
  );
}

export default Shop
