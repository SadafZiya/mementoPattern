import {capcha} from '../../asset/AllImage'
import styled from 'styled-components'

export const VideoListDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    display: block;
    position: absolute;
    font-size: 11px;
    width: auto;
    width: 165px; 
    left: 50px;
    div{
    direction: rtl;
    float: right;
    padding: 5px;
    border-bottom: 1px solid gray;
    width: 100%;  
    span{
        float: right;
    }
    img{
        float: left;
    }
   }
   div:hover{
   background-color:#dad6d6;
   }
`
export const CapchaDivStyled = styled.div`
        margin-top:10px;
        height:36px;
    div{
    background-image: url(${props => capcha[props.bg]});
    display: inline-block;
    width: 80%;
    height:36px;
    img{
        padding: 5px;
        width: 40%;
        min-height: 25px !important;
    }
    }
    button{
    box-shadow:none !important;
    margin-top: -3px;
    }
      
`