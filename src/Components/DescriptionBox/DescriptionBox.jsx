import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, debitis quibusdam dicta doloremque sit esse, accusantium magni laborum perspiciatis fugiat soluta voluptate. Totam ab repellat iusto explicabo excepturi, asperiores omnis quia possimus, esse nobis alias natus ullam error ipsum ipsam! Nobis voluptatum in nesciunt ducimus dignissimos veniam impedit quasi mollitia!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex, molestias quas sint incidunt rerum blanditiis eaque iusto placeat, at dolor id deserunt eum atque fuga voluptas commodi dolorum vitae.</p>
      </div>
    </div>
  )
}

export default DescriptionBox