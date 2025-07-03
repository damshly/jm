// src/components/ProductCard.tsx
'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type ProductCardProps = {
  image: string;
  title: string;
  description?: string;
  price: number;
};

export default function ProductCard({
  image,
  title,
  description,
  price,
}: ProductCardProps) {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        width: 300,
        boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '12px 12px 12px rgba(221, 85, 43, 0.4)',
        },
      }}
    >
      <CardMedia sx={{ position: 'relative', height: 300 }}>
        <Image
          src={image}
          alt={t(title)}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, 250px"
          priority
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {t(title)}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {t(description)}
          </Typography>
        )}
        <Typography variant="subtitle1" color="primary" mt={1}>
          {price.toFixed(2)} DHs
        </Typography>
      </CardContent>
    </Card>
  );
}
