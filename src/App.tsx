import * as React from 'react';
import './App.css';
import { NewOffer } from './home/new-offer';
import { HomePageOne } from './home/home-page-one';
import { HomePageReview } from './home/home-page-review';
import { ProductCertificate } from './home/product-certificate';
import { ContactDetails } from './home/contact-details';
import { ProcessDetail } from './home/process-detail';
import { TopNavBar } from './top-nav-bar/top-nav-bar';

function App() {
  return (
    <>
      <NewOffer />
      <HomePageOne />
      <TopNavBar />
      <ProcessDetail />
      <HomePageReview />
      <ProductCertificate />
      <ContactDetails />
    </>
  );
}

export default App;
