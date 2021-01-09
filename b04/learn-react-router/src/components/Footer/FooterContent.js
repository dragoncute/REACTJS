import { Link } from 'react-router-dom';

export default function FooterContent() {
    return (
        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
        <div className="footer-title">
          <p>Categories</p>
        </div>
        <ul className="footer-content__list">
          <li><Link to="#">ReactJs</Link></li>
          <li><Link to="#">Javascript</Link></li>
          <li><Link to="#">Angular</Link></li>
          <li><Link to="#">HTML, HTML5</Link></li>
        </ul>
      </div>
    )
  }