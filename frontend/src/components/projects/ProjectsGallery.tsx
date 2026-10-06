"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/lib/lang";

type Project = {
  id: string;
  number: string;
  category: string;
  image: string;
  images?: string[];
  location: {
    en: string;
    es: string;
  };
  en: {
    category: string;
    title: string;
    description: string;
  };
  es: {
    category: string;
    title: string;
    description: string;
  };
};

const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    category: "pergolas",
    image: "/assets/images/project1.webp",
    images: ["/assets/images/project1.webp"],
    location: {
      en: "Miami-Dade County",
      es: "Condado de Miami-Dade",
    },
    en: {
      category: "Pergolas",
      title: "Custom Outdoor Structure",
      description:
        "A custom outdoor structure designed to create a more comfortable and functional setting for everyday South Florida living.",
    },
    es: {
      category: "Pérgolas",
      title: "Estructura Exterior Personalizada",
      description:
        "Una estructura exterior personalizada diseñada para crear un espacio más cómodo y funcional para la vida diaria en el Sur de Florida.",
    },
  },
  {
    id: "project-02",
    number: "02",
    category: "pergolas",
    image: "/assets/images/project2.webp",
    images: ["/assets/images/project2.webp"],
    location: {
      en: "South Florida",
      es: "Sur de Florida",
    },
    en: {
      category: "Pergolas",
      title: "Poolside Outdoor Living",
      description:
        "An outdoor living space planned around the pool, circulation and the way the property is used throughout the day.",
    },
    es: {
      category: "Pérgolas",
      title: "Espacio Exterior Junto a la Piscina",
      description:
        "Un espacio exterior diseñado alrededor de la piscina, la circulación y la forma en que se utiliza la propiedad durante el día.",
    },
  },
  {
    id: "project-03",
    number: "03",
    category: "pergolas",
    image: "/assets/images/project3.webp",
    images: ["/assets/images/project3.webp"],
    location: {
      en: "Miami, Florida",
      es: "Miami, Florida",
    },
    en: {
      category: "Pergolas",
      title: "Modern Patio Extension",
      description:
        "A refined patio extension designed to add shade, comfort and a stronger connection between the home and outdoor space.",
    },
    es: {
      category: "Pérgolas",
      title: "Extensión Moderna del Patio",
      description:
        "Una extensión de patio diseñada para añadir sombra, comodidad y una conexión más definida entre el hogar y el espacio exterior.",
    },
  },
  {
    id: "project-04",
    number: "04",
    category: "outdoor-kitchens",
    image: "/assets/images/project4.webp",
    images: ["/assets/images/project4.webp"],
    location: {
      en: "South Florida",
      es: "Sur de Florida",
    },
    en: {
      category: "Outdoor Kitchens",
      title: "Outdoor Entertaining Space",
      description:
        "An outdoor setting designed around entertaining, seating and a practical relationship between the patio and the home.",
    },
    es: {
      category: "Cocinas Exteriores",
      title: "Espacio Exterior para Entretenimiento",
      description:
        "Un espacio exterior diseñado alrededor del entretenimiento, los asientos y una relación práctica entre el patio y el hogar.",
    },
  },
  {
    id: "project-05",
    number: "05",
    category: "fencing",
    image: "/assets/images/project5.webp",
    images: ["/assets/images/project5.webp"],
    location: {
      en: "Miami-Dade County",
      es: "Condado de Miami-Dade",
    },
    en: {
      category: "Fencing",
      title: "Modern Property Boundary",
      description:
        "A clean fencing solution designed to define the property while complementing the surrounding home and landscape.",
    },
    es: {
      category: "Cercas",
      title: "Límite Moderno de la Propiedad",
      description:
        "Una solución de cercado diseñada para definir la propiedad y complementar el hogar y el paisaje.",
    },
  },
  {
    id: "project-06",
    number: "06",
    category: "impact-windows",
    image: "/assets/images/project6.webp",
    images: ["/assets/images/project6.webp"],
    location: {
      en: "Miami, Florida",
      es: "Miami, Florida",
    },
    en: {
      category: "Impact Windows & Doors",
      title: "Exterior Home Upgrade",
      description:
        "A residential exterior improvement focused on updated openings, appearance and the needs of the property.",
    },
    es: {
      category: "Ventanas y Puertas de Impacto",
      title: "Mejora Exterior de la Vivienda",
      description:
        "Una mejora exterior residencial enfocada en actualizar las aberturas, la apariencia y las necesidades de la propiedad.",
    },
  },
  {
    id: "project-07",
    number: "07",
    category: "epoxy",
    image: "/assets/images/project7.webp",
    images: ["/assets/images/project7.webp"],
    location: {
      en: "South Florida",
      es: "Sur de Florida",
    },
    en: {
      category: "Epoxy Flooring",
      title: "Clean Garage Finish",
      description:
        "A refined finished floor designed to give a residential garage a cleaner and more finished appearance.",
    },
    es: {
      category: "Pisos Epóxicos",
      title: "Acabado Moderno para Garaje",
      description:
        "Un acabado de piso diseñado para darle a un garaje residencial una apariencia más limpia y refinada.",
    },
  },
  {
    id: "project-08",
    number: "08",
    category: "mailboxes",
    image: "/assets/images/project8.webp",
    images: ["/assets/images/project8.webp"],
    location: {
      en: "Miami, Florida",
      es: "Miami, Florida",
    },
    en: {
      category: "Modern Mailboxes",
      title: "Contemporary Exterior Detail",
      description:
        "A modern exterior detail selected to complement the architectural character and landscape of the property.",
    },
    es: {
      category: "Buzones Modernos",
      title: "Detalle Exterior Contemporáneo",
      description:
        "Un detalle exterior moderno seleccionado para complementar el carácter arquitectónico y el paisaje de la propiedad.",
    },
  },
  {
    id: "project-09",
    number: "09",
    category: "pergolas",
    image: "/assets/images/project9.webp",
    images: ["/assets/images/project9.webp"],
    location: {
      en: "Broward County",
      es: "Condado de Broward",
    },
    en: {
      category: "Pergolas",
      title: "Poolside Pergola",
      description:
        "A shaded outdoor area designed around poolside use, comfortable seating and everyday outdoor living.",
    },
    es: {
      category: "Pérgolas",
      title: "Pérgola Junto a la Piscina",
      description:
        "Un espacio exterior con sombra diseñado alrededor del uso de la piscina, los asientos y la vida exterior diaria.",
    },
  },
  {
    id: "project-10",
    number: "10",
    category: "outdoor-living",
    image: "/assets/images/project10.webp",
    images: ["/assets/images/project10.webp"],
    location: {
      en: "Miami-Dade County",
      es: "Condado de Miami-Dade",
    },
    en: {
      category: "Outdoor Living",
      title: "Contemporary Backyard Living",
      description:
        "A coordinated outdoor environment designed around comfort, circulation and the character of the existing property.",
    },
    es: {
      category: "Vida Exterior",
      title: "Vida Exterior Contemporánea",
      description:
        "Un ambiente exterior coordinado alrededor de la comodidad, la circulación y el carácter de la propiedad existente.",
    },
  },
];

