'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import { Box, Typography, Chip } from '@mui/material';

type Props = {
  title: string;
  image: string;
  href: string;
  highlight?: boolean;
};

export default function CategoryCard({ title, image, href, highlight }: Props) {
  const router = useRouter();

  const handleMouseEnter: MouseEventHandler = () => {
    router.prefetch(href);
  };

  const handleMouseDown: MouseEventHandler = () => {
    router.push(href);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      sx={{
        cursor: 'pointer',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: highlight ? 6 : 2,
        border: highlight ? '3px solid #dd552b' : '1px solid #ddd',
        position: 'relative',
        transition: '0.3s',
        '&:hover': {
          boxShadow: 8,
          transform: highlight ? 'scale(1.01)' : 'none',
        },
      }}
    >
      {/* شارة "مميز" */}
      {highlight && (
        <Chip
          label="مميز ✨"
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            fontWeight: 'bold',
          }}
        />
      )}

      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />

      <Box sx={{ p: 2, backgroundColor: highlight ? '#fff7f3' : '#fff' }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: highlight ? 'bold' : 'normal', color: '#333' }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
