import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";

import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";

export default function Labs() {
  console.log('Hello World!');
  return (
  <Provider store={store}>
    <div>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} /> {/* Ensure Lab4 is set up with a wildcard */}
      </Routes>
    </div>
    </Provider>
  );
}
