import React from 'react';

import './style.scss';

// import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { send } from 'emailjs-com';

const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        send(
            "service_0ra03dk",
            "template_2mvjku6",
            data,
            "-9UuVz-6vmajnKntg",

        ).then((response) =>{
            console.log("SUCCESS!", response.status , response.text);
            formSuccess();

        }).catch(err =>{
            console.log("FAILED..! ", err );
        })
    }

    const formSuccess = () => {
        toast("Thanks for submitting your Queries");
        document.getElementById('queryForm').reset();
    }

  return (
    <div className='query-form'>
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
                <input type="text" name="from_name" placeholder='Name' 

                    {...register("from_name",{
                        required:"Name is Required",
                    })}

                />

                { errors.from_name?.message && (
                    <p className='error'>{errors.from_name?.message}</p>
                    
                )}
 
            </div>
            <div className="input-field">
                <input type="text" name="reply_to" placeholder='Email' 

                    {...register("reply_to",{
                        required:"Email is Required",
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message:"Invalid email address",
                        }
                    })}
                />

                { errors.reply_to?.message && (
                    <p className='error'>{errors.reply_to?.message}</p>
                    
                )}

            </div>
            <div className="input-field">
                <input type="number" min={0} name="from_phone" placeholder='Phone' 

                    {...register("from_phone",{
                        required:"Phone number is Required",
                        minLength:{
                            value:8,
                            message:"Invalid phone number"
                        }
                    })}
                />
                
                { errors.from_phone?.message && (
                    <p className='error'>{errors.from_phone?.message}</p>
                    
                )}

            </div>
            <div className="input-field">
                <input type="text" name="subject" placeholder='Subject' 

                    
                    {...register("subject",{
                        required:"Subject is Required",
                        minLength:{
                            value:10,
                            message:"Minimum 10 character subjectLine"
                        }
                    })}
                />
                
                { errors.subject?.message && (
                    <p className='error'>{errors.subject?.message}</p>
                    
                )}

            </div>
            <div className="input-field full-width">
                <textarea name="message" className='textarea' placeholder='Your message '
                  
                    {...register("message",{
                        required:"Message is Required",
                        minLength:{
                            value:20,
                            message:"Minimum 20 character subjectLine"
                        },
                        maxLength:{
                            value:500,
                            message:"Minimum 500 character Allowed"
                        }
                    })}

                />
                
                { errors.message?.message && (
                    <p className='error'>{errors.message?.message}</p>
                    
                )}

            </div>

            <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Form;
