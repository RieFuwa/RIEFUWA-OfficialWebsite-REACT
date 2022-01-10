import React from 'react'
import Footer from '../partials/Footer';
import Header from '../partials/Header'
import './Styles.css';
import Share from '../partials/Share';
function Contact() {
    return (
        <div className='cont'>
            <Header></Header>
            <div className='shortstyle'>
               
                <form action="https://formspree.io/f/xknygerz" method='POST'>
                    <h3 className='formh3'>İŞ BİRLİĞİ VEYA GÖRÜŞLERİNİZİ LÜTFEN BANA BİLDİRİN...</h3>
                    <table className='formtab'  >
                        <tr>
                            <td><label for="name" >AD,SOYAD : &nbsp;</label></td>
                            <td><input type="text" name="name" id="name" required></input></td>
                            
                        </tr>
                        
                        <tr>
                            <td><label for="mail">MAİL : &nbsp; </label></td>
                            <td><input type="text" name="mail" id="mail" required></input></td>
                        </tr>
                        
                        <tr>
                            <td><label for="konu">KONU :  &nbsp; </label></td>
                            <td><input type="text" name="konu" id="konu"required></input></td>
                        </tr>
                        
                        <tr>
                            <td><label for="mesaj">MESAJ :  &nbsp; </label></td>
                            <td><textarea className='mobiltext' type="text" name="mesaj" id="mesaj"  required></textarea></td>
                        </tr>
                        <tr >
                            <td><input className='but' type="submit" value="GÖNDER" ></input>
                            <input className='but' type="reset" value="TEMİZLE" ></input></td>
                            
                        </tr>
                        
                    </table>
                    
                </form>
                <Share></Share>
            </div>            
            <Footer></Footer>
        </div>
    )
}

export default  React.memo(Contact)
