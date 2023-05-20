import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from "./styled";


export class App extends Component {

  state = {
    query: '',
  }

  handleFormSubmit = (query) => {
    this.setState({ query }); // shorthand
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}/>       {/* onSubmit - не подія, а назва пропса*/}
        <ImageGallery query={this.state.query} /> 
      </Container> 
    );
  }
}