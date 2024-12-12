import React from 'react';
import appwriteService from '../../appwrite/dbConfig';
import { Link } from 'react-router'; 

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group">
      <div className="w-full bg-zinc-600 rounded-lg shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105">
        {/* Featured Image */}
        <div className="w-full h-48 bg-gray-200">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white group-hover:text-orange-600 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
