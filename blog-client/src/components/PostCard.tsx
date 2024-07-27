import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface PostCardProps {
    id: number;
    title: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title }) => {
    return (
        <Link href={`/posts/${id}`} passHref>
            <Card variant="outlined" style={{ margin: '1rem 0', cursor: 'pointer' }}>
                <CardContent>
                    <Typography variant="h5">{title}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default PostCard;
