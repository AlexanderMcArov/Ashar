import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout';

const Home = React.lazy(() => import('../pages/Home'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const Sale = React.lazy(() => import('./navbar/sale/Sale'));
const Contact = React.lazy(() => import('./navbar/contact/Contact'));
const Blog = React.lazy(() => import('./navbar/blog/Blog'));
const Catalog = React.lazy(() => import('./navbar/catalog/Catalog'));
const About = React.lazy(() => import('./navbar/aboutUs/About'));
const Payment = React.lazy(() => import('./navbar/payment/Payment'));
const Contacts = React.lazy(() => import('./navbar/contact/Contacts'));
const Confident = React.lazy(() => import('../pages/Confident'));
const Calc = React.lazy(() => import('../pages/Calc'));


//? Products
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));

function Routes(props) {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>

                    //? Routes to Home/Products links
                    <Route exact path="/">
                        <Layout>
                            <Home props={props} />
                        </Layout>
                    </Route>
                    <Route exact path="/about-us/:id">
                        <Layout>
                            <AboutUs />
                        </Layout>
                    </Route>
                    <Route exact path="/products/:id">
                        <Layout>
                            <ProductDetail />
                        </Layout>
                    </Route>

                    //? Routes to Navbars links
                    <Route exact path="/contact">
                        <Layout>
                            <Contact />
                        </Layout>
                    </Route>
                    <Route exact path="/about">
                        <Layout>
                            <About />
                        </Layout>
                    </Route>
                    <Route exact path="/catalog">
                        <Layout>
                            <Catalog />
                        </Layout>
                    </Route>
                    <Route exact path="/sale">
                        <Layout>
                            <Sale />
                        </Layout>
                    </Route>
                    <Route exact path="/blog">
                        <Layout>
                            <Blog />
                        </Layout>
                    </Route>
                    <Route exact path="/pay">
                        <Layout>
                            <Payment />
                        </Layout>
                    </Route>
                    <Route exact path="/contacts">
                        <Layout>
                            <Contacts />
                        </Layout>
                    </Route>
                    <Route exact path="/confident">
                        <Layout>
                            <Confident />
                        </Layout>
                    </Route>
                    <Route exact path="/calc">
                        <Layout>
                            <Calc />
                        </Layout>
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes

