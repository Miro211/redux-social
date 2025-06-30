import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './User.module.css'
import userIMG from '../../assets/userIMG.png'
import { profileThunk } from "../../Store/Reducers/profileReducer";
export function UserInfo(){
    const {id} = useParams();
    const dispatch = useDispatch()
    const {profile} = useSelector(state => state.profilePage)
    useEffect(() => {
        dispatch(profileThunk(id))
    }, [])
    return (
        <div className={styles.wrapper}>
      <div className={styles.banner}></div>

      <div className={styles.content}>
        <div className={styles.avatarBox}>
          <img
            className={styles.avatar}
            // src={profile.photos?.large || 'https://via.placeholder.com/150'}
            src={profile.photos?.large ? profile.photos?.large : userIMG}
            alt="User Avatar"
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>{profile?.fullName}</h1>
          <p className={styles.about}>
            {profile.aboutMe || 'No information provided yet.'}
          </p>

          <div className={styles.section}>
            <h3>Job Status</h3>
            <p>
              {profile.lookingForAJob
                ? '🔎 Looking for a job'
                : '✅ Not looking for a job'}
            </p>
            {profile.lookingForAJobDescription && (
              <p className={styles.jobDesc}>{profile.lookingForAJobDescription}</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
    }