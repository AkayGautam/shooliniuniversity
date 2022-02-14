import styled from "styled-components";
import { colors } from "../elements/elements";

export const Styles = styled.div`
.thinkLearning
{

.learningCard {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
h3.subHeading {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #333;
}
.course-details-feature 
max-width: 610px;
{
li a {
    font-size: 20px;
    color: #615c5c;
    width: 100%;
    line-height: 1.7;
    padding: 3px 0;
    border-bottom: 1px solid #cecece;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

span svg {
    font-size: 25px;
    margin-right: 80px;
    color: #333;transition: all 0.1s 0.5s ease; 
}


}
li:hover span svg {
    fill: red;color: red;
    margin-right: 90px;
}


}

}
`;