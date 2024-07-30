import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import "./Components.css"

interface PostCardDetailsProps {
    title: string;
    content: string;
    author: string;
}

const PostCardDetails: React.FC<PostCardDetailsProps> = ({ title, content, author }) => (
    <Container className="mainContainer">

        <Card className="ContentCard" variant="outlined" sx={{ height: 400, width: 600 }} >
            <CardContent>
                <Typography variant="h4" gutterBottom >
                    Titulo: {title.toUpperCase()}
                </Typography>
                <Typography variant="body1" paragraph>
                    - {content}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" >
                    Autor: {author.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    </Container>
);

export default PostCardDetails;
