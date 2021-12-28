import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/common";
import { Home, Customer } from './pages'

import s from './App.css';

function App() {
  return (
    <div className={`${s.App}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":customerId" element={<Customer />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
