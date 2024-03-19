import './components/Footer.css'
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div id="footer" className='h-[30vh] w-100 grid grid-flow-col items-center grid-cols-3 px-10'>
            <div id='heading' className='text-8xl text-black font-black'>Find Us</div>
            <Box id="text" className='flex justify-end items-center text-black text-lg italic font-bold'>
                shop 7/25 green lane <br/>
                old hyoukai QLD 4005 <br/>
                foozyfood@gmail.com <br/>
                Tel: 05 5252 4959 <br/>
            </Box>
            <div className='text-4xl flex justify-end'>
                <section className='grid grid-cols-2 grid-rows-2 px-12 gap-6'>
                    <a href='https://www.instagram.com/' target='_blank'><FontAwesomeIcon icon={faInstagram} className='hover:scale-150 transition-transform hover:shadow-xl'/></a>
                    <a href='https://twitter.com/?lang=en' target='_blank'><FontAwesomeIcon icon={faXTwitter} 
                    className='hover:scale-150 transition-transform hover:shadow-xl'/></a>
                    <a href='https://www.facebook.com/' target='_blank'><FontAwesomeIcon icon={faFacebook} 
                    className='hover:scale-150 transition-transform hover:shadow-xl'/></a>
                    <a href='https://www.youtube.com/' target='_blank'><FontAwesomeIcon icon={faYoutube} 
                    className='hover:scale-150 transition-transform hover:shadow-xl'/></a>
                </section>
            </div>
        </div>
    )
}