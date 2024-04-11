import React from 'react';
import { Image, Input, Layout, Menu } from 'antd';

const { Header } = Layout

const Navbar = () => {
    return (
        <div>
            <Layout style={{backgroundColor: '#192026'}}>
                <Header style={{
                    position: 'sticky',
                    top: 24,
                    left: 83,
                    gap: 0,
                    zIndex: 1,
                    // width: 1274,
                    // height: 100,

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                    <div style={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: 36,
                        // lineHeight: 32,
                        letterSpacing: 0.07,
                        textAlign: 'left',
                        color: '#FFFFFF',
                        // height: 1000

                    }}
                    >Anonime</div>

                    <div style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: 18,
                        // lineHeight: 32,
                        letterSpacing: 0.07,
                        color: '#868686',
                        position: 'relative',
                        left: 100,
                    }}>Home</div>

                    <div style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: 18,
                        // lineHeight: 32,
                        letterSpacing: 0.07,
                        color: '#868686',
                        position: 'relative',
                        left: 130,
                    }}>List anime</div>

                    <Input placeholder='Search anime or movie' style={{
                        width: 374.58,
                        height: 48,
                        borderRadius: 37,
                        position: 'relative',
                        left: 600
                        

                    }} />
                </Header>
            </Layout>



        </div>
    );
}

export default Navbar;


// width: Fixed (374.58px)px;
// height: Hug (48px)px;
// top: 24px;
// left: 982.42px;
// padding: 8px 100px 8px 18px;
// gap: 10px;
// border-radius: 37px 0px 0px 0px;
// opacity: 0px;

