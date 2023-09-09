import React from 'react';
import ToolCard from '../cards/ToolCard';

const RelatedPost = () => {
    return (
        <div className='grid grid-cols-4 gap-3'>
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
        </div>
    );
};

export default RelatedPost;