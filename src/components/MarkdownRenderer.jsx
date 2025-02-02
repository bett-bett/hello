import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { wikiLinkPlugin } from 'remark-wiki-link';

function CustomLink(node, children) {
  const href = "";

  if (node && node.data.hProperties.href) {
    href = node.data.hProperties.href;

    console.log("node:  \n"+ node)
    console.log("href: \n"+href)
  }

  if (href && href.endsWith(".md")) {
    const fileKey = href.slice(0, -3);

    console.log("fileKey: \n"+fileKey)

    return (
      <a
        href={href}
        data-wiki={fileKey}
        onClick={function(e) {
          e.preventDefault();
          if (onWikiLinkClick) {
            onWikiLinkClick(fileKey);
          }
        }}
      >
        {children}
      </a>
    );
  }else {  
    // If it is not a wiki link, just render a normal <a> tag.
    return (
      <a href={href}>
      {children}
    </a>
    );
  }
}

const MarkdownRenderer = ({ content, onLinkClick }) => {
  return (
    <ReactMarkdown

      remarkPlugins={[
        [wikiLinkPlugin, { hrefTemplate: (permalink) => `${permalink}.md` }],
        remarkGfm,
      ]}

      components={{
        a({ node, children }) {
          return <CustomLink node={node} children={children} onWikiLinkClick={onLinkClick} />;
        }
      }}
    >

      {content}
    
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
