import React from 'react';
import Article from './Article';

function ArticleList({posts}) {
    const ArticleArr = posts.map((post) => {
        return (
            <Article
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
            />
        )
    });
    return (
        <main>
            {ArticleArr}
        </main>
    )
}

export default ArticleList