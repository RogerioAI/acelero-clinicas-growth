import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Home } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";
import { JsonLd } from "@/components/JsonLd";
import { ptDateToISO, sortPostsByDateDesc, slugify, estimateReadTime, countWords } from "@/lib/dateUtils";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";
import { MarkdownRenderer, extractHeadings } from "@/components/blog/MarkdownRenderer";
import { BlogTOC } from "@/components/blog/BlogTOC";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { useMemo } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const headings = useMemo(() => extractHeadings(post.content), [post.content]);
  const relatedPosts = useMemo(() => {
    const candidates = blogPosts
      .filter((p) => p.slug !== post.slug)
      .filter((p) => p.category === post.category || p.tags?.some((t) => post.tags?.includes(t)));
    return sortPostsByDateDesc(candidates).slice(0, 3);
  }, [post.slug, post.category, post.tags]);

  const isoDate = ptDateToISO(post.date);
  const modifiedIso = post.updatedAt ?? isoDate;
  const url = `https://acelero.vc/blog/${post.slug}`;
  const readTime = post.readTime ?? estimateReadTime(post.content);
  const wordCount = countWords(post.content);

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription.substring(0, 155),
    "author": { "@id": "https://acelero.vc/#lucas-rocha" },
    "publisher": { "@id": "https://acelero.vc/#organization" },
    "datePublished": isoDate,
    "dateModified": modifiedIso,
    "mainEntityOfPage": url,
    "image": {
      "@type": "ImageObject",
      "url": post.thumbnail,
      "width": 1200,
      "height": 630
    },
    "articleSection": post.category,
    "wordCount": wordCount,
    "inLanguage": "pt-BR",
    "isAccessibleForFree": true,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"]
    },
    "about": [
      { "@type": "Thing", "name": "Gestão comercial de clínicas" },
      { "@type": "Thing", "name": "Método A.C.E.L.E.R.O" }
    ],
    ...(post.keywords ? { keywords: post.keywords } : {})
  };

  const faqSchema = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://acelero.vc" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://acelero.vc/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": url }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle} | Blog Acelero</title>
        <meta name="description" content={post.metaDescription.substring(0, 155)} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="pt-BR" href={url} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        <link rel="preload" as="image" href={post.thumbnail} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${post.metaTitle} | Blog Acelero`} />
        <meta property="og:description" content={post.metaDescription.substring(0, 155)} />
        <meta property="og:image" content={post.thumbnail || "https://acelero.vc/og-image-home.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Acelero" />
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:modified_time" content={modifiedIso} />
        <meta property="article:author" content="Lucas Rocha" />
        <meta property="article:section" content={post.category} />
        {post.tags?.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.metaTitle} | Blog Acelero`} />
        <meta name="twitter:description" content={post.metaDescription.substring(0, 155)} />
        <meta name="twitter:image" content={post.thumbnail || "https://acelero.vc/og-image-home.jpg"} />
      </Helmet>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <ReadingProgress />

      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content" className="pt-20">
          {/* Breadcrumb */}
          <section className="py-6 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-cyan transition-colors flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-cyan transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-foreground truncate max-w-[180px] md:max-w-none">{post.title}</span>
              </div>
            </div>
          </section>

          {/* Hero */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                  <Link to="/blog">
                    <Button variant="ghost" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Voltar ao Blog
                    </Button>
                  </Link>
                </div>

                <div className="grid lg:grid-cols-[1fr_260px] gap-12">
                  <article className="max-w-3xl mx-auto lg:mx-0 w-full">
                    <header className="mb-6">
                      <span className="inline-block px-4 py-1.5 bg-cyan/10 text-cyan-dark font-semibold text-sm rounded-full mb-4">
                        {post.category}
                      </span>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        {post.title}
                      </h1>

                      {/* Author */}
                      <div className="flex items-center gap-3 mb-4">
                        <img src={lucasRochaImage} alt="Lucas Rocha" width={40} height={40} className="w-10 h-10 rounded-full object-cover" loading="lazy" decoding="async" />
                        <div>
                          <p className="text-sm font-semibold">Por Lucas Rocha</p>
                          <p className="text-xs text-muted-foreground">Mentor Comercial para Clínicas de Saúde</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-muted-foreground text-sm flex-wrap">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Publicado em {post.date}</span>
                        </div>
                        {post.updatedAt && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Atualizado em {new Date(post.updatedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{readTime} de leitura</span>
                        </div>
                      </div>

                      {/* Tag chips */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((t) => (
                            <Link
                              key={t}
                              to={`/blog?tag=${slugify(t)}`}
                              className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground hover:bg-cyan/10 hover:text-cyan transition-colors"
                            >
                              #{t}
                            </Link>
                          ))}
                        </div>
                      )}

                      <ShareButtons url={url} title={post.title} className="mt-6" />
                    </header>

                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      width={1200}
                      height={630}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto aspect-[2/1] object-cover rounded-xl mb-10"
                    />

                    <BlogTOC headings={headings} variant="mobile" />

                    <MarkdownRenderer content={post.content} />

                    {post.faq && post.faq.length > 0 && <BlogFAQ items={post.faq} />}

                    <ShareButtons url={url} title={post.title} className="mt-12 justify-center" />

                    {/* Author Box */}
                    <div className="mt-16 p-8 bg-muted/50 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
                      <img src={lucasRochaImage} alt="Lucas Rocha" width={96} height={96} loading="lazy" decoding="async" className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold mb-1">Sobre o autor</h3>
                        <p className="text-sm font-semibold text-cyan mb-2">Lucas Rocha · Mentor Comercial para Clínicas de Saúde</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Fundador da Acelero.vc, Lucas Rocha é especialista em gestão comercial de clínicas de saúde e odontológicas. Com mais de 15 anos de experiência e +250 clínicas transformadas, desenvolveu o método A.C.E.L.E.R.O para estruturar áreas comerciais e escalar faturamento com previsibilidade.
                        </p>
                        <Link to="/sobre" className="text-sm text-cyan font-semibold hover:underline mt-2 inline-block">Conheça mais →</Link>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 p-8 bg-gradient-to-br from-primary to-primary/95 rounded-2xl text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Quer implementar essas estratégias na sua clínica?
                      </h3>
                      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        Agende um diagnóstico comercial gratuito e descubra como nossa mentoria pode transformar seus resultados.
                      </p>
                      <Button variant="cta" size="lg" asChild>
                        <a href="https://diagnostico.acelero.vc/" target="_blank" rel="noopener noreferrer">
                          Quero meu diagnóstico comercial gratuito
                        </a>
                      </Button>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                      <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-8">Artigos Relacionados</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                          {relatedPosts.map((related) => (
                            <Link key={related.id} to={`/blog/${related.slug}`} className="group">
                              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-36 overflow-hidden">
                                  <img src={related.thumbnail} alt={related.title} width={400} height={144} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <div className="p-4">
                                  <span className="text-xs text-cyan font-semibold">{related.category}</span>
                                  <h3 className="text-sm font-bold mt-1 line-clamp-2 group-hover:text-cyan transition-colors">{related.title}</h3>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>

                  <BlogTOC headings={headings} variant="desktop" />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
