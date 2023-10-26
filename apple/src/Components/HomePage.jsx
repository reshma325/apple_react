import React from 'react'
import './HomePage.css'
import Header from './Header'
import Footer from './Footer'


const HomePage = () => {
    return (
        <div id='home_screen'>
            <Header/>
            <div id='home_subnav'>
                <div id='home_sub_main'>
                    <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards. * <span className='element'>Shop Now</span> </p>

                </div>

            </div>
            <div id='h_image_1'>
                <div id='himg_1_main'>
                    <div id='himg_text1'>
                        <p id='ht1_top'>
                            iPhone15 Pro
                        </p>
                        <p id='ht1_mid'>
                            Titanium. So Strong.So Light.So Pro.
                        </p>
                        <p id='ht1_bottom'>
                            <span className='element' >Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>

                </div>

            </div>
            <div id='h_image_2'>
                <div id='himg_2_main'>
                    <div id='himg_text2'>
                        <p id='ht2_top'>
                            iPhone15 Pro
                        </p>
                        <p id='ht2_mid'>
                           New camera.New design.Newphoia
                        </p>
                        <p id='ht2_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>

                </div>

            </div>
            <div id='h_image_3'>
                <div id='himg_3_main'>
                    <div id='himg_logo3'>
                        <p id='ht3_top'>
                            <img src='https://www.apple.com/v/home/be/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9__eg5xcrxghuaa_large.png ' />
                        </p>
                        <p id='ht3_mid'>
                           Smarter.Brighter.Mightier
                        </p>
                        <p id='ht3_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>

                </div>

            </div>
            <div id='img6'>
                <div id='img6_1'>
                <div id='img6_text1'>
                        <p id='i6_1_top' className="Element">
                            iPad Pro
                        </p>
                        <div id='i6_1_mid'>
                        <p >
                            Supercharged by
                        </p>
                        <img id='i6_1_mid_img' src='https://www.apple.com/v/home/be/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_large.png' alt/>
                        </div>
                       
                        <p id='i6_1_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>
                </div>
                <div id='img6_2'>
                <div id='img6_text2'>
                       <img id='i6_2_top'src='https://www.apple.com/v/home/be/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png' alt/>
                        <p id='i6_2_mid'>
                           Next level adventure.
                        </p>
                        <p id='i6_2_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>
                </div>
                <div id='img6_3'>
                <div id='img6_text3'>
                        <p id='i6_3_top'>
                            MacBook Air 15"
                        </p>
                        <p id='i6_3_mid'>
                           Impressively big.Impossibly thin.
                        </p>
                        <p id='i6_3_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>
                </div>
                <div id='img6_4'>
                <div id='img6_text4'>
                        <p id='i6_4_top'>
                            AirPods Pro
                        </p>
                        <p id='i6_4_mid'>
                            Adaptive Audio.Now playing.
                        </p>
                        <p id='i6_4_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>
                </div>
                <div id='img6_5'>
                <div id='img6_text5'>
                       <img id='i6_5_top' src='https://www.apple.com/v/home/be/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_large.png' alt=''/>
                        <p id='i6_5_mid'>
                            Upgrade amd save.It's that easy.
                        </p>
                        <p id='i6_5_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>
                </div>
                <div id='img6_6'>
                <div id='img6_text6'>
                        <p id='i6_6_top'>
                           HomePod mini
                        </p>
                    
                        <p id='i6_6_bottom'>
                            <span className='element'>Learn More</span><span className='element'>Buy </span>
                        </p>

                    </div>
                </div>

            </div>
            <div id='h_img_bottom'>
                <div  id='h_img_bottom_main'>
<img src='https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/980x551.jpg'alt=''/>
                </div>
                <div id='h_dot_bottom'>

                </div>

            </div>
            <Footer/>
        </div>
        
    )
}

export default HomePage