const categories = [
  {
    id: "all",
    en: "All",
    es: "Todos",
  },
  {
    id: "pergolas",
    en: "Pergolas",
    es: "Pérgolas",
  },
  {
    id: "outdoor-kitchens",
    en: "Outdoor Kitchens",
    es: "Cocinas Exteriores",
  },
  {
    id: "fencing",
    en: "Fencing",
    es: "Cercas",
  },
  {
    id: "impact-windows",
    en: "Impact Windows & Doors",
    es: "Ventanas y Puertas de Impacto",
  },
  {
    id: "epoxy",
    en: "Epoxy",
    es: "Epoxi",
  },
  {
    id: "mailboxes",
    en: "Mailboxes",
    es: "Buzones",
  },
  {
    id: "outdoor-living",
    en: "Outdoor Living",
    es: "Vida Exterior",
  },
];

export default function ProjectsGallery() {
  const { lang } = useLang();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const selectedProjectIndex = selectedProject
    ? projects.findIndex(
        (project) => project.id === selectedProject.id
      )
    : -1;

  const selectedContent = selectedProject
    ? selectedProject[lang]
    : null;

  const selectedImages = selectedProject
    ? selectedProject.images || [selectedProject.image]
    : [];

  const previousProject =
    selectedProjectIndex > 0
      ? projects[selectedProjectIndex - 1]
      : null;

  const nextProject =
    selectedProjectIndex >= 0 &&
    selectedProjectIndex < projects.length - 1
      ? projects[selectedProjectIndex + 1]
      : null;

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setSelectedImage(0);
  };

  const openPreviousProject = () => {
    if (!previousProject) return;

    setSelectedProject(previousProject);
    setSelectedImage(0);
  };

  const openNextProject = () => {
    if (!nextProject) return;

    setSelectedProject(nextProject);
    setSelectedImage(0);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowLeft" && previousProject) {
        setSelectedProject(previousProject);
        setSelectedImage(0);
      }

      if (event.key === "ArrowRight" && nextProject) {
        setSelectedProject(nextProject);
        setSelectedImage(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, previousProject, nextProject]);

  return (
    <>
      <section
        id="gallery"
        className="section-shell scroll-mt-24 py-20 sm:py-24 lg:py-28"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                {lang === "en"
                  ? "Selected Work"
                  : "Proyectos Seleccionados"}
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {lang === "en"
                ? "Our Recent Projects"
                : "Nuestros Proyectos Recientes"}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
              {lang === "en"
                ? "A selection of custom outdoor spaces and exterior improvements designed throughout South Florida."
                : "Una selección de espacios exteriores personalizados y mejoras residenciales diseñados en todo el Sur de Florida."}
            </p>
          </div>

          <div className="hidden text-right lg:block">
            <p className="text-5xl font-semibold tracking-tight text-black/10">
              {String(filteredProjects.length).padStart(2, "0")}
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
              {lang === "en"
                ? "Projects shown"
                : "Proyectos mostrados"}
            </p>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />

          <div
            role="tablist"
            aria-label="Project categories"
            className="scrollbar-none flex gap-1 overflow-x-auto pb-px"
          >
            {categories.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative shrink-0 cursor-pointer px-4 py-4 text-[9px] font-bold uppercase tracking-[0.16em] transition-all duration-300 sm:px-5 sm:text-[10px] ${
                    active
                      ? "text-black"
                      : "text-black/35 hover:text-black/70"
                  }`}
                >
                  {lang === "en"
                    ? category.en
                    : category.es}

                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] origin-center bg-[var(--accent)] transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={activeCategory}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => {
            const content = project[lang];

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => openProject(project)}
                className="group relative cursor-pointer overflow-hidden bg-white text-left opacity-0 animate-[projectIn_600ms_cubic-bezier(0.22,1,0.36,1)_forwards] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="relative h-[280px] overflow-hidden sm:h-[300px] lg:h-[320px]">
                  <img
                    src={project.image}
                    alt={content.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />

                  <span className="absolute left-4 top-4 text-[10px] font-bold tracking-[0.18em] text-white drop-shadow-md">
                    {project.number}
                  </span>

                  <span className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center border border-white/70 bg-white/90 text-black shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 3H3V7M13 3H17V7M17 13V17H13M3 13V17H7"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="border border-t-0 border-black/10 bg-white px-5 py-5 transition-all duration-500 group-hover:border-black/20">
                  <div className="flex min-h-[72px] items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                        {content.category}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold leading-tight">
                        {content.title}
                      </h3>
                    </div>

                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-1 h-4 w-4 shrink-0 text-black/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10H16M11 5L16 10L11 15"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                    {project.location[lang]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="border border-dashed border-black/15 py-20 text-center">
            <p className="text-sm text-black/50">
              {lang === "en"
                ? "Projects coming soon."
                : "Proyectos próximamente."}
            </p>
          </div>
        )}
      </section>

      {selectedProject && selectedContent && (
        <div
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-5 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedContent.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div
            className="relative flex max-h-[94vh] w-full max-w-[1180px] cursor-default overflow-hidden bg-white shadow-2xl animate-[modalIn_450ms_cubic-bezier(0.22,1,0.36,1)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 cursor-pointer items-center justify-center border border-black/5 bg-white text-black shadow-md transition-all duration-300 hover:bg-[var(--accent)] hover:text-white sm:right-5 sm:top-5"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="grid w-full overflow-y-auto lg:grid-cols-[1.45fr_0.65fr]">
              <div className="relative min-w-0 bg-[#f1f1ef]">
                <div className="relative h-[55vh] min-h-[320px] max-h-[620px] w-full overflow-hidden sm:h-[60vh] lg:h-full lg:min-h-[640px] lg:max-h-none">
                  <img
                    key={`${selectedProject.id}-${selectedImage}`}
                    src={selectedImages[selectedImage]}
                    alt={selectedContent.title}
                    className="h-full w-full object-cover animate-[projectImageIn_700ms_cubic-bezier(0.22,1,0.36,1)]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {selectedImages.length > 1 && (
                    <div className="absolute bottom-20 left-4 z-10 bg-black/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:bottom-20 sm:left-5">
                      {String(selectedImage + 1).padStart(2, "0")} /{" "}
                      {String(selectedImages.length).padStart(2, "0")}
                    </div>
                  )}

                  {selectedImages.length > 1 &&
                    selectedImage > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedImage((current) =>
                            Math.max(current - 1, 0)
                          )
                        }
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/30 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] sm:left-5 sm:h-11 sm:w-11"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path
                            d="M13 4L7 10L13 16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}

                  {selectedImages.length > 1 &&
                    selectedImage < selectedImages.length - 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedImage((current) =>
                            Math.min(
                              current + 1,
                              selectedImages.length - 1
                            )
                          )
                        }
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/30 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] sm:right-5 sm:h-11 sm:w-11"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 4L13 10L7 16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}

                  <div className="absolute inset-x-0 bottom-0 z-20">
                    <div className="flex items-end justify-between gap-3 px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
                      <button
                        type="button"
                        onClick={openPreviousProject}
                        disabled={!previousProject}
                        className="group flex h-11 cursor-pointer items-center gap-2 border border-white/25 bg-black/40 px-3 text-[8px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-500 hover:border-[var(--accent)] hover:bg-[var(--accent)] disabled:pointer-events-none disabled:opacity-25 sm:h-12 sm:px-4 sm:text-[9px]"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:-translate-x-1"
                          aria-hidden="true"
                        >
                          <path
                            d="M13 4L7 10L13 16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <span className="hidden sm:inline">
                          {lang === "en"
                            ? "Previous Project"
                            : "Proyecto Anterior"}
                        </span>

                        <span className="sm:hidden">
                          {lang === "en" ? "Prev" : "Anterior"}
                        </span>
                      </button>

                      <div className="flex h-10 items-center border border-white/20 bg-black/65 px-4 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md sm:h-11 sm:px-5">
                        <span>{selectedProject.number}</span>

                        <span className="mx-2 text-white/30">
                          /
                        </span>

                        <span className="text-white/45">
                          {String(projects.length).padStart(2, "0")}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={openNextProject}
                        disabled={!nextProject}
                        className="group flex h-11 cursor-pointer items-center gap-2 border border-white/25 bg-white/95 px-3 text-[8px] font-bold uppercase tracking-[0.16em] text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-12 sm:px-4 sm:text-[9px]"
                      >
                        <span className="hidden sm:inline">
                          {lang === "en"
                            ? "Next Project"
                            : "Siguiente Proyecto"}
                        </span>

                        <span className="sm:hidden">
                          {lang === "en"
                            ? "Next"
                            : "Siguiente"}
                        </span>

                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 4L13 10L7 16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex min-h-[420px] flex-col justify-between bg-white p-7 sm:p-9 lg:min-h-[640px] lg:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-black/30">
                      {selectedProject.number}
                    </span>

                    <span className="h-px w-8 bg-[var(--accent)]" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                      {selectedContent.category}
                    </p>
                  </div>

                  <h2 className="mt-7 max-w-sm text-3xl font-semibold leading-[1.12] sm:text-4xl">
                    {selectedContent.title}
                  </h2>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-black/35">
                    {selectedProject.location[lang]}
                  </p>

                  <div className="my-8 h-px bg-black/10" />

                  <p className="max-w-sm text-sm leading-8 text-black/55">
                    {selectedContent.description}
                  </p>
                </div>

                <div className="mt-10 border-t border-black/10 pt-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/35">
                    Miami Custom Patios
                  </p>

                  <p className="mt-3 max-w-sm text-xs leading-6 text-black/45">
                    {lang === "en"
                      ? "Custom outdoor living and property improvement solutions designed around South Florida homes."
                      : "Soluciones personalizadas para espacios exteriores y mejoras de propiedades diseñadas para hogares del Sur de Florida."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes projectIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes projectImageIn {
          from {
            opacity: 0;
            transform: scale(1.035);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}