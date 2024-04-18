import { object, string } from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'


const loginSchema = object({
    username: string()
        .max(50, "Reached Field Limit")
        .required('Username is required'),
    password: string()
        .max(50, "Reached Field Limit")
        .required('Password is required')
})

const initialValues = {
    username: '',
    password: ''
}

function Login() {
    const nav = useNavigate()
    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
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



                <button
                    type='submit'
                    > Log In</button>

            </form>
            <button onClick={() => nav('/signup')}>
                    Create Account
            </button>
        </>
    )
}

export default Login