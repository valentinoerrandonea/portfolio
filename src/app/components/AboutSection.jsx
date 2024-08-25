"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Strategic Vision</li>
        <li>Operational Excellence</li>
        <li>Cross-Functinoal Leadership</li>
        <li>Stakeholder Management</li>
        <li>Business Development</li>
        <li>Risk Management in Innovation</li>
        <li>Customer Centric Innovation</li>
        <li>Agile Methodologies</li>
        <li>Performance Metrics and KPIs</li>
        <li>Change Management</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Global Business Management</li>
        <li>UADE, Buenos Aires</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Full Stack Development</li>
          <li>CoderHouse</li>
       </ul>

       <ul>
          <li>Product Roadmapping</li>
          <li>Linkedin</li>
       </ul>
      </div>
      
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <video 
    src="/images/test2.webm" 
    width={500} 
    height={500} 
    controls 
    autoPlay 
    loop 
    muted 
    className="w-full h-auto"
  />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a strategic leader with a strong focus on innovation, blending my expertise as a Product Manager, COO, and Business Developer. I drive the creation and execution of innovative products by optimizing operations, identifying new market opportunities, and leading cross-functional teams. My approach ensures that every initiative is customer-centric, operationally efficient, and aligned with the company’s long-term vision for growth and success.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
