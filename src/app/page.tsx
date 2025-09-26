// THIS IS THE HOME PAGE. DO NOT ATTEMPT TO MOVE IT TO ANOTHER DIRECTORY OR REMOVE IT,
//  OR ELSE THE SITE IS GONNA BREAK 

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Slideshow from '@/app/components/Slideshow'
import PurposeSection from './components/Purpose';
import WhyJoinSection from './components/WhyJoin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | BIT Club @ VT",
  // For some reason in the main page, you have to list out the full title. I don't know why, but it works this way so that's what matters.
}

export default function MainPage() {
  return (
    <main>
      <Navbar />
      <Slideshow />
      <PurposeSection 
      header='Purpose'
      body="We are a student run, half-social half-professional club with a goal to create community amongst BIT majors, 
      and ensure each of our memebrs obtain premier professional and academic development through our club."
      imageSrc="/purpose_photo.jpg"
      />
      <WhyJoinSection 
      header='Why Join?'
      body="As part of our mission to increase knowledge of these technology-oriented business majors we host several 
                    career information sessions and workshops each semester as well as internal socials and other gatherings. 
                    We will be looking forward this year to initiating a greater community outreach through charitable and 
                    social events. We are a premier student organization at Virginia Tech for business majors and anyone 
                    interested in the technological field, and we welcome you to come to our events and find out what we’re 
                    all about! Even though we are the BIT Club at Virginia Tech, we are not limited to just BIT majors, in fact, 
                    anyone interested in this realm and wants to attend our workshops and get one-on-one contact with recruiters from 
                    companies like the Big 4 are welcome to join!"
      imageSrc="/why_join_photo.jpg"
      />
      <Footer />
    </main>
    )
}
