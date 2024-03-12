// import Cursor from '@/components/cursor/Cursor'
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import useCursorStore from "@/lib/store/useCursorPositionStore";
import "@/styles/globals.css";
import { Stack } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Router } from "next/router";
import { useEffect } from "react";
import SVTheme from "theme/SVTheme";
import AppContextProvider from "context/AppContextProvider";
const Cursor = dynamic(() => import("@/components/cursor/Cursor"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <SVTheme>
        <Stack minHeight="100vh">
          <Header />
          <Stack flexGrow={1}>
            <AnimatePresence mode="wait" initial={false}>
              <Component {...pageProps} />
            </AnimatePresence>
          </Stack>
          <Footer />
        </Stack>
      </SVTheme>
    </AppContextProvider>
  );
}
