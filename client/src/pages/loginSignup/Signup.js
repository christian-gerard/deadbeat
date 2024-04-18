import { object, string } from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'


const signupSchema = object({
    username: string()
        .max(50, "Reached Field Limit")
        .required('Username is required'),
    password: string()
        .max(50, "Reached Field Limit")
        .required('Password is required'),
    confirmPassword: string()
        .required('Please Reenter Password')
})

const initialValues = {
    username: '',
    password: '',
    confirmPassword: ''
}

function Signup() {
    const nav = useNavigate()

    const formik = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: (formData) => {
            console.log(formData)
        }
    })

    return (

        <>
        
            <form onSubmit={formik.handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    id='username'
                    placeholder="Username..."
                    
                    />
                {formik.errors.username && formik.touched.username && (
                    <div>
                        {formik.errors.username}
                    </div>
                )}

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    id='password'
                    placeholder="Password..."
                    />
                {formik.errors.password && formik.touched.password && (
                    <div>
                        {formik.errors.password}
                    </div>
                )}

                <input
                    type='password'
                    name='confirmPassword'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    id='confirmPassword'
                    placeholder="Confirm Password..."
                    />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <div>
                        {formik.errors.confirmPassword}
                    </div>
                )}



                <button
                    type='submit'
                    > Create Account </button>

            </form>

            <button onClick={() => nav('/login')}>
                    Login to an existing account
            </button>
        </>
    )
}

export default Signup