import React from 'react'
import styled from 'styled-components'
import AboutImg from './imges/about-1.jpg'

const AboutSection = styled.div`
padding: 15px;

`
const AboutWrapper = styled.div`

`
const Container = styled.div`
padding: 50px 40px;

`
const Row = styled.div`
`
const Col1 = styled.div`
`
const Thumbnil = styled.div`
`
const Image = styled.img`
width: 100%;
max-width: 100%;
border-radius: 8px;
`

const Col2 = styled.div`
`
const AboutInner = styled.div`
`
const SectionTitle = styled.div`
`
const Title = styled.h1`
font-size: 60px;
font-weight: 700;
margin-bottom: 8px;
`
const Desc = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #717173;
`
const SectionRow = styled.div`
`
const SectionCol1 = styled.div`
`
const AboutUS = styled.div`
`
const SHeading = styled.h3`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 500;
`
const SParagraph = styled.p`
font-size: 18px;
    font-weight: 300;
    color: #717173;
`
const SectionCol2 = styled.div`
`

const AboutArea = () => {
  return (
    <AboutSection className='about-area'>
    <AboutWrapper className='about-wrpper'>
    <Container className='container-fluid'>
        <Row className='row row-35 align-items-center'>
        <Col1 className='col-lg-5 col-md-12'>
        <Thumbnil>
            <Image className='w-100' src={AboutImg} alt='about-image'></Image>
        </Thumbnil>
        </Col1>

        <Col2 className='col-lg-7 col-md-12'>
        <AboutInner>
            <SectionTitle>
            <Title>About</Title>
            <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</Desc>
            </SectionTitle>

            <SectionRow className='row mt-30 mt-sm-10'>
            <SectionCol1 className='col-lg-6 col-md-12 col-sm-12 col-12'>
            <AboutUS>
                <SHeading>Who we Are</SHeading>
                <SParagraph>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</SParagraph>
            </AboutUS>

            </SectionCol1>
            <SectionCol2 className='col-lg-6 col-md-12 col-sm-12 col-12'>
            <AboutUS>
                <SHeading>Who we Are</SHeading>
                <SParagraph>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</SParagraph>
            </AboutUS>

            </SectionCol2>

            </SectionRow>
        </AboutInner>

        </Col2>

        </Row>
    </Container>

    </AboutWrapper>

    </AboutSection>
   
  )
}

export default AboutArea
