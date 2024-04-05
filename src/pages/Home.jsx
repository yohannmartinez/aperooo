import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import Photo from "../assets/Group 2.png"

const StyledMain = styled.div`
  border: 2px black solid ;
  width: 800px ;
  height: 100vh ;
  margin: auto;
`

const Home = () => {
    const navigate = useNavigate()
    return (
        <StyledMain>
            <img src={Photo} alt="" />
            <button onClick={() => navigate("/players")}>
               Jouer !
            </button>
        </StyledMain>
    );
};

export default Home;