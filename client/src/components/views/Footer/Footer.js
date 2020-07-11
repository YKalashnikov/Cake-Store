import React from 'react'
import { InstagramOutlined, MailOutlined, FacebookOutlined} from '@ant-design/icons';
import './Footer.css';


function Footer() {
    return (
        <div className='footer'>
          
           <div className="social-media">  
               <InstagramOutlined style={{ fontSize: '20px', color: '#08c' }}/>
               <MailOutlined style={{ fontSize: '20px', color: '#08c' }}/>
               <FacebookOutlined style={{ fontSize: '20px', color: '#08c' }}/>
           </div>
           <p>All rights baked 2020</p>
        
        </div>
    )
}

export default Footer
