import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Tag from '../components/Tag';
import SEO from '../components/SEO';
import "./pages.scss"

// eslint-disable-next-line react/prop-types
const TagPage = ({ data }) => {
  const { allMarkdownRemark } = data;
 //console.log(allMarkdownRemark);
 // const mapping = {};


  


  return (
    <div>
    
  
    <div className="container">
     
      <div className="row">
       
        <Sidebar />
        
        <div className="tag-container col-xl-9 col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="tag-header markdown text-markdown">
          <h1> Tags</h1>
        </div>
          <div className="tag-div">
          {allMarkdownRemark.group.map(item => (
            <Tag name={item.fieldValue} key={item.fieldValue} count={item.totalCount} />
          ))}
        </div>
        <div>
        {allMarkdownRemark.group.map(item => (
          <div key={item.fieldValue}>
          <hr className="tag-list-hr"></hr>
          <h4>{item.fieldValue} </h4>
          <div className="flex overflow-auto-x tag-list scrollbar xxl-no-srollbar " >
          {item.edges.map(edge=>(
            
              <Link className="conact-card inline-flex tag-card" key={edge.node.frontmatter.slug} to={`${edge.node.frontmatter.slug}`} href={`${edge.node.frontmatter.slug}`}>
                  <p>{edge.node.frontmatter.title}</p>
              </Link>
             
          ))}
           </div>
        </div>
         ))}
         </div>
      </div>
      
      <SEO
        title="read"
        url="/tags/"
        siteTitleAlt="HeisenBerg's Blog"
        isPost={false}
        description="Tags Page"
        image="https://i.imgur.com/M795H8A.jpg"
      />
    </div>
    </div>
    
    </div>);
};

export default TagPage;

export const pageQuery = graphql`
  query getAllTags {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              tags
              title
              slug
            }
          }
        }
       
      }
    }
  }
`;
