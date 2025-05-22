'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { Container, Typography, Grid } from '@mui/material';
import '@/app/i18n';

export default function HomePage() {
  const { t } = useTranslation();
  const translatedCategories = t('categories', { returnObjects: true });

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        {t('categoriesW')}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map((cat) => (
          <Grid item key={cat.slug}>
            <CategoryCard
              title={translatedCategories[cat.slug] || cat.name}
              image={cat.image}
              href={`/${cat.slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
