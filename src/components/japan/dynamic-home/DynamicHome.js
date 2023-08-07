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
  padding: 306px 0 45px 0;
  .big-text-red{
    img{
      max-width: 742px;
      max-height: 516px;
    }
  }
  .option-set {
    padding: 0 150px;
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
`;

