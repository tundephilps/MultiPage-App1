import React from 'react'
import Fifthpage from '../Fullpage/Fifthpage';
import Firstpage from "../Fullpage/Firstpage";
import Fourthpage from '../Fullpage/Fourthpage';
import Secondpage from '../Fullpage/Secondpage';
import Sixthpage from '../Fullpage/Sixthpage';
import Thirdpage from '../Fullpage/Thirdpage';

const Fullpage = () => {
  return (
    <div>
        <Firstpage />
        <Secondpage />
        <Thirdpage />
        <Fourthpage />
        <Fifthpage />
        <Sixthpage />
    </div>
  )
}

export default Fullpage