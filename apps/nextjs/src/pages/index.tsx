import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { TextInput } from 'side-ui';
import { DottedBackground, Icon, IconCatalog, Sizes, TextGradient, TweetCard } from '~/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Indie Creators HQ - Side Project Starter Kit</title>
        <meta name="description" content="Side Project Starter Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex h-full w-full flex-none flex-col items-center justify-between gap-16 overflow-hidden bg-black p-10">
        <section className=" animate-fade-in  z-10 flex flex-col items-center gap-12 text-white opacity-0">
          <div className="LOGO h-16 w-16 rounded-full bg-white"></div>
          <TextGradient gradientStartColor="from-[#e8b066]" gradientEndColor="to-[#df12ff]">
            <h1 className="text-shadow-glow text-fluid-base z-10 whitespace-nowrap text-center font-bold leading-tight">
              Unleash Your <br /> Tweeting Potencial
            </h1>
          </TextGradient>

          <div className="flex items-center space-x-3">
            <TextInput className="w-64 bg-slate-950" placeholder="Escribe tu email" />
            <Link
              className="relative flex h-10 min-w-fit items-center justify-center overflow-hidden whitespace-nowrap rounded-md bg-primary-500 px-4 py-2 text-center text-sm font-semibold text-black transition duration-100 ease-out enabled:hover:bg-primary-300 disabled:cursor-default disabled:opacity-50"
              href={'change'}
            >
              Get early access
            </Link>
          </div>
        </section>

        <section className="z-10 grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2">
          <TweetCard
            className="animation-delay-500 opacity-0 lg:max-h-[200px]"
            tweetText="  Do you want to charge more than $7/month for your product? You can try offering aone-time payment for life, show it to new users, and measure the results... I bet it will work."
          />
          <TweetCard
            className="animation-delay-1000 opacity-0 md:min-h-[400px] lg:min-h-[300px]"
            commentCount={30}
            likeCount={50}
            retweetCount={20}
            viewCount={300}
            isTypingAnimationEnabled={true}
            tweetText={`Charging under $7/month for your product? 🤔

            Consider this: Shift to a single payment and provide lifetime access, a year of updates, or one-time use. Show it exclusively to new users as an experiment.

            My guess: conversion rates and lifetime value will soar! 💸`}
          />
        </section>

        <div className="z-10 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
          <Link
            className="group relative isolate flex flex-none items-center gap-x-3 rounded-lg px-2 py-0.5 font-medium text-white/30 transition-colors hover:text-primary-200"
            href="https://discord.com/invite/77guznJ8mZ"
            target="_blank"
          >
            <Icon icon={IconCatalog.discord} className="h-6 w-6 text-white" isSolid />
            <span className="self-baseline text-white">Discord</span>
          </Link>
          <div className="mx-2 h-[30px] w-[0.5px] rotate-[20deg] transform bg-neutral-700"></div>
          <div className="flex items-center gap-x-1">
            <span className="text-slate-400">Made with</span>
            <Icon icon={IconCatalog.heart} className="h-4 w-4 text-red-500" isSolid />
            <span className="text-slate-400">by the</span>
            <Link
              className="font-medium text-slate-400 underline decoration-dashed decoration-0 underline-offset-4 transition-colors hover:text-primary-200"
              href="https://github.com/Indie-Creator-Community"
              target="_blank"
            >
              Indie Creators HQ
            </Link>
          </div>
        </div>
        <DottedBackground
          className="-top-40s absolute md:hidden"
          dotsSize={Sizes.xl}
          dotsColors="from-gray-500"
          maskTransparency={45}
          isLinear={true}
        />
        <DottedBackground
          className="absolute -top-40 hidden md:block"
          dotsSize={Sizes.xl}
          dotsColors="from-gray-500"
          maskTransparency={50}
        />
      </main>
    </>
  );
};

export default Home;
