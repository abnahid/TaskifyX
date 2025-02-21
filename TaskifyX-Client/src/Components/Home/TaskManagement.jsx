
const TaskManagement = () => {

  return (
    <section
      id="tasks"
      className="relative py-10 sm:py-16 lg:py-24 transition-all duration-300  dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900"

    >
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold md:text-6xl lg:text-5xl">
            Task Management
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed md:text-2xl">
            Organize, track, and manage your tasks efficiently with our tool.
          </p>
        </div>



        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              alt="Curved Dotted Line Illustration"
              loading="lazy"
              width="1000"
              height="500"
              decoding="async"
              className="w-full"
              style={{ color: "transparent" }}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow dark:bg-gray-700 dark:border-gray-600">
                <span className="text-xl font-semibold text-gray-700 dark:text-white">1</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                Add Tasks
              </h3>
              <p className="mt-4 text-base md:text-lg">
                Easily create new tasks, set deadlines, and prioritize them.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow dark:bg-gray-700 dark:border-gray-600">
                <span className="text-xl font-semibold text-gray-700 dark:text-white">2</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                Track Progress
              </h3>
              <p className="mt-4 text-base md:text-lg">
                Monitor your ongoing tasks and stay updated on deadlines.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow dark:bg-gray-700 dark:border-gray-600">
                <span className="text-xl font-semibold text-gray-700 dark:text-white">3</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                Complete & Archive
              </h3>
              <p className="mt-4 text-base md:text-lg">
                Mark tasks as completed and archive them for records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default TaskManagement;
