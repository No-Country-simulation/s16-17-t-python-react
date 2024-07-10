/* eslint-disable arrow-body-style */

import styles from "./FormInput.module.css"

export const FormInput = ({label, type}) => {

    const { inputContainer, inputField, tag } = styles;

return (
        <div className={inputContainer}>
            <label className={tag}>
                {label}
            </label>
            <input type={type} className={inputField}/>
        </div>
     );
};