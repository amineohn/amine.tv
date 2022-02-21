import Navigation from "../components/Navigation";

const Planning = () => {
  return (
    <>
      <Navigation />
      <div className="mt-2 w-full container m-auto space-y-6 py-4 lg:px-0 px-4">
        <div className="flex justify-center items-center">
          <div className={`flex items-center justify-center w-full text-white`}>
            <div className="flex justify-center items-center">
              <div className="grid lg:grid-cols-5 xl:grid-cols-7 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <div className="bg-neutral-800 w-[170px] h-10 px-2 py-2 rounded-xl">
                    <div className="flex justify-center items-center">
                      <span className="text-center font-medium">Lundi</span>
                    </div>
                  </div>
                  <div className="bg-neutral-900 h-80 rounded-xl"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-neutral-800 w-[170px] h-10 px-2 py-2 rounded-xl">
                    <div className="flex justify-center items-center">
                      <span className="text-center font-medium">Mardi</span>
                    </div>
                  </div>
                  <div className="bg-neutral-900 h-80 rounded-xl"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-neutral-800 w-[170px] h-10 px-2 py-2 rounded-xl">
                    <div className="flex justify-center items-center">
                      <span className="text-center font-medium">Mercredi</span>
                    </div>
                  </div>
                  <div className="bg-neutral-900 h-80 rounded-xl"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-neutral-800 w-[170px] h-10 px-2 py-2 rounded-xl">
                    <div className="flex justify-center items-center">
                      <span className="text-center font-medium">Jeudi</span>
                    </div>
                  </div>
                  <div className="bg-neutral-900 h-80 rounded-xl"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-neutral-800 w-[170px] h-10 px-2 py-2 rounded-xl">
                    <div className="flex justify-center items-center">
                      <span className="text-center font-medium">Vendredi</span>
                    </div>
                  </div>
                  <div className="bg-neutral-900 h-80 rounded-xl"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-neutral-800 w-[170px] h-10 px-2 py-2 rounded-xl">
                    <div className="flex justify-center items-center">
                      <span className="text-center font-medium">Samedi</span>
                    </div>
                  </div>
                  <div className="bg-neutral-900 h-80 rounded-xl"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-neutral-800 w-[170px] h-10 px-2 py-2 rounded-xl">
                    <div className="flex justify-center items-center">
                      <span className="text-center font-medium">Dimanche</span>
                    </div>
                  </div>
                  <div className="bg-neutral-900 h-80 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Planning;
