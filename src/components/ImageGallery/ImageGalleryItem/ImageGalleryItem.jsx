//Компонент елемента списку із зображенням

import { Component } from "react";                     // для класів
import { Modal } from './Modal/Modal';
import PropTypes from 'prop-types';
import { StyledImageGalleryItem, Image } from "./styled";


export class ImageGalleryItem extends Component {      
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({ 
            showModal: !showModal, 
        }));
    }

    handleImgClick = () => {
        this.toggleModal();  // запуск модалки
    }

    render() {
        const { handleImgClick, toggleModal } = this;
        const { webformatURL, largeImageURL, query } = this.props;
        return (
            <>
                <StyledImageGalleryItem onClick={handleImgClick}>
                    <Image src={webformatURL} alt={query} />
                </StyledImageGalleryItem>
                {this.state.showModal && <Modal largeImageURL={largeImageURL} query={query} onClose={toggleModal} />}
            </>
        );
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
};