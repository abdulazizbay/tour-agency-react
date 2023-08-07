import React  from "react";
import styled from "styled-components";
export const Buttons=({fontColor,bgColor})=>{
    return (
        <>
            <StyledButtons fontColor={fontColor} bgColor={bgColor}>
                <div>
                    Explore
                </div>
            </StyledButtons>
        </>
    )
}

const StyledButtons = styled.div`
  background-color: ${(props)=>props.bgColor};
  width: 161px;
  height: 58px;
  font-size: 25px;
  font-weight: 300 ;
  color: ${(props)=>props.fontColor};
  text-align: center;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`