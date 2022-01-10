import React from 'react'
import Footer from '../partials/Footer';
import Header from '../partials/Header'
import './Styles.css';
function About() {
    return (
        <div className='abo'>
            <Header></Header>
            <div className='shorthak' >
            <hr className='hrr'></hr>
                <div className='shorthak1'>
                    <p className='font1'>Herkese selam, ben Bedirhan Kabataş yazılım mühendisliği 3. sınıf öğrencisiyim.
                        Yazılım ile uğraşmayı bir şeyler ortaya çıkarmayı seviyorum. 
                        Python üzerinden Flask ve Django kullanarak 2 adet projem mevcuttur. 
                        C++ üzerinden SFML oyun motorunu kullanarak 2 adet oyun yaptım.
                        Python üzerinden Tensorflow kullanarak makine öğrenimi ile alakalı 1 adet projem mevcut.
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
            
            <Footer></Footer>

        </div>
    )
}

export default  React.memo(About)
