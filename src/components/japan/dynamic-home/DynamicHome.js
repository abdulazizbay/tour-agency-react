import styled from "styled-components";
export const DynamicHome = (props) => {
    return (
        <>
            <StyledDynamicHome  backgroundImg={props.backgroundImg}>
                    <div className='big-text-red'>
                        <img src={props.textImg} onClick={() => props.onImageChange(props.textImg)} />
                    </div>

                <div className="option-set">
                    {props.option.map((option, index) => (
                        <div className="option" key={option}>
                            <img
                                src={props.smallImg[index]}
                                alt={option}
                                onClick={() => props.onImageChange(props.smallImg[index])}
                            />
                            <div className='text-option'>{option}</div>
                        </div>
                    ))}
                </div>
            </StyledDynamicHome>
        </>
    )
}

const StyledDynamicHome = styled.div`
  
  background:  center/cover url(${props=>props.backgroundImg}) no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 300px 0 45px 0;
  .big-text-red{
    img{
      max-width: 742px;
      max-height: 516px;
    }
  }
  .option-set {
    //padding: 0 150px;
    display: flex;
    flex-direction: row;
    gap: 300px;
    align-items: center;
    .option{
      color: #fff;
      font-size: 24px;
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
      img{
        height: 180px;
        width: 180px;
        border-radius: 50%;
        border:  #fff solid 3px;
        margin-bottom: 15px;
      }
      
    }
  }
  @media screen and (max-width: 1919px) {
    padding: 200px 0 20px 0 ;
    .big-text-red{
      img{
        max-width: 450px ;
        max-height: 200px;
      }

    }
    
  .option-set {
    gap: 220px;
    .option{
      img{
        width: 140px;
        height: 140px;
      }
    }
    

  }
  }

  @media screen and (max-width: 1439px) {
    padding: 240px 0 50px 0;

    .big-text-red {
      img {
        max-width: 220px;
        max-height: 120px;
      }
    }

    .option-set {
      gap: 0;
      flex-wrap: wrap;

      .option {
        width: 50%; 
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        img {
          width: 100px;
          height: 100px;
          margin: 20px 0 0 5px;
        }

        .text-option {
          margin-top: 10px;
        }
      }
    }
  }
`;