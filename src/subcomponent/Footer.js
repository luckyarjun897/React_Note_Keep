//import {useState} from 'react';
import './Header.css';
function Footer(){
    let date=new Date();
    let day=date.getDate();
    let month=date.getMonth();
    let year =date.getFullYear();
    return(
        <>
            <footer className="footer">
            <h5>{day}-{month}-{year}</h5>
            </footer>    
        </>
    )
}
export default Footer;