'use client';

import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { items } from '@/data/items';
import { Container, Typography, Grid } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { useTranslation } from 'react-i18next';

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { t } = useTranslation();

  const category = categories.find((cat) => cat.slug === params.category);
  if (!category) return notFound();

  const categoryItems = items.filter(
    (item) => item.category === params.category
  );

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        {t(`categories.${category.slug}`)}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categoryItems.map((item) => (
          <Grid item key={item.id}>
            <ProductCard
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
