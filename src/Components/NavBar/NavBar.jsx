import { NavLink } from 'react-router-dom';
import style from'./Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logutAC } from '../../Store/Reducers/authReducer';

export default function Navbar() {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.auth.userId)
  const logOut = () => {
    dispatch(logutAC())
    localStorage.removeItem('userId')
  }
  return (
    <nav className={style.navBar}>
      <div className={style.navbarLogo}>🔥 MySocial</div>
      <div className={style.navbarLinks}>
        <NavLink to='/'><span>Home</span></NavLink>
        <NavLink to='/users'><span>Users</span></NavLink>
        <NavLink to='/profile'><span>Profile</span></NavLink>
      </div>
      <div>
     {userId? (
      <button className={style.navBarBtn} onClick={logOut}>Log Out</button>
     ) : (
      <button className={style.navBarBtn}>Log in</button>
     )

     }
      </div>
    </nav>
  );
}
