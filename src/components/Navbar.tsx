"use client";

import React, { useState, useEffect } from "react";
import i18n from "@/app/i18n";
import { useTranslation } from "react-i18next";
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
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [useMobileVersion, setUseMobileVersion] = useState(false);

  // جلب كائن الفئات من الترجمة
  const categoriesObj = t("categories", { returnObjects: true });

  // تحويل الكائن إلى مصفوفة
  const translatedCategories = React.useMemo(() => {
    // تأكد أن categoriesObj هو كائن وليس مصفوفة
    if (
      typeof categoriesObj !== "object" ||
      Array.isArray(categoriesObj) === true
    ) {
      return [];
    }
    return Object.entries(categoriesObj).map(([slug, name]) => ({
      slug,
      name,
    }));
  }, [categoriesObj]);

  const maxButtonsPerLine = 5;
  const maxLines = 2;

  useEffect(() => {
    if (isMobileScreen) {
      setUseMobileVersion(true);
    } else {
      const neededLines = Math.ceil(
        translatedCategories.length / maxButtonsPerLine
      );
      setUseMobileVersion(neededLines > maxLines);
    }
  }, [isMobileScreen, translatedCategories.length]);

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const drawer = (
    <Box
      sx={{ width: 280, bgcolor: "#fff", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          height: 70,
          backgroundColor: "#dd552b",
          color: "white",
          px: 3,
          py: 2,
          fontWeight: "bold",
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {t("categoriesW")}
      </Box>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            const nextLang = i18n.language === "ar" ? "en" : "ar";
            i18n.changeLanguage(nextLang);
          }}
        >
          <ListItemText
            primary={i18n.language === "ar" ? "English 🇺🇸" : "🇦🇪عربي"}
          />
        </ListItemButton>
      </ListItem>

      <List sx={{ py: 0 }}>
        {translatedCategories.map((cat) => (
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
    <AppBar
      position="sticky"
      color="primary"
      sx={{ height: 150, justifyContent: "center" }}
      elevation={4}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          px: { xs: 2, md: 4 },
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <Typography
          variant="h5"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            flexGrow: 1,
            ml: 2,
          }}
        >
          {t("millionFlavors")}
        </Typography>

        {useMobileVersion ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              size="large"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              maxHeight: "6.5rem",
              overflow: "hidden",
              alignContent: "flex-start",
            }}
          >
            <Button
              color="inherit"
              onClick={() => {
                const nextLang = i18n.language === "ar" ? "en" : "ar";
                i18n.changeLanguage(nextLang);
              }}
            >
              {i18n.language === "ar" ? "English 🇺🇸" : "🇦🇪عربي"}
            </Button>
            {translatedCategories.map((cat) => (
              <Button
                key={cat.slug}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: "500",
                  border: "1px solid #fff",
                  borderRadius: "3px",
                  px: 2,
                  height: "2.4rem",
                  lineHeight: "2.4rem",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderColor: "#f59e0b",
                  },
                }}
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
  );
}
