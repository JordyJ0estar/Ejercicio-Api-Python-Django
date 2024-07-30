"use client"

import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./Components.css"


const PostCrud: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const router = useRouter();

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (title.trim() === '') newErrors.title = 'El título es obligatorio.';
        if (content.trim() === '') newErrors.content = 'El contenido es obligatorio.';
        if (author.trim() === '') newErrors.author = 'El autor es obligatorio.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }


       

        try {
            const response = await fetch('http://127.0.0.1:8000/api/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, author }),
            });

            if (response.ok) {
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
        <Container className="formContainer" sx={{ height: "fit-content", width: 600 }} >
            <Typography variant="h4" gutterBottom align="center" sx={{paddingTop:"2%"}}>
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
                    error={!!errors.title}
                    helperText={errors.title}
                    className="texFields"
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
                    error={!!errors.content}
                    helperText={errors.content}
                    className="texFields"
                />
                <TextField
                    label="Autor"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    error={!!errors.author}
                    helperText={errors.author}
                    className="texFields"
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