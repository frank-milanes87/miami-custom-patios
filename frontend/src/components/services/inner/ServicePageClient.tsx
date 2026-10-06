"use client";

import { useLang } from "@/lib/lang";
import ServiceHero from "./ServiceHero";
import ServiceEstimateBar from "./ServiceEstimateBar";
import ServiceSectionNav from "./ServiceSectionNav";
import ServiceIntroduction from "./ServiceIntroduction";
import ServiceOfferings from "./ServiceOfferings";
import ServiceApplications from "./ServiceApplications";
import ServiceShowcase from "./ServiceShowcase";
import ServiceLocalContext from "./ServiceLocalContext";
import ServiceConsiderations from "./ServiceConsiderations";
import ServiceProcess from "./ServiceProcess";
import ServiceFaq from "./ServiceFaq";
import ServiceRelated from "./ServiceRelated";
import ServiceEstimateCta from "./ServiceEstimateCta";
import BackToTop from "../../BackToTop";

type ServicePageClientProps = {
    service: {
        number: string;
        image: string;
        imageAlt: string;
        category: string;
        projectLabel: string;

        en: {
            eyebrow: string;
            title: string;
            description: string;
            features: readonly string[];
            cta: string;
        };

        es: {
            eyebrow: string;
            title: string;
            description: string;
            features: readonly string[];
            cta: string;
        };

        introduction?: {
            en: {
                title: string;
                paragraphs: readonly string[];
            };
            es: {
                title: string;
                paragraphs: readonly string[];
            };
        };

        offerings?: {
            en: readonly {
                number: string;
                title: string;
                description: string;
            }[];
            es: readonly {
                number: string;
                title: string;
                description: string;
            }[];
        };

        applications?: {
            en: readonly {
                number: string;
                title: string;
                description: string;
            }[];
            es: readonly {
                number: string;
                title: string;
                description: string;
            }[];
        };

        showcase?: {
            title: {
                en: string;
                es: string;
            };
            projectLabel: {
                en: string;
                es: string;
            };
        };

        localContext?: {
            title: {
                en: string;
                es: string;
            };
            counties: {
                en: string;
                es: string;
            };
            paragraphs: {
                en: readonly string[];
                es: readonly string[];
            };
        };

        considerations?: readonly {
            number: string;
            en: {
                title: string;
                description: string;
            };
            es: {
                title: string;
                description: string;
            };
        }[];

        process?: {
            en: readonly {
                number: string;
                title: string;
                description: string;
            }[];
            es: readonly {
                number: string;
                title: string;
                description: string;
            }[];
        };

        faq?: {
            en: readonly {
                number: string;
                question: string;
                answer: string;
            }[];
            es: readonly {
                number: string;
                question: string;
                answer: string;
            }[];
        };

        relatedServices?: readonly {
            number: string;
            href: string;
            en: string;
            es: string;
        }[];

        estimateCta?: {
            title: {
                en: string;
                es: string;
            };
            description: {
                en: string;
                es: string;
            };
            subject: {
                en: string;
                es: string;
            };
        };
    };
};

export default function ServicePageClient({
    service,
}: ServicePageClientProps) {
    const { lang } = useLang();

    const content = service[lang];

    return (
        <main className="bg-[var(--light-bg)]">
            <ServiceHero
                content={content}
                image={service.image}
                imageAlt={service.imageAlt}
                number={service.number}
                total="10"
                category={service.category}
                projectLabel={service.projectLabel}
            />

            <ServiceEstimateBar />

            <ServiceSectionNav />

            {service.introduction && (
                <ServiceIntroduction
                    content={service.introduction[lang]}
                />
            )}

            {service.offerings && (
                <ServiceOfferings
                    offerings={service.offerings}
                />
            )}

            {service.applications && (
                <ServiceApplications
                    applications={service.applications}
                />
            )}

            {service.showcase && (
                <ServiceShowcase
                    image={service.image}
                    imageAlt={service.imageAlt}
                    number={service.number}
                    title={service.showcase.title}
                    projectLabel={service.showcase.projectLabel}
                />
            )}

            {service.localContext && (
                <ServiceLocalContext
                    title={service.localContext.title}
                    counties={service.localContext.counties}
                    paragraphs={service.localContext.paragraphs}
                />
            )}

            {service.considerations && (
                <ServiceConsiderations
                    considerations={service.considerations}
                />
            )}

            {service.process && (
                <ServiceProcess
                    steps={service.process}
                />
            )}

            {service.faq && (
                <ServiceFaq
                    items={service.faq}
                />
            )}

            {service.relatedServices && (
                <ServiceRelated
                    services={service.relatedServices}
                />
            )}

            {service.estimateCta && (
                <ServiceEstimateCta
                    number={service.number}
                    title={service.estimateCta.title}
                    description={service.estimateCta.description}
                    subject={service.estimateCta.subject}
                />
            )}

            <BackToTop />
        </main>
    );
}