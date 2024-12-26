export function FinancingHero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80")',
          transform: 'translateZ(-1px) scale(1.2)'
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Financing Solutions</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Tailored financial services to make your dream car a reality
        </p>
      </div>
    </section>
  );
}