'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { Container, Typography, Grid, Box } from '@mui/material';
import '@/app/i18n';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const translatedCategories = t('categories', { returnObjects: true });

  const dir = i18n.dir(); // 'rtl' or 'ltr'
  const isRTL = dir === 'rtl';
  console.log('Direction:', dir, 'isRTL:', isRTL);


  const seasonalCategory = categories.find((cat) => cat.highlight);
  const otherCategories = categories.filter((cat) => !cat.highlight);

  return (
    <Container sx={{ mt: 6, mb: 6 }} dir={dir}>
  <Typography variant="h4" gutterBottom textAlign="center">
    {t('categoriesW')}
  </Typography>

  {/* قسم الموسمي */}
  {seasonalCategory && (
    <Grid
    border={2}
    borderColor={'primary.main'}
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
    flexWrap: 'nowrap',
  }}
>

  
   {/* الكارت */}
   <Grid
     item
     sx={{
       flexShrink: 0,
       minWidth: { xs: 200, md: 300 }, 
       maxWidth: { md: 400 },
     }}
   >
     <CategoryCard
       title={translatedCategories[seasonalCategory.slug] || seasonalCategory.name}
       image={seasonalCategory.image}
       href={`/${seasonalCategory.slug}`}
       highlight
     />
   </Grid>
 
   {/* النص */}
   <Grid
     item
     sx={{
       overflow: 'hidden',
     }}
   >
     <Box
       sx={{
         maxWidth: '100%',
         whiteSpace: 'normal',
         textAlign: isRTL ? 'right' : 'left',
       }}
     >
       <Typography variant="h5" color="primary" gutterBottom>
         {t('seasonalSpecial') || 'قائمة الموسم'}
       </Typography>
       <Typography variant="body1">
         {t('seasonalDescription') ||
          'seasonalDescription' }
       </Typography>
     </Box>
   </Grid>
 </Grid>
 
  )}

  {/* قسم بقية التصنيفات */}
  <Grid container spacing={3} justifyContent="center">
    {otherCategories.map((cat) => (
      <Grid item key={cat.slug} xs={12} sm={6} md={4}>
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
