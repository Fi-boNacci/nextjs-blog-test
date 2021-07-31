import { Alert } from "react-bootstrap";

export default () => {
  return (
    <Alert variant="danger">
      <span>Анхаар та PREVIEW горимд байна!!</span>
      <Alert.Link href="/api/preview-exit"> Энд дарж </Alert.Link>
      <span>энэ горимоос гарна уу</span>
    </Alert>
  );
};
