import React from 'react'
import './Shop.css'
import Header from './Header'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import config from '../config';

const baseURL = config.getBackendUrl();

function Shop({userdetails, ogproducts, setuserdetails}) {

  const addToCart = async (p_id, u_id, p_name) => {
    try{await axios.patch(`${baseURL}/products/${p_id}/${u_id}`, {pid : p_id}).then((res)=>{
      // console.log(res.data);
      userdetails.cart.push(p_id);
      setuserdetails({...userdetails});
      toast.success(`${p_name} has been added to the cart successfully`);
    }).catch((err)=>{console.log(err)
    })} catch(error){
      console.log(error);
    }
  }

  if (!ogproducts) return null;

  return (
    <>
    <div className='shop'>
      <Header headerTitle={"Shop"} />
      <div className="filter-bar">Sort functionality is being added</div>
      <div className='product-cards'>

        {
          ogproducts.map((ele) => {
            return (
              <div key={ele._id} className='card-pro'>
                <div className='pro-overlay'>
                  <button className='add-cart-btn' onClick={()=>{
                    if(userdetails.userid){
                      if(userdetails.cart.includes(ele._id)){
                        toast.warning("Item already present in Cart");
                      } else
                      addToCart(ele._id, userdetails.userid, ele.title);
                    }
                    else{
                      toast.warning("Please login before adding to cart");
                    }
                  }}>Add to cart</button>
                </div>
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
    </>
  );
}

export default Shop
