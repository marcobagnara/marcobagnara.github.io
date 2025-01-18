import { ChevronRight } from "lucide-react";

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-academic-primary mb-8 text-center">
          Short CV
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="bg-academic-halfshadedbg p-6 rounded-lg shadow-sm flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-gray-800">
                    Ph.D. in Mathematics @ <a 
                      href="https://www.sns.it/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-academic-primary hover:underline"
                    >
                      Scuola Normale Superiore
                    </a>
                  </h4>
                  <div className="mt-2">
                    <p className="text-gray-600">Research areas: Stochastic Fluid Dynamics, SPDEs, regularization by noise.</p>
                    <p className="text-gray-600">Supervisors: Prof. Mario Maurelli, Prof. Franco Flandoli.</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-center justify-center">
                  <div className="text-gray-600">11/2021-present</div>
                  <div className="text-gray-600 text-sm">Pisa, Italy</div>
                </div>
              </div>
            </div>

            <div className="bg-academic-halfshadedbg p-6 rounded-lg shadow-sm ml-8 relative flex flex-col justify-center">
              <ChevronRight className="absolute -left-6 top-1/2 -translate-y-1/2 text-academic-primary" size={20} />
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-gray-800">
                    Simulation and Modelling Engineer @ <a 
                      href="https://www.mercedesamgf1.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-academic-primary hover:underline"
                    >
                      Mercedes-AMG Formula One Team
                    </a>
                  </h4>
                </div>
                <div className="text-right flex flex-col items-center justify-center">
                  <div className="text-gray-600">6/2021-10/2021</div>
                  <div className="text-gray-600 text-sm">Brackley, England</div>
                </div>
              </div>
            </div>

            <div className="bg-academic-halfshadedbg p-6 rounded-lg shadow-sm ml-8 relative flex flex-col justify-center">
              <ChevronRight className="absolute -left-6 top-1/2 -translate-y-1/2 text-academic-primary" size={20} />
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-gray-800">
                    Data Scientist @ <a 
                      href="https://www.reply.com/target-reply/it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-academic-primary hover:underline"
                    >
                      Target Reply
                    </a>
                  </h4>
                </div>
                <div className="text-right flex flex-col items-center justify-center">
                  <div className="text-gray-600">3/2021-6/2021</div>
                  <div className="text-gray-600 text-sm">Milano, Italy</div>
                </div>
              </div>
            </div>

            <div className="bg-academic-halfshadedbg p-6 rounded-lg shadow-sm flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-gray-800">
                    M.Sc. in Mathematical Engineering @ <a 
                      href="https://www.polimi.it/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-academic-primary hover:underline"
                    >
                      Politecnico di Milano
                    </a>
                  </h4>
                  <div className="mt-2">
                    <p className="text-gray-700">110/110 cum laude</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-center justify-center">
                  <div className="text-gray-600">9/2018-12/2020</div>
                  <div className="text-gray-600 text-sm">Milano, Italy</div>
                </div>
              </div>
            </div>

            <div className="bg-academic-halfshadedbg p-6 rounded-lg shadow-sm flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-gray-800">
                    B.Sc. in Mathematical Engineering @ <a 
                      href="https://www.polimi.it/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-academic-primary hover:underline"
                    >
                      Politecnico di Milano
                    </a>
                  </h4>
                  <div className="mt-2">
                    <p className="text-gray-700">110/110 cum laude</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-center justify-center">
                  <div className="text-gray-600">10/2015-9/2018</div>
                  <div className="text-gray-600 text-sm">Milano, Italy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;