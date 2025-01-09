"use client";
import { MapPin, Clock } from 'lucide-react';

export const Map = () => {
  return (
    <section className="mt-32 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
          <div className="flex items-start gap-2 md:ml-32 w-full md:w-1/3 mb-8 md:mb-0">
            <MapPin className="w-10 h-8 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-bold text-xl mb-1">LOCATION</h2>
              <p className="font-bold text-white text-xl">
                123 W Indiantown Rd, Jupiter, FL<br />
                123456, United States.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 w-full md:w-1/3">
            <Clock className="w-10 h-8 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-bold text-xl mb-1">OPEN HOURS</h2>
              <p className="font-bold text-white text-xl">
                Sun - Thu: 12pm - 12am<br />
                Fri - Sat: 12pm - 1am
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex justify-center">
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d854.5038521475394!2d-80.08870088782935!3d26.935378510193818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df29e3b09c8647%3A0x6e7e8b84a75d34ad!2s123%20W%20Indiantown%20Rd%2C%20Jupiter%2C%20FL%2034458!5e0!3m2!1sen!2sus!4v1736318672127!5m2!1sen!2sus"
          width="80%" 
          height="450"
          style={{ border: '0', transition: 'filter 0.3s ease', filter: 'grayscale(100%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
