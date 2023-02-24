import styled from 'styled-components';

export const StyledHeroSection = styled.div`
    display:flex;
    flex-direction:row;
    padding: 5% 7%;
    width: 100%;
    @media screen and (max-width: 375px) {
        display: flex;
        flex-flow: column-reverse !important;
    }
    .text-col {
        padding: 3% 7%;
        z-index: 1;
        display: flex;
        align-items: center;
        width:50%;
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.body};
        @media screen and (min-width: 960px) {
            position: absolute;
            left: 0;
            top: 35vw;
            height: 26vw;
            padding-right: 12%;
        }
        h1 {
            font-family: $font-heading;
            font-size: 50px;
            font-weight: $font-weight7;
            margin-bottom: 10px;
        }
    }
    .img-col {
        overflow:hidden;
        .hero-section-img {
            width: auto;
            
        }
    }

`;