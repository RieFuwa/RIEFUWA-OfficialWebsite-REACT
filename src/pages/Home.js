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
                            'Developer 💻✓',
                            1000,
                            'Designer 🛠✓',
                            1000,
                            'Open Sourcer ✅✓',
                            1000,
                            'Student 🙋✓',
                            1000

                        ]}>

                    </Typical>

                </p>
                <h2 className='bas1'>&#9660; &nbsp; Popüler Çalışmalarım  &nbsp; &#9660;</h2>
                <hr className='basstyle' ></hr>
                <div className='card-container'>
                    <CardList></CardList>
                </div>
            </div>


            <h2 className='hak1'>&#9660; &nbsp; HAKKIMDA  &nbsp; &#9660;</h2>
            <hr className='basstyle'></hr>

            <div className='shorthak' >

                <div className='shorthak1'>

                    <p className='font'>Herkese selam, ben Bedirhan Kabataş yazılım mühendisliği 3. sınıf öğrencisiyim.
                        Yazılım ile uğraşmayı bir şeyler ortaya çıkarmayı seviyorum.
                        Python üzerinden Flask ve Django kullanarak 2 adet projem mevcuttur.
                        C++ üzerinden SFML oyun motorunu kullanarak 2 adet oyun yaptım.
                        Python üzerinden Tenserflow kullanarak makine öğrenimi ile alakalı 1 adet projem mevcut.
                        Mobil uygulama geliştirmeyi insanlara sunmayı hep hayal ediyordum.
                        Araştırmalarım sonucu ve arkadaşlarımın tavsiyesi ile Flutter öğrenmeye karar verdim. Google Play Store'a yayınladığım 8 adet uygulamam var.
                        Fakat sadece uygulama geliştirmeye odaklanmak istemediğim için Front-End üzerine yoğunlaşıyorum ve bu gördüğünüz ikinci yaptığım sitedir.
                        Ayrıca Rie Fuwa, Google Play Store'a yüklediğim uygulamaları yayınlayan, geliştirici (takma) adıdır.
                        Ben sadece onunla kalmasını istemediğim için yaptığım her şeyi internet üzerinde şahsi ismimden ziyade
                        Rie Fuwa adı altında yayınlamak istiyorum. Sözde kurduğum topluluğun logosu ve tüm tasarımları bana aittir.</p>

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
            <h2 className='con1'>&#9660; &nbsp; İLETİŞİM  &nbsp; &#9660;</h2>
            <hr className='basstyle'></hr>
            <div className='shortstyle'>

                <form action="https://formspree.io/f/xknygerz" method='POST'>
                    <h3 className='formh3'>İŞ BİRLİĞİ VEYA GÖRÜŞLERİNİZİ LÜTFEN BANA BİLDİRİN...</h3>
                    <table className='formtab'  >
                        <tbody>


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
                                <td><input type="text" name="konu" id="konu" required></input></td>
                            </tr>

                            <tr>
                                <td><label for="mesaj">MESAJ :  &nbsp; </label></td>
                                <td><textarea className='mobiltext' type="text" name="mesaj" id="mesaj"  required></textarea></td>
                            </tr>
                            <tr >
                                <td><input className='but' type="submit" value="GÖNDER" ></input>
                                    <input className='but' type="reset" value="TEMİZLE" ></input></td>
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
