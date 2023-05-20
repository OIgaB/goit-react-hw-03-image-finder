import styled from 'styled-components';

export const StyledGallery = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`; 

export const StyledImage = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 500px;
    object-fit: cover;
`; 

export const Notification = styled.p`
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    font-style: italic;
`; 