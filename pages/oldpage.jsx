import Head from 'next/head';

import { useEffect } from 'react';

import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'

import mixpanel from 'mixpanel-browser';


const Home = () => {
  mixpanel.track('Home Page');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);
  return (
    <>
    <Head>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>
      <PageTemplate title="Home - Vada Innovation">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title=" One place for all your software problems."
              description="Vada Innovation is a software house with bright solutions for web/mobile application development and UI design."
              badge="CLIENT-DEVELOPMENT-DRIVEN"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Send Quote" href="/quote" />
            {/* <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            /> */}
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Design"
              description="The project interface will be designed first, our favorite tool is Figma."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Develop"
              description="Transform design and write business logic here. Choose the technology you want."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Ship"
              description="After the work is complete, we will send the project and all its assets to you."
              icon={<FiBox />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/team-illustration.svg'}
            width={400}
            height={400}
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Everything is well planned, well designed and developed wholeheartedly"
              paragraph="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped."
              badge="HOW WE WORK"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We're a team of designers, engineers and analysts"
                paragraph="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
                badge="OUR TEAM"
              />
              <ButtonLink
                value="See Our Teams"
                href="/teams"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        {/* <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="We have completed many amazing projects that you will not believe"
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="The Desktop App Landing Page"
                description="A landing page for desktop app"
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section> */}
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Book a meeting with us to discuss your project"
              badge="GET STARTED"
            />
              <div className="calendly-inline-widget" data-url="https://calendly.com/abdullahmujahidali1/15min" style={{ minWidth: '320px', height: '630px' }}></div>
          </div>
          {/* <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"> */}
            {/* <div data-aos="fade-up-right">
              <PricingCard
                price="1200$"
                title="UI Design"
                features={[
                  '10 design pages',
                  'Well-documented',
                  '4 revisions',
                  '$100/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="5000$"
                title="Development"
                features={[
                  'Web & Mobile',
                  'Well-documented',
                  '8 revisions',
                  '$1000/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="3000$"
                title="Maintenance"
                features={[
                  'Daily backup',
                  '3 hours of maintenance',
                  'Including fixing',
                  '$50/additional hour',
                ]}
              />
            </div>
          </div> */}
        </section>
        {/* Testimonial */}
        {/* <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="What do our clients say that we never let down?"
              badge="TESTIMONIAL"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section> */}
      </PageTemplate>
    </>
  )
}

export default Home
