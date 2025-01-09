 
import { useState } from 'react';
import sea from '../assets/images/image.png'
 

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', { email, password });
  };

  return (
    <div>
         <section className="relative h-screen  bg-blue-600 items-center justify-center text-center text-white px-4">
              
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={sea}
                  alt="Mountain Background"
                  fill
                  className='h-screen'
                />
              </div>

              <div className="min-h-screen flex w-[75%] m-auto mt-4 ">
              {/* Left side - Content */}
              <div className="flex-1 flex relative z-10 mt-10 items-center justify-center   p-8 m-10 ">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-white mb-4">
            We solve digital problems with an outstanding creative flare
          </h1>
          <p className="text-gray-300">
            We have created a new product that will help designers, developers and companies create
            websites for their startups quickly and easily.
          </p>
        </div>
      </div>


{/* Right side - Auth Form */}
<div className="flex-1 flex items-center justify-center relative    p-8 m-10 bg-white  ">
        <div className="w-full max-w-md ">
          <div className="flex   border-b">
            <button
              className={`pb-4 px-8  ${
                !isLogin ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(false)}
            >
              SIGN UP
            </button>
            <button
              className={`pb-4 px-8 ${
                isLogin ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(true)}
            >
              LOGIN
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              {isLogin ? 'Login' : 'Create an Account'}
            </button>
            <div className="text-center text-gray-500">or</div>
            <button
              type="button"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login via Twitter
            </button>
          </form>
        </div>
      </div>
      </div>
              </section>

            
     
      
   
    </div>
    
  );
}