import React from 'react';
import Link from 'next/link';
import { Button, Tooltip } from 'antd';

import MegaMenu from './MegaMenu';
import MenuDropdown from './MenuDropdown';

const Menu = ({ data, className }) => (
    <ul className={className} style={{margin:'5px'}}>
   <li>
   <Link href='gvjh'>
   <Button style={{marginRight:'10px'}}>FAQs</Button>
                                </Link>
                    
                        </li>
                        <li>
                        <Link href='gvjh'>
                        <Button>Suggest A Vendor</Button>
                                </Link>
                    </li>
                    <li>
                    <Link href='gvjh'>
                    <Button style={{marginLeft:'10px'}}>Invite A Friend</Button>        
                                </Link>
                    </li>
                    <li>
                    <Link href='/vendor/become-a-vendor'>
                    <Button style={{marginLeft:'10px'}}>Become A Vendor</Button>        
                                </Link>
                    </li>

                           
                            
                            
        {data &&
            data.map(item => {
                if (item.subMenu) {
                    // return <MenuDropdown menuData={item} key={item.text} />;
                } else if (item.megaContent) {
                    // return <MegaMenu menuData={item} key={item.text} />;
                } else {
                    return (
                        <li key={item.text}>
                            {item.type === 'dynamic' ? (
                                <Link href={`${item.url}/[pid]`} as={`${item.url}/${item.endPoint}`}>
                                    <a style={{color:'white'}}>{item.text}</a>
                                </Link>
                            ) : (
                                <Link href={item.url} as={item.alias}>
                                    <a style={{color:'white'}}>{item.text}</a>
                                </Link>
                            )}
                        </li>
                    );
                }
            })}
    </ul>
);

export default Menu;
