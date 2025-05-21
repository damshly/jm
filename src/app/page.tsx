'use client';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import {  Container, Typography, Grid } from '@mui/material';

export default function HomePage() {
  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        التصنيفات
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map((cat) => (
          <Grid  key={cat.slug}>
            <CategoryCard
              title={cat.name}
              image={cat.image}
              href={`/${cat.slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
