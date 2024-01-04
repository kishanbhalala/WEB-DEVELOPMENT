import * as React from 'react';
import Puma from './assets/puma.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Shoes from './assets/nike.jpg';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Btn  from './components/Btn';



export default function ButtonUsage() {
  return (
    <>
      <div className='main bg-[#C88EFE] h-screen grid place-content-center '>
        <div className='text-[40px] text-white font-medium '>Item Card using HTML & CSS</div>
        <div className='flex justify-center'>
          <div className='bg-white w-80  mt-2 rounded-lg shadow-2xl'>
            <div className='flex justify-between m-4'>
              <img className='w-7' src={Puma} alt="" />
              <ShoppingCartIcon />
            </div>
            <div className='flex justify-center'>
              <img className='w-[150px]' src={Shoes} alt="" />
            </div>
            <div className='m-2'>
              <h1 className='font-bold text-2xl'>XRay Jr Dark</h1>
              <p className='text-gray-400 mt-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, tempora! Neque, tempora</p>
              <BasicRating />
              <div className='flex justify-center mt-2'>
                <sup className='text-green-600 font-bold text-2xl'>$</sup><h1 className='font-bold text-[30px]'>5.00/-</h1>
              </div>
              <div>
                <Btn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating style={{ color: "#C88EFE", boxShadow: "0 5px 10px rgba(0,0,0,0.2)" }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly />

    </Box>
  );
}