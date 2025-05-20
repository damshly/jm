// src/app/[category]/page.tsx

import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { items } from '@/data/items';
import { Container, Typography, Card, CardContent } from '@mui/material';
import Image from 'next/image';

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find((cat) => cat.slug === params.category);

  if (!category) return notFound();

  const categoryItems = items.filter((item) => item.category === params.category);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {category.name}
      </Typography>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {categoryItems.map((item) => (
          <Card key={item.id} sx={{ width: 250 }}>
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={150}
              style={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
