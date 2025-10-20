"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ResourceBox from "@/app/components/ResourceBox";
import ResourceHero from "../components/ResourceHero";

export default function ResourcesPage() {
  const resume_coverletterTemplates = [
    {
      title: "Harvard Resume Template",
      imageSrc: "/misc_photos/harvard_template.png",
      buttonText: "View Resume Template",
      buttonLink: "https://docs.google.com/document/d/1-_1zvnv0JP1DGgMwCI-IhwH12qiO1s2geYLL8b2oIuY/copy",
    },
    {
      title: "Jake's Resume Template",
      imageSrc: "/misc_photos/jakes_template.png",
      buttonText: "View Resume Template",
      buttonLink: "https://docs.google.com/document/d/1Z9sB5bg5lbZSQKVT9rAaHGZdMHEP_TpG/copy",
    },
     {
      title: "Harvard Cover Letter Template",
      imageSrc: "/misc_photos/harvard_cl_template.png",
      buttonText: "View Cover Letter Template",
      buttonLink: "https://docs.google.com/document/d/1rdsP_omqUgfjaM2je12ECvAbMcT_qURWm2uUskVt6nM/copy",
    },
    {
      title: "Princeton Cover Letter Template",
      imageSrc: "/misc_photos/princeton_cl_template.png",
      buttonText: "View Cover Letter Template",
      buttonLink: "https://docs.google.com/document/d/1CZbi1j7DH11gn-teYt4wQ6479dSZ8teUCQ5scCLvgr8/copy",
    },
  ];
  const careerServices = [
    {
      title: "Pamplin Career Services",
      description: "Get help with resumes, interviews, and more from Pamplin’s dedicated career team.",
      imageSrc: "/misc_photos/pamplin_career_services.jpg",
      buttonText: "Pamplin Career Services",
      buttonLink: "https://pamplin.vt.edu/undergraduate-programs/career-services.html",
    },
    {
      title: "VT Career & Professional Development Center",
      description: "University-wide resources offering career fairs, advising, and employer connections.",
      imageSrc: "/misc_photos/vt_cpd.jpg",
      buttonText: "VT C&PD Center",
      buttonLink: "https://career.vt.edu/",
    },
  ];

  return (
    <main>
      <Navbar />
      <ResourceHero heroHeader="Resume & Cover Letter Templates"heroSubText="Hand picked by the BIT Club Exec Board to help you stand out." showSecondText={true}/> {/** heroSubText is blank so that only the title is shown*/}
      <ResourceBox title="Resume & Cover Letter Templates" resources={resume_coverletterTemplates} />
      <ResourceHero heroHeader="Want expert advice?" heroSubText="Visit Pamplin Career Services or VT's Career & Professional Development Center at the links below!"/>
      <ResourceBox title="Virginia Tech Career Resources" resources={careerServices} />
      {/** Plan for the rest of this page: Create a career paths section for each of the 3 concentrations, with certs, career roadmap, and other resources in each. 
       * 
       * Only issue with that is finding out how to do an option dropdown for Navbar (since we only need it for the resources tab)
       */}
      <Footer />
    </main>
  );
}