"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Typography from "@/components/Typography";
import Image from "next/image";
import BookingModal from "@/components/BookingModal";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function GalleryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Gallery");
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [videoPrevEl, setVideoPrevEl] = useState<HTMLButtonElement | null>(null);
  const [videoNextEl, setVideoNextEl] = useState<HTMLButtonElement | null>(null);

  const toggleVideo = (id: number) => {
    setPlayingVideos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPlayingVideos({});
  };

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const images = [
    {
      id: 1,
      title: "Bring back the old shine - Restoring a Ford Focus",
      src: "/gallery/gallery1.png",
    },
    {
      id: 2,
      title: "BMW X3 Engine - Refurbishment",
      src: "/gallery/gallery2.png",
    },
    {
      id: 3,
      title: "Restoring perfection after a crash – Toyota RAV4 Panel Beating & Realignment",
      src: "/gallery/gallery3.png",
    },
    {
      id: 4,
      title: "From Mud to Mirror Finish – Premium Exterior Detailing",
      src: "/gallery/gallery4.png",
    },
  ];

  const educationalVideos = [
    {
      id: 101,
      title: "",
      thumbnail: "/gallery/gallery1.png",
      videoUrl: "/video/cta.mp4",
    },
    {
      id: 102,
      title: "",
      thumbnail: "/gallery/gallery2.png",
      videoUrl: "/video/cta.mp4",
    },
    {
      id: 103,
      title: "",
      thumbnail: "/gallery/gallery3.png",
      videoUrl: "/video/cta.mp4",
    },
  ];

  const testimonialVideos = [
    {
      id: 201,
      title: "",
      thumbnail: "/gallery/gallery4.png",
      videoUrl: "/video/cta.mp4",
    },
    {
      id: 202,
      title: "",
      thumbnail: "/gallery/gallery2.png",
      videoUrl: "/video/cta.mp4",
    },
    {
      id: 203,
      title: "",
      thumbnail: "/gallery/gallery3.png",
      videoUrl: "/video/cta.mp4",
    },
  ];

  const currentVideos = activeTab === "Educational Videos" ? educationalVideos : testimonialVideos;

  return (
    <main className="min-h-screen bg-[#1D1D1B] text-white flex flex-col font-sans">
      <Header onOpenBooking={openBooking} />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <Typography variant="mainheading" className="mb-12 md:mb-16">
            Our Garage
          </Typography>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Mobile Dropdown Menu (Mobile Only) */}
            <div className="relative w-full lg:hidden mb-8 z-30">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 border border-white/20 bg-transparent text-white text-[15px] font-light tracking-wide cursor-pointer"
              >
                <span>{activeTab}</span>
                <svg
                  className={`w-4 h-4 text-white/60 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 mt-1 bg-[#1D1D1B] border border-white/20 shadow-xl z-40"
                  >
                    {["Gallery", "Educational Videos", "Customer Testimonials"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          handleTabChange(tab);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3.5 text-[15px] font-light transition-colors cursor-pointer ${
                          activeTab === tab 
                            ? "bg-white/10 text-white" 
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Menu (Desktop Only) */}
            <div className="w-full lg:w-1/4 flex flex-col space-y-7 shrink-0 mt-2 hidden lg:flex">
              <button 
                onClick={() => handleTabChange("Gallery")}
                className={`text-left text-[15px] font-light transition-colors cursor-pointer tracking-wide ${activeTab === "Gallery" ? "text-white" : "text-white/40 hover:text-white"}`}
              >
                Gallery
              </button>
              <button 
                onClick={() => handleTabChange("Educational Videos")}
                className={`text-left text-[15px] font-light transition-colors cursor-pointer tracking-wide ${activeTab === "Educational Videos" ? "text-white" : "text-white/40 hover:text-white"}`}
              >
                Educational Videos
              </button>
              <button 
                onClick={() => handleTabChange("Customer Testimonials")}
                className={`text-left text-[15px] font-light transition-colors cursor-pointer tracking-wide ${activeTab === "Customer Testimonials" ? "text-white" : "text-white/40 hover:text-white"}`}
              >
                Customer Testimonials
              </button>
            </div>
            
            {/* Content Area */}
            <div className="w-full lg:w-3/4">
              {activeTab === "Gallery" ? (
                <div className="flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {images.map((img) => (
                      <div key={img.id} className="flex flex-col group cursor-pointer">
                        
                        {/* Before/After Container */}
                        <div className="relative w-full aspect-[16/10] bg-[#1D1D1B] rounded-sm overflow-hidden mb-5">
                          <Image 
                            src={img.src} 
                            alt={img.title} 
                            fill 
                            className="object-fill transition-transform duration-700 group-hover:scale-105"
                            unoptimized
                          />
                          
                     

                          {/* Shadow overlay at bottom for text legibility */}
                          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-[#e4e4e7] text-[16px] font-light leading-relaxed pr-4">
                          {img.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* View More Button */}
                  {/* <div className="w-full mt-10">
                    <button className="w-full py-4 text-center border border-white/20 hover:border-white/50 text-white font-normal text-[15px] transition-colors duration-300 cursor-pointer bg-transparent">
                      View More
                    </button>
                  </div> */}
                </div>
              ) : (
                <div className="flex flex-col">
                  {/* Desktop Grid (Desktop Only) */}
                  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                    {currentVideos.map((video) => {
                      const isPlaying = playingVideos[video.id];
                      return (
                        <div key={video.id} className="flex flex-col group">
                          
                          {/* Video Box */}
                          <div className="relative aspect-[9/16] bg-[#1D1D1B] rounded-sm overflow-hidden mb-5 shadow-lg border border-white/5">
                            {isPlaying ? (
                              <video
                                src={video.videoUrl}
                                controls
                                autoPlay
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover z-30"
                              />
                            ) : (
                              <>
                                <Image
                                  src={video.thumbnail}
                                  alt={video.title}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                  unoptimized
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/10 transition-colors duration-300 group-hover:bg-black/30">
                                  <button 
                                    onClick={() => toggleVideo(video.id)}
                                    className="w-[72px] h-[72px] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center cursor-pointer border-none bg-transparent"
                                    aria-label="Play video"
                                  >
                                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.8" d="M35.5274 0C15.9364 0 0 15.9379 0 35.5274C0 55.1169 15.9364 71.0548 35.5274 71.0548C55.1184 71.0548 71.0548 55.1169 71.0548 35.5274C71.0548 15.9379 55.1184 0 35.5274 0ZM49.6511 36.7721L28.9268 50.0949C28.6839 50.2524 28.4035 50.3305 28.1259 50.3305C27.883 50.3305 27.6373 50.2697 27.4176 50.1498C26.9405 49.8896 26.6455 49.3922 26.6455 48.8502V22.2046C26.6455 21.6626 26.9405 21.1652 27.4176 20.905C27.886 20.6477 28.4729 20.6635 28.9268 20.9599L49.6511 34.2827C50.0732 34.5544 50.3305 35.0243 50.3305 35.5274C50.3305 36.0305 50.0732 36.5002 49.6511 36.7721Z" fill="white"/>
                                    </svg>
                                  </button>
                                </div>
                                {/* Shadow overlay at bottom for text legibility */}
                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                              </>
                            )}
                          </div>
                          
                          {/* Video Description */}
                          <p className="text-[#e4e4e7] text-[16px] font-light leading-relaxed pr-4">
                            {video.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Desktop Navigation (Desktop Only) */}
                  <div className="hidden md:flex justify-end mt-10 gap-3">
                    <button className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white transition-colors group cursor-pointer">
                      <svg className="text-white/70 group-hover:text-white transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    </button>
                    <button className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white transition-colors group cursor-pointer">
                      <svg className="text-white/70 group-hover:text-white transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>

                  {/* Mobile Video Swiper (Mobile Only) */}
                  <div className="block md:hidden w-full relative mt-4">
                    <Swiper
                      modules={[Navigation]}
                      slidesPerView={1.3}
                      centeredSlides={true}
                      spaceBetween={8}
                      loop={true}
                      navigation={{
                        prevEl: videoPrevEl,
                        nextEl: videoNextEl,
                      }}
                      onBeforeInit={(swiper) => {
                        if (typeof swiper.params.navigation !== "boolean") {
                          const navigation = swiper.params.navigation;
                          if (navigation) {
                            navigation.prevEl = videoPrevEl;
                            navigation.nextEl = videoNextEl;
                          }
                        }
                      }}
                      className="w-full !overflow-visible"
                    >
                      {currentVideos.map((video) => {
                        const isPlaying = playingVideos[video.id];
                        return (
                          <SwiperSlide key={video.id} className="h-auto flex items-center justify-center">
                            {({ isActive }) => (
                              <div
                                className={`relative aspect-[9/16] w-full rounded-md overflow-hidden transition-all duration-500 shadow-2xl ${
                                  isActive ? "scale-100 opacity-100" : "scale-[0.85] opacity-40"
                                }`}
                              >
                                {isPlaying ? (
                                  <video
                                    src={video.videoUrl}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover z-30"
                                  />
                                ) : (
                                  <>
                                    <Image
                                      src={video.thumbnail}
                                      alt={video.title}
                                      fill
                                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                                      unoptimized
                                    />
                                    {/* Play Button Overlay */}
                                    <div
                                      className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                                        isActive ? "opacity-100" : "opacity-0"
                                      }`}
                                    >
                                      <button 
                                        onClick={() => toggleVideo(video.id)}
                                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 pointer-events-auto cursor-pointer"
                                        aria-label="Play video"
                                      >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5 opacity-90">
                                          <path d="M8 5v14l11-7z" />
                                        </svg>
                                      </button>
                                    </div>
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                  </>
                                )}
                              </div>
                            )}
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>

                    {/* Mobile Swiper Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8 z-20">
                      <button
                        ref={setVideoPrevEl}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white transition-all duration-300 z-10 cursor-pointer hover:bg-white/10"
                      >
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.95618 0.999946L0.999661 8.30429L7.95618 15.6086M0.999661 8.30429L17.6953 8.3043" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        ref={setVideoNextEl}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white transition-all duration-300 z-10 cursor-pointer hover:bg-white/10"
                      >
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.7391 15.6087L17.6957 8.30435L10.7391 1M17.6957 8.30435L1 8.30435" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
      
      <Footer variant="ash" />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </main>
  );
}
