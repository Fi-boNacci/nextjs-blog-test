import { Media, Image } from "react-bootstrap";

export default () => (
  <Media className="mb-4 admin-intro">
    <Image
      roundedCircle
      width={64}
      height={64}
      className="mr-3"
      src="logo.jpg"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5 className="font-weight-bold mb-0">
        Encrypt.io crypto ertuntsiin medeelel
      </h5>
      <p className="welcome-text">
        Bid cryptocurrency, blockchainii salbart bolj bui shineleg vil yawdluud,
        vndsen suuri technologiin whitepaper-vvdiig orchuulan hvrgej baina.
      </p>
    </Media.Body>
  </Media>
);
