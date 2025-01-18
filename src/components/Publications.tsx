import { Link2, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Anomalous Regularization in Kazantsev-Kraichnan Model",
      authors: "Marco Bagnara, Francesco Grotto, and Mario Maurelli",
      venue: "arXiv preprint arXiv:2411.09482",
      year: 2024,
      arxivLink: "https://arxiv.org/abs/2411.09482",
    },
    {
      title: "Regularization by rough Kraichnan noise for the generalised SQG equations",
      authors: "Marco Bagnara, Lucio Galeati, and Mario Maurelli",
      venue: "arXiv preprint arXiv:2405.12181",
      year: 2024,
      arxivLink: "https://arxiv.org/abs/2405.12181",
    },
    {
      title: "Global smooth solutions for the stochastic Navier-Stokes equations with super-linear Stratonovich noise in the 3D torus",
      authors: "Marco Bagnara",
      venue: "New Tools in Mathematical Analysis and Applications: Proceedings of the 14th ISAAC Congress 2023, Ribeirão Preto, Brazil",
      year: "2025",
    },
    {
      title: "A suitable nonlinear Stratonovich noise prevents blow-up in the Euler equations and other SPDEs",
      authors: "Marco Bagnara",
      venue: "arXiv preprint arXiv:2312.10446",
      year: 2023,
      arxivLink: "https://arxiv.org/abs/2312.10446",
    },
    {
      title: "No blow-up by nonlinear Itô noise for the Euler equations",
      authors: "Marco Bagnara, Mario Maurelli, and Fanhui Xu",
      venue: "arXiv preprint arXiv:2305.09852",
      year: 2023,
      arxivLink: "https://arxiv.org/abs/2305.09852",
    },
    {
      title: "On the Hausdorff measure of ℝⁿ with the Euclidean topology",
      authors: "Marco Bagnara, Luca Gennaioli, Giacomo Maria Leccese, and Eliseo Luongo",
      venue: "Real Anal. Exchange, 48(1):101–106",
      year: 2023,
      arxivLink: "https://arxiv.org/abs/2203.03393",
      journalLink: "https://projecteuclid.org/journals/real-analysis-exchange/volume-48/issue-1/On-the-Hausdorff-Measure-of-mathbbRn-with-the-Euclidean-Topology/10.14321/realanalexch.48.1.1649735306.short"
    },
  ];

  return (
    <section id="publications" className="py-20 bg-academic-halfshadedbg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-academic-primary mb-8 text-center">
          Publications, Preprints and Proceedings
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800 flex-grow pr-4">
                  {pub.title}
                </h3>
                <span className="text-gray-600 whitespace-nowrap">{pub.year}</span>
              </div>
              <p className="text-academic-secondary mb-2">{pub.authors}</p>
              <div className="flex justify-between items-center text-gray-600">
                <span>{pub.venue}</span>
                <div className="flex items-center gap-2">
                  {pub.arxivLink && (
                    <a
                      href={pub.arxivLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-academic-primary"
                      title="arXiv"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bc/ArXiv_logo_2022.svg" 
                        alt="arXiv"
                        className="h-4 w-auto"
                      />
                    </a>
                  )}
                  {pub.journalLink && (
                    <a
                      href={pub.journalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-academic-primary"
                      title="Journal"
                    >
                      <BookOpen size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
