import {

  Link
} from "react-router-dom";

function Header() {
  return (
    <div>
      <h1 className='main-heading'>
            Bryan's Website
      </h1>
      <nav className='main-nav'>
        <ul>
          <li><Link to="/">landing page (Hello)</Link></li>
          <li><Link to="/about">Here and Now (About)</Link></li>
          <li><Link to="/edu">Learning (Data Vault)</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header