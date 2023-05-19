//При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень 
//і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, 
//коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.

import { Component } from "react";                     // для класів
// import PropTypes from 'prop-types';
import { StyledButton } from "./styled";


export class Button extends Component {       // для класів

    render() {
        // const { handleFormSubmit, handleChange } = this;
        // const { name, number } = this.state;
        return (
            <StyledButton>Кнопкааа!</StyledButton>
        );
    }
}