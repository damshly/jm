// components/CategoryGrid.tsx
'use client';

import React from 'react';
import { Grid } from '@mui/material';
import CategoryCard from './CategoryCard';
import { Category } from '@/types/category';

interface CategoryGridProps {
  categories: Category[];
  translatedCategories: Record<string, string>;
}

export default function CategoryGrid({ categories, translatedCategories }: CategoryGridProps) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {categories.map((cat) => (
        <Grid item key={cat.slug} xs={6} sm={6} md={4} lg={3}>
          <CategoryCard
            title={translatedCategories[cat.slug] || cat.name}
            image={cat.image}
            href={`/${cat.slug}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
