import React from 'react'
import styled from 'styled-components'
import about from './imges/about.jpg'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  phoneNumb: '',
  subject: '',
  message: '',
}
const onSubmit = values => {
  console.log('Form values', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  phoneNumb: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required')
})





const ContactPage = styled.div`
margin: 40px 0;
`
const Container = styled.div`
`
const Row = styled.div`
`
const Col = styled.div`
`
const MainContent = styled.div`
margin-bottom: 50px;
`
const H2 = styled.h2`
font-size: 50px;
margin-bottom: 8px;
font-weight: 700;
line-height: 1.4074;
color: #1f1f25;
`
const P = styled.p`
    font-size: 26px;
    line-height: 30px;
    color: rgba(29,29,36,.75);
    margin-bottom: 0;
    font-weight: 350;
`
// form

// Right content
const Right = styled.div`

`
const Img = styled.img`
max-width: 100%;

`


const ContactForm = () => {
  return (
    <ContactPage>
    <Container className='container'>
        <Row className='row row--35 align-items-startrow'>
        <Col className='col-lg-6 order-2 order-lg-1'>

        <MainContent className='section-title text-left'>
            <H2>Contact Us</H2>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</P>
        </MainContent>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
     
      <Form>

  <div className="mb-3">
    <Field type="text" className="form-control" placeholder='Name' name='name' id="name" aria-describedby="emailHelp"/>
    <ErrorMessage name='name' style={{color:'red'}} component='div'/>
  </div>

  <div className="mb-3">
    <Field type="eamil" name='email' placeholder='Email' className="form-control" id="exampleInputPassword1"/>
    <ErrorMessage name='email' style={{color:'red'}} component='div'/>
  </div>

  <div className="mb-3">
    <Field type="text" className="form-control" placeholder='Phone Number' name='phoneNumb' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <ErrorMessage name='phoneNumb' style={{color:'red'}} component='div'/>
  </div>

  <div className="mb-3">
    <Field type="text" className="form-control" placeholder='Subject' name='subject' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <ErrorMessage name='subject' style={{color:'red'}} component='div'/>
  </div>

  <div className="form-floating mb-3">
  <Field as='textarea' className="form-control" name="message" style={{height: '100px'}} id="floatingTextarea"/>
  <label htmlFor="floatingTextarea">Your Message</label>
  <ErrorMessage name='message' style={{color:'red'}} component='div'/>

</div>

  
  <button type="submit" className="btn btn-primary w-25">Submit</button>

        </Form>
  
 </Formik>
    

        </Col>
        <Col className='col-lg-6 order-2 order-lg-1'>
        <Right className='thumbnail mb_md--30 mb_sm--30'>
            <Img src={about}/>
        </Right>


        </Col>


        </Row>
    </Container>
      
    </ContactPage>
  )
}

export default ContactForm
