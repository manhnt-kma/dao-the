import React from 'react';
import './App.css';

import SlideshowGallery from './components/slideshow-gallery/slideshow-gallery';

import img1 from './images/01.png';
import img2 from './images/02.png';
import zaloIcon from './images/zalo-icon.png';
import messIcon from './images/messenger-icon.png';
import phone from './images/phone.png'
// eslint-disable-next-line
import contactUs from './images/contactus-icon.png'

const collection = [
	{ src: img1 },
	{ src: img2 },
]


function App() {
	return (
		<div className="App">
			<header className='site-header'>

				<SlideshowGallery
					input={collection}
					timeout="10000"
					ratio={`16:5`}
					mode={`automatic`}
				/>
			</header>
			<div className='content container'>
				<div >
					<h2>Xin chào!</h2>
					<p>Bên Mình Chuyên Cung Cấp Các Dịch Vụ</p>
					<p>Rút Tiền/Đáo Hạn Thẻ Tín Dụng</p>
					<a class="hero-button" href="tel:0888666665">Gọi ngay</a>
				</div>
				<div className='context'>
					<h2 class="text-center">Rút Tiền Thẻ Tín Dụng Tại Nhà</h2>
					<p class="text-center">Tư Vấn Và Phục Vụ 24/7</p>
					<h2 class="text-center">Đáo Hạn Thẻ Tín Dụng</h2>
					<p class="text-center">Đáo Hạn Tại Nhà</p>
					<p class="text-center">Chỉ từ 1,9%/Tháng</p>
				</div>
				<div id="direct" class="direct">
					<div>
						<div className="">
							{/* <img src={contactUs} alt="Contact Icon"></img> */}
							<h2>Liên hệ</h2>
						</div>
						<h1>Mr. Tùng(Hỗ trợ 24/7)</h1>
						<a href="tel:0982670613" >
							<span style={{color: "#222"}}>
								0982670613
							</span>
						</a>
					</div>
					<div className="quick-contact">
						<a href="https://zalo.me/0888666665" id="zalo">
							<img src={zaloIcon} alt='Zalo Icon'></img>
						</a>
						<a href="https://m.me/100023251818361">
							<img src={messIcon} alt="Messenger Icon"></img>
						</a>
						<a href="tel:0982670613">
							<img src={phone} alt="Phone Icon"></img>
						</a>
					</div>
				</div>
				
			</div>
			<footer>
				<h3 class="text-center">Cám Ơn Mọi Người Đã Quan Tâm!</h3>
				<span>
					Hotline: <a href="tel:0982670613" style={{color: "white"}}>0582073186</a>
				</span>
			</footer>
		</div>
	);
}

export default App;