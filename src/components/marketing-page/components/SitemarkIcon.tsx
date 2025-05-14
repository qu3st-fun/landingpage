import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SitemarkIcon() {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          height: 30,
          width: 150,
          mr: 1,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Image
          src="/images/icon.png"
          alt="Q"
          width={35}
          height={35}
          style={{ objectFit: 'contain' }}
        />
        <Typography
          variant="h6"
          sx={{
            ml: 0.25,
            background: 'linear-gradient(135deg, #00D2FF 0%, #8B5CF6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          u3st.fun
        </Typography>
      </Box>
    </Link>
  );
}
