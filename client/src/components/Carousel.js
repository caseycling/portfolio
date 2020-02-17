import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
 
class Gallery extends React.Component {
  items = [1, 2, 3, 4, 5]
 
  state = {
    galleryItems: this.items.map((i) => <h2 key={i}>{i}</h2>),
  }
 
  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel.slideTo(i)}>
      *{' '}
    </span>
  )
 
  render() {
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          itemsInSlide={3}
          ref={(el) => (this.Carousel = el)}
        />
 
        <nav>{this.items.map(this.thumbItem)}</nav>
        <button onClick={() => this.Carousel.slidePrev()}>Prev button</button>
        <button onClick={() => this.Carousel.slideNext()}>Next button</button>
      </div>
    )
  }
}


export default Gallery;