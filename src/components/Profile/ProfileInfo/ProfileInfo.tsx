import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

    const ProfileInfo = (props: any) => {
    if(!props.profile){
        return <Preloader/>
    }

        return (
            <div>
                <div>
                    <img alt={"profile"} className={s.photo} src='https://i.artfile.ru/2880x1800_953837_[www.ArtFile.ru].jpg'/>
                </div>
                <div className={s.descriptionBlock}>
                    <img alt={"user"} src={props.profile.photos.large}/>
                    Ava + description
                </div>
            </div>

        )
    }

export default ProfileInfo;
