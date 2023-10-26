import React from 'react'
import './Store.css'
import apple from '../Images/svgviewer-png-output (2).png'
import exchange_p from '../Images/exchange-svgrepo-com (1).png'

import truck from '../Images/svgviewer-png-output (4).png'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Store = () => {
	const router=useNavigate();

	
	return (
		<div>
		<Header/>
			<div id='store_screen'>
				<div id="sSubNav">
					<div id="sSubNav_main">
						<div id="sSubNav_leftArrow"><i class="fa-solid fa-angle-left"></i></div>

						<div id="sSubNav_text">
							<p>Get ₹18000.00–₹67800.00 in credit towards iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.* </p>
							<div id="SSubNave_text_span">
								<p>Shop iPhone  </p>

							</div>
						</div>

						<div id="sSubNav_rightarrow"><i class="fa-solid fa-angle-right"></i></div>
					</div>
				</div>
				<div id='store_main'>
					<div id="store_h1">
						<p id="s_h1_right">Store.<span> Brighten the season with products you love.</span></p>
						<div id="s_h1_left">
							<div id="s_h1_left_top">
								<div id="sh1_l_t_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1684947928869" alt="" /></div>
								<div id="sh1_l_t_text">
									<p>Need shopping help?</p>
									<p>Ask a Specialist</p>
								</div>
							</div>

							<div id="s_h1_left_bottom">
								<div id="sh1_l_b_img"><i class="fa-brands fa-apple fa-xs"></i></div>
								<div id="sh1_l_b_text">
									<p>Visit an Apple Store</p>
									<p>Find one near you <i class="fa-solid fa-angle-right fa-2xs"></i></p>
								</div>
							</div>
						</div>
					</div>


					<div id="store_scroll_1">
						<div id="store_scoll_1_blank">
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635" alt="" /></div>
							<p>Mac</p>
						</div>

						<div id="store_scoll" onClick={()=>router('/iphone')}>
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1692971740071" alt="" /></div>
							<p>iPhone</p>
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437" alt="" /></div>
							<p>iPad</p>
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=200&hei=130&fmt=png-alpha&.v=1693703814407" alt="" /></div>
							<p>Apple Watch</p>
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885" alt="" /></div>
							<p>AirPods</p>
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" alt="" /></div>
							<p>AirTag</p>
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484" alt="" /></div>
							<p>Apple TV 4K</p>
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654" alt="" /></div>
							<p>HomePod</p>
						</div>

						<div id="store_scoll">
							<div id="store_scoll_img"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692803114952" alt="" /></div>
							<p>Accessories</p>
						</div>
						<div id="store_scoll_1_blank">
						</div>
					</div>

					<div id="store_scroll_3">
						<p> Festive specials.  <span>All the reasons to rejoice.</span></p>
						<div id="store_scoll_3_main">
							<p id="store_scoll_3_blank">
							</p>
							<div id="store_scroll_3_offer">
								<div id='store_scroll_3_card'>
									<p id='store_scroll_3_card_name_1'>FESTIVE OFFER</p>
									<p id="store_scroll_3_card_text">Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards‡</p>

								</div>
							</div>
							<div id="store_scroll_3_iphone">
								<div id='store_scroll_3_card'>
									<p id='store_scroll_3_card_name_2'>IPHONE</p>
									<p id="store_scroll_3_card_text">Save up to ₹6000.00‡ Trade in your smartphone to save even more.*</p>

								</div>
							</div>
							<div id="store_scroll_3_mac">
								<div id='store_scroll_3_card'>
									<p id='store_scroll_3_card_name_3'>MAC</p>
									<p id="store_scroll_3_card_text">Save up to ₹10000.00‡ Customize it the way you want.</p>

								</div>
							</div>
							<div id="store_scroll_3_ipad">
								<div id='store_scroll_3_card'>
									<p id='store_scroll_3_card_name_4'>IPAD</p>
									<p id="store_scroll_3_card_text">Save up to ₹5000.00‡ Engrave it to make it yours</p>

								</div>
							</div>
							<div id="store_scroll_3_watch">
								<div id='store_scroll_3_card'>
									<p id='store_scroll_3_card_name_5'>APPLE WATCH</p>
									<p id="store_scroll_3_card_text">Save up to ₹5000.00‡ Pick new strap styles and colours fr extra dazzle.</p>

								</div>
							</div>
							<div id="store_scroll_3_apple">
								<div id='store_scroll_3_card'>
									<p id='store_scroll_3_card_name_6'>TODAY AT APPLE</p>
									<p id="store_scroll_3_card_text">Celebrate Diwali at Apple BKC. Join free sessions to spark your creativity on iPhone.</p>
								</div>
							</div>

						</div>
					</div>

					<div id="store_scroll_2">
						<p> The latest.<span> Usher in new arrivals to the celebration.</span></p>
						<div id="store_scoll_2_main">
							<p id="store_scoll_2_blank">
							</p>
							<div id="store_scroll_2_iphonePro">
								<div id='store_scroll_2_card'>
									<p id='store_scroll_2_card_name_W'>IPHONE 15 PRO</p>
									<p id="store_scroll_2_card_text_W">Titanium</p>
									<p id="store_scroll_2_card_price_W">From ₹134900.00‡</p>
								</div>
							</div>
							<div id="store_scroll_2_iphone">
								<div id='store_scroll_2_card'>
									<p id='store_scroll_2_card_name_B'>IPHONE 15</p>
									<p id="store_scroll_2_card_text_B">Newphoria </p>
									<p id="store_scroll_2_card_price_B">From ₹79900.00‡</p>
								</div>
							</div>
							<div id="store_scroll_2_watch9">
								<div id='store_scroll_2_card'>
									<p id='store_scroll_2_card_name_W'>APPLE WATCH SERIES 9</p>
									<p id="store_scroll_2_card_text_W">Smarter. Brighter. Mightier.</p>
									<p id="store_scroll_2_card_price_W">From ₹41900.00‡</p>
								</div>
							</div>
							<div id="store_scroll_2_watchUltra">
								<div id='store_scroll_2_card'>
									<p id='store_scroll_2_card_name_B'>APPLE WATCH ULTRA 2</p>
									<p id="store_scroll_2_card_text_B">Next-level adventure.</p>
									<p id="store_scroll_2_card_price_B">From ₹89900.00‡</p>
								</div>
							</div>
							<div id="store_scroll_2_airpods">
								<div id='store_scroll_2_card'>
									<p id='store_scroll_2_card_name_W'>AIRPODS PRO (2ND GENERATION)</p>
									<p id="store_scroll_2_card_text_W">Adaptive Audio. <br /> Now playing.</p>
									<p id="store_scroll_2_card_price_W">From ₹24900.00‡</p>
								</div>
							</div>
							<div id="store_scroll_2_mac">
								<div id='store_scroll_2_card'>
									<p id='store_scroll_2_card_name_B'>MACBOOK AIR 15”</p>
									<p id="store_scroll_2_card_text_B">Impressively big. <br /> Impossibly thin.</p>
									<p id="store_scroll_2_card_price_B">From ₹134900.00‡</p>
								</div>
							</div>
							<div id="store_scroll_2_ipad">
								<div id='store_scroll_2_card'>
									<p id='store_scroll_2_card_name_W'>IPAD AIR</p>
									<p id="store_scroll_2_card_text_W">Light. Bright. Full of might.</p>
									<p id="store_scroll_2_card_price_W">From ₹59900.00‡</p>
								</div>
							</div>
						</div>
					</div>

					<div id="store_scroll_5">
						<p>The Apple Store difference. <span>Even more reasons to shop with us.</span></p>
						<div id="store_scroll_5_main">
							<p id="store_scroll_5_blank">
							</p>

							<div id="store_scroll_5_card">
								<div id="store_scroll_5_card_1">
									<div id="store_scroll_5_card1_icon">
										<i class="fa-regular fa-credit-card fa-2xl"></i>
									</div>
									<p id="store_scroll_5_card1_text">Flexible ways to pay. <br /> <span>Plus instant savings §§ <br /> and No Cost EMI.§§</span></p>
								</div>
							</div>

							<div  id="store_scroll_5_card">
								<div id="store_scroll_5_card_2">
									<div id="store_scroll_5_card2_icon">
										<img src={exchange_p}></img>
									</div>
									<p id="store_scroll_5_card2_text">Exchange your smartphone, <span>get credit towards a new one.*</span></p>
								</div>
							</div>

							<div id="store_scroll_5_card">
								<div id="store_scroll_5_card_3" >
									<div  id="store_scroll_5_card3_icon">
									<img src={apple}></img>
									</div>
									<p id="store_scroll_5_card3_text"> <span>Customise your Mac</span></p>
								</div>
							</div>

							<div id="store_scroll_5_card">
								<div id="store_scroll_5_card_4">
									<div id="store_scroll_5_card4_icon">
									<img src={truck}/>
									</div>
									<p id="store_scroll_5_card4_text">Enjoy free delivery or easy pickup<span> from an Apple Store</span></p>
								</div>
							</div>

							{/* <div id="store_scroll_5_card">
								<div id="store_scroll_5_card_5">
									<div id="store_scroll_5_card5_icon">
										<img src={smile}/>
									</div>
									<p id="store_scroll_5_card5_text"> <span>Engrave a mix of emoji, names and numbers for free.</span>Only at Apple</p>
								</div>
							</div> */}





							<p id="store_scroll_5_blank">
							</p>
						</div>
					</div>

					<div id="store_scroll_4">
						<p>Help is here. <span>Whenever and however you need it.</span></p>
						<div id="store_scoll_4_main">
							<p id="store_scoll_4_blank">
							</p>
							<div id="store_scroll_4_specialist">
								<div id="store_scroll_4_card">
									<p id="store_scroll_4_name_1">APPLE SPECIALIST</p>
									<p id="store_scroll_4_text_1">Find the perfect festive gift with a Specialist</p>
								</div>
							</div>
							<div id="store_scroll_4_business">
								<div id='store_scroll_4_card'>
									<p id='store_scroll_4_name_2'>BUSINESS</p>
									<p id="store_scroll_4_text_2">From enterprise to small business,we'll work with you.</p>

								</div>
							</div>

							<div id="store_scroll_4_know">
								<div id="store_scroll_4_card">
									<p id="store_scroll_4_name_3"></p>
									<p id="store_scroll_4_text_3">Get to know your new device with a free Personal Session. </p>
								</div>
							</div>
							<div id="store_scroll_4_learn">
								<div id="store_scroll_4_card">
									<p id="store_scroll_4_name_4">WATCH AND LEARN</p>
									<p id="store_scroll_4_text_4">Need support? Our teams are here for you.</p>
								</div>
								<div id="store_scroll_4_Overview">
									<p>Get a quick overview from Pritesh on the Apple <br /> Support App.</p>
									<div id="store_scroll_play">
										<div> </div>
										<i class="fa-solid fa-circle-play fa-2xl"></i>
									</div>
								</div>
							</div>
							<p id="store_scoll_4_blank">
							</p>
						</div>
					</div>


				</div>
			</div>
		</div>

	)
}

export default Store