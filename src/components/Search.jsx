import styled from "styled-components";
import {useState} from "react";
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";




function Search() {

    // const [input, setInput] = useState("");
    // const navigate = useNavigate();

    // const submitHandler = e => {
    //     e.preventDefault();
    //     navigate("/searched/" + input)
    // };

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };
    
    return (
        // <FormStyle onSubmit={submitHandler}>
        <FormStyle onSubmit={(e) => submitHandler(e)}>
            <div>
            <FaSearch></FaSearch>
                <input
                    className="txt_srch"
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                />
                <input
                    className="btn_srch"
                    type="submit" 
                    value="Search" 
                    onClick={(e) => submitHandler(e)} 
                />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    width: 500px;
    margin: auto;
    
    @media (max-width: 768px) {
        width: 100%;
    }

    div{
        position: relative;
        width: 100%;
        display: flex;
    }

    .txt_srch{
        border: none;
        background: linear-gradient(35deg,#494949,#313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem 0 0 1rem;
        outline: none;
        width: 70%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    .btn_srch{
        border: none;
        background: linear-gradient(35deg,#494949,#313131);
        font-size: 1rem;
        color: white;
        border-radius: 0 1rem 1rem 0;
        outline: none;
        width: 30%;
    }
`


export default Search;