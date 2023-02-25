
import styled from 'styled-components';


export const StyledProjectRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5% 7%;
    height: fit-content;
    @media screen and (min-width: 756px) {
        flex-flow: ${props => props.reverse ? 'row-reverse' : 'row'};
    }
    .text-col {
        width:50%;
        padding: 10% 7%;
        h3 {
            font-family: ${props => props.theme.fontHeading};
            font-size: 40px;
            font-weight: ${props => props.theme.fontWeight6};
            color: ${props => props.theme.projectText};
            margin-bottom: 10px;
        }
        p {
            font-family: ${props => props.theme.fontBody};
            font-size: 18px;
            font-weight: ${props => props.theme.fontWeight4};
            color: ${props => props.theme.projectText};
            margin-bottom: 10px;
        }
        Button {
            width: 250px;
            font-family: ${props => props.theme.fontBody};
            margin: 30px auto;
            font-size: 20px;
            border-color: ${props => props.theme.projectText};
            color: ${props => props.theme.projectText};
            @media screen and (max-width: 756px) {
                width: 100%;
            }
        }
    }
    .img-col {
        padding-top:${props => props.centered ? '9%' : ''} ;
        .project-img {
            width: 100%;
        }
    }



    






    

`;

