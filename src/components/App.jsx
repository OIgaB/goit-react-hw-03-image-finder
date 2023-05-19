import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Container } from "./styled";


export class App extends Component {

  state = {
    query: '',
  }

  handleFormSubmit = (query) => {
    console.log(query);
    this.setState({ query }); // shorthand
  }



  render() {
    // const { addContact, handleFilter, getVisibleContacts, deleteContact } = this;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}/>       {/* onSubmit - не подія, а назва пропса*/}
        <ImageGallery query={this.state.query} /> 
        <Loader /> 
        <Button /> 
        <Modal />
      </Container> 
    );
  }
}

//   {getVisibleContacts().length !==0 && <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />}  {/* якщо фільтр пустий, то передасться [] контактів зі state, якщо повний, то [] зі співпадіннями  */}
//   {getVisibleContacts().length ===0 && <AlertMessage>There is no contact matching your request.</AlertMessage>}