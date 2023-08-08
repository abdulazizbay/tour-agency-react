import React  from "react";
import styled from "styled-components";
import "./searchButton.css"
import fk from "../../../assets/facebook.png"
import yt from "../../../assets/youtube.png"
import ins from "../../../assets/instagram.png"
import tch from "../../../assets/twitch.png"
import {Buttons} from "../button/Buttons"
export const Navbar=()=>{
    const ListToggle = [yt, tch, fk, ins]
    return (
        <>
            <StyledNavbar>
                <div className="learn-about-container">
                    <ul>
                        <li>HOMETALES OF JAPAN</li>
                        <li>DESTNATIONS</li>
                        <li>EXPERIECES</li>
                    </ul>
                    <div className="search__container">
                        <input className="search__input" type="text" placeholder="Search..."/>
                    </div>
                </div>
                <div className="social-container">
                    <ul>
                        {ListToggle.map((toggle)=>{
                            return <li><img src={toggle}/></li>
                        })}

                    </ul>
                    <div className="explore-toggle">
                        <Buttons fontColor="white" bgColor="#FF0000"/>
                    </div>


                </div>

            </StyledNavbar>
        </>
    )
}

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 33px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 

  .learn-about-container{
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ul{
      display: flex;
      flex-direction: row;
      padding: 25px 0 0 162px;
      color: #fff;
      text-transform: uppercase;
      gap: 30px;
      font-size: 16px;
      
    }
    .search__container{
      padding-left: 106px;
    }
    
  
  }
  .social-container{
    display: flex;
    flex-direction: row;
    padding-right: 143px;
    ul{
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding: 22px 20px 0 0 ;
    }
    .explore-toggle{
      padding-top: 13px;
    }
    
  }
  @media screen and (max-width: 1919px) {
    .learn-about-container{
      ul{
        padding: 15px 0 0 60px;
      }
      .search__container{
        padding-left: 50px;
      }
    }
  }
  .social-container{
    padding: 0 63.2px 0 45px;
    ul{
      padding: 13px;
      img{
        width: 90%;
      }
    }
    .explore-toggle{
      padding-top: 4px;
    }
    
  }

  @media screen and (max-width: 1439px) {
    .social-container {
      display: none;
    }

    .learn-about-container {
      display: grid;
      grid-column: 2;
      align-items: center;
      gap: 10px;
      padding: 10px 0 0 20px;

      ul {
        padding: 0;
        font-size: 12px;
        flex-wrap: wrap;
      }
      .search__container{
        display: none;
      }
      
    }
  }
\` ;






  
`