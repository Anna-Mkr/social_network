import React from "react";
import s from './ProfileInfo.module.css'

    const ProfileInfo = () => {
        return (
            <div>
                <div>
                    <img alt={"profile"} className={s.photo} src='https://i.artfile.ru/2880x1800_953837_[www.ArtFile.ru].jpg'/>
                </div>
                <div className={s.descriptionBlock}>
                    Ava + description
                </div>
            </div>

        )
    }


export default ProfileInfo;
