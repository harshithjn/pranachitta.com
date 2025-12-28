import { Clock, Users, Heart, HandHeart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-4 text-center">
        <h1 className="font-merienda text-5xl font-bold text-gray-900 mb-6">
          Pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-quicksand">
          Thoughtfully designed offerings for deep, meaningful transformation.
        </p>

        <div className="mt-10 inline-block bg-primary-custom/10 text-primary-custom px-6 py-3 rounded-full font-quicksand text-lg">
          Coming Soon
        </div>
      </section>

      {/* Placeholder Cards */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ComingSoonCard
            icon={<Clock className="h-6 w-6 text-primary-custom" />}
            title="1:1 Sessions"
            description="Personalised breathwork sessions tailored to your individual journey."
          />

          <ComingSoonCard
            icon={<Heart className="h-6 w-6 text-primary-custom" />}
            title="Bundles"
            description="Curated session bundles for deeper, long-term integration."
            highlight
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ComingSoonCard
            icon={<Users className="h-6 w-6 text-primary-custom" />}
            title="Group Sessions"
            description="Shared spaces for collective breathing and connection."
          />

          <ComingSoonCard
            icon={<HandHeart className="h-6 w-6 text-primary-custom" />}
            title="Couples Breathwork"
            description="Strengthen connection and presence through guided breathwork."
          />
        </div>

        {/* Footer Note */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="font-merienda text-lg font-semibold text-gray-900 mb-3">
                Accessibility & Care
              </h3>
              <p className="font-quicksand text-gray-700 italic leading-relaxed">
                We are committed to making this work accessible. Financial support options will be available.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

/* Reusable Coming Soon Card */
function ComingSoonCard({
  icon,
  title,
  description,
  highlight = false,
}: {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: boolean
}) {
  return (
    <Card
      className={`hover:shadow-lg transition-shadow duration-300 ${
        highlight ? 'bg-primary-custom/5 border-primary-custom/20' : ''
      }`}
    >
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center mr-4">
            {icon}
          </div>
          <h2 className="font-merienda text-2xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        <p className="font-quicksand text-gray-600 mb-6">
          {description}
        </p>

        <div className="text-sm font-quicksand text-gray-500 italic">
          Pricing details will be announced soon.
        </div>
      </CardContent>
    </Card>
  )
}
