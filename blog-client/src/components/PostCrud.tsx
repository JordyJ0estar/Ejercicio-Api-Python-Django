"use client"

import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./Components.css"


const PostCrud: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted', { title, content, author });

        try {
            const response = await fetch('http://127.0.0.1:8000/api/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, author }),
            });

            if (response.ok) {
                console.log('Post created successfully');
                router.push('/');
            } else {
                console.error('Failed to create post');
                const errorData = await response.json();
                console.error(errorData);
            }
        } catch (error) {
            console.error('Error during post creation', error);
        }
    };


    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Nueva Publicación
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Título"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Contenido"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <TextField
                    label="Autor"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <div className="button-container">
                    <Button className="share" type="submit" variant="contained" color="primary">
                        Publicar
                    </Button>
                    <Button className="cancel" href="/" variant="contained" color="primary">
                        Cancelar
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default PostCrud;