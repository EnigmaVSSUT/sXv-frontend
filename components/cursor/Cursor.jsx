import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useCursorStore from "@/lib/store/useCursorPositionStore";
import { Box, useMediaQuery } from "@mui/material";
import { Router } from "next/router";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [
    showCursor,
    x,
    y,
    setCursorPosition,
    isHovering,
    cursorBackgroundColor,
    setCursorVisibility,
    isRouteChange,
  ] = useCursorStore((state) => [
    state.showCursor,
    state.x,
    state.y,
    state.setCursorPosition,
    state.isHovering,
    state.cursorBackgroundColor,
    state.setCursorVisibility,
    state.isRouteChange,
  ]);
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  useLayoutEffect(() => {
    const mouseMove = (e) => {
      let x = e.pageX + window.scrollX;
      let y = e.pageY - window.scrollY;

      setCursorPosition(x, y);
    };

    document.body.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", () => setCursorVisibility(false));
    document.addEventListener("mousemove", () => setCursorVisibility(true));

    return () => document.body.removeEventListener("mousemove", mouseMove);
  }, [setCursorPosition, setCursorVisibility]);

  const variants = {
    default: {
      x: x - (isHovering ? 50 : 20),
      y: y - (isHovering ? 50 : 20),
      width: isHovering ? 100 : 40,
      height: isHovering ? 100 : 40,
      // scale: isLoading ? 300 : 1
    },
  };

  return (
    <Box
      component={motion.div}
      ref={cursorRef}
      variants={variants}
      animate="default"
      sx={{
        // display: isTouchDevice ? 'none' : 'block',
        visibility: isTouchDevice
          ? "hidden"
          : showCursor
          ? "visible"
          : "hidden",
        position: "fixed",
        backgroundColor: "red",
        border: "1px solid white",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: isHovering ? "difference" : "normal",
      }}
    />
  );
};

export default Cursor;
