import React from 'react';
import LoginFormCard from "../LoginFormCard/LoginFormCard";
import {Center, Image} from "@mantine/core";
import BackgroundImage from '../../assets/background-image.jpg';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                alignContent: 'center',
                justifyContent: 'center'
            }}
        >
            <Image
                height={'100vh'}
                width={'100vw'}
                style={{
                    filter: 'blur(10px)',
                    position: 'absolute',
                }}
                src={BackgroundImage}
            />
            <Center>
                <LoginFormCard/>
            </Center>
        </div>
    );
}

export default App;
