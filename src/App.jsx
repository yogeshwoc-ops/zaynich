import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhatIsAmr from './pages/WhatIsAmr';
import ZaynichJourney from './pages/ZaynichJourney';
import BroadSpectrum from './pages/BroadSpectrum';
import MechanismOfAction from './pages/MechanismOfAction';
import Dosage from './pages/Dosage';
import Efficacy from './pages/Efficacy';
import SafetyProfile from './pages/SafetyProfile';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="what-is-amr" element={<WhatIsAmr />} />
        <Route path="the-zaynich-journey" element={<ZaynichJourney />} />
        <Route path="broad-spectrum" element={<BroadSpectrum />} />
        <Route path="mechanism-of-action" element={<MechanismOfAction />} />
        <Route path="dosage" element={<Dosage />} />
        <Route path="efficacy" element={<Efficacy />} />
        <Route path="safety-profile" element={<SafetyProfile />} />
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
