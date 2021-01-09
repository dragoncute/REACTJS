import './Footer.css';
import Container from '../../common/Container';
import Col from '../../common/Col';
import FooterLogo from './FooterLogo';
import FooterContent from './FooterContent';
import FooterFacebook from './FooterFacebook';
import Row from '../../common/Row';
// import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-white">
  <Container>
  <Row className ="footer ">
      {/* Footer Column */}
      <Col xs={12} sm={6} md={4} lg={3}>
      <FooterLogo />
  <p>© 2020, All Rights Reserved.</p>
  <p>Created by <a href="https://www.facebook.com/congluc1902">Luctc</a></p>
      </Col>
{/* Footer Column */}
<FooterContent/>
{/* Footer Column */}
      <Col xs={12} sm={6} md={4} lg={3}>
      <div className="footer-title">
        <p>Liên hệ</p>
      </div>
      <ul className="footer-content__list">
        <li>219/78 Trần Văn Đang - Quận 10 - Thành phố Hồ chí Minh</li>
        <li>0343 261 825</li>
      </ul>
      </Col>

{/* Footer Column */}
      <Col xs={12} sm={6} md={4} lg={4}>
        <div className="footer-title">
          <p>Fanpage</p>
        </div>
        <FooterFacebook/>
      </Col>
    </Row>
  </Container>
</footer>

  )
}
