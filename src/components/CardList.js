import React from 'react'
import './Styles.css';
import eng from '../assets/eng.png'
import git from '../assets/github.jpg'
import Typical from 'react-typical'
const Card1 = () => {

    return (
        <div className='cardshow' >
            <h1 className='cardlisthr'> &#10095;&#10095;&#10095;&#10095;&#10095;
                <br /><br />POPÜLER OLAN <br /><Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Uy',
                        400,
                        'Uygu',
                        400,
                        'Uygula',
                        400,
                        'Uygulama',
                        4000,

                    ]}>

                </Typical><br /><br /> &#10095;&#10095;&#10095;&#10095;&#10095;</h1>
        </div>
    )
}

const Card11 = () => {
    return (
        <div className='cards'>
            <div>
                <div className='has3'>
                    <a style={({ color: "white", textDecoration: 'none' })} href="https://github.com/RieFuwa/Django-WEB-Covid-19-ChatBot-Tensorflow-with-Python" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img src={git} className='cardlistimg' title='Django COVID-19 CHATBOT' alt="Stories" /> <h3 className='cardlisth3'> <br />DJANGO COVID-19 CHATBOT</h3>
                    </a>
                </div>

                <div className='car'></div>
                <ul className='list'>
                    <li>Web-UI ile yapay zekayla sohbet,</li>
                    <li>Covid-19 belirtilerinizi belirtin,</li>
                    <li>Covid-19 hastalığı ile ilgili tavsiyelerinizi alın.</li>
                </ul>

            </div>
        </div>
    )
}

const Card2 = () => {
    return (
        <div className='cards'>
            <div>
                <div className='has3'>
                    <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.englishstories" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img className='cardlistimg' src={eng} title='English Stories Audio' alt="Stories" /> <h3 className='cardlisth3'><br />English Stories</h3>
                    </a>
                </div>

                <div className='car'></div>

                <ul className='list'>

                    <li>Seviyene göre ingilizce hikaye,</li>
                    <li>Çocuklar için ingilizce şarkılar,</li>
                    <li>Dilediğin zaman dinleme şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const Card22 = () => {
    return (
        <div className='cardshow'>
            <h1 className='cardlisthr'> &#10094;&#10094;&#10094;&#10094;&#10094;<br /><br />
                POPÜLER OLAN <br /><Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'P',
                        400,
                        'Pro',
                        400,
                        'Proje',
                        4000,
                    ]}>

                </Typical><br /><br /> &#10094;&#10094;&#10094;&#10094;&#10094;</h1>
        </div>
    )
}
function CardList() {
    return (
        <div className='cardlist'>
            <div className='cardli'>
                <Card1></Card1>
                <Card11></Card11>
            </div>
            <div className='cardli'>
                <Card2></Card2>
                <Card22></Card22>
            </div>
        </div>



    )
}

export default React.memo(CardList)
