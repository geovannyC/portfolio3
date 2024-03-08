import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { sendData } from "../../utils/sendEmail";

import Fade from '@/app/components/ui/fade';
import Card from '@/app/components/ui/card';

import styles from "./index.module.scss";

const ALREADYREGISTER = "alreadyRegistered"

const ContactForm = ({ readCookie }: any) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    sendData(JSON.stringify(data)).then((response) => {
      if (response) {
        document.cookie = ALREADYREGISTER
        readCookie()
      }
    });
  };
  return (
    <div className={styles.contactForm}>
      <Card>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputForm}>
            <input required {...register("name")} maxLength={50} placeholder="name" name="name" id='name' type='text' className={styles.formField} />
            <label className={styles.formLabel} htmlFor="name" >Name</label>
          </div>
          <div className={styles.inputForm}>
            <input required {...register("email")} maxLength={50} placeholder="email" name="email" id='email' type='email' className={styles.formField} />
            <label className={styles.formLabel} htmlFor="email" >Email</label>
          </div>
          <div className={`${styles.inputForm} ${styles.textarea}`}>
            <textarea minLength={10} required {...register("message")} maxLength={300} rows={5} placeholder="message" name="message" id='message' className={styles.formField} />
            <label className={styles.formLabel} htmlFor="message" >Message</label>
          </div>
          <input
            className={styles.buttonSend}
            type="submit"
            value="Send"
          />
        </form>
      </Card>
    </div>
  )
}
const ModuleResponse = () => {
  return (
    <div className={styles.containeResponse}>
      <h2>Thank you, I'll contact you soon</h2>
    </div>
  )
}
const Contact = () => {
  const [statusRegister, setStatusRegister] = useState(false)

  useEffect(() => {
    readCookie()
  }, [statusRegister])


  const readCookie = () => {
    const cookies = document.cookie.split(';')
    cookies.forEach((cookie) => {
      if (cookie.startsWith(ALREADYREGISTER)) {
        setStatusRegister(true)
      }
    })
  }
  const handleChangueStatusRegister = () => {
    setStatusRegister(true)
  }
  return (
    <div className={`${styles.containerContact} ${styles.generalContainerCenter}`}>
      <Fade way='left'>
        <h2>Contact me</h2>
      </Fade>
      {statusRegister ?
        <ModuleResponse />
        : <ContactForm readCookie={() => handleChangueStatusRegister()} />}
    </div>
  )
}

export default Contact