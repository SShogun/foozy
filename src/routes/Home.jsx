import Box from '@mui/material/Box';
import './Home.css'
import Grid from '@mui/material/Grid';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import StandardImageList from '../components/StandardImageList';
import Container from '@mui/material/Container';

export default function Home() {
    return (
        <div className="bg-[#dafafc] h-[content] w-auto overflow-x-hidden">
            <Box id="bg1" className="pl-4 pt-6 h-22 w-screen overflow-x-hidden"></Box>
            <br />
            <Box>
                <section className="flex justify-center">
                    <h2 className='text-6xl bg-[#3DA9FC] px-6 py-4'>Eat & Drink</h2>
                </section>
                <Grid container justifyContent="space-between" spacing={4} id="grid" className="pl-5">
                    <Grid item xs={4} className="flex items-center justify-center">
                        <img src={icon1} width={150} className='invert'/>
                        <p className='text-xl text-white px-10'>Our kitchen serves American, English, Indian & Asian inspired meals for the peckish and the very hungry. Click on the __ to see the menu</p>
                    </Grid>
                    <Grid item xs={4} className="flex items-center justify-center">
                        <img src={icon2} width={150} className='invert'/>
                        <p className='text-xl text-white px-10'>Our taplist is ever rotating. We are passionate about sourcing the best crafted drinks the market has to offer.  Click on the __ to see the menu</p>
                    </Grid>
                    <Grid item xs={4} className="flex items-center justify-center">
                        <img src={icon3} width={150} className='invert'/>
                        <p className='text-xl text-white px-10'>Our kitchen serves multi-flavoured across the seas ice-creams and cakes for the sweet-tooths. Click on the __ to see the menu</p>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <Box>
                <section className="flex justify-center">
                    <h2 className='text-6xl bg-[#3DA9FC] px-8 py-4 mt-2 mb-2 w-content'>Gallery</h2>
                </section>
                <Box>
                    <StandardImageList />
                </Box>
            </Box>
            <Box id="aboutUs" className="flex justify-center items-center h-[120vh] mt-8">
                <Container className='bg-[#f5f5f5] shadow-2xl shadow-black' sx={{width: "40vw", height: "100vh"}}>
                    <section className='flex justify-center items-center flex-col py-20'>
                        <h1 className='text-6xl'>About Us</h1>
                        <p className="text-center mt-8 tracking-wider text-md">We are a small bar and kitchen located in the iconic London woolstores of Teneriffe. We are passionate about great Australian booze, so you won't find any run-of-the-mill brands here. We are fully dedicated to supporting small Australian breweries, wineries and distilleries. We truly believe that Australia produces some of the best quality booze in the world, and we love to share it with you. Our kitchen serves up a variety of our favourite Japanese & Korean dishes to accompany your drinks. Great to share with friends, or just to feast alone - but be warned, our serves are generous.Our seating is predominantly outside on our breezy undercover deck. It's equipped with heaters, fans, and curtains to cater for good old unpredictable Queensland weather (we wouldn't have it any other way). We are pet friendly, so feel free to bring your furry friends too!</p>
                    </section>
                </Container>
            </Box>
        </div>
    )
}