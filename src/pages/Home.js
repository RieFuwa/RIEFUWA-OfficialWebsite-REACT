import React from 'react'
import Footer from '../partials/Footer';
import Header from '../partials/Header'
import './Styles.css';
import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'
import CardList from '../components/CardList';
import Typical from 'react-typical'
import Share from '../partials/Share';





function Home() {
    return (
        <div className='home'>
            <Header></Header>
            <div className='hom'>
                <div className='slider'>
                    <figure>
                        <a href="https://github.com/RieFuwa" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                            <img className='img' src={img1} align="center" title='Githup' alt="Githup" />
                        </a>
                        <a href="https://play.google.com/store/apps/dev?id=6066419099945322037" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                            <img className='img' src={img2} align="center" title='Rie Fuwa Google Play Store' alt="Meditation" />
                        </a>
                        <a href="https://riefuwa.netlify.app/about" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                            <img className='img' src={img3} align="center" title='Kisisel Web Sitesi' alt="bkabatas" />
                        </a>
                        <a href="https://github.com/RieFuwa" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                            <img className='img' src={img1} align="center" title='Githup' alt="Githup" />
                        </a>
                    </figure>
                </div>
                <hr className='hr'></hr>
                <h1 className='typical'>Hi, I'm Bedirhan Kabatas</h1>
                <p style={({ fontSize: '25px', fontFamily: 'monospace', color: 'white', textAlign: 'center' })}>I'm a {''}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Developer ???????',
                            1000,
                            'Designer ???????',
                            1000,
                            'Open Sourcer ??????',
                            1000,
                            'Student ???????',
                            1000

                        ]}>

                    </Typical>

                </p>
                <h2 className='bas1'>&#9660; &nbsp; Pop??ler ??al????malar??m  &nbsp; &#9660;</h2>
                <hr className='basstyle' ></hr>
                <div className='card-container'>
                    <CardList></CardList>
                </div>
            </div>


            <h2 className='hak1'>&#9660; &nbsp; HAKKIMDA  &nbsp; &#9660;</h2>
            <hr className='basstyle'></hr>

            <div className='shorthak' >

                <div className='shorthak1'>

                    <p className='font'>Herkese selam, ben Bedirhan Kabata?? yaz??l??m m??hendisli??i 3. s??n??f ????rencisiyim.
                        Yaz??l??m ile u??ra??may?? bir ??eyler ortaya ????karmay?? seviyorum.
                        Python ??zerinden Flask ve Django kullanarak 2 adet projem mevcuttur.
                        C++ ??zerinden SFML oyun motorunu kullanarak 2 adet oyun yapt??m.
                        Python ??zerinden Tenserflow kullanarak makine ????renimi ile alakal?? 1 adet projem mevcut.
                        Mobil uygulama geli??tirmeyi insanlara sunmay?? hep hayal ediyordum.
                        Ara??t??rmalar??m sonucu ve arkada??lar??m??n tavsiyesi ile Flutter ????renmeye karar verdim. Google Play Store'a yay??nlad??????m 8 adet uygulamam var.
                        Fakat sadece uygulama geli??tirmeye odaklanmak istemedi??im i??in Front-End ??zerine yo??unla????yorum ve bu g??rd??????n??z ikinci yapt??????m sitedir.
                        Ayr??ca Rie Fuwa, Google Play Store'a y??kledi??im uygulamalar?? yay??nlayan, geli??tirici (takma) ad??d??r.
                        Ben sadece onunla kalmas??n?? istemedi??im i??in yapt??????m her ??eyi internet ??zerinde ??ahsi ismimden ziyade
                        Rie Fuwa ad?? alt??nda yay??nlamak istiyorum. S??zde kurdu??um toplulu??un logosu ve t??m tasar??mlar?? bana aittir.</p>

                </div>
                <div className='body'>
                    <div id="flyin">
                        <div>REACT</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>FLUTTER</div>
                        <div>JAVASCRIPT</div>
                        <div>PYTHON</div>
                        <div>C/C++</div>
                    </div>
                </div>
            </div>
            <h2 className='con1'>&#9660; &nbsp; ??LET??????M  &nbsp; &#9660;</h2>
            <hr className='basstyle'></hr>
            <div className='shortstyle'>

                <form action="https://formspree.io/f/xknygerz" method='POST'>
                    <h3 className='formh3'>???? B??RL?????? VEYA G??R????LER??N??Z?? L??TFEN BANA B??LD??R??N...</h3>
                    <table className='formtab'  >
                        <tbody>


                            <tr>
                                <td><label for="name" >AD,SOYAD : &nbsp;</label></td>
                                <td><input type="text" name="name" id="name" required></input></td>

                            </tr>

                            <tr>
                                <td><label for="mail">MA??L : &nbsp; </label></td>
                                <td><input type="text" name="mail" id="mail" required></input></td>
                            </tr>

                            <tr>
                                <td><label for="konu">KONU :  &nbsp; </label></td>
                                <td><input type="text" name="konu" id="konu" required></input></td>
                            </tr>

                            <tr>
                                <td><label for="mesaj">MESAJ :  &nbsp; </label></td>
                                <td><textarea className='mobiltext' type="text" name="mesaj" id="mesaj"  required></textarea></td>
                            </tr>
                            <tr >
                                <td><input className='but' type="submit" value="G??NDER" ></input>
                                    <input className='but' type="reset" value="TEM??ZLE" ></input></td>
                            </tr>
                        </tbody>
                    </table>

                </form>
                
                <Share></Share>
                
            </div>

            <Footer></Footer>
        </div>
    )
}

export default React.memo(Home)
