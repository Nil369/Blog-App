import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/dbConfig";
import { Button, Container, Logo, PostCard } from "../components";
import { Link } from "react-router";

function Home() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData); 
    const maxPostsToShow = 4; 

    useEffect(() => {
        if (userData) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        }
    }, [userData]);

    return (
        <div className="w-full py-2 min-h-screen text-white bg-zinc-800">
            {/* Hero Section */}
            <div className="py-16 text-center">
                <h1 className="flex gap-x-2 justify-center text-3xl font-extrabold mb-4">
                    Welcome to 
                    <Logo />
                </h1>

                <p className="flex-col text-lg font-light">
                    Discover amazing stories and insights from our <span className="text-orange-500">community.</span>
                </p>
            </div>

            <Container>
                {/* Posts Section */}
                {userData ? (
                    <div className="flex flex-wrap">
                        {/* Show loading animation if no posts */}
                        {posts.length === 0 ? (
                            [...Array(maxPostsToShow)].map((_, index) => (
                                <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <div className="bg-zinc-700 h-64 rounded-md animate-pulse" />
                                </div>
                            ))
                        ) : (
                            // Show up to 4 posts once data is fetched
                            posts.slice(0, maxPostsToShow).map((post) => (
                                <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <PostCard {...post} />
                                </div>
                            ))
                        )}

                        {/* See All Posts Button */}
                        {posts.length > maxPostsToShow && (
                            <div className="w-full mt-8 text-center">
                                <Link to="/all-posts">
                                    <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300 transform hover:scale-105">
                                        See All Posts
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    // Prompt Login for Guests
                    <div className="text-center py-5 my-0">
                        <h2 className="text-2xl font-bold mb-4">
                            <Link to="/login">
                                <Button bgColor="bg-orange-500" hoverColor ="orange" className={`px-32`}>Login</Button>
                            </Link>
                        </h2>
                        <p className="text-xs">Login to access exclusive content!</p>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Home;
