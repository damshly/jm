'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { categories } from '@/data/categories';
import SeasonalSection from '@/components/SeasonalSection';
import CategoryGrid from '@/components/CategoryGrid';
import { Container, Typography } from '@mui/material';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';

import '@/app/i18n';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const translatedCategories = t('categories', { returnObjects: true });

  const dir = i18n.dir(); // 'rtl' or 'ltr'

  const seasonalCategory = categories.find((cat) => cat.highlight);
  const otherCategories = categories.filter((cat) => !cat.highlight);

  return (
    <Container sx={{ mt: 6, mb: 6 }} dir={dir}  >
      <FeaturedProductsSection />
      <Typography variant="h4" gutterBottom textAlign="center">
        {t('categoriesW')}
      </Typography>

      {seasonalCategory && (
        <SeasonalSection
        category={seasonalCategory}
        dir={dir}
        translatedTitle={translatedCategories[seasonalCategory.slug] || seasonalCategory.name}
        />
      )}
      <CategoryGrid categories={otherCategories} translatedCategories={translatedCategories} />

    </Container>
  );
}
