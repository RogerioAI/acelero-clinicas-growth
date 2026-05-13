import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { Link, useSearchParams } from "react-router-dom";
import { Clock, X } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { sortPostsByDateDesc, slugify } from "@/lib/dateUtils";
import { useMemo } from "react";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://acelero.vc" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://acelero.vc/blog" }
  ]
};

const Blog = () => {
  const [params, setParams] = useSearchParams();
  const tagFilter = params.get('tag');

  const sorted = useMemo(() => sortPostsByDateDesc(blogPosts), []);
  const visible = useMemo(() => {
    if (!tagFilter) return sorted;
    return sorted.filter(p => p.tags?.some(t => slugify(t) === tagFilter));
  }, [sorted, tagFilter]);

  const activeTagLabel = tagFilter
    ? sorted.flatMap(p => p.tags || []).find(t => slugify(t) === tagFilter)
    : null;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": sorted.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://acelero.vc/blog/${p.slug}`,
      "name": p.title
    }))
  };

  return (
    <>
       <Helmet>
         <title>Blog Acelero | Vendas e Gestão para Clínicas</title>
         <meta name="description" content="Artigos, guias e insights sobre como estruturar vendas, captar pacientes e escalar faturamento em clínicas de saúde e odontológicas." />
         <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
         <link rel="canonical" href="https://acelero.vc/blog" />
         <link rel="alternate" hrefLang="pt-BR" href="https://acelero.vc/blog" />
         <link rel="alternate" hrefLang="x-default" href="https://acelero.vc/blog" />
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://acelero.vc/blog" />
         <meta property="og:title" content="Blog Acelero | Vendas e Gestão para Clínicas" />
         <meta property="og:description" content="Artigos, guias e insights sobre como estruturar vendas, captar pacientes e escalar faturamento em clínicas de saúde e odontológicas." />
         <meta property="og:image" content="https://acelero.vc/og-image-home.jpg" />
         <meta property="og:image:width" content="1200" />
         <meta property="og:image:height" content="630" />
         <meta property="og:locale" content="pt_BR" />
         <meta property="og:site_name" content="Acelero" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="Blog Acelero | Vendas e Gestão para Clínicas" />
         <meta name="twitter:description" content="Artigos, guias e insights sobre como estruturar vendas, captar pacientes e escalar faturamento em clínicas de saúde e odontológicas." />
         <meta name="twitter:image" content="https://acelero.vc/og-image-home.jpg" />
      </Helmet>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary to-primary/95">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Blog <span className="text-cyan">Acelero</span>
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Insights, estratégias e conhecimento para transformar a gestão comercial da sua clínica
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {tagFilter && (
              <div className="max-w-7xl mx-auto mb-8 flex items-center gap-3 flex-wrap">
                <span className="text-sm text-muted-foreground">Filtrando por tag:</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan/10 text-cyan text-sm font-semibold rounded-full">
                  {activeTagLabel || tagFilter}
                  <button
                    type="button"
                    onClick={() => setParams({})}
                    aria-label="Remover filtro"
                    className="hover:bg-cyan/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
                <span className="text-sm text-muted-foreground">{visible.length} {visible.length === 1 ? 'artigo' : 'artigos'}</span>
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {visible.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        width={400}
                        height={192}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-cyan/10 text-cyan text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        {post.readTime && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="text-base line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <Button variant="cyan" size="sm" className="gap-2">
                          Ler artigo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Blog;
