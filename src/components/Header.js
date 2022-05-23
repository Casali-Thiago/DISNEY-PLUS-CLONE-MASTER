import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/img/logo.svg"/>
      <NavMenu>
        <a>
          <img src="/img/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/img/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/img/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/img/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/img/series-icon.svg" />
          <span>SERIES</span>
        </a>
        
      </NavMenu>
       <UserImg src="https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/73062837_2507737532644238_7065166501216518144_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGJ92ydZTVCbpMUyCm7X86itYZsWekMIPq1hmxZ6Qwg-g3cnJDGYTWHtnnUuzIvbYm49Rcz9yl7wCcU8o9VwTQR&_nc_ohc=jN2Fk7ssCNIAX9FvQeS&tn=LtswYd_6bkAXhQG1&_nc_ht=scontent.fcgh22-1.fna&oh=00_AT860Ue4cmoJHjjiTTSuQt9wz78KKsk0q8hK2w7bF1WjeA&oe=62AD25A8" />
    
    </Nav>
  )
}

export default Header

const Nav =styled.div`
  height: 70px;
  background: #090b13; 
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;


`

const Logo =styled.img`
width:80px;

`

const NavMenu =styled.div`
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;

a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;

  img{
    height: 20px;
  }

  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);

    }
  }
  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;

    }
  }
}
`

const UserImg =styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`