import styled from "styled-components";

// const colorRed = "#c00000";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    min-height: 100vh;
    background-color: #d7d7d7;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    select {
        min-height: 200px;
        height: 50vh;
        min-width: 150px;
        margin-right: 30px
    }
    button {
        width: 50px;
        height: 50px;
        display: block;
        font-size: 1.5rem;
        margin-bottom: 20px;
        border: #000dc0 1px solid;
        border-radius: 10px;
    }
`;