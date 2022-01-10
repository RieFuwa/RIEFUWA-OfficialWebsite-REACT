import React from 'react'
import Footer from '../partials/Footer'

function Error() {
    return (
        <div className='Error'>
            <p style={({textAlign:'center',fontSize:'50px', fontFamily:'cursive',margin:'20%'})}>ÇOK ÜZGÜNÜZ BİR HATA İLE KARŞILAŞTIK... :(</p> 
            <Footer></Footer>
        </div>
    )
}

export default  React.memo(Error)
