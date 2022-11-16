import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { QueryClient, QueryClientProvider } from "react-query";
import Coin from "./practice/Coin";
// import {QueryClient}

function App() {
  return (
    <>
      <Coin />
    </>
    // <QueryClientProvider client={queryClient}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/edit" element={<Edit />} />
    //     </Routes>
    //   </BrowserRouter>
    // </QueryClientProvider>
  );
}

export default App;
