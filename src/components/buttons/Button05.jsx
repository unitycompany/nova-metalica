import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: var(--color--white);
    background: linear-gradient(45deg, var(--color--blue), var(--color--dark--blue));
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
`

const Button05 = ({text}) => {
    return (
        <>
            <Button onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })}>{text}</Button>
        </>
    )
}

export default Button05;