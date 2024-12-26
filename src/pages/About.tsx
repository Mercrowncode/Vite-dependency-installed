import { Building2, Users2, Trophy, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492462543947-040389c4a66c?auto=format&fit=crop&q=80")',
            transform: 'translateZ(-1px) scale(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Leading the way in luxury automotive excellence since 2016
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2016, MIDE&DARA MOTORS has been at the forefront of the luxury automotive industry for over five decades. What started as a small dealership has grown into one of Nigeria's most trusted names in premium vehicles.
            </p>
            <p className="text-muted-foreground">
              Our commitment to excellence, customer satisfaction, and innovative solutions has earned us numerous accolades and the trust of thousands of satisfied customers across the nation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <Building2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">7+ Years</h3>
                <p className="text-sm text-muted-foreground">Of industry experience</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <Users2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">1000+</h3>
                <p className="text-sm text-muted-foreground">Happy customers</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <Trophy className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">25+</h3>
                <p className="text-sm text-muted-foreground">Industry awards</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <HeartHandshake className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">100%</h3>
                <p className="text-sm text-muted-foreground">Customer satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}