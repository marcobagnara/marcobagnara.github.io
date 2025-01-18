const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-academic-shadedbg to-white pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <p className="text-gray-600 max-w-lg animate-fade-up text-lg">
            I am currently in the final year of my PhD in Mathematics at the{" "}
            <a 
              href="https://www.sns.it/en" 
              className="text-academic-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scuola Normale Superiore
            </a>{" "}
            in Pisa, under the supervision of Professors{" "}
            <a 
              href="https://www.dm.unipi.it/en/person-details/?person_id=63822bbf7942943d6350d6a0"
              className="text-academic-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mario Maurelli
            </a>{" "}
            and{" "}
            <a 
              href="https://sites.google.com/sns.it/franco-flandoli/home-page"
              className="text-academic-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Franco Flandoli
            </a>
            .
            <br /><br />
            My research focuses on stochastic fluid dynamics, regularisation by noise and SPDEs in general, with a particular interest in stochastic models for turbulence such as the Kraichnan model.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src="/profile.png"
            alt="Marco Bagnara"
            className="w-64 h-64 rounded-full object-cover shadow-lg animate-fade-up mb-4"
          />
          <div className="text-center flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-academic-primary animate-fade-up">
              Marco Bagnara
            </h1>
            <h2 className="text-center text-base md:text-lg text-academic-secondary animate-fade-up mb-4">
              PhD Student in Mathematics
            </h2>
            <div className="flex space-x-4 animate-fade-up justify-center">
              <a
                href="https://www.sns.it/en/persona/marco-bagnara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-primary hover:text-academic-secondary transition-colors"
                title="SNS webpage"
              >
                <i className="ai ai-archive text-3xl"></i>
              </a>
              <a
                href="https://scholar.google.com/citations?user=94oH_aMAAAAJ&hl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-primary hover:text-academic-secondary transition-colors"
                title="Google Scholar"
              >
                <i className="ai ai-google-scholar text-3xl"></i>
              </a>
              <a
                href="https://arxiv.org/search/math?searchtype=author&query=Bagnara,+M"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-primary hover:text-academic-secondary transition-colors"
                title="arXiv"
              >
                <i className="ai ai-arxiv text-3xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/marco-bagnara-837865151/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-primary hover:text-academic-secondary transition-colors"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;