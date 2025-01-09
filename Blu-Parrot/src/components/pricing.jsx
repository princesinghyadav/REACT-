const plans = [
    {
      name: 'Starter',
      price: '9.99',
      features: [
        { name: '2 GB of space', included: true },
        { name: '14 days of backups', included: true },
        { name: 'Social integrations', included: true },
        { name: 'Client billing', included: true },
        { name: 'Remote access', included: false },
        { name: 'Custom domain', included: false },
        { name: '24 hours support', included: false },
        { name: 'Admin tools', included: false },
        { name: 'Collaboration tools', included: false },
        { name: 'User management', included: false },
      ],
    },
    {
      name: 'Professional',
      price: '19.99',
      features: [
        { name: '2 GB of space', included: true },
        { name: '14 days of backups', included: true },
        { name: 'Social integrations', included: true },
        { name: 'Client billing', included: true },
        { name: 'Remote access', included: true },
        { name: 'Custom domain', included: true },
        { name: '24 hours support', included: true },
        { name: 'Admin tools', included: false },
        { name: 'Collaboration tools', included: false },
        { name: 'User management', included: false },
      ],
    },
    {
      name: 'Team',
      price: '49.99',
      features: [
        { name: '2 GB of space', included: true },
        { name: '14 days of backups', included: true },
        { name: 'Social integrations', included: true },
        { name: 'Client billing', included: true },
        { name: 'Remote access', included: true },
        { name: 'Custom domain', included: true },
        { name: '24 hours support', included: true },
        { name: 'Admin tools', included: true },
        { name: 'Collaboration tools', included: true },
        { name: 'User management', included: true },
      ],
    },
  ];
  import Mask from '../assets/images/Mask.png'
  export default function PricingSection() {
    return (
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Mask})`,
            opacity: 0.8,
             
          }}
        />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Plans & Pricing</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Startup Framework is free forever — you only pay for custom domain hosting or to export your site.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white/10  rounded-lg p-8 text-white"
              >
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
  
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.name}
                      className={`flex items-center ${
                        feature.included ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {feature.included && (
                        <span className="mr-2 text-green-400">✓</span>
                      )}
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
  
                <button
                  className={`w-full py-3 rounded-2xl transition-colors ${
                    plan.name === 'Professional'
                      ? 'bg-pink-500 hover:bg-pink-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }