import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import socialAPI from '../../Api/api'
import { getUsersAC, getUsersThunkCreator } from '../../Store/Reducers/useReducer'
import style from './UsersPage.module.css'
import { UsersCard } from '../../Components/UsersCard/UsersCard'
export function UsersPage() {
    const dispatch = useDispatch()
    const { users, isLoading } = useSelector((state) => state.usersPage)
    useEffect(() => {
        dispatch(getUsersThunkCreator())
    }, [])
    return (
        <div className={style.body}>
            <div className={style.card}>
                {
                    isLoading ? (<div className={style.loading}>
                        <h2 className={style.error}>Loading...</h2>
                    </div>) :
                        users.map((user) => {
                            return <UsersCard user={user} key={user.id} />
                        })
                }
            </div>
        </div>
    )
}