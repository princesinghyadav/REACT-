import sea2 from '../assets/images/image.png'

    const Content=()=>{
   
        
    return (
  <>
  <div >
      <section className="relative h-screen bg-gradient-to-b from-purple-600 to-blue-700 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center "
              style={{
                backgroundImage: `url(${sea2})`,
                opacity: 0.4
              }}
            />
             <div className="min-h-screen bg-gradient-to-b  from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 py-20 ">
          <div className="text-center mb-16">
            <p className="text-blue-400 uppercase tracking-wide mb-4">FREE SAMPLE</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 w-2/4 m-auto">
              Powerful Generator and Free Figma Sources
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto w-auto">
              Startup Framework contains components and complex blocks which can easily be
              integrated into almost any design. All of the components are made in the same style, and
              can easily be integrated into projects, allowing you to create hundreds of solutions.
            </p>
          </div>
  
          
        </div>
      </div>
            </section>
 
  </div>
  
    
  </>
   


    )
  }
    export default Content;