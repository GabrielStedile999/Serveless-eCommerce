import React from 'react'
import {useForm} from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'

interface Props {

}

type Inputs = {
    username: string
    email: string,
    password: string
  }
  
const Signup: React.FC<Props> = () => {
        const {register, formState: { errors }, handleSubmit} = useForm<Inputs>()
        
        const handleSignup  = handleSubmit(data => {
            console.log(data)
        })

        return <>
        <div className="backdrop"></div>
        <div className="modal modal--auth-form">
            <div className="modal-close">&times;</div>

            <h3 className="header--center paragraph--orange">
                Sign up to AwesomeShop
            </h3>

            <form onSubmit={handleSignup} className="form">
                <Input 
                    label='Username'
                    placeholder='Your username'
                    error={errors.username?.message}
                    {...register("username", {
                        required: 'Username is required.',
                        minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters."
                        },
                        maxLength: {
                            value: 20,
                            message: "Username must not be greater than 20 characters."
                        }
                    })}/>

                <Input 
                    label='Email'
                    placeholder='Your Email'
                    error={errors.email?.message}
                    {...register("email", {
                        required: 'Email is required.',
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                            message: 'Email is in wrong format.'
                        }
                    })}/>

                <Input 
                    label='Password'
                    placeholder='Your password'
                    error={errors.password?.message}
                    {...register("password", {
                        required: 'Password is required.',
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters."
                        },
                        maxLength: {
                            value: 50,
                            message: "Password must not be greater than 50 characters."
                        }
                    })}/>

                <Button width='100%' style={{margin: '0.5rem 0'}}>Submit</Button>
            </form>
        </div>
        </>
}

export default Signup