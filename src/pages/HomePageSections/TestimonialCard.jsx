
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CarouselItem } from "@/components/ui/carousel";

const TestimonialCard = ({ testimonial }) => {
  const iconColor = 'text-brand-sky-blue';
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1 h-full">
        <div className="glassmorphism-card p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
          <MessageSquare className={`w-8 h-8 ${iconColor} mb-4`} />
          <p className="text-gray-600 italic mb-6 text-sm flex-grow">"{testimonial.quote}"</p>
          <div className="flex items-center">
            <img  class="w-12 h-12 rounded-full mr-4 object-cover border-2 border-brand-sky-blue" alt={testimonial.name} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
            <div>
              <p className="font-semibold text-brand-primary-blue">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default TestimonialCard;
  