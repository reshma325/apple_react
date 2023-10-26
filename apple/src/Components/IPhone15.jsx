import React from 'react'
import './IPhone15.css'
import one from '../Images/1.jpeg'
import two from '../Images/2.jpeg'
import three from '../Images/3.jpeg'
import four from '../Images/4.jpeg'
import five from '../Images/5.jpeg'
import trade from '../Images/trade.png'
import truck from '../Images/truck.png'
import back from '../Images/back.png'
import { useNavigate } from 'react-router-dom'

const IPhone15 = () => {
    const router =useNavigate();
    return (
        <div id='iphone15_screen'>
            <div id='back'>
                <img onClick={()=>router('/store')} src={back} style={{cursor:"pointer"}}/>
            </div>
            <div id='iphone15_main'>
                <div id='imain'>
                    <div id='imain_l'>
                        <div id='imain_l_nav'>
                            <div id='imain_l_nav_l'>iPhone&nbsp;15&nbsp; Pro</div>

                            <div id='imain_l_nav_r'>iPhone 15 Pro Max</div>
                        </div>
                        <div id='imain_l_img'>
                            <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=364&hei=333&fmt=png-alpha&.v=1693346851387' alt='' />


                        </div>
                        <div id='imain_l_options'>
                            <i class="fa-solid fa-circle fa-2xs" style={{ color: "#333333" }}></i>
                            <i class="fa-solid fa-circle fa-2xs" style={{ color: "#949494" }}></i>
                            <i class="fa-solid fa-circle fa-2xs" style={{ color: "#949494" }}></i>
                            <i class="fa-solid fa-circle fa-2xs" style={{ color: "#949494" }}></i>
                            <i class="fa-solid fa-circle fa-2xs" style={{ color: "#949494" }}></i>
                        </div>
                        <p id='imain_l_text'>Available in 4 finishes</p>
                        <div id='imain_l_options_2'>
                            <i class="fa-solid fa-circle fa-xs " style={{ color: "#bab4a9" }}></i>
                            <i class="fa-solid fa-circle  fa-xs " style={{ color: "#49505f" }}></i>
                            <i class="fa-solid fa-circle  fa-xs " style={{ color: "#f2f1eb" }}></i>
                            <i class="fa-solid fa-circle  fa-xs " style={{ color: "#4e4f50" }}></i>

                        </div>

                    </div>

                    <div id='imain_r'>
                        <p id='imain_r_text'>NEW</p>
                        <p id='imain_r_name'>iPhone 15 Pro</p>
                        <div id='imain_r_bootom'>
                            <p> From ₹21483.00/mo. with instant savings§§<br /> and No Cost EMI§ or ₹134900.00 ‡</p>
                            <button>Buy</button>
                        </div>
                        <div id='imain_r_list_main'>
                            <div id='imain_r_list_1'>
                                <img src={one} alt />
                                <p>
                                    17.0 cm (6.7-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island
                                </p>

                            </div>
                            <div id='imain_r_list_2'>
                                <img src={two} alt />
                                <p>
                                    Strong and light titanium design with Action button —a fast track to your favourite feature
                                </p>
                            </div>
                            <div id='imain_r_list_2'>
                                <img src={three} alt='' />
                                <p>
                                    48MP Main camera for super-high-resolution photos and 3x Telephoto camera
                                </p>
                            </div>
                            <div id='imain_r_list_2'>
                                <img src={four} alt />
                                <p>
                                    A17 Pro chip delivers a massive in graphics performance,transforming mobile gaming
                                </p>
                            </div>
                            <div id='imain_r_list_2'>
                                <img src={five} alt />
                                <p>
                                    USB-C connector with USB 3 for up to 20x faster transfer speeds² and pro workflows
                                </p>
                            </div>
                        </div>
                        <p id='imain_r_bottom'>
                            Explore iPhone 15 Pro further<span><i class="fa-solid fa-angle-right fa-xs"></i></span>
                        </p>
                    </div>

                </div>
                <div id='ifooter'>
                    <div id='ifooter_1'>
                        <div id='ifooter_img'>
                            <i class="fa-regular fa-credit-card fa-2xl"></i>
                        </div>
                        <div id='ifooter_text'>
                            <p>Flexible ways to pay</p>
                            <p>No Cost EMI and EMI available.</p>
                        </div>
                    </div>
                    <div id='ifooter_2'>
                    <div id='ifooter_img_2'>
                            <img src={trade} alt=''/> 
                        </div>
                        <div id='ifooter_text'>
                            <p>Apple Trade In</p>
                            <p>Trade in your eligible device for credit towards your next purchase.*</p>
                        </div>
                    </div>
                    <div id='ifooter_3'>
                    <div id='ifooter_img'>
                    <img src={truck} alt=''/> 
                        </div>
                        <div id='ifooter_text'>
                            <p>Free delivery and pickup.</p>
                            <p>Get free delivery,pick up at your Apple Store.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default IPhone15

