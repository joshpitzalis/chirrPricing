/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-chirr-blue">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by thousands, for over 4 years...</h2>
          <p className="my-3 text-xl text-indigo-100 sm:mt-4">
            Chirr App was the first thread maker ever, back when Twitter had 140-symbols limit, and threads weren't a thing, and here's <a className='underline' href='https://github.com/kossnocorp/chirrapp' target='_blank' rel="noreferrer">the source code of the first version of the product</a> from back in 2017  to prove it.
          </p>
          
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-100">People have used Chirr App</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">19,142</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-100">Threads posted so far</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">67,635</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-100">Tweets published</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">728,118</dd>
          </div>
        </dl>
        <p className="pt-10 text-center text-sm text-indigo-100 sm:mt-4">
            👆 The counters are updated once every 24 hours 👆
          </p>
      
      </div>
      <img src={process.env.PUBLIC_URL + '/images/love.png'} alt="" />
    </div>
  )
}
