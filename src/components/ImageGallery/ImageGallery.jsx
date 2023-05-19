//Список карток зображень
import { Component } from "react";                     // для класів
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem"; 
// import PropTypes from 'prop-types';
import { StyledGallery } from "./styled";
import placeholderImg from '..services/placeholder-image.png';
import api from '../services/pixabay-api';

// const Status = { // state-machine
//     IDLE: 'idle',
//     PENDING: 'pending',
//     RESOLVED: 'resolved',
//     REJECTED: 'rejected',
// }


export class ImageGallery extends Component {       // для класів

    state = {
        images: [],
        pageNumber: 1,
        isLoading: false,
        error: null,
        // status: Status.IDLE,
    }

    componentDidUpdate(prevProps, prevState) {     // приходить query
        // console.log("I am a prevProps:", prevProps);
        // console.log("I am a this.props:", this.props);

        if(prevProps !== this.props) {
            this.getImages(this.props, this.state.pageNumber); // виклик ф-ції
        }
    }

    getImages = async (query, pageNumber) => {
        this.setState({ isLoading: true }); 
        try {
            const {data} = await api.fetchImages(query, pageNumber);
            this.setState({ images: data.hits }); // масив об'єктів  
        } catch(error) {
           this.setState({ error }); // shorthand
        } finally {
            this.setState({ isLoading: false }); 
        }
    }

    render() {
        // const { handleFormSubmit, handleChange } = this;
        const { images } = this.state;
        return (
            <StyledGallery>
                {images !== [] &&  // поки зображення не підгрузяться з бекенда images = null. Помилка: null.map  
                    images.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} query={this.props.query} />       // <li> 
                ))
                }
                {images === [] && <image src={placeholderImg} alt='man on the moon' />}
            </StyledGallery>
        );
    }
}