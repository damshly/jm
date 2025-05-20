"use client";

import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

type Props = {
  name: string;
  description?: string;
  price: number;
  image: string;
};

export default function MenuItem({ name, description, price, image }: Props) {
  return (
    <Card sx={{ width: 280, m: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" mt={1}>
            {description}
          </Typography>
        )}
        <Typography variant="subtitle1" color="primary" mt={1}>
          {price.toFixed(2)} درهم
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="success">
          اطلب الآن
        </Button>
      </CardActions>
    </Card>
  );
}
