import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Publication {
  id: number;
  citation: string;
  impactFactor?: string;
  award?: string;
  links: {
    doi?: string;
    pdf?: string;
    code?: string;
    publisher?: string;
  }
}

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState("journals");

  const journalArticles: Publication[] = [
    {
      id: 1,
      citation: "<span class='font-medium'>Arquam, M.</span>, Singh, R., & Kumar, A. (2022). A Novel Deep Learning Approach for Medical Image Analysis. <span class='italic'>Journal of Medical Informatics</span>, 45(3), 234-248.",
      impactFactor: "4.2",
      links: { doi: "#", pdf: "#" }
    },
    {
      id: 2,
      citation: "<span class='font-medium'>Arquam, M.</span>, Patel, V., & Verma, S. (2021). Efficient Natural Language Processing for Clinical Text Mining. <span class='italic'>IEEE Transactions on Computational Biology and Bioinformatics</span>, 18(2), 512-525.",
      impactFactor: "3.7",
      links: { doi: "#", pdf: "#" }
    },
    {
      id: 3,
      citation: "Kumar, A., <span class='font-medium'>Arquam, M.</span>, & Sharma, R. (2020). Federated Learning Approaches for Privacy-Preserving Healthcare Analytics. <span class='italic'>Nature Digital Medicine</span>, 3(1), 1-12.",
      impactFactor: "5.1",
      links: { doi: "#", pdf: "#" }
    },
    {
      id: 4,
      citation: "<span class='font-medium'>Arquam, M.</span>, Gupta, S., & Krishnan, P. (2019). Adaptive Learning Systems: A Comprehensive Review and Future Directions. <span class='italic'>Computers & Education</span>, 140, 103598.",
      impactFactor: "8.5",
      links: { doi: "#", pdf: "#" }
    }
  ];

  const conferencePapers: Publication[] = [
    {
      id: 1,
      citation: "<span class='font-medium'>Arquam, M.</span>, & Mehta, R. (2022). Transformer-Based Models for Automated Medical Report Generation. In <span class='italic'>Proceedings of the 34th Conference on Neural Information Processing Systems (NeurIPS 2022)</span> (pp. 3245-3257).",
      award: "Best Paper Award",
      links: { pdf: "#", code: "#" }
    },
    {
      id: 2,
      citation: "Singh, A., <span class='font-medium'>Arquam, M.</span>, & Jha, R. (2021). Explainable AI Techniques for Clinical Decision Support Systems. In <span class='italic'>Proceedings of the 43rd Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)</span> (pp. 1123-1127).",
      links: { pdf: "#", code: "#" }
    },
    {
      id: 3,
      citation: "<span class='font-medium'>Arquam, M.</span>, Kumar, V., & Sharma, S. (2020). Advanced Analytics for Student Performance Prediction in MOOCs. In <span class='italic'>Proceedings of the 10th International Conference on Learning Analytics & Knowledge (LAK 2020)</span> (pp. 178-187).",
      links: { pdf: "#", code: "#" }
    }
  ];

  const books: Publication[] = [
    {
      id: 1,
      citation: "<span class='font-medium'>Arquam, M.</span>, & Gupta, R. (2022). <span class='italic'>Advanced Machine Learning for Healthcare Applications</span>. Springer Nature.",
      links: { publisher: "#" }
    },
    {
      id: 2,
      citation: "<span class='font-medium'>Arquam, M.</span>, & Patel, S. (2021). Ethical Considerations in Medical AI. In R. Kumar (Ed.), <span class='italic'>Ethics in Artificial Intelligence and Healthcare</span> (pp. 145-168). CRC Press.",
      links: { publisher: "#" }
    }
  ];

  return (
    <section id="publications" className="section-container py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-bold text-3xl text-primary mb-8 text-center">Publications</h2>
        
        <div className="flex flex-col md:flex-row mb-8">
          <div className="w-full md:w-3/4 md:pr-8">
            <ul className="flex flex-wrap list-none border-b-0 pl-0 mb-6">
              <li className="mr-2 mb-2">
                <button 
                  onClick={() => setActiveTab("journals")}
                  className={`inline-block px-4 py-2 font-medium text-sm leading-tight rounded-md focus:outline-none ${
                    activeTab === "journals" 
                      ? "bg-primary text-white" 
                      : "bg-neutral text-neutral-dark"
                  }`}
                >
                  Journal Articles
                </button>
              </li>
              <li className="mr-2 mb-2">
                <button 
                  onClick={() => setActiveTab("conferences")}
                  className={`inline-block px-4 py-2 font-medium text-sm leading-tight rounded-md focus:outline-none ${
                    activeTab === "conferences" 
                      ? "bg-primary text-white" 
                      : "bg-neutral text-neutral-dark"
                  }`}
                >
                  Conference Papers
                </button>
              </li>
              <li className="mr-2 mb-2">
                <button 
                  onClick={() => setActiveTab("books")}
                  className={`inline-block px-4 py-2 font-medium text-sm leading-tight rounded-md focus:outline-none ${
                    activeTab === "books" 
                      ? "bg-primary text-white" 
                      : "bg-neutral text-neutral-dark"
                  }`}
                >
                  Books & Chapters
                </button>
              </li>
            </ul>
            
            <div className="tab-content">
              {activeTab === "journals" && (
                <div className="space-y-5">
                  {journalArticles.map((article) => (
                    <div key={article.id} className="bg-neutral-light p-4 rounded-lg">
                      <p 
                        className="publication-citation mb-2"
                        style={{ textIndent: "-2rem", paddingLeft: "2rem" }}
                        dangerouslySetInnerHTML={{ __html: article.citation }}
                      />
                      <div className="flex flex-wrap items-center text-sm">
                        {article.impactFactor && (
                          <span className="bg-primary-light text-white px-2 py-0.5 rounded-full text-xs mr-2 mb-1">
                            Impact Factor: {article.impactFactor}
                          </span>
                        )}
                        {article.links.doi && (
                          <a href={article.links.doi} className="text-secondary hover:text-secondary-dark mr-3 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            DOI
                          </a>
                        )}
                        {article.links.pdf && (
                          <a href={article.links.pdf} className="text-secondary hover:text-secondary-dark mr-3 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            PDF
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === "conferences" && (
                <div className="space-y-5">
                  {conferencePapers.map((paper) => (
                    <div key={paper.id} className="bg-neutral-light p-4 rounded-lg">
                      <p 
                        className="publication-citation mb-2"
                        style={{ textIndent: "-2rem", paddingLeft: "2rem" }}
                        dangerouslySetInnerHTML={{ __html: paper.citation }}
                      />
                      <div className="flex flex-wrap items-center text-sm">
                        {paper.award && (
                          <span className="bg-accent-dark text-white px-2 py-0.5 rounded-full text-xs mr-2 mb-1">
                            {paper.award}
                          </span>
                        )}
                        {paper.links.pdf && (
                          <a href={paper.links.pdf} className="text-secondary hover:text-secondary-dark mr-3 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            PDF
                          </a>
                        )}
                        {paper.links.code && (
                          <a href={paper.links.code} className="text-secondary hover:text-secondary-dark mr-3 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === "books" && (
                <div className="space-y-5">
                  {books.map((book) => (
                    <div key={book.id} className="bg-neutral-light p-4 rounded-lg">
                      <p 
                        className="publication-citation mb-2"
                        style={{ textIndent: "-2rem", paddingLeft: "2rem" }}
                        dangerouslySetInnerHTML={{ __html: book.citation }}
                      />
                      <div className="flex flex-wrap items-center text-sm">
                        <span className="bg-neutral-medium text-white px-2 py-0.5 rounded-full text-xs mr-2 mb-1">
                          {book.id === 1 ? "ISBN: 978-3-030-XXXXX-X" : "Book Chapter"}
                        </span>
                        {book.links.publisher && (
                          <a href={book.links.publisher} className="text-secondary hover:text-secondary-dark mr-3 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Publisher
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/4 mt-8 md:mt-0">
            <Card className="bg-neutral-light p-5 rounded-lg">
              <h3 className="font-serif font-semibold text-xl text-primary mb-4">Publication Metrics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Publications</span>
                    <span>42</span>
                  </div>
                  <div className="w-full bg-neutral rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Citations</span>
                    <span>1250+</span>
                  </div>
                  <div className="w-full bg-neutral rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">h-index</span>
                    <span>18</span>
                  </div>
                  <div className="w-full bg-neutral rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">i10-index</span>
                    <span>25</span>
                  </div>
                  <div className="w-full bg-neutral rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://scholar.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-secondary hover:bg-secondary-dark text-white text-center py-2 rounded-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14l6.16-3.46a12.19 12.19 0 01.2 6.67L12 14z"/>
                    <path d="M12 14l-6.16-3.46a12.19 12.19 0 00-.2 6.67L12 14z"/>
                    <path d="M7 14l4-7 1-4 1 4 4 7"/>
                    <path d="M12 14l6.16 3.46a12.19 12.19 0 01-12.32 0L12 14z"/>
                  </svg>
                  Google Scholar Profile
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
