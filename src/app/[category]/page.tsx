"use client";

import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { items } from "@/data/items";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { t } = useTranslation();

  // البحث عن الكاتيجوري
  const category = categories.find((cat) => cat.slug === params.category);
  if (!category) return notFound();

  // تصفية العناصر التابعة للكاتيجوري
  const categoryItems = items.filter(
    (item) => item.category === params.category
  );

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      {/* ترجمة اسم الفئة */}
      <Typography variant="h4" gutterBottom textAlign="center">
        {t(`categories.${category.slug}`)}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categoryItems.map((item) => (
          <Grid key={item.id}>
            <Card
              sx={{
                width: 250,
                boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)", // ظل خفيف
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "12px 12px 12px rgba(221, 85, 43, 0.4)"
                },
              }}
            >
              <CardMedia sx={{ position: "relative", height: 150 }}>
                <Image
                  src={item.image}
                  alt={t(item.title)}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 600px) 100vw, 250px"
                  priority={true}
                />
              </CardMedia>
              <CardContent>
                {/* ترجمة العنوان */}
                <Typography variant="h6" component="h3" gutterBottom>
                  {t(item.title)}
                </Typography>
                {/* ترجمة الوصف */}
                {/* <Typography variant="body2" color="text.secondary">
                  {t(item.description)}
                </Typography> */}
                <Typography variant="subtitle1" color="primary" mt={1}>
                  {item.price.toFixed(2)} DHs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
