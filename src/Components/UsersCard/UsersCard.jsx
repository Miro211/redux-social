import style from './UsersCard.module.css'
import userImg from '../../assets/userIMG.png'
import { NavLink } from 'react-router-dom';
export function UsersCard({user}){
    return(
        <div>
        <div>
        {/* <button>+</button> */}
        </div>
        <div className={style.card}>
        <NavLink to={`/users/${user.id}`}>
            <img className = {style.img} src={user.photos.large ? user.photos.large : userImg} alt="" />
        </NavLink>
            <h2 className={style.name}>{user.name}</h2>
        </div>
        </div>
    )
}