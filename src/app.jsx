// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Header } from './layout/header.jsx';
import { Main } from './layout/main.jsx';
import { Footer } from './layout/footer.jsx';

import './app.css'

export function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}