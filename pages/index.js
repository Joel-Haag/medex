import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import testimonial3 from "../public/img/testimonials-3.jpg"
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

export default function Home() {
    const scrollDirection = useScrollDirection();
    return (

        <div>
            <Head>
                <title>Med-Ex</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                      rel="stylesheet" type="text/css"/>
                <link rel="icon" href="/medexLogo.ico" />
            </Head>
            <nav className={`navbar navbar-light  sticky fixed-top ${scrollDirection === "down" ? "hide" : "show"}`}>
                {/*<div className="container">*/}
                <div className="row container-fluid">
                    <div className="col-md-4 col-sm justify-content-lg-start nav-center">
                        <Link href="/">
                            <a className="navbar-brand text-white text-decoration-none fw-bold m-0">Med-Ex</a>
                        </Link>
                    </div>

                    <div className="col-md-auto text-center nav-center">
                        <a className="text-white text-decoration-none fw-bold " href="#about">About</a>
                    </div>
                    <div className="col-md-auto text-center nav-center">
                        <a className="text-white text-decoration-none fw-bold" href="#operate">Operations</a>
                    </div>
                    <div className="col-md-auto text-center nav-center">
                        <a className="text-white text-decoration-none fw-bold"
                           href="#testimonial">Testimonial</a>
                    </div>
                    <div className="col-md-auto text-center nav-center">
                        <a className="text-white text-decoration-none fw-bold" href="#contact">Contact</a>
                    </div>
                    {/*</div>*/}
                </div>
            </nav>

            {/*Masthead*/}

            <header className="masthead">
                <div className="container position-relative">
                    <div className="row justify-content-start">
                        <div className="col-xl-20">
                            <div className="text-left text-white">
                                <h1 className="mb-5 fw-semibold">Medical Billing Done With EASE</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-xl-20">
                            <div className="text-left text-white">
                                <h2 className="mb-5 fw-normal">The best prices for the best services</h2>
                            </div>
                        </div>
                    </div>
                    {/*<div  className="row justify-content-start">*/}
                    <div  className={`row justify-content-start`}>
                        <div className="col-xl-20">
                            <div className="text-left text-white">
                                <h3 className="mb-5 fw-light">Our billing department with Over 20 years&#39; experience
                                    has a team of dedicated credit controllers, looking after you&#39;re practice.
                                    We pride ourselves in the services we can offer your practice. Managing your
                                    accounts with professionalism, efficiency, and dedication. </h3>
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

            <section className="features-icons bg-light text-center pt-0 mt-0" id="operate">
                <h2></h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-1-square-fill m-auto text-primary"></i></div>
                                {/*<h3>Always on time</h3>*/}
                                <p className="lead mb-0">We run strictly 30-day accounts. Straight after month end final
                                    notices are sent out for 60-day accounts.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-2-square-fill m-auto text-primary"></i></div>
                                {/*<h3>Bootstrap 5 Ready</h3>*/}
                                <p className="lead mb-0">Once completed, we commence with calling each patient in 60
                                    days,
                                    thereafter we SMS each patient. Once this process is completed there is nothing more
                                    we are able to do. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-3-square-fill m-auto text-primary"></i></div>
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
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-4-square-fill m-auto text-primary"></i></div>
                                {/*<h3>Always on time</h3>*/}
                                <p className="lead mb-0">Van Rhyns send out final demands and if no response is received
                                    also send SMS’s and make calls to the patient.
                                    Thereafter the legal process begins, and patients are listed with ITC.
                                    (in our experience we have found that this process has good results)</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-5-square-fill m-auto text-primary"></i></div>
                                {/*<h3>Bootstrap 5 Ready</h3>*/}
                                <p className="lead mb-0">Each month we are provided with a full list of the accounts
                                    handed over.
                                    We also update the notes on each patients account with exactly what the attorney has
                                    accomplished do date.
                                    If we are not happy with a specific account we contact the attorney to resolve the
                                    matter. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i
                                    className="bi-6-square-fill m-auto text-primary"></i></div>
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
            {/*Testimonials*/}
            <section className="testimonials text-center bg-light" id="testimonial">
                <div className="container">
                    <h2 className="mb-5 fs-1">Testimonial</h2>
                    <div className="row">
                        <div className="col-lg">
                            {/*<div className="testimonial-item mx-auto mb-5 mb-lg-0">*/}
                            <Image
                                className="img-fluid rounded-circle mb-3"
                                src={testimonial3}
                                alt="..."
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
                        {/*<div className="col-lg-4">*/}
                        {/*    <div className="testimonial-item mx-auto mb-5 mb-lg-0">*/}
                        {/*        <Image*/}
                        {/*            className="img-fluid rounded-circle mb-3"*/}
                        {/*            src={testimonial2}*/}
                        {/*            alt="..."*/}
                        {/*        />*/}
                        {/*        <h5>Fred S.</h5>*/}
                        {/*        <p className="font-weight-light mb-0">Bootstrap is amazing. Ive been using it to create*/}
                        {/*            lots of super*/}
                        {/*            nice landing pages.</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4">*/}
                        {/*    <div className="testimonial-item mx-auto mb-5 mb-lg-0">*/}
                        {/*        <Image*/}
                        {/*            className="img-fluid rounded-circle mb-3"*/}
                        {/*            src={testimonial3}*/}
                        {/*            alt="..."*/}
                        {/*        />*/}
                        {/*        <h5>Sarah W.</h5>*/}
                        {/*        <p className="font-weight-light mb-0">Thanks so much for making these free resources*/}
                        {/*            available to*/}
                        {/*            us!</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            {/*Call to Action*/}
            <section className="call-to-action text-white text-center" id="contact">
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
                            <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                                {/*Email address input*/}

                                <div className="row">
                                    <div className="col-md-6 col-sm-12 pb-2">
                                        <input className="form-control form-control-lg" id="fname"
                                               type="text"
                                               placeholder="First Name" data-sb-validations="required"/>
                                        <div className="invalid-feedback text-white"
                                             data-sb-feedback="emailAddressBelow:required">First
                                            Name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 pb-2">
                                        <input className="form-control form-control-lg" id="lname"
                                               type="text"
                                               placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className="col-md-12 col-sm-12 pb-2">
                                        <input className="form-control form-control-lg" id="emailAddressBelow"
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
                                               type="text"
                                               placeholder="How can we help you?" data-sb-validations="required"/>
                                        <div className="invalid-feedback text-white"
                                             data-sb-feedback="emailAddressBelow:required">Text is required
                                        </div>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className="col-md-12 col-sm-12">
                                        <button className="btn btn-primary btn-lg" id="submitButton"
                                                type="submit">Submit
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
                                <li className="list-inline-item"><a href="#!">About</a></li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item"><a href="#!">Contact</a></li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2022. All Rights
                                Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-4">
                                    <a href="#!"><i className="bi-facebook fs-3"></i></a>
                                </li>
                                <li className="list-inline-item me-4">
                                    <a href="#!"><i className="bi-twitter fs-3"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!"><i className="bi-instagram fs-3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>*/}
            {/*<script src="js/scripts.js"></script>*/}
            {/*<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>*/}
        </div>
    )
}
