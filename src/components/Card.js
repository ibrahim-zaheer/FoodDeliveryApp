import React from 'react'

export default function Card() {
  return (
    <div>

<div className="card mt-3" style={{ "width": "20rem", "height": "300px" }}>
        <img src="https://source.unsplash.com/random/10×10"alt="..." width={200}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example</p>
          <div className='container w-100'></div>
          <select className='m-2 h-200  bg-success'>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              )
            })}
          </select>
          <select className='m-2 h-200 bg-success'>

            <option value={"Half"}>Half</option><option value={"Full"}>Full</option>

          </select>
          <div className='d-inline h-100 fs-5'>
Total Price
          </div>
        
        </div>
      </div>
    </div>
  )
}
