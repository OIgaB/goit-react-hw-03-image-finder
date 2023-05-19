//Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм 
//і відображатися велика версія зображення. Модальне вікно повинно закриватися по натисканню 
//клавіші ESC або по кліку на оверлеї.
//Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, тільки замість білого 
//модального вікна рендериться зображення (у прикладі натисніть Run). Анімацію робити не потрібно!


import { Component } from "react";                     // для класів
// import PropTypes from 'prop-types';
import { StyledOverlay, StyledModal } from "./styled";


export class Modal extends Component {       // для класів

    render() {
        // const { handleFormSubmit, handleChange } = this;
        // const { name, number } = this.state;
        return (
                <StyledOverlay>
                    <StyledModal>
                        <img src="" alt="" />
                    </StyledModal>
                </StyledOverlay>
        );
    }
}
