import Link from 'next/link'
import React from 'react'

const Carousel = () => {
  return (
        <div className="carousel w-full">
  {/* <div id="slide1" className="carousel-item relative w-full">
    <Image
      src={"/images/home-carousel1.jpg"}
      alt={"Carouselimage1"}
      width={}
      className="w-full" />

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide4" className="btn btn-circle">❮</Link>
      <Link href="#slide2" className="btn btn-circle">❯</Link>
    </div>
  </div> */}
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      alt={"Carouselimage1"}

      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide1" className="btn btn-circle">❮</Link>
      <Link href="#slide3" className="btn btn-circle">❯</Link>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      alt={"Carouselimage1"}

      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide2" className="btn btn-circle">❮</Link>
      <Link href="#slide4" className="btn btn-circle">❯</Link>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      alt={"Carouselimage1"}

      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide3" className="btn btn-circle">❮</Link>
      <Link href="#slide1" className="btn btn-circle">❯</Link>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      alt={"Carouselimage1"}

      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide3" className="btn btn-circle">❮</Link>
      <Link href="#slide1" className="btn btn-circle">❯</Link>
    </div>
  </div>

</div>
  )
}

export default Carousel
