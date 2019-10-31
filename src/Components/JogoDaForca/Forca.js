import React from 'react'

export default function Forca(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 382.32 510.84"
      viewBox="0 0 382.32 510.84"
      height={`${props.height}`}
    >
      <path
        fill="#444242"
        d="M326.386 11.436v4.502a6.302 6.302 0 01-6.302 6.302H12.417a6.302 6.302 0 01-6.302-6.302v-4.502a6.302 6.302 0 016.302-6.302h307.667a6.302 6.302 0 016.302 6.302z"
      ></path>
      <path fill="#444242" d="M36.226 22.239H53.506V505.786H36.226z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M274.374 22.239V80.19"
      ></path>
      {props.erros >= 6 ?
        <circle
          id="cabeca"
          cx="274.374"
          cy="125.229"
          r="45.038"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle> : null
      }
      {props.erros >= 5 ?
        <path
          id="braco-esquerdo"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M274.374 215.44L196.014 159.28"
        ></path> : null
      }
      {props.erros >= 4 ?
        <path
          id="braco-direito"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M274.374 215.44L361.32 215.44"
        ></path> : null
      }
      {props.erros >= 1 ?
        <g>
          <path
            id="tronco"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M274.374 170.267v117.092"
          ></path>
        </g> : null
      }
      {props.erros >= 3 ?
        <path
          id="perna-esquerda"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M274.374 287.359L222.534 376.36"
        ></path> : null
      }
      {props.erros >= 2 ?
        <path
          id="perna-direita"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M274.374 287.359L344.04 376.36"
        ></path> : null
      }
    </svg>
  )
}
