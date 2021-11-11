import React from 'react';
import LottieAnimation from './LottieAnimation';
import loadingSuccess from '../animations/loadingSuccess.json';
import loadingScreen from '../animations/loadingScreen.json';
import lonely404 from '../animations/lonely404.json';
import pageNotFound from '../animations/pageNotFound.json';


function TestComponent() {
    return (
        <div>
            <LottieAnimation lotti={loadingSuccess} height={250} width={250} />
            <LottieAnimation lotti={loadingScreen} height={250} width={250} />
            <LottieAnimation lotti={lonely404} height={250} width={250} />
            <LottieAnimation lotti={pageNotFound} height={250} width={250} />
        </div>
    )
}

export default TestComponent
