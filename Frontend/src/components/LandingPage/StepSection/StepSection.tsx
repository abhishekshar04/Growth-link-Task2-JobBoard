export function StepSection(){
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6">
          {/* Left Section - Images */}
          <div className="relative flex flex-col gap-4 w-[50%] max-w-md">
            <div className="w-50 h-50 overflow-hidden rounded-full">
              <img
                src="https://img.freepik.com/free-photo/handsome-young-man-using-smartphone-home_171337-21218.jpg"
                alt="Man using phone"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-50 h-50 overflow-hidden rounded-full">
              <img
                src="https://img.freepik.com/free-photo/woman-working-laptop-cafe_23-2148906785.jpg"
                alt="Woman using laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
    
          {/* Right Section - Steps */}
          <div className="max-w-lg text-left">
            <h2 className="text-gray-800 font-semibold uppercase text-sm tracking-wide">Step</h2>
            <h1 className="text-3xl font-bold mt-1">
              Find a job using <span className="text-green-600">Jobber</span> in 3 easy steps
            </h1>
    
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-green-600 font-bold text-lg">1</div>
                <div>
                  <h3 className="font-semibold">
                    Job searching made easy, <span className="text-green-600">anywhere</span> you are
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Effortlessly explore job opportunities no matter your location. Access listings anytime, anywhere.
                  </p>
                </div>
              </div>
    
              <div className="flex items-start gap-4">
                <div className="text-green-600 font-bold text-lg">2</div>
                <div>
                  <h3 className="font-semibold">
                    Find your match from a <span className="text-green-600">Personalized</span> job list
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Explore a tailored selection of job opportunities designed to match your skills and preferences.
                  </p>
                </div>
              </div>
    
              <div className="flex items-start gap-4">
                <div className="text-green-600 font-bold text-lg">3</div>
                <div>
                  <h3 className="font-semibold">
                    Browse job info and <span className="text-green-600">Apply</span> in just a few clicks
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Quickly access detailed job descriptions tailored to your interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}