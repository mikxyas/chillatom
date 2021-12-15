import React, {ReactNode} from 'react';
import Header from './Header';

import { useUserStore } from '../global-stores/useUserStore';

type Props = {
    children:ReactNode;
}
const Layout: React.FC<Props> = (props) => {
    const user = useUserStore(state => state.user)
    const imageLink = `https://source.unsplash.com/Hyu76loQLdk/1440x1080`
    // const imageLink = `https://source.unsplash.com/daily?${user.background}`
    return(
        <div style={{backgroundImage:`url(${imageLink})`}} className='bg-img'>
            
        <Header/>
        <div style={{backgroundImage:`url(${imageLink})`}} className='bg-img'>
            {props.children}
        </div>
        </div>
    )
}
   
export default Layout;