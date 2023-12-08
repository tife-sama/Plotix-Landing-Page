export const Writercta = () => {
  return (
    <div className="relative grid w-full grid-cols-1 gap-5 overflow-hidden rounded-3xl bg-indigo-700 bg-cover bg-center lg:grid-cols-2">
      <div className="order-2 flex h-full w-full items-end justify-center lg:order-1 ">
        <img
          src="/brand.png"
          alt=""
          className="w-full xl:w-3/4 hidden sm:block"
        />
      </div>
      <div className="order-1 px-4 py-8 lg:order-2 lg:py-20 lg:pl-0 lg:pr-24 bg-indigo-700">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Receive personalised coaching
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Experience transformation and growth in your writing journey
            alongside peers with our guidance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
