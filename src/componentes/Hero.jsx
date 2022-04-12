import React, {Fragment} from 'react';
import { Button } from '@mui/material';
import sleep from '../assets/sleep 1.svg';

const Hero = () => {
    return (
        <Fragment>
            <div className='img'>
                <img src={sleep} alt="sleep hero" width='700' height='550'/>
            </div>
        </Fragment>
    );
}

export default Hero;