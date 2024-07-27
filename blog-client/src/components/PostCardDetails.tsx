import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";

interface PostCardDetailsProps {
    title: string;
    content: string;
    author: string;
}

const PostCardDetails: React.FC<PostCardDetailsProps> = ({ title, content, author }) => (
    <Container>
        <Typography variant="h4" gutterBottom >
            {title.toUpperCase()}
        </Typography>
        <Card variant="outlined"  sx={{ height: 300 ,width:400 }} >
            <CardContent>
                <Typography variant="body1" paragraph>
                    {content}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Autor: {author.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    </Container>
);

export default PostCardDetails;
