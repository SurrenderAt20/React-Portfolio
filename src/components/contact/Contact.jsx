import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiTwotonePhone} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t8vsnfl', 'template_sldmzmv', form.current, 'vQG4UBUQpfvXWBUzm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (

    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

    <div className="container contact__container">

    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className='conact__option-icon'/>
        <h4>Email</h4>
        <h5>lvf@houseofvestergaard.com</h5>
        <a href="mailto:lvf@houseofvestergaard.com" >Send a Email</a>
      </article>

      <article className="contact__option">
        <RiMessengerLine className='conact__option-icon'/>
        <h4>Messenger</h4>
        <h5>Lasse Vestergaard</h5>
        <a href="https://m.me/lasse.vestergaard.904" target={"_blank"}>Send a message via Messenger</a>
      </article>

      <article className="contact__option">
        <AiTwotonePhone className='conact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+45 24 76 74 88</h5>
        <a href="https://api.whatsapp.com/send?phone+4524767488" target={"_blank"}>Call/Text me</a>
      </article>
      </div>

        <form href={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>

        </div>
    </section>
  )
}
