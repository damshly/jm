"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          height: 56,
          backgroundColor: "#dd552b",
          color: "white",
          px: 2,
          py: 1.5,
          fontWeight: "bold",
          fontSize: "1.1rem",
          m: 0, // إزالة الهامش
        }}
      >
        الأصناف
      </Box>
      <List sx={{ py: 0 }}>
        {categories.map((cat) => (
          <ListItem key={cat.slug} disablePadding>
            <ListItemButton
              onMouseDown={() => router.push(`/${cat.slug}`)}
              onTouchStart={() => router.push(`/${cat.slug}`)}
            >
              <ListItemText primary={cat.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Menu App
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box>
              {categories.map((cat) => (
                <Button
                  key={cat.slug}
                  color="inherit"
                  sx={{ textTransform: "none" }}
                  onMouseDown={() => router.push(`/${cat.slug}`)}
                  onTouchStart={() => router.push(`/${cat.slug}`)}
                >
                  {cat.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
