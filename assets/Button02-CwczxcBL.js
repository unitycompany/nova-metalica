import{d as r,j as e}from"./index-BY0SluGz.js";const a=r.button`
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid var(--color--black);
  font-weight: 500;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: var(--color--black);
  cursor: pointer;

  &::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: var(--color--blue);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  &:hover::before {
    width: 120%;
    padding: 30px 160px;
  }

  &:hover {
    color: var(--color--white);
    font-weight: 500;
  }
`,i=({children:o,onClick:t})=>e.jsx(a,{onClick:t,"data-aos":"fade-up","data-aos-delay":"100",children:o});export{i as B};
