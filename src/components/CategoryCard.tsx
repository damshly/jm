'use client';

import { useRouter } from 'next/navigation';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';

type Props = {
  title: string;
  image: string;
  href: string;
};

export default function CategoryCard({ title, image, href }: Props) {
  const router = useRouter();

  const handleMouseEnter: MouseEventHandler = () => {
    router.prefetch(href);
  };

  const handleMouseDown: MouseEventHandler = () => {
    router.push(href); // الانتقال بمجرد الضغط
  };

  return (
    <Card sx={{ width: 280, cursor: 'pointer' }}>
      <CardActionArea
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseDown} // بدلاً من الاعتماد على Link
      >
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" textAlign="center">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
