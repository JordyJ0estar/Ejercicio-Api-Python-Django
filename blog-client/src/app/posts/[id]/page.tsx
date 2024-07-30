import { Button, Container, Typography } from "@mui/material";
import PostCardDetails from "@/components/PostCardDetails";

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
}

const fetchPost = async (id: string | string[] | undefined) => {
    if (!id) {
        return null;
    }

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/posts/${id}/`);
        if (!res.ok) {
            throw new Error('Publicación no encontrada.');
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

const PostDetail = async ({ params }: { params: { id: string } }) => {
    const post = await fetchPost(params.id);

    if (!post) {
        return (
            <Container>
                <Typography variant="h4">Publicación no encontrada.</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" align="center">
                Detalles de la Publicación
            </Typography>
            <PostCardDetails
                title={post.title}
                content={post.content}
                author={post.author}

            />
            <Typography variant="subtitle2" color="textSecondary" align="center" >
                Fecha de Creación: {new Date(post.created_at).toLocaleDateString()}
            </Typography>
            <div className="button-container">

                <Button href="/" variant="contained" color="primary">
                    Volver
                </Button>
            </div>
        </Container>
    );
};

export default PostDetail;
