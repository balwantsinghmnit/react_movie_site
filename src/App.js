import "./style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/Header.js";
import { Carousel } from 'react-responsive-carousel';
import React,{Component} from "react";
import Footer from "./components/Footer.js";
class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      photos:['./p1.jpg','./p2.jpg','./p3.jpg','./p4.jpg','./p5.jpeg'],
      types:["Action","Comedy","Horror","Family","Romance","Drama","& much more"],
      movies : [
        {
          src:'./p1.jpg',
          name:'3 Warriors'
        },
        {
          src:'./p2.jpg',
          name:'Dracula'
        },
        {
          src:'./p3.jpg',
          name:'Adore'
        }
      ],
      variations:[
        {
          src:'./p1.jpg',
          name:'Action',
          desc:'Watch latest action movies'
        },
        {
          src:'./p4.jpg',
          name:'Comedy',
          desc:'Laugh out loud with comedy movies'
        },
        {
          src:'./p2.jpg',
          name:'Horror',
          desc:'Explore new horror movies'
        }
      ]
    }
  }
  render() {
  return (
    <div className="App">
      <Header/>
      <Carousel classname="react-caro">
        {this.state.movies.map(movie =>
          <div>
              <img src={movie.src} />
              <p className="legend">{movie.name}</p>
          </div>
        )}
      </Carousel>
      <p className="para1">Check out what's new at Filmiweb</p>
      <div className="section1">
          {this.state.variations.map(x=>
            <div>
              <img src={x.src} />
              <h3>{x.name}</h3>
              <p>{x.desc}</p>
            </div>
          )}
      </div>
      <div className="section2">
            <div className="left">
                <h2>Welcome to <span>FilmiWeb</span></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                        eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
                        vitae doloreLorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                        eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
                        vitae dolore.
                </p><img src="./p5.jpeg"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                        eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
                        vitae doloreLorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                        eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
                        vitae dolore.
                </p>
            </div>
            <div className="right">
                <h3>What we have</h3>
                <ul>
                  {this.state.types.map(type=>
                  <li>{type}</li>)}
                </ul>
            </div>
      </div>
      <Footer photos={this.state.photos}/>
    </div>
  );    
}
}

export default App;
