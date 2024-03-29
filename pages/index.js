import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import testimonial3 from "../public/img/testimonials-3.jpg"
import ashlea2 from "../public/img/ashlea2.png"
import {Analytics} from '@vercel/analytics/react';
import Link from "next/link";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
}

async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
        if (!field.name) return;
        formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData)
    });
}

export default function Home() {
    const scrollDirection = useScrollDirection();
    return (

        <div className={'overflow-hidden'}>
            <Head>
                <title>Med-Ex Medical Billing</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                      rel="stylesheet" type="text/css"/>
                <link rel="icon" href="/medexLogo.ico"/>
                <link rel="apple-touch-icon" href="/medexLogo.ico"/>
                <link
                    rel="canonical"
                    href="https://www.medexbureau.com"
                    key="canonical"
                />
                <meta name="description"
                      content="The best prices for the best services. Creating the billing experience that health care professionals deserve"/>
                <meta name="keywords" content="medical, ease, billing, medical billing, Authease, "/>
                <meta name="author" content="Joel Haag"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <nav
                className={`navbar navbar-expand-lg navbar-light bg-light  sticky fixed-top pt-2 pb-2  ${scrollDirection === "down" ? "hide" : "show"}`}>
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand fw-bold">Med-Ex</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-md-row-reverse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item me-lg-4 me-sm-0">
                                <a className="nav-link active fw-bold text-center fs-5 " aria-current="page"
                                   href="#about">About</a>
                            </li>
                            <li className="nav-item me-lg-4 me-sm-0">
                                <a className="nav-link active fw-bold text-center fs-5 " href="#operate">Operations</a>
                            </li>
                            <li className="nav-item me-lg-4 me-sm-0">
                                <a className="nav-link active fw-bold text-center fs-5 "
                                   href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item me-lg-4 me-sm-0">
                                <a className="nav-link active fw-bold text-center fs-5 " href="#team">Team</a>
                            </li>
                            <li className="nav-item me-lg-4 me-sm-0">
                                <a className="nav-link active fw-bold text-center fs-5 " href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/*Masthead*/}

            <header className="masthead">
                <div className="container position-relative">
                    <div className="row justify-content-start">
                        <div className="col-xl-20">
                            <div className="text-left text-white">
                                <h1 className="mb-5 fw-semibold">MED-EX BILLING BUREAU</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-xl-20">
                            <div className="text-left text-white">
                                <h2 className=" fw-normal">Creating the billing experience that health care
                                    professionals deserve.</h2>
                            </div>
                        </div>
                    </div>
                    {/*<div  className="row justify-content-start">*/}
                    <div className={`row justify-content-start`}>
                        <div className="col-xl-20">
                            <div className="text-left text-white">
                                <h2 className="mb-5 fw-normal">Providing solutions to free doctors from administrative
                                    and financial burden. </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/*Image Showcases*/}
            <section className="showcase pb-0 mb-0" id="about">
                {/*<h2  className="text-center"> Who are we?</h2>*/}
                {/*<br/>*/}
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div data-aos={"zoom-in-right"} className="col-lg-6 order-lg-2 text-white showcase-img"
                             style={{
                                 backgroundImage: "url(img/bgshowcase1.jpg)",
                             }}>

                        </div>
                        <div data-aos={"flip-left"} className="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h3 className={'showcase-one-header'}>Med-Ex is a Medical Billing Bureau</h3>
                            <p className="lead mb-0 showcase-one-text"> which provides an Electronic Outsourcing
                                Service to the Healthcare Industry. </p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div data-aos={"zoom-in"} className="col-lg-6 text-white showcase-img"
                             style={{
                                 backgroundImage: "url(img/bg-showcase-2.jpg)",
                             }}>

                        </div>
                        <div data-aos={"flip-right"} className="col-lg-6 my-auto showcase-text">
                            <h2 className={'showcase-one-header'}>More than 20 years of medical background</h2>
                            <p className="lead mb-0 showcase-one-text">medical assessing, exposure to private clinics,
                                specialists, dentistry, pathology, radiology, orthopaedics,
                                gynaecology and outsourcing data capturing companies, has created our passion for the
                                medical field.</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div data-aos={"zoom-in"} className="col-lg-6 order-lg-2 text-white showcase-img"
                             style={{
                                 backgroundImage: "url(img/bg-showcase-3.jpg)",
                             }}>

                        </div>
                        <div data-aos={"flip-left"} className="col-lg-6 order-lg-1 my-auto showcase-text ">
                            <h2 className={"showcase-one-header "}>Should you decide to use our Professional
                                Services</h2>
                            <p className="lead mb-0 showcase-one-text">be assured that your interests are our
                                priority
                                and all information is kept private and confidential.
                                We offer an outstanding service, timeous submissions, follow-ups, feedbacks and
                                professional monthly reports.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-icons bg-white text-center pt-0 mt-5" id="operate">
                <h2> How we Operate</h2>
                <div className="bg-white mt-5">
                    <div className="row">
                        <div className="col-lg-4 card" data-aos={"fade-in"} data-aos-easing="ease-in-sine">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 card-body">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-1-square-fill m-auto"></i></div>
                                {/*<h3>Always on time</h3>*/}
                                <p className="lead mb-0">We run strictly 30-day accounts. Straight after month end final
                                    notices are sent out for 60-day accounts.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 card" data-aos={"fade-in"} data-aos-easing="ease-in-sine">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 card-body">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-2-square-fill m-auto"></i></div>
                                {/*<h3>Bootstrap 5 Ready</h3>*/}
                                <p className="lead mb-0">Once completed, we commence with calling each patient in 60
                                    days,
                                    thereafter we SMS each patient. Once this process is completed there is nothing more
                                    we are able to do. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 card" data-aos={"fade-in"} data-aos-easing="ease-in-sine">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3 card-body">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-3-square-fill m-auto"></i></div>
                                {/*<h3>Easy to Use</h3>*/}
                                <p className="lead mb-0">We then hand over to Van Rhyns Attorneys. (We never waiver from
                                    this collection process.)
                                    Our reason for using van Rhyns is that the Doctors do
                                    not pay any fee for collection as these attorneys add their costs onto the patient’s
                                    account. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 card" data-aos={"fade-in"} data-aos-easing="ease-in-sine">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 card-body">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-4-square-fill m-auto"></i></div>
                                {/*<h3>Always on time</h3>*/}
                                <p className="lead mb-0">Van Rhyns send out final demands and if no response is received
                                    also send SMS’s and make calls to the patient.
                                    Thereafter the legal process begins, and patients are listed with ITC.
                                    (in our experience we have found that this process has good results)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 card" data-aos={"fade-in"} data-aos-easing="ease-in-sine">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 card-body">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-5-square-fill m-auto"></i></div>
                                {/*<h3>Bootstrap 5 Ready</h3>*/}
                                <p className="lead mb-0">Each month we are provided with a full list of the accounts
                                    handed over.
                                    We also update the notes on each patients account with exactly what the attorney has
                                    accomplished do date.
                                    If we are not happy with a specific account we contact the attorney to resolve the
                                    matter. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 card" data-aos={"fade-in"} data-aos-easing="ease-in-sine">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3 card-body">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-6-square-fill m-auto"></i></div>
                                {/*<h3>Easy to Use</h3>*/}
                                <p className="lead mb-0">We have to add that when doing the credit control, we still
                                    attempt to collect the old debt ourselves.
                                    We have had good response doing this and should we collect, we then withdraw the
                                    account from the attorney. Should the attorney not be able to trace a person then
                                    the
                                    account is written off as a bad debt. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="testimonials text-center bg-white mt-0 pt-0" id="testimonial">
                <div className="container">
                    <h2 className="mb-5 fs-1">Testimonial</h2>
                    <div className="row">
                        <div className="col-lg">
                            {/*<div className="testimonial-item mx-auto mb-5 mb-lg-0">*/}
                            <Image
                                className="img-fluid rounded-circle mb-3"
                                src={testimonial3}
                                alt="Client Testimonial"
                            />
                            <h5>Dr I Combrink & Partners Inc</h5>
                            <p className="font-weight-light mb-0">We are incredibly happy with the service we are
                                receiving from Priscilla and the rest of the Medex crew. They took over our accounts in
                                June 2010 and we haven’t looked back once. They deliver a fast, efficient and
                                professional service and are always prepared to address our questions or uncertainties.
                                We run a busy Emergency Department with a total of 8 incorporated partners and roughly
                                5-8 locum doctors, seeing 1800-2200 patients a month, so Priscilla certainly has her
                                work cut out for her, but we have never had any delays or questionable service from
                                their side. Our work even gets collected by them over weekends too.
                                I’ve been with the practice for 10 years now and we’ve dealt with a number of other
                                accounting services, so we know how bad it can be… I can honestly say that we wouldn’t
                                even consider changing from Medex. We are very happy with the excellent service they
                                provide.
                            </p>
                            {/*</div>*/}
                        </div>

                    </div>
                </div>
            </section>
            <div className="team-boxed bg-white" id="team">
                {/*<h2 className="text-center fw-normal">PROUDLY WOMAN EMPOWERED</h2>*/}
                <h3 className="text-center">Feel free to contact us directly for more information</h3>
                <div className="container">
                    <div className="intro">
                        {/*<h2 className="text-center">THE TEAM</h2>*/}
                        {/*<p className="text-center">T</p>*/}
                    </div>
                    <div className="row people">
                        <div className="col-md-12 col-lg-12 item">
                            <div className="box">
                                <Image
                                    className="rounded-circle"
                                    src={ashlea2}
                                    alt="Team leader and CEO"
                                    // width="10000vw"
                                    // layout="responsive"
                                />
                                <h3 className="name">Ashlea</h3>
                                <a className="" href="mailto:natalie@medexbureau.co.za">ashlea@medexbureau.co.za</a>

                                <p className="description"
                                ><i className="bi bi-telephone-fill"> </i>
                                    066 221 0163</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"
                            >

                                <h3 className="name">Natalie</h3>
                                <a className="" href="mailto:natalie@medexbureau.co.za">natalie@medexbureau.co.za</a>
                                <p className="description"><i className="bi bi-telephone-fill"> </i>
                                    011 867 0191</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <h3 className="name">Sina</h3>
                                <a className="" href="mailto:sina@medexbureau.co.za">sina@medexbureau.co.za</a>
                                <p className="description"><i className="bi bi-telephone-fill"> </i>
                                    011 867 4597</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <h3 className="name">Claudia</h3>
                                <a className="" href="mailto:claudia@medexbureau.co.za">claudia@medexbureau.co.za</a>
                                <p className="description"><i className="bi bi-telephone-fill"> </i>
                                    011 867 2975</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"
                            >
                                <h3 className="name">Kelly</h3>
                                <a className="" href="mailto:kelly@medexbureau.co.za">kelly@medexbureau.co.za</a>
                                <p className="description"> ..
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <h3 className="name">Dominique</h3>
                                <a className=""
                                   href="mailto:dominique@medexbureau.co.za">dominique@medexbureau.co.za</a>
                                <p className="description">..</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <h3 className="name">Candice</h3>
                                <a className="" href="mailto:candice@medexbureau.co.za">candice@medexbureau.co.za</a>
                                <p className="description">..</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <section className="call-to-action text-white text-center" id="contact">
                {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">*/}
                {/*    Launch demo modal*/}
                {/*</button>*/}

                {/*<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"*/}
                {/*     aria-hidden="true">*/}
                {/*    <div className="modal-dialog">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>*/}
                {/*                <button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                {/*                        aria-label="Close"></button>*/}
                {/*            </div>*/}
                {/*            <div className="modal-body">*/}
                {/*                ...*/}
                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <h2 className="mb-4">For more inquires, don&#39;t hesitate to contact us</h2>
                            {/*Signup form*/}
                            {/* * * * * * * * * * * * * * * **/}
                            {/** * SB Forms Contact Form * **/}
                            {/** * * * * * * * * * * * * * **/}
                            {/*This form is pre-integrated with SB Forms.*/}
                            {/*To make this form functional, sign up at*/}
                            {/* https://startbootstrap.com/solution/contact-forms-->*/}
                            {/*< to get an API token!*/}
                            <form className="form-subscribe" id="contactFormFooter" method="post"
                                  onSubmit={handleOnSubmit}>
                                {/*Email address input*/}
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 pb-2">
                                        <input className="form-control form-control-lg" id="name"
                                               name="name"
                                               type="text"
                                               placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6 col-sm-12 pb-2">
                                        <input className="form-control form-control-lg" id="lname"
                                               name="lname"
                                               type="text"
                                               placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className="col-md-12 col-sm-12 pb-2">
                                        <input className="form-control form-control-lg" id="emailAddressBelow"
                                               name="email"
                                               type="email"
                                               placeholder="Email Address" data-sb-validations="required,email"/>
                                        <div className="invalid-feedback text-white"
                                             data-sb-feedback="emailAddressBelow:required">Email
                                            Address is required.
                                        </div>
                                        <div className="invalid-feedback text-white"
                                             data-sb-feedback="emailAddressBelow:email">Email
                                            Address Email is not valid.
                                        </div>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className="col-md-12 col-sm-12 pb-2">
                                        <input className="form-control form-control-lg mb-2" id="ftext"
                                               name="message"
                                               type="text"
                                               placeholder="How can we help you?"/>

                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className="col-md-12 col-sm-12">
                                        <button className="btn btn-primary btn-lg form-control" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                        >Submit
                                        </button>
                                    </div>
                                </div>
                                {/*Submit success message*/}

                                {/*This is what your users will see when the form*/}
                                {/* has successfully submitted*/}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a className="text-white"
                                           href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                {/*Submit error message*/}

                                {/* This is what your users will see when there is*/}
                                {/*an error submitting the form*/}
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*Footer*/}
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item">⋅</li>
                                {/*<li className="list-inline-item"><p> Whatsapp or call us on - 066 221 0163</p></li>*/}
                                <i className="bi bi-telephone-fill"> </i><a href="tel:066 221 0163">066 221 0163</a>
                                <li className="list-inline-item float-end"><a
                                    href="mailto:medex@isat.co.za">medex@isat.co.za</a></li>

                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">&copy; Med-Ex 2022. All Rights
                                Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-4">
                                    <a href="https://www.facebook.com/MedexBureau" target="_blank" rel="noreferrer"><i
                                        className="bi-facebook fs-3"></i></a>
                                </li>
                                <li className="list-inline-item me-4">
                                    <a href="https://www.linkedin.com/in/MedexBureau" target="_blank"
                                       rel="noreferrer"><i className="bi bi-linkedin fs-3"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/medex_bureau/" target="_blank"
                                       rel="noreferrer"><i className="bi-instagram fs-3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Success</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Thank you for reaching out, we will respond shortly..
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Analytics/>
        </div>
    )
}
