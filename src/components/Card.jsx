import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


export default function BasicCard({ job }) {
    return (
        <Card sx={{ minWidth: 150, maxWidth: 400, borderRadius: 3, }}>
            <CardContent sx={{ maxWidth: 'fit-content' }} >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
                    <Box
                        sx={{
                            border: 1,
                            borderColor: 'grey.500',
                            borderRadius: '20px',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 'fit-content',
                            padding: '0px 10px',
                        }}
                    >
                        <Typography sx={{ fontSize: 10, fontWeight: 700 }} color="text.secondary" gutterBottom>
                            ⏳ Posted 13 days ago
                        </Typography>
                    </Box>
                </Box>
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        width: 'full',
                        justifyContent: 'start',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <img
                        width={40}
                        height={50}
                        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid='
                        alt="logo" />
                    <Box>

                        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary" gutterBottom>
                            Company Name
                        </Typography>
                        <Typography sx={{ fontSize: 14, fontWeight: 700 }} color="text.secondary" gutterBottom>
                            Postiton
                        </Typography>
                        <Typography sx={{ fontSize: 10, fontWeight: 600 }} color="text.secondary" gutterBottom>
                            location
                        </Typography>
                    </Box>
                </Box>
                <Typography sx={{ mb: 1.5, maxWidth: 'fit-content' }} color="text.secondary">
                    Estimated Salary : 200k
                </Typography>
                <Typography variant="body2" color="black" sx={{ fontWeight: 700, fontSize: 18, maxWidth: 'fit-content' }}>
                    About Company
                </Typography>
                <Typography variant="body2" sx={{ maxWidth: 'fit-content' }}>
                    <Typography color="black" sx={{ fontWeight: 700, fontSize: 16, maxWidth: 'fit-content' }} > About Us</Typography>
                    description
                </Typography>
                <Typography variant="body2" color="gray" sx={{ fontWeight: 700, fontSize: 18, maxWidth: 'fit-content' }}>
                    Minimum experience
                    <br />
                    2 years
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        size="medium"
                        sx={{
                            width: '100%',
                            backgroundColor: 'rgb(85, 239, 196)',
                            color: 'rgb(0, 0, 0)',
                            fontWeight: 500,
                            padding: '8px 18px',
                        }}
                    >
                        Easy Apply
                    </Button>
                    <Button
  size="medium"
  sx={{
    backgroundColor: 'blue',
    '&:hover': {
      backgroundColor: 'rgb(85, 239, 196)',
    },
    color: 'white',
    margin: '2px',
    fontWeight: 500,
    padding: '8px 18px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    '@media (max-width: 600px)': {
      '& > *': {
        display: 'none',
      },
    },
  }}
>
  <AvatarGroup max={2}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '24px', height: '24px' }} />
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: '24px', height: '24px' }} />
  </AvatarGroup>
  Unlock referral asks
</Button>

                </Box>
            </CardActions>
        </Card>
    );
}