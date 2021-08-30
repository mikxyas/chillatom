import React, {ReactNode} from 'react';
import Header from './Header';
import Image from 'next/image'
import { url } from 'inspector';

type Props = {
    children:ReactNode;
}
var imageLink = "https://source.unsplash.com/1920x1080/?nature"
const Layout: React.FC<Props> = (props) => (
    <div style={{backgroundImage:`url(${imageLink})`}} className='bg-img'>
            
            <Header/>
            <div style={{backgroundImage:`url(${imageLink})`}} className='bg-img'>
                {props.children}
            </div>
    </div>
)
export default Layout;