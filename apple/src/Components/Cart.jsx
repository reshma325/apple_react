import React from 'react'
import './Cart.css'
import minus from '../Images/minus.png'
import box from "../Images/box.png"
import bag_ from '../Images/bag_.png'

const Cart = () => {
    return (

        <div id='cart_screen'>
            <div id="cSubNav">
                <div id="cSubNav_main">
                    <div id="cSubNav_leftArrow"><i class="fa-solid fa-angle-left"></i></div>

                    <div id="cSubNav_text">
                        <p>Get ₹18000.00–₹67800.00 in credit towards iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.* </p>
                        <div id="cSubNave_text_span">
                            <p>Shop iPhone  </p>

                        </div>
                    </div>

                    <div id="cSubNav_rightarrow"><i class="fa-solid fa-angle-right"></i></div>
                </div>
            </div>
            <div id='cart_main'>
                <div id='cart_h1'>
                    <h1>
                        Your bag total is ₹72800.00 or ₹11620.00/mo.^
                    </h1>
                    <div id='cart_h1_button'>
                        <div id='cart_h1_button_main'>
                            <button>Check Out</button>

                        </div>
                    </div>
                </div>
                <ol id='cart_items'>
                    <li id='cart_item_1'>
                        <div id='cart_item_1_info'>
                            <div id='cart_item_1_info_img'>
                                <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?' alt='' />

                            </div>
                            <div id='cart_item_1_info_details'>
                                <div id='cart_item_1_info_details_1'>
                                    <div id='item_detail_1_1'>

                                        <div id='item_detail_1_1_l'>
                                            <h1>
                                                AirPods (3rd generation) with MagSafe Charging Case
                                            </h1>
                                        </div>
                                        <div id='item_detail_1_1_m'>
                                            <div>
                                                <div>
                                                    <select>1
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10+</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div id='item_detail_1_1_r'>
                                            <div>
                                                <p>₹20900.00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div id='item_detail_1_2'>
                                        <div id='item_detail_1_2_t' >
                                            <p> Pay 15% pa for 6 months: ^</p>
                                            <p>₹3637.00/mo.^</p>
                                        </div>
                                        <div id='item_detail_1_2_m'>
                                            <p>Remove</p>
                                        </div>
                                        <div id='item_detail_1_2_b'>
                                            <p>Save for later</p>
                                        </div>

                                    </div>

                                </div>
                                <div id='cart_item_1_info_details_2'>
                                    <div>
                                        <div >
                                            <i class="fa-brands fa-apple" style={{ color: "#ec0002" }}></i>
                                        </div>
                                        <div >
                                            <div>
                                                <h3>
                                                    Add AppleCare+ for Headphones - AirPods for ₹2900.00
                                                </h3>
                                                <p>Add</p>
                                            </div>

                                            <div>
                                                <p>Get up to 2 years of unlimited repairs for accidental damage protection and additional tech support.</p>
                                                <p>Learn More</p>
                                            </div>
                                            <div>

                                            </div>

                                            <div></div>

                                        </div>
                                    </div>
                                </div>
                                <div id='cart_item_1_info_details_3'>
                                    <div id='cart_item_1_info_details_3_icon'>
                                        <img src={minus} />
                                    </div>
                                    <div id='cart_item_1_info_details_3_text'>
                                        <p>Add free engraving</p>
                                        <p>Add</p>
                                    </div>

                                </div>
                                <div id='cart_item_1_info_details_4'>
                                    <div id='cart_item_1_info_details_4_main'>
                                        <div id='cart_item_1_info_details_4_l'>
                                            <div id='cart_item_1_info_details_4_l_main' >
                                                <div id='box'>
                                                    <img src={box} alt='' />
                                                </div>
                                                <div id='cart_item_1_info_details_4_l_text'>
                                                    <p> Order today.Delivers to <span> 400011††</span> </p>
                                                    <p>Sat 21 Oct — Free</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='cart_item_1_info_details_4_r'>
                                            <div id='cart_item_1_info_details_4_r_main' >
                                                <div id='bag_'>
                                                    <img src={bag_} alt='' />
                                                </div>
                                                <div id='cart_item_1_info_details_4_r_text'>
                                                    <p>Order now. Pick up, in-store: </p>
                                                    <p><span id='one'>Today </span> at <span id='two'> Apple BKC</span> </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </li>

                    <li id='cart_item_2'>
                        <div id='cart_item_2_info'>
                            <div id='cart_item_2_info_img'>
                                <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/41-cell-alum-midnight-sport-loop-midnight-s9?' alt='' />

                            </div>
                            <div id='cart_item_2_info_details'>
                                <div id='cart_item_2_info_details_1'>
                                    <div id='item_detail_2_1'>

                                        <div id='item_detail_2_1_l'>
                                            <h1>
                                                Apple Watch Series 9 GPS + Cellular 41mm Midnight Aluminium Case with Midnight Sport Loop
                                            </h1>
                                        </div>
                                        <div id='item_detail_2_1_m'>
                                            <div>
                                                <div>
                                                    <select>1
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10+</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div id='item_detail_2_1_r'>
                                            <div>
                                                <p>₹51900.00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div id='item_detail_2_2'>
                                        <div id='item_detail_2_2_t' >
                                            <p> Pay 15% pa for 6 months: ^</p>
                                            <p>₹7983.00/mo.^</p>
                                        </div>
                                        <div id='item_detail_2_2_m'>
                                            <p>Remove</p>
                                        </div>
                                        <div id='item_detail_2_2_b'>
                                            <p>Save for later</p>
                                        </div>

                                    </div>

                                </div>
                                <div id='cart_item_2_info_details_2'>
                                    <div>
                                        <div >
                                            <i class="fa-brands fa-apple" style={{ color: "#ec0002" }}></i>
                                        </div>
                                        <div >
                                            <div>
                                                <h3>
                                                    Add AppleCare+ for Apple Watch Series 9 Aluminium for ₹7900.00
                                                </h3>
                                                <p>Add</p>
                                            </div>

                                            <div>
                                               
                                                <li>2 years of unlimited repairs for accidental damage protection</li>
                                                <li>Apple-certified service and support</li>
                                                <li>Priority access to Apple experts</li>
                                                <p>Learn More</p>
                                            </div>
                                            <div>

                                            </div>

                                            <div></div>

                                        </div>
                                    </div>
                                </div>
                                {/* <div id='cart_item_2_info_details_3'>
                                    <div id='cart_item_2_info_details_3_icon'>
                                        <img src={minus} />
                                    </div>
                                    <div id='cart_item_2_info_details_3_text'>
                                        <p>Add free engraving</p>
                                        <p>Add</p>
                                    </div>

                                </div> */}
                                <div id='cart_item_2_info_details_4'>
                                    <div id='cart_item_2_info_details_4_main'>
                                        <div id='cart_item_2_info_details_4_l'>
                                            <div id='cart_item_2_info_details_4_l_main' >
                                                <div id='box'>
                                                    <img src={box} alt='' />
                                                </div>
                                                <div id='cart_item_2_info_details_4_l_text'>
                                                    <p> Order today.Delivers to <span> 400011††</span> </p>
                                                    <p>Sat 21 Oct — Free</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='cart_item_2_info_details_4_r'>
                                            <div id='cart_item_2_info_details_4_r_main' >
                                                <div id='bag_'>
                                                    <img src={bag_} alt='' />
                                                </div>
                                                <div id='cart_item_2_info_details_4_r_text'>
                                                    <p>Order now. Pick up, in-store: </p>
                                                    <p><span id='three'>Today </span> at <span id='four'> Apple BKC</span> </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </li>
                </ol>
                <div id='order_summary'>
                    <div id='os_main'>
                        <div id='os_1'>
                            <p>Subtotal</p>
                            <p>₹72800.00</p>
                        </div>
                        <div id='os_2'>
                            <p>Shipping</p>
                            <p>FREE</p>
                        </div>
                        <div id='os_3'>
                            <p>Total</p>
                            <p>₹72800.00</p>
                        </div>
                        <div id='os_4'>
                            <p>Monthly payment</p>
                            <p>₹11620.00/mo.per monthfootnote^ with EMI</p>
                        </div>
                        <div id='os_5'>
                            <p>Total savings of ₹6028.00 with eligible card(s)footnote^</p>
                        </div>
                        <div id='os_6'>
                            <p>Explore instant Cashback and No Cost EMI§</p>
                        </div>

                    </div>

                </div>
                <div id='checkOut_button'>
                    <div id='cb_main'>
                        <div id='cb'>
                            <button>
                                Check Out
                            </button>

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Cart