// components/SeasonalSection.tsx
'use client';

import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CategoryCard from './CategoryCard';
import { useTranslation } from 'react-i18next';
import { Category } from '@/types/category'; // افترضنا وجود النوع

interface SeasonalSectionProps {
  category: Category;
  dir: 'rtl' | 'ltr';
  translatedTitle: string;
}

export default function SeasonalSection({ category, dir, translatedTitle }: SeasonalSectionProps) {
  const { t } = useTranslation();
  const isRTL = dir === 'rtl';

  return (
    <Grid
      border={2}
      borderColor="primary.main"
      container
      spacing={4}
      direction={isRTL ? 'row-reverse' : 'row'}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        mx: { xs: 3, sm: 8, md: 5 },
        my: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        justifyContent: 'space-between',
        bgcolor: 'rgba(255, 244, 229, 0.4)',
        borderRadius: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Grid
        item
        sx={{
          flexShrink: 0,
          minWidth: { xs: '100%', md: '100%' },
          maxWidth: { md: '100%' },
        }}
      >
        <CategoryCard
          title={translatedTitle}
          image={category.image}
          href={`/${category.slug}`}
          highlight
        />
      </Grid>

      <Grid item sx={{ overflow: 'hidden' }}>
        <Box
          sx={{
            maxWidth: '100%',
            whiteSpace: 'normal',
            textAlign: isRTL ? 'right' : 'left',
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            {t('seasonalSpecial') || 'قائمة الموسم'}
          </Typography>
          <Typography variant="h5">
            {t('seasonalDescription') || 'seasonalDescription'}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
