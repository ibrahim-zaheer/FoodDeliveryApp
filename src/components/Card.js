import React,{useEffect, useRef, useState} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card(props) {
  // when we are taking options from mongo db then we will turn it into key value pairs like this
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems;
  // we use for referencing or default value of the price
  const priceRef = useRef();
  let data = useCart();
  let dispatch = useDispatchCart();
 const [qty, setqty] = useState(1);
 const [size, setsize] = useState("");
  const handleAddToCart= async()=>{
  await dispatch({type:"ADD",id: props.foodItem._id,name: props.foodItem.name,price:finalPrice,qty:qty,size:size,img:props.foodItem.img})
  await console.log(data)
  }
  let finalPrice = qty * parseInt(options[size])


  //now we use useEffect so when page is loaded value is shown there
  useEffect(()=>{
    setsize(priceRef.current.value)
  },[])
  return (
    <div>

<div className="card mt-3" style={{ "width": "20rem", "height": "300px" }}>
        {/* <img src="https://source.unsplash.com/random/10×10"alt="..." width={200}/> */}
        {/* the arguments added in style help us to to show image with different sizes in a fix size */}
        <img src={props.foodItem.img} alt="" style={{height:"100px",objectFit:"fill", width:"100px"}}/>
        
        <div className="card-body">
          
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">Some quick example</p>
          <div className='container w-100'></div>
          <select className='m-2 h-200  bg-success' onChange={(e)=>setqty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              )
            })}
          </select>
          <select className='m-2 h-200 bg-success' ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
{/* // write this display option onw by one for each key */}
            {priceOptions.map((data)=>{
              return <option value={data} key={data}>{data}</option>
            })}

          </select>
          <div className='d-inline h-100 fs-5'>
${finalPrice == null?0:finalPrice}
          </div>
        <hr></hr>  
        <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Card</button>
        
        </div>
      </div>
    </div>
  )
}
