import { Link } from 'react-router-dom';

export default function FooterLogo() {
  return (
    <div className="footer-logo">
      <Link to="/">
        <img src="/images/logo.png" alt="Go to homepage" />
      </Link>
    </div>
  )
}