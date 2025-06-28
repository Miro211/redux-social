import { NavLink } from 'react-router-dom';
import style from'./Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.navBar}>
      <div className={style.navbarLogo}>🔥 MySocial</div>
      <div className={style.navbarLinks}>
        <NavLink to='/'><span>Home</span></NavLink>
        <NavLink to='/users'><span>Users</span></NavLink>
        <span>Profile</span>
      </div>
      <div>
        <button className={style.navBarBtn}>Sign In</button>
      </div>
    </nav>
  );
}
