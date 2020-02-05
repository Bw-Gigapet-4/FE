import styled from "styled-components";

const FormContainer = styled.div`
    margin: 30px auto;
    width: 300px;
    background: #e6e6e6;
    padding-bottom: 20px;
    border: 2px solid #a6a6a6;
    border-radius: 20px;
    box-shadow: 2px 1px 3px #808080;

    
`;

const FormItem= styled.div`
    height:45px;
`;

const FormError = styled.div`
    color:red;
    font-size: 0.7rem;
`;

const FormFood = styled.div`
    display:flex;
    flex-directon: row;
    justify-content: space-evenly;
    max-width: 800px;
    height: 60px;
    margin 10px auto;
`;

const FoodFormLable = styled.p`
    font-size: 0.8rem;
    margin: 0px;
    padding-top: 5px;
`;

const DashContainer = styled.div`
    width: 95%;
    min-height: 400px;
    margin: 10px auto;
    border solid 3px #a6a6a6;
    border-radius: 20px;
`;

const DashNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
`;

const DisplayFlex = styled.div`
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;

const DisplayBox = styled.div`
    width: 30%;
    min-height: 330px;
    border: 2px solid #a6a6a6;
    border-radius: 15px;
`;
 
export {
    FormContainer, 
    FormItem, 
    FormError, 
    FormFood, 
    FoodFormLable, 
    DashContainer,
    DashNav,
    DisplayFlex,
    DisplayBox, 

}; 