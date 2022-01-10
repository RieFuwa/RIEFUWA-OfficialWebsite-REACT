import React from 'react'
import eng from '../assets/eng.png'
import animal from '../assets/animal.png'
import anime from '../assets/anime.png'
import med from '../assets/med.png'
import sq from '../assets/sq.jpg'
import fb from '../assets/fb.png'
import fs from '../assets/fs.png'
import head from '../assets/head.jpg'
import './Styles.css';
const App1 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                    <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.englishstories" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img className='imgapplist' src={eng}   title='English Stories Audio' alt="Stories" /> <h3 className='applisthr'>English Stories</h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>
                    <li>Seviyene göre ingilizce hikaye,</li>
                    <li>Çocuklar için ingilizce şarkılar,</li>
                    <li>Dilediğin zaman dinleme şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const App2 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.meditation" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img   className='imgapplist' src={med}  title='Meditation Mindfulness and Sleep'alt="Meditation" /> <h3 className='applisthr'>Meditation Mindfulness</h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>

                    <li>5 Meditasyon çeşidi,</li>
                    <li>Onlarca meditasyon seansı,</li>
                    <li>Dilediğin zaman dinleme şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const App3 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.flashlight" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='imgapplist'  src={fs}   title='Color Screen Flashlight' alt="Flashlight"/> <h3 className='applisthr'>Color Screen Flashlight</h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>

                    <li>Kullanımı basit,</li>
                    <li>Binlerce renk çeşidi,</li>
                    <li>Dilediğin zaman kullanma şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const App4 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.omerfaruk.anime.wallpapers" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img  className='imgapplist'  src={anime}  title='Anime Wallpaper X HD' alt="Wallpaper"/> <h3 className='applisthr'>Anime HD Wallpaper</h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>

                    <li>Kullanımı basit,</li>
                    <li>Yüzlerce anime hd duvar kağıdı,</li>
                    <li>Dilediğin zaman kullanma şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const App5 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.animalsounds" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img   className='imgapplist' src={animal}   title='Baby Piano Animals Sounds' alt="Piano"/> <h3 className='applisthr'>Piano Animal Sound</h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>

                    <li>Kullanımı basit,</li>
                    <li>Çocuklar için hayvan sesli piano,</li>
                    <li>Dilediğin zaman eğlenme şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const App6 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.fenerbahcebestesi" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img   className='imgapplist' src={fb}   text title='Fenerbahçe 1907 Taraftar Besteleri'alt="Fenerbahçe" /> <h3 className='applisthr'>Fenerbahçe Besteleri </h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>

                    <li>Fenerbahçe taraftarları için,</li>
                    <li>Onlarca tribün taraftar besteleri,</li>
                    <li>Dilediğin zaman dinleme şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const App7 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.riefuwa.squidwallpaper" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img   className='imgapplist'  src={sq}   title='Squid Game Wallpaper HD'alt="Wallpaper" /> <h3 className='applisthr'>Squid Game Wallpaper</h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>

                    <li>Kullanımı basit,</li>
                    <li>Yüzlerce Squid Game hd duvar kağıdı,</li>
                    <li>Dilediğin zaman kullanma şansı.</li>
                </ul>

            </div>
        </div>
    )
}
const App8 = () => {
    return (
        <div className='appcard'>
            <div>
                <div className='appdiv'>
                <a style={({ color: "white", textDecoration: 'none' })} href="https://play.google.com/store/apps/details?id=com.omerfaruk.meditation.mindfulness" target="_blank" title="RieFuwa-GPS" rel="noreferrer">
                        <img   className='imgapplist' src={head}  title='Headspace Meditation Sleep Relaxation Calming' alt="Headspace"/> <h3 className='applisthr'>Headspace Meditation</h3>
                    </a>
                </div>
                <br />
                <div className='appdiv2'></div>

                <ul className='applist'>

                    <li>Günlük Egzersiz hareketleri,</li>
                    <li>Yoga hareketleri,</li>
                    <li>Diyet Çeşitleri,</li>
                    <li>Meditasyon çeşitleri,</li>
                    <li>Dilediğin zaman kullanma şansı.</li>
                </ul>

            </div>
        </div>
    )
}
function Applist() {
    return (
        <div className='appdiv3'>
            <div className='appdiv4'>
                <App1></App1>
                <App2></App2>
            </div>
            <div className='appdiv4'>
                <App3></App3>
                <App4></App4>
            </div>
            <div className='appdiv4'>
                <App5></App5>
                <App6></App6>
            </div>
       
            <div className='appdiv4'>
                <App7></App7>
                <App8></App8>
            </div>
            
        </div>
    )
}

export default React.memo(Applist)
