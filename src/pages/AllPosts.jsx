import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/dbConfig";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch posts from the service
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                setLoading(false); // Turn off loading when posts are fetched
            }
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap relative">
                    {/* Loading Spinner */}
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50">
                             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-orange-500"></div>
                        </div>
                    )}

                    {/* Posts */}
                    {!loading && posts.length === 0 && (
                        <div className="w-full text-center text-gray-500">
                            <p>No posts available</p>
                        </div>
                    )}

                    {/* Display posts */}
                    {!loading && posts.length > 0 && posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
