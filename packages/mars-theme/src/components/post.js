import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import { Button } from 'reactstrap';

const Post = ({ state, actions, libraries }) => {
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];
  // Get the author.
  const author = state.source.author[post.author];
  // Get a date for humans.
  const date = new Date(post.date);


  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <>
      <Container>
        <div>
          {/* <Button color="danger">Danger!</Button> */}
          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          {data.isPost && (
            <div>

              <StyledLink link={author.link}>

                <Author>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
              <Fecha>
                {" "}
                on <b>{date.toDateString()}</b>
              </Fecha>
            </div>
          )}
        </div>
        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={post.featured_media} />
        )}
        <Body>

          {/* {post.acf && post.acf.img1 && (<img src={post.acf.img1.url}></img>)}
        {post.acf && post.acf.img2 && (<img src={post.acf.img2.url}></img>)}
        {post.acf && post.acf.img3 && (<img src={post.acf.img3.url}></img>)} */}


          <libraries.html2react.Component html={post.content.rendered} />
        </Body>
      </Container>
    </>
  ) : null;
};

export default connect(Post);


const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #fff;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color:#fff ;
  font-size: 0.9em;
  display: inline;
`;

const Fecha = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const Body = styled.div`
  color: #fff;
  word-break: break-word;
  * {
    max-width: 100%;
  }
  p {
    line-height: 1.6em;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
    figcaption {
      font-size: 0.7em;
    }
    a {
      color:#fff;
      text-decoration:none;
    }
  }
  iframe {
    display: block;
    margin: auto;
  }
  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  /* WordPress Core Align Classes */
  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }
    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .alignright {
      float: right;
      margin-left: 24px;
    }
    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;