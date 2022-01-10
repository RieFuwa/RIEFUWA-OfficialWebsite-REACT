import React from 'react'
import './Styles.css';
import { NavLink} from "react-router-dom";
import { Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css'

function Header() {
    return <div className='as'> 
        <div className='logo-container'>
            <h1 className='head'>RIE FUWA</h1>
        </div>
        <nav className='menu-container'>
            <ul>
                <li>
                    <NavLink style={({ color: "white", textDecoration: 'none' })} to="/">ANA SAYFA</NavLink>
                </li>
                <li>
                    <NavLink style={({ color: "white", textDecoration: 'none'})} to="/Applications">UYGULAMALAR</NavLink>
                </li>
                <li>
                    <NavLink style={({ color: "white", textDecoration: 'none' })} to="/Projects">PROJELER</NavLink>
                </li>
                <li>
                    <NavLink style={({ color: "white", textDecoration: 'none' })} to="/About">HAKKIMDA</NavLink>
                </li>
                <li>
                    <NavLink style={({ color: "white", textDecoration: 'none' })} to="/Contact">İLETİŞİM</NavLink>
                </li>
                <li>
                    <NavLink style={({ color: "white", textDecoration: 'none' })} to="/Login">
                             <Button className='button.container'  color="primary" > GIRIS </Button>
                    </NavLink>
                </li>            
            </ul>      
            {/* <button className='button-container'>GİRİŞ</button> */}
        </nav>
    
    </div>
}
export default  React.memo(Header);

