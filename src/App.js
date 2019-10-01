import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImagePreview from './components/imagePreviewArea/ImagePreview';
import Checkout from './components/checkoutArea/Checkout';

function Overlay(props){
  return (
    <div className="Overlay" style={{'backgroundImage':'url(' + props.image + ')'}}>
      Something
    </div>
  );
}

function Container(props){
  return (
    <div className="Container">
      {props.children}
    </div>
  )
}

function Header(props){
  return (
    <header>
      <input onChange={this.props.onChange} type="range" max="100" min="1" step="1" />
    </header>
  );
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.setState({ mounted: true });
    console.log('handle ajax submission here');
  }

  handleSubmit(e){
    e.preventDefault();

  }

  handleChange(e){
    this.setState({
      duration: e.target.value
    });
  }

  render(){

    let overlay, container;
    if(this.state.mounted){
      overlay = (
        <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
      );
      container = (
        <Container>
          <ImagePreview 
              price={this.state.price} 
              duration={this.state.duration} 
              people={this.state.people} 
              image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" 
          />
          <Checkout 
              duration={this.state.duration} 
              discount={this.state.discount} 
              tax={this.state.tax} 
              price={this.state.price} 
              onSubmit={this.handleSubmit} 
          />
        </Container>
      );
    }

    return (
      <div className="App">
        <ReactCSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {overlay}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {container}
        </ReactCSSTransitionGroup>
        <Header onChange={this.handleChange} />
      </div>
    );
  }
  
}

export default App;
