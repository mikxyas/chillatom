import React, {ReactNode} from 'react';
import Header from './Header';
import Image from 'next/image'

type Props = {
    children:ReactNode;
}

const Layout: React.FC<Props> = (props) => (
    <div>
            <div className='bg-img'>
                <Image layout='fill' src='https://source.unsplash.com/1920x1440/?nature'/>
            </div>
            <Header/>
            <div>
                {props.children}
            </div>
    </div>
)
export default Layout;