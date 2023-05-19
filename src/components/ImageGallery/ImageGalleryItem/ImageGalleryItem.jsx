//Компонент елемента списку із зображенням

import { Component } from "react";                     // для класів
// import PropTypes from 'prop-types';
import { StyledImageGalleryItem, Image } from "./styled";


export class ImageGalleryItem extends Component {       // для класів

    handleImgClick = (event) => {
        console.log(event.currentTarget);
        // запуск модалки
    }

    render() {
        // const { handleFormSubmit, handleChange } = this;
        // const { name, number } = this.state;
        return (
            <StyledImageGalleryItem onClick={this.handleImgClick}>
                <Image src={this.props.webformatURL} alt={this.props.query} />
            </StyledImageGalleryItem>
        );
    }
}

// this.props.largeImageURL

// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна