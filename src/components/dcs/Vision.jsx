import { AcademicCapIcon } from "@heroicons/react/solid"
import { Sparkles, ChartBar  } from 'heroicons-react'
// import demandAndcapacity from "./images/arrow.png";
// import fileAway from "./images/fileAway.jpg";
// import SmartSearch from "./images/SmartSearch.png";

const features = [
  {
    name: 'Smart Tools',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChartBar ,
  },
  {
    name: 'File Away',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChartBar ,
  },
  {
    name: 'DEMAND & CAPACIY MODELLING',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChartBar ,
  },
  {
    name: 'Trainings',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: Sparkles ,
  },
  
]

export default function Vision() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
        
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-4 md:gap-x-16 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-lightgreen text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
