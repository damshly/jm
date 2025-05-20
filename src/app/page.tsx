'use client';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { Box, Container, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        التصنيفات
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {categories.map((cat) => (
          <CategoryCard
            key={cat.slug}
            title={cat.name}
            image={cat.image}
            href={`/${cat.slug}`}
          />
        ))}
      </Box>
    </Container>
  );
}
