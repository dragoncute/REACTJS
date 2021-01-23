import React from "react";
import ArticleItem from "../ArticleItem";
import "./ArticleNewList.css";
import MainTitle from "../../common/MainTitle";
import Container from "../../common/Container";
import Row from "../../common/Row";
import Col from "../../common/Col";
import { useSelector } from "react-redux";
export default function ArticleList() {
  const posts = useSelector((state) => state.Post.articlesList);
  return (
    <div className="articles-list section">
      <Container>
        <MainTitle
          isShowBtn
          btnProps={{
            htmlType: "a",
            href: "/posts",
            btnText: "View more",
          }}
        >
          Danh sách bài viết
        </MainTitle>
        <Row>
          {posts.map((post) => {
            return (
              <Col xs={12} md={6}>
                <ArticleItem isStyleCard post={post} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
