import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "components/myNavbar";
import { useTheme } from "hooks/useTheme";

export default ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={theme.type}>
      <Container>
        <MyNavbar />
        <div className="blog-detail-page">
          <div className={`page-wrapper`}>{children}</div>
        </div>
        <footer className="page-footer">
          <div>
            <a href="#">нүүр</a>
            {" | "}
            <a href="#">сургалт</a>
            {" | "}
            <a href="#">фэйсбүүк</a>
          </div>
        </footer>
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
};
