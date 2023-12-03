import React from "react";
import styled from "styled-components";

// // using style componentes
 const Rownav = styled.div`
  display: flex;
  justify-content: space-between;
  background:linear-gradient(170deg, #1bc059, #0d47a1);
  padding: 15px;
 `;

class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props;
        return(
            <>
            <Rownav>
                <div>
                    navbar
                </div>
                <div className="imgcart">
                  <img alt="cart img" src="https://img.freepik.com/free-vector/illustration-shopping-online_53876-5906.jpg?w=740&t=st=1701372161~exp=1701372761~hmac=53b054cfdbddbddb8fe9286f3e4a013fc73ac8e297999020c1b2b60c23526b96"/>
                  <sup>{cartCount}</sup>
                </div>
            </Rownav>

            
            </>
        )
    }
}

export default Navbar;