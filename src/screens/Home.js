import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Carousal from '../components/Carousal'
import ImageSliderForCarasoul from '../components/ImageSliderForCarasoul'

// import  from '../components/Carousal'

export default function Home() {

const [foodCategory, setfoodCategory] = useState([])

const [foodItem, setfoodItem] = useState([])
// for searching
const [search, setsearch] = useState('')

const loadData = async ()=>{
  let response = await fetch("http://localhost:5000/api/foodData",{
    method:"POST",
    headers:{
      'Content-Type': "application/json"
    }
  });
  response = await response.json();
  //response[0] means food items and [1] means food category, read it res.send of DisplayData
  console.log(response[0],response[1])
  //now we will store the value of food items and category in the variables
  setfoodItem(response[0])
  setfoodCategory(response[1])
  
  

}

useEffect(()=>{
  loadData()
},[])
//In react rendering is done first then the function of loading or sending data is executed. so whenever possible always make
// sure your data has initial values or else null error
  return (
    <div>

      <Navbar />
      <div>
        {/* since carasoul is only for home so we will not use it as component also because when we 
        are using search in it data does not get properly communicated as parent to child is possible but
        child to parent */}
        {/* <div><Carousal/></div> */}

        <div> <div className="carousel-inner">
    {/* add zIndex to make code visible */}
    <div className='carousel-caption' style={{zIndex:"10"}}>
{/* add this to add search bar in the page */}
    <div className="form-inline my-2 my-lg-0 d-flex justify-content-center">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
        setsearch(e.target.value)
      }}/>
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </div>

    </div>
    {/* <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300×300/?burger" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div> */}
    <ImageSliderForCarasoul/>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300×300/?pizza" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300×300/?fries" className="d-block w-100"style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button></div>
      <div className='container'>
        
        {/* {
          foodCategory.length !==0?
          foodCategory.map((data)=>{
            return(
              <div className='row mb-3'>
              //write the value in key to uniquely identify the value 
              <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}
              </div>
              <hr />
              {foodItem.length !== 0?
                foodItem.filter((item)=>{
                 item.CategoryName === data.CategoryName
                }).map(filterItems=>{
                  return(
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                   <Card></Card>
                    </div>
                  )
                })
              :<div>No Such Data</div>}
              </div>
            )
          }):<div>"No data"</div>

        }
         */}
         {
  foodCategory.length !==0 ?
  foodCategory.map((data) => {
    return (
      <div className='row mb-3' key={data._id}>
        {/* write the value in key to uniquely identify the value */}
        <div className='fs-3 m-3'>
          {data.CategoryName}
        </div>
        <hr />
        {/* write this code to display all the list and also allowing search ability */}
        {foodItem.length !== 0 ?
          foodItem.filter((item) => {
            return item.CategoryName === data.CategoryName
          &&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))}).map(filterItems => {
            return (
              <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                <Card foodItem = {filterItems} options= {filterItems.options[0]} ></Card>
                
              </div>
            );
          })
          : <div>No Such Data</div>}
      </div>
    );
  })
  : <div>"No data"</div>
}

        
       </div>
       
      </div>
      <Footer />

    </div>
  )
}
