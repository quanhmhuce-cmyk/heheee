import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Couple />
        <Story />
        <Gallery />
        <Events />
        <Rsvp />
      </main>
      <Footer />
      <GeminiAssistant />
    </div>
  );
};

export default App;