import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import "./Components.css"

interface PostCardProps {
    id: number;
    title: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title }) => {
    return (
        <Link href={`/posts/${id}`} passHref>
            <Card variant="outlined" className="contentList" style={{ margin: '1rem 0', cursor: 'pointer' }}>
                <CardContent>
                    <Typography variant="h5">{title.toUpperCase()}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default PostCard;
