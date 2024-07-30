"use client";

import PostCard from "@/components/PostCard";
import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
}

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/posts/');
                if (!res.ok) {
                    throw new Error('Publicación no encontrada.');
                }
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <Typography variant="h5">Cargando...</Typography>;
    }

    return (
        <Container sx={{ paddingTop:"2%", height: 400, width: 600 }} >
            <Typography variant="h4" align="center" sx={{paddingTop:"2%", paddingBottom:"2%"}} > 
                Publicaciones
            </Typography>
            {posts.map((post: Post) => (
                <PostCard key={post.id} id={post.id} title={post.title} />
            ))}
            <div className="button-container">
            <Button variant="contained" color="primary" href="/posts/create" >
                Crear Publicación
            </Button>
            </div>
        </Container>
    );
};

export default PostList;
