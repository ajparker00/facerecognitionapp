import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
const App = () => {
  return (
    <div>
      <Particles className='particles' params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*      
        <FaceRecognition /> */}
    </div>
  );
};

export default App;
