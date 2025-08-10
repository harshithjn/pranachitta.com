import { Clock, Users, Heart, HandHeart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-16 px-4 text-center">
        <h1 className="font-merienda text-5xl font-bold text-gray-900 mb-6">
          Pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-quicksand">
          Transparent pricing for transformative experiences. Choose what works best for your journey.
        </p>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 1:1 Sessions */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-primary-custom" />
                </div>
                <h2 className="font-merienda text-2xl font-bold text-gray-900">1:1 Sessions</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-quicksand text-gray-700">1 hour session</span>
                  <span className="font-merienda text-xl font-bold text-primary-custom">35€</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-quicksand text-gray-700">1.5 hours session</span>
                  <span className="font-merienda text-xl font-bold text-primary-custom">50€</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bundles */}
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-primary-custom/5 border-primary-custom/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-primary-custom" />
                </div>
                <h2 className="font-merienda text-2xl font-bold text-gray-900">Bundles</h2>
                <span className="ml-3 text-xs bg-primary-custom text-white px-2 py-1 rounded-full font-quicksand">Popular</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-quicksand text-gray-700">4 × 1h sessions</span>
                  <span className="font-merienda text-xl font-bold text-primary-custom">130€</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-quicksand text-gray-700">4 × 1.5h sessions</span>
                  <span className="font-merienda text-xl font-bold text-primary-custom">180€</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Group Sessions */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary-custom" />
                </div>
                <h2 className="font-merienda text-2xl font-bold text-gray-900">Group Sessions</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-quicksand text-gray-700">4-session bundle</span>
                  <span className="font-merienda text-xl font-bold text-primary-custom">50€</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-quicksand text-gray-700">Drop-in (single session)</span>
                  <span className="font-merienda text-xl font-bold text-primary-custom">15€</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Couples Breathwork */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center mr-4">
                  <HandHeart className="h-6 w-6 text-primary-custom" />
                </div>
                <h2 className="font-merienda text-2xl font-bold text-gray-900">Couples Breathwork</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-quicksand text-gray-700">Single 2-hour session</span>
                  <span className="font-merienda text-xl font-bold text-primary-custom">65€ <span className="text-sm text-gray-500 font-quicksand">per couple</span></span>
                </div>
                <div className="py-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-quicksand text-gray-700">Bundle (4 × 2h)</span>
                    <div className="text-right">
                      <div className="font-merienda text-xl font-bold text-primary-custom">240€</div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Support */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="font-merienda text-lg font-semibold text-gray-900 mb-3">Financial Support</h3>
              <p className="font-quicksand text-gray-700 italic leading-relaxed">
                If you're in a low-income situation, please reach out. We're happy to find a solution together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}