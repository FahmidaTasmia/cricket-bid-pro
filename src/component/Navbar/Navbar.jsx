import React from 'react';
import logo from '../../assets/logo.png';
const Navbar = ({ coins }) => {
  return (
    <div className=' flex justify-between items-center'>
      <div>
        <img className=' w-full' src={logo} alt="" />
      </div>

      <div className='flex gap-2'>
        <div >
          {['Home', 'Future', 'Teams', 'Schedules'].map((item) => (
          <a key={item} className="link link-hover mr-4">{item}</a>
        ))}
        </div>
        <div>
          <button className=' btn border-2 border-dashed shadow-lg'><span>{coins}</span>Coins</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;