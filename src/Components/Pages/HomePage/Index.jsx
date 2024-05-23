import React from 'react';
import SmartphoneSection from './SmartphoneSection/Index.jsx';
import AudioSection from './AudioSection/Index.jsx';
import CameraSection from './CameraSection/Index.jsx';
import BrandsBar from './BrandsBar/Index.jsx';
import SaveMoneyBar from './SaveMoneyBar/Index.jsx';


class HomePage extends React.Component {


    render() {
        const { smartphone, audio, camera, target, updateData } = this.props;
        return (
            <>
                <SmartphoneSection
                    updateData={updateData}
                    smartphone={smartphone}
                />
                <AudioSection
                    audio={audio}
                    updateData={updateData}
                />
                <SaveMoneyBar />
                <CameraSection
                    camera={camera}
                    updateData={updateData}
                />
                <BrandsBar />
            </>
        );
    }
}

export default HomePage;
