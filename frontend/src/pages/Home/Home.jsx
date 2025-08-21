import React, { Suspense, lazy } from "react";
import MissionSection from "../../components/MissionSection/MissionSection";

// Lazy-loaded components for performance
const ImageSlider = lazy(() => import("../../components/ImageSlider/ImageSlider"));
const ProductFeature = lazy(() => import("../../components/ProductFeature/ProductFeature"));
const CareerSection = lazy(() => import("../../components/CareerSection/CareerSection"));
const SubscribeForm = lazy(() => import("../../components/SubscribeForm/SubscribeForm"));
const ContactSection = lazy(() => import("../../components/ContactSection/ContactSection"));

// Reusable loader components
const FullScreenLoader = ({ message }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
    <div className="text-xl text-gray-700">{message}</div>
  </div>
);

const ContentLoader = ({ message }) => (
  <div className="w-full p-8 text-center bg-gray-50">
    <div className="max-w-2xl mx-auto">
      <div className="animate-pulse space-y-3">
        <div className="h-8 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="text-lg text-gray-600 mt-4">{message}</div>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Suspense fallback={<FullScreenLoader message="Loading slider..." />}>
        <ImageSlider />
      </Suspense>

      {/* Main Content Sections */}
      <MissionSection />
      {/* Lazy-loaded Additional Sections */}
      <Suspense fallback={<ContentLoader message="Loading content..." />}>
        <ProductFeature
          title="YChat"
          image="/images/ychat.jpg"
          readMore={
            <>
              <p className="text-gray-600">
                YChat is redefining online shopping through collaboration, real-time
                interaction, and intelligent assistance. By harnessing the power of
                innovation, we are helping people not just stay connected, but
                experience a constant sense of togetherness, no matter where they are.
              </p>
              <p className="text-gray-600">
                Stay tuned—<span className="italic font-bold">Launching Soon!</span>
              </p>
            </>
          }
        />

        {/* Uncomment if Career Section is ready */}
        {/* <CareerSection /> */}

        <SubscribeForm />
        <ContactSection />
      </Suspense>
    </>
  );
};

export default Home;
