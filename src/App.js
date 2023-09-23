import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => (
  <Router>
    <Box >
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchItem" element={<SearchFeed />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
