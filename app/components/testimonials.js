import React from 'react';
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

const testimonials = [
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        author: "John Doe",
        role: "Home Buyer",
        avatar: "/testemonial.png"
    },
    {
        id: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        author: "Jack Ryan",
        role: "Owner",
        avatar: "/testemonial.png"
    },
    {
        id: 3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        author: "Jenna Thomas",
        role: "Home Buyer",
        avatar: "/testemonial.png"
    }
];

const Testimonials = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                py: '4rem',
                px: { xs: '1rem', md: '10rem' },
            }}
        >
            <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Testimonials</Typography>
            <Typography variant='body1'>Lorem ipsum sit omet,consectuer elit,sed do elamod tempor inciddunt ur labore</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center' }}> neoe enim ispam voluptatem quie coluptas.</Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: '2rem',
                }}
            >
                {testimonials.map(testimonial => (
                    <Card
                        key={testimonial.id}
                        sx={{
                            width: '100%',
                            maxWidth: 350,
                            backgroundColor: '#B8860B',
                            color: 'white',
                        }}
                    >
                        <CardContent>
                            <Typography variant="body2">
                                {testimonial.content}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', py: '1rem' }}>
                                <Avatar alt={testimonial.author} src={testimonial.avatar} />
                                <Box>
                                    <Typography variant="h5" component="div">
                                        {testimonial.author}
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        {testimonial.role}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Testimonials;
