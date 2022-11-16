import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { QueryClient, QueryClientProvider } from "react-query";
import Coin from "./practice/Coin";
import Movie_pj from "./practice/Movie/Movie_pj";
// import {QueryClient}

function App() {
  return (
    <>
      {/* <Coin /> */}
      <Movie_pj />
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
