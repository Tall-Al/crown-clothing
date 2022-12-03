import './form-input.styles.scss';

const FormComponent = ({ label, ...otherProps  }) => {
    return (
        <div className='group'>
            <input className="form-input"{...otherProps} />
            { label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label `} > {label }</label> )}
                

                {/* <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email} />

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password} />

                <label>Password Confirmation</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <button type='submit'> Sign Up Now</button> */}
        </div>
         
    )
}
export default FormComponent;