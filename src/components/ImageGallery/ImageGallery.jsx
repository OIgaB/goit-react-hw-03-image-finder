//Список карток зображень

import { Component } from "react";                     // для класів
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem"; 
import { Loader } from '../Loader/Loader';
import { Button } from './Button/Button';
import { StyledGallery, StyledImage, Notification } from "./styled";
import PropTypes from 'prop-types';
import placeholderImg from './placeholder-image.png';
import api from '../services/pixabay-api';


export class ImageGallery extends Component {      

    state = {
        images: [],
        pageNumber: 1,
        isLoading: false,
        error: null,
        noMatch: false,
    }


    getSnapshotBeforeUpdate() {
        return {
            scrollY: window.scrollY,
        };
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {     // приходить query
        try {
            if(prevProps.query !== this.props.query) {
                this.setState({ images: [] });
                await this.getImages(this.props.query, this.state.pageNumber); // виклик ф-ції
            }

            if(prevState.pageNumber !== this.state.pageNumber ) {
                await this.getImages(this.props.query, this.state.pageNumber); // виклик ф-ції

                setTimeout(() => {
                    window.scrollBy({
                        top: snapshot.scrollY,
                        behavior: 'smooth',
                    });
                }, 150);
            }
        } catch(error) {
            this.setState({ error: error.message }); 
        }

    }

    getImages = async (query, pageNumber) => {
        this.setState({ isLoading: true }); 
        try {
            const {data} = await api.fetchImages(query, pageNumber);

            if(data.hits.length === 0) {
                return this.setState({ noMatch: true });
            }

            this.setState(prevState => ({ 
                images: [...prevState.images, ...data.hits],
                noMatch: false
            }));
        } catch(error) {
           this.setState({ error: error.message }); 
        } finally {
            this.setState({ isLoading: false }); 
        }
    }

    handleBtnClick = () => {
        this.setState((prevState) => ({
            pageNumber: prevState.pageNumber + 1
        }));   
    } 


    render() {
        const { isLoading, noMatch, images } = this.state;
        
        if(isLoading) {
            return <Loader />
        }

        if(noMatch) {
             return (
                <>
                    <StyledImage src={placeholderImg} alt='man on the moon' />
                    <Notification>No images corresponding your request found in our Universe. Try searching for another term.</Notification>
                </>
             )
        }

        return (
            <>
                <StyledGallery>
                    {images.length !== 0 &&  
                        images.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} query={this.props.query} />     // <li> 
                    ))}
                </StyledGallery>

                {images.length !== 0 && <Button onClick={this.handleBtnClick}/> } 
            </>
        );            
    }
}

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
};