import React, { useState } from 'react';
import { NavBar, InfoPanel, BottomNav } from './Components';

function App() {
  const screenConfig = useState(0);
  return (
    <div>
      <NavBar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <BottomNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
