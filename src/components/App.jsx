import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
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
        <Modal />
      </Container> 
    );
  }
}

//   {getVisibleContacts().length !==0 && <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />}  
//   {getVisibleContacts().length ===0 && <AlertMessage>There is no contact matching your request.</AlertMessage>}