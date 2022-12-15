import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`
const Row = styled.div`
`
const Iframe = styled.iframe`
`
const ContactMap = () => {
  return (
    <Container className="container-fluid">
    <Row className='row'>
    <div className='col-lg-12'>
      <Iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.3917375842!2d72.80590899342002!3d33.61637228136273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1659523053537!5m2!1sen!2s" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</Iframe>


    </div>
    </Row>
    </Container>
  )
}

export default ContactMap

