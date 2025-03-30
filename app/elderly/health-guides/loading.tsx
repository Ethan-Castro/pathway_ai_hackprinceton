export default function Loading() {
  return (
    <div className="pt-16">
      <section className="bg-blue-50 dark:bg-blue-950/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
            <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
            <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="h-10 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-6">
                  <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
                  <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
                    <div className="h-6 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                  </div>

                  <div>
                    <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
                    <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                  </div>

                  <div>
                    <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
                    <div className="h-6 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse mb-1"></div>
                    <div className="h-6 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse mb-1"></div>
                    <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

