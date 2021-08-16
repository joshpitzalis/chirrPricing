/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Drafts',
    description: 'Save work-in-progress on your ideas for threads and work on them later.',
  },
  {
    name: 'Analytics',
    description: 'Use our analytics to see which tweets performed best and figure out the best time to publish.',
  },
  {
    name: 'Evergreen content pool',
    description: 'Build up a pool of content that gets automatically shared when you run out of content so that you never run out of tweets. ',
  },
  {
    name: 'Slowly Release Threads',
    description: 'You can schedule follow-up tweets on a thread with a custom delay so that your story unfolds over time.',
  },
  {
    name: 'Chrome Extension',
    description: 'We have a chrome extension that makes it easy to capture content from anywhere on the web.',
  },
  {
    name: 'Import Threads',
    description: 'You can import older threads and Tweets from Twitter and work on them in Chirr App.',
  },
  {
    name: 'Bookmarking',
    description: 'You can bookmark important tweets, threads, and drafts for easy access.',
  },
  {
    name: 'Edit Tweets & Threads',
    description: 'When you need to edit something, Chirr App deletes the entire thread, makes the change, and then reposts everything for you in one go.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">And a bunch of other Twitter superpowers...</h2>
         
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
