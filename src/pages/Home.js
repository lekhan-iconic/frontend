import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav";
import BoxRowOne from "../components/BoxRowOne";

export default function Home() {
  return (
    <>
      <Box sx={{ display: " flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <BoxRowOne />
        </Box>
      </Box>
    </>
  );
}
