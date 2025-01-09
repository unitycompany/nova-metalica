import{d as n,j as o}from"./index-DQu0KJge.js";const i=n.a`
    outline: none;
    cursor: pointer;
    border: none;
    padding: 15px 25px;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    border-radius: 10px;
    overflow: hidden;
    background: var(--color--blue);
    color: var(--color--black);

    & span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    }

    &:hover span {
    color: var(--color--white);
    }

    &::before,
    &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    }

    &::before {
    content: "";
    background: var(--color--white);
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }

    &:hover::before {
    transform: translate3d(100%, 0, 0);
    }
`,s=({children:r,href:t,onClick:e})=>o.jsx(i,{href:t,onClick:e,children:o.jsx("span",{children:r})});export{s as B};
