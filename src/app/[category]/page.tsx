import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { items } from '@/data/items';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import Image from 'next/image';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((cat) => cat.slug === params.category);
  if (!category) return notFound();

  const categoryItems = items.filter((item) => item.category === params.category);

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        {category.name}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categoryItems.map((item) => (
          <Grid item key={item.id}>
            <Card sx={{ width: 250 }}>
              <CardMedia
                sx={{ position: 'relative', height: 150 }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, 250px"
                  priority={true}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
