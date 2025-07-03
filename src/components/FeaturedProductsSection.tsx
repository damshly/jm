// src/components/FeaturedProductsSection.tsx
"use client";

import { Typography, Grid, useTheme, alpha } from "@mui/material";
import { items } from "@/data/items";
import { t } from "i18next";
import ProductCard from "./ProductCard";

export default function FeaturedProductsSection() {
  const featuredItems = items.filter((item) => item.isFeatured);
  const theme = useTheme();

  const bgColor = alpha(theme.palette.primary.main, 0.1);
  return (
    <>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {t("Special")}
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          mt: 2,
          mb: 4,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: {
            xs: "wrap", // على الشاشات الصغيرة (الجوال) يكون wrap
            sm: "nowrap", // من حجم sm وأكبر يكون nowrap
          },
          justifyContent: "center",
          alignItems: "stretch",
        }}
        m={5}
        p={5}
        border={2}
        borderColor={theme.palette.primary.main}
        borderRadius={2}
        backgroundColor={bgColor}
      >
        {featuredItems.map((item) => (
          <Grid
            item
            sx={{
              width: "100%",
              maxWidth: 300,
              mx: "auto",
              cursor: "pointer",
              borderRadius: 3,
              overflow: "hidden",
              position: "center",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 8,
              },
            }}
            sm={6}
            md={4}
            lg={3}
            key={item.id}
          >
            <ProductCard
              title={t(item.title)}
              description={t(item.description)}
              image={item.image}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
