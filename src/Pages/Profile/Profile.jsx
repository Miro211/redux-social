import { useDispatch, useSelector } from 'react-redux'
import style from './Profile.module.css'
import { Field, Form, Formik } from 'formik'
import { loginThunk } from '../../Store/Reducers/authReducer'
import { Navigate } from 'react-router-dom'
export default function Profile(){
    const dispatch = useDispatch()
    const {userId} = useSelector((state) => state.auth)
    if (userId) {
        return <Navigate to={`/users/${userId}`}/>
    }
    const login = (body) => {
        dispatch(loginThunk(body))
    }
    return(
        <div >
            <Formik
            initialValues={{
                email : '',
                password : '',
            }}
            onSubmit={(value) => login(value)}
            >
                <div className={style.formContainer}>
                <Form>
                    <Field name='email' placeholder='Email' className = {style.input}/>
                    <Field name='password' placeholder='Password' type='password' className = {style.input}/>
                    <button type='submit' className={style.btn}>Login</button>
                </Form>
                </div>
            </Formik>
        </div>
    )
}