//При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень 
//і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, 
//коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.

import { Component } from "react";                     // для класів
import { StyledButton } from "./styled";
// import PropTypes from 'prop-types';


export class Button extends Component {       // для класів

    render() {
        // const { handleFormSubmit, handleChange } = this;
        // const { name, number } = this.state;
        return (
            <StyledButton type="button" onClick={() => this.props.onClick()}>Load more</StyledButton>
        );
    }
}


// export const LoadMoreButton = ({ onClick }) => {
//     return (
//       <LoadButton type="button" onClick={onClick}>
//         Load more
//       </LoadButton>
//     );
//   };