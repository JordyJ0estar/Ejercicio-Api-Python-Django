import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";

interface PostCardDetailsProps {
    title: string;
    content: string;
    author: string;
}

const PostCardDetails: React.FC<PostCardDetailsProps> = ({ title, content, author }) => (
    <Container>
        <Typography variant="h3" gutterBottom>
            {title}
        </Typography>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="body1" paragraph>
                    {content}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Autor: {author}
                </Typography>
            </CardContent>
        </Card>
    </Container>
);

export default PostCardDetails;
