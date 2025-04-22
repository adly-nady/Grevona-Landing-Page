import React, { useEffect, useRef, useState, useCallback } from 'react';
import { LayoutDashboard, MousePointer, Smartphone, Tablet, Laptop, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const UIUXSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.appear');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const ImageGallery: React.FC<{ device: 'desktop' | 'tablet' | 'mobile' }> = ({ device }) => {
    const images = {
      desktop: [
        '/uiux/pc/login.png',
        '/uiux/pc/home.png',
        '/uiux/pc/getway.png',
        '/uiux/pc/report.png',
        '/uiux/pc/silos.png',
        '/uiux/pc/event.png',
      ],
      tablet: [
        '/uiux/tablet/login.png',
        '/uiux/tablet/home.png',
        '/uiux/tablet/event.png',
        '/uiux/tablet/getway.png',
        '/uiux/tablet/report.png',
        '/uiux/tablet/silos.png',
      ],
      mobile: [
        '/uiux/mobile/home.png',
        '/uiux/mobile/login.png',
        '/uiux/mobile/notification.png',
        '/uiux/mobile/permission.png',
        '/uiux/mobile/task.png', 
      ],
    }[device];

    const [selectedImage, setSelectedImage] = useState(0);
    const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

    const handlePrev = useCallback(() => {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const handleImageError = useCallback((index: number) => {
      setImageError((prev) => ({ ...prev, [index]: true }));
    }, []);

    const aspectRatio = device === 'mobile' ? '9/16' : device === 'tablet' ? '4/3' : '16/9';

    return (
      <div className="w-full h-full" aria-live="polite">
        <motion.div
          className="relative rounded-lg overflow-hidden bg-space-deeper-blue w-full h-full"
          style={{ aspectRatio }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {imageError[selectedImage] ? (
            <div className="w-full h-full flex items-center justify-center bg-space-deeper-blue">
              <p className="text-gray-400 text-sm">Image not available</p>
            </div>
          ) : (
            <img
              src={images[selectedImage]}
              alt={`${device} design ${selectedImage + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
              onError={() => handleImageError(selectedImage)}
            />
          )}
          <motion.button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2  bg-opacity-70 p-2 rounded-full"
            aria-label="Previous image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2  bg-opacity-70 p-2 rounded-full"
            aria-label="Next image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="uiux" ref={sectionRef} className="py-16 relative z-10 ">
      <style jsx>{`
        .appear {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .appear.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4 appear">
            <LayoutDashboard className="h-8 w-8 text-space-nebula-pink mr-2" />
            <MousePointer className="h-6 w-6 text-space-light-purple" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 appear" style={{ transitionDelay: '0.1s' }}>
            UI/UX <span className="text-space-nebula-pink">Design</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base appear" style={{ transitionDelay: '0.2s' }}>
            Grevona Cloud offers an intuitive, user-friendly interface tailored for mill operators and managers.
          </p>
        </div>

        <div className="appear" style={{ transitionDelay: '0.3s' }}>
          <Tabs defaultValue="desktop" className="w-full">
            <TabsList className="w-full max-w-lg mx-auto bg-space-darker-blue mb-8 grid grid-cols-3 rounded-lg">
              <TabsTrigger
                value="desktop"
                className="flex items-center gap-2 py-2 text-sm"
                aria-controls="desktop-content"
              >
                <Laptop className="h-4 w-4" />
                <span className="hidden sm:inline">Desktop</span>
              </TabsTrigger>
              <TabsTrigger
                value="tablet"
                className="flex items-center gap-2 py-2 text-sm"
                aria-controls="tablet-content"
              >
                <Tablet className="h-4 w-4" />
                <span className="hidden sm:inline">Tablet</span>
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="flex items-center gap-2 py-2 text-sm"
                aria-controls="mobile-content"
              >
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">Mobile</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="desktop" id="desktop-content" className="focus-visible:outline-none">
              <div className="bg-space-darker-blue p-4 sm:p-6 rounded-lg shadow-xl border border-space-light-purple border-opacity-20">
                <div className="aspect-video bg-space-deep-blue rounded relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-10 bg-space-darker-blue flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 h-5 w-64 bg-space-deeper-blue rounded-full"></div>
                  </div>
                  <div className="pt-14 px-4 sm:px-6 grid grid-cols-1 gap-4 h-full">
                    <ImageGallery device="desktop" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-white font-medium text-lg">Web App Dashboard</h4>
                  <p className="text-gray-400 text-sm">Comprehensive view with advanced analytics</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tablet" id="tablet-content" className="focus-visible:outline-none">
              <div className="bg-space-darker-blue p-4 sm:p-6 rounded-lg shadow-xl border border-space-light-purple border-opacity-20 max-w-lg mx-auto">
                <div className="aspect-[4/3] bg-space-deep-blue rounded relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-8 bg-space-darker-blue flex items-center px-3">
                    <div className="w-20 h-4 bg-space-deeper-blue rounded-full"></div>
                  </div>
                  <div className="pt-12 px-4 grid grid-cols-1 gap-4 h-full">
                    <ImageGallery device="tablet" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-white font-medium text-lg">Tablet Interface</h4>
                  <p className="text-gray-400 text-sm">Optimized for plant floor monitoring</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mobile" id="mobile-content" className="focus-visible:outline-none">
              <div className="bg-space-darker-blue p-4 sm:p-6 rounded-lg shadow-xl border border-space-light-purple border-opacity-20 max-w-sm mx-auto">
                <div className="aspect-[9/16] bg-space-deep-blue rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-6 bg-space-darker-blue flex items-center justify-between px-3">
                    <div className="w-10 h-3 bg-space-deeper-blue rounded-full"></div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-space-deeper-blue"></div>
                      <div className="w-3 h-3 rounded-full bg-space-deeper-blue"></div>
                      <div className="w-3 h-3 rounded-full bg-space-deeper-blue"></div>
                    </div>
                  </div>
                  <div className="pt-10 px-3 grid grid-cols-1 gap-4 h-full">
                    <ImageGallery device="mobile" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-white font-medium text-lg">Mobile App</h4>
                  <p className="text-gray-400 text-sm">Quick monitoring and approvals on the go</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 appear" style={{ transitionDelay: '0.4s' }}>
          <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 rounded-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto bg-space-light-purple bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <MousePointer className="h-6 w-6 text-space-light-purple" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Intuitive Interface</h3>
            <p className="text-gray-400 text-sm">Role-based dashboards for mill operators</p>
          </div>
          <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 rounded-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto bg-space-nebula-pink bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <LayoutDashboard className="h-6 w-6 text-space-nebula-pink" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Custom Workflows</h3>
            <p className="text-gray-400 text-sm">Tailored for grain processing and milling</p>
          </div>
          <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 rounded-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <div className="flex">
                <Smartphone className="h-5 w-5 text-green-400" />
                <Tablet className="h-6 w-6 text-green-400 -ml-1" />
                <Laptop className="h-7 w-7 text-green-400 -ml-1" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Responsive Design</h3>
            <p className="text-gray-400 text-sm">Seamless across all devices</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-64 h-64 bg-space-nebula-pink opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-space-light-purple opacity-5 rounded-full blur-3xl" />
    </section>
  );
};

export default UIUXSection;