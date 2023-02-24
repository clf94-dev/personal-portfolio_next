import React from 'react';
import {useForm} from 'react-hook-form';
import {Grid, Button} from '@material-ui/core/';
import ErrorMessage from './ErrorMessage'
import './styles/Form.scss';

function Form() {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => console.log(values);

    return (
        <Grid container className="form-cont" direction='column'>
            <Grid item md={12}>
                <h5 className='title'>Name</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name "
                        style={errors.firstName && {
                        borderColor: "red"
                    }}
                        ref={register({required: true, maxLength: 20})}
                        className="first-name input"/>
                    <ErrorMessage error={errors.firstName}/>
                    <h5 className='title'>Email</h5>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        style={errors.email && {
                        borderColor: "red"
                    }}
                        ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}className="email-address input"/>
                    <ErrorMessage error={errors.email}/>
                    <h5 className='title'>Message</h5>
                    <textarea
                        type="text"
                        name="message"
                        className='message-input'
                        placeholder="Your message.."
                        style={errors.message && {
                        borderColor: "red"
                        
                    }}
                        ref={register({required: true})} />
                    <ErrorMessage error={errors.message}/>
                </form>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
                    Send Message </Button>

            </Grid>
        </Grid>
    )
}

export default Form;