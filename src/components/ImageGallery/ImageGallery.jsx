//Список карток зображень
import { Component } from "react";                     // для класів
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem"; 
import { Loader } from '../Loader/Loader';
import { Button } from './Button/Button';
// import PropTypes from 'prop-types';
import { StyledGallery, StyledImage, Notification } from "./styled";
import placeholderImg from './placeholder-image.png';
import api from '../services/pixabay-api';


export class ImageGallery extends Component {       // для класів

    state = {
        images: [],
        pageNumber: 1,
        isLoading: false,
        error: null,
        noMatch: false,
    }

    componentDidUpdate(prevProps, prevState) {     // приходить query
        // console.log("I am a prevProps:", prevProps);
        // console.log("I am a this.props:", this.props);

        if(prevProps.query !== this.props.query) {
            this.setState({ images: [], pageNumber: 1 });
            this.getImages(this.props.query, this.state.pageNumber); // виклик ф-ції
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
            //   this.setState(prevState => ({
            //     page: prevState.page,
            //     total: responseImages.total,
            //   }));

        } catch(error) {
           this.setState({ error: error.message }); // shorthand
        } finally {
            this.setState({ isLoading: false }); 
        }
    }

    handleBtnClick = () => {
        this.setState((prevState) => {
            prevState.pageNumber += 1
            console.log(this.state.pageNumber);
        })   
    } 

    render() {
        // const { handleFormSubmit, handleChange } = this;
        const { images } = this.state;
        

        if(this.state.isLoading) {
            return <Loader />
        }

        if(this.state.noMatch) {
             return (
                <>
                    <StyledImage src={placeholderImg} alt='man on the moon' />
                    <Notification>No images found in our Universe corresponding your request. Try searching for another term.</Notification>
                </>
             )
        }

        return (
            <>
                <StyledGallery>
                    {this.state.images.length !== 0 &&  
                        images.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} query={this.props.query} />       // <li> 
                    ))}
                </StyledGallery>
                {this.state.images.length !== 0 && <Button onClick={this.handleBtnClick}/> } 
            </>
        );            
    }
}