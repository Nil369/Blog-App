import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import appwriteService from "../appwrite/dbConfig";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); // For loading indicator
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/"); // Redirect if post not found
                }
                setLoading(false); // Stop loading
            });
        } else {
            navigate("/"); // Redirect if no slug is found
        }
    }, [slug, navigate]);

    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage);
                    navigate("/"); // Redirect to home after deletion
                }
            });
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-zinc-800">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-orange-500"></div>
            </div>
        );
    }

    return post ? (
        <div className="py-8 bg-zinc-800 min-h-screen">
            <Container>
                <div className="flex flex-col items-center">
                    {/* Featured Image */}
                    <div className="w-full max-w-3xl mb-8 relative shadow-lg rounded-xl overflow-hidden">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                        />

                        {isAuthor && (
                            <div className="absolute top-4 right-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="hover:bg-green-600 transition-colors">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" className="hover:bg-red-600 transition-colors" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <div className="w-full max-w-3xl text-center mb-6">
                        <h1 className="text-3xl font-extrabold text-white leading-tight">{post.title}</h1>
                    </div>

                    {/* Author Name */}
                    {userData && (
                        <div className="w-full max-w-3xl text-center mb-6 text-sm text-orange-400">
                            <span>By {userData.email}</span>
                        </div>
                    )}

                    {/* Content */}
                    <div className="w-full max-w-3xl bg-zinc-600 p-6 shadow-lg rounded-xl">
                        <div className="prose max-w-none">{parse(post.content)}</div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
