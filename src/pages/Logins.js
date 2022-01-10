import React from 'react'
import { Alert } from "reactstrap"
import Footer from '../partials/Footer'
import Header from '../partials/Header'
function Logins() {
    return (
        <div className='login'>
            <Header></Header>
            <div className='shortlogin'>
                <Alert className='alerts'>
                    <h4 className="alert-heading">
                        GİRİŞ SİSTEMİ KURULMADI!
                    </h4>
                    <p>
                        Sisteme giriş ve kayıt olma konusunda yaşanan hatanın farkındayım en kısa sürede çözüme kavuşturacağım.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Anlayışınız için teşekkür ederim.
                    </p>
                </Alert>
            </div>
            <div >
                <div className='formstyle'>
                    <hr2 className="loginhr2">GİRİŞ YAP</hr2>

                    <table className='formtab1'>

                        <tbody>
                            <tr>
                                <td><label for="mail">AD VEYA MAİL : &nbsp; </label></td>
                                <td><input type="text" name="mail" id="mail" required></input></td>
                            </tr>
                            <tr>
                                <td><label for="mail">ŞİFRE : &nbsp; </label></td>
                                <td><input type="password" name="mail" id="mail" required></input></td>
                            </tr>
                            <tr >
                                <td><input className='but' type="submit" value="GİRİŞ" ></input>
                                    <input className='but' type="reset" value="TEMİZLE" ></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr2 className="loginhr2">KAYIT OL</hr2>

                    <table className='formtab1'>

                        <tbody>
                            <tr>
                                <td><label for="name" >AD : &nbsp;</label></td>
                                <td><input type="text" name="name" id="name" required></input></td>

                            </tr>
                            <tr>
                                <td><label for="name" >SOYAD : &nbsp;</label></td>
                                <td><input type="text" name="name" id="name" required></input></td>

                            </tr>

                            <tr>
                                <td><label for="mail">MAİL : &nbsp; </label></td>
                                <td><input type="text" name="mail" id="mail" required></input></td>
                            </tr>
                            <tr>
                                <td><label for="mail">ŞİFRE : &nbsp; </label></td>
                                <td><input type="password" name="mail" id="mail" required></input></td>
                            </tr>
                            <tr>
                                <td><label for="mail">ŞİFRE TEKRAR : &nbsp; </label></td>
                                <td><input type="password" name="mail" id="mail" required></input></td>
                            </tr>

                            <tr >
                                <td><input className='but' type="submit" value="KAYDOL" ></input>
                                    <input className='but' type="reset" value="TEMİZLE" ></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default React.memo(Logins)
