 
import { useState } from "react"
import my from '../assets/images/image-1.png'
import Nav from "./navbar"
import { useNavigate } from "react-router";

 
const slides = [
    {
      title: "Forget About Code",
      description: "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding."
    },
    {
      title: "Design Without Limits",
      description: "Create beautiful websites with intuitive tools that empower your creativity without any technical barriers."
    }
  ];
  
  export default function Landing({ onCreateAccount }) {
    const [currentSlide, setCurrentSlide] = useState(0);
  const navigate= useNavigate()
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    
    return (
      <section className="relative h-screen bg-gradient-to-b from-purple-600 to-blue-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${my})`,
            opacity: 0.4
          }}
        />
        <Nav/>
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <p className="text-white mb-4">Startup 3</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-4xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-12">
            {slides[currentSlide].description}
          </p>
          
          <button 
            onClick={()=>{
              navigate("/login");
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Create an Account
          </button>
  
          <div className="flex justify-center space-x-4 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  