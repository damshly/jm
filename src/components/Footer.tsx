"use client";

import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";
import {links} from "@/data/links";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMobile ? 2 : 0,
        }}
      >
        {/* مواقع التواصل */}
        <Box>
          <IconButton
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            href={links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FaTiktok />
          </IconButton>

          {/* <IconButton
            href={links.snapchat}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FaSnapchatGhost />
          </IconButton> */}
        </Box>

        {/* حقوق النشر */}
        <Typography variant="body2" sx={{ textAlign: isMobile ? "center" : "right" }}>
          Powered by <strong>Damshly</strong> © {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
