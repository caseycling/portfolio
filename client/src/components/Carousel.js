import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import background from '../images/navbackground.jpg'
import barter from '../images/barter.png';
import gravel from '../images/gravel.png';
import weather from '../images/weather.jpg';
import shopping from '../images/shopping.png';
import recipe from '../images/recipe.jpg';



class Gallery extends React.Component {
  items = [
    {
      title: 'Barter Bud',
      projectHref: 'https://facebook.com',
      codeHref: 'https://github.com/caseycling/Project2',
      image: barter,
      description: 'Barter Bud is a trading app. Users are able to sign up and log in with a unique account where they can upload items for trade and browse other user items. MongoDB saves pictures and descriptions posted to the site through a RESTfulAPI and the user can post, update or delete them.'
    },
    {
      title: 'Gravel',
      projectHref: 'https://gravel-app.herokuapp.com/',
      codeHref: 'https://github.com/mrgmacandog/gravel',
      image: gravel,
      description: 'Car-pooling app which connects drivers and passengers. After creating and logging into an account using local-auth, users are able to make posts requesting or offering rides and see rides from other users. Once a ride is selected, contact information is displayed for communication.'

    },
    {
      title: 'Shopping-list App',
      projectHref: 'https://caseyclingaman.herokuapp.com/',
      codeHref: 'https://github.com/caseycling/MERN-stack',
      image: shopping,
      description: 'A simple shopping list application using the MERN stack. Implemented react-strap for styling the app along with Redux for state managment. Using a RESTful API and MongoDB, list items can be added for display, updated with a line-through or deleted for removal.'
    },
    {
      title: 'Recipe Generator',
      projectHref: 'https://caseycling.github.io/recipeApp/',
      codeHref: 'https://github.com/caseycling/recipeApp/',
      image: recipe,
      description: 'App for finding recipes. Upon entering an ingredient in the search bar, the Edmam API is queried for recipes relative to the search term. The resulting JSON response object is then passed in as props to the recipe component which then displays  the top ten resulting recipes.',
    },
    {
      title: 'Weather App',
      projectHref: 'https://caseycling.github.io/weather-app/',
      codeHref: 'https://github.com/caseycling/weather-app/',
      image: weather,
      description: 'Single-page application built with React for searching the weather using RESTful API. After searching for a city, a request is sent to OpenWeatherMap and the resulting date and weather is displayed with background dynamically changing dependent on the weather.',
    },
  ]

  state = {
    galleryItems: this.items.map((i) =>
      <div className="individualContainer" style={{ background: "black", width: "90%" }} id={i.image}>
        <a href={i.projectHref} target={"_blank"}>
          <img id="projectImage" src={i.image} alt="Project" />
        </a>
        <div >
          <h3 id="projectTitle" >{i.title}</h3>
          <p style={{ fontFamily: "Lato,Helvetica,Arial,sans-serif", margin: "9px", lineHeight: "1.2" }}> {i.description} </p>
        </div>
        <div>
          <a id="projectLink" href={i.codeHref} target={"_blank"} >Check out the code</a>
        </div>
      </div>
    ),
  }

  responsive = {
    0: { items: 3 },
    1024: { items: 3 }
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
          responsive={this.responsive}
          buttonsDisabled={true}
          showDots={false}
          items={this.state.galleryItems}
          itemsInSlide={3}
          ref={(el) => (this.Carousel = el)}
        />

        <nav>{this.items.map(this.thumbItem)}</nav>
        <div  >
          <button id="carousel-btn" style={{ float: "left", marginLeft: "12px" }} onClick={() => this.Carousel.slidePrev()}>Prev button</button>
          <button id="carousel-btn" style={{ float: "right", marginRight: "12px" }} onClick={() => this.Carousel.slideNext()}>Next button</button>
        </div>
      </div>
    )
  }
}


export default Gallery;