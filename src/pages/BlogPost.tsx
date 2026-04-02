import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";
import { JsonLd } from "@/components/JsonLd";
import { ptDateToISO } from "@/lib/dateUtils";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const isoDate = ptDateToISO(post.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription.substring(0, 155),
    "author": {
      "@type": "Person",
      "name": "Lucas Rocha",
      "url": "https://acelero.vc/sobre",
      "jobTitle": "Consultor Comercial para Clínicas de Saúde"
    },
    "publisher": { "@id": "https://acelero.vc/#organization" },
    "datePublished": isoDate,
    "dateModified": isoDate,
    "mainEntityOfPage": `https://acelero.vc/blog/${post.slug}`,
    "image": post.thumbnail
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://acelero.vc" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://acelero.vc/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://acelero.vc/blog/${post.slug}` }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle} | Blog Acelero</title>
        <meta name="description" content={post.metaDescription.substring(0, 155)} />
        <link rel="canonical" href={`https://acelero.vc/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://acelero.vc/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.metaTitle} | Blog Acelero`} />
        <meta property="og:description" content={post.metaDescription.substring(0, 155)} />
        <meta property="og:image" content={post.thumbnail || "https://acelero.vc/og-image-home.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Acelero" />
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:author" content="Lucas Rocha" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.metaTitle} | Blog Acelero`} />
        <meta name="twitter:description" content={post.metaDescription.substring(0, 155)} />
        <meta name="twitter:image" content={post.thumbnail || "https://acelero.vc/og-image-home.jpg"} />
      </Helmet>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Breadcrumb */}
          <section className="py-6 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-foreground">{post.title}</span>
              </div>
            </div>
          </section>

          {/* Hero */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <Link to="/blog">
                    <Button variant="ghost" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Voltar ao Blog
                    </Button>
                  </Link>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-cyan/10 text-cyan font-semibold text-sm rounded-full mb-4">
                    {post.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {post.title}
                  </h1>

                  {/* Author line */}
                  <div className="flex items-center gap-3 mb-4">
                    <img src={lucasRochaImage} alt="Lucas Rocha" width={40} height={40} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-sm font-semibold">Por Lucas Rocha</p>
                      <p className="text-xs text-muted-foreground">Consultor Comercial para Clínicas de Saúde</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Publicado em {post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Atualizado em {post.date}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} de leitura</span>
                      </div>
                    )}
                  </div>
                </div>

                <img
                  src={post.thumbnail}
                  alt={post.title}
                  width={800}
                  height={400}
                  loading="lazy"
                  className="w-full h-[400px] object-cover rounded-xl mb-12"
                  style={{ aspectRatio: '2/1' }}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-cyan prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:my-6 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-cyan prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-table:w-full prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-td:p-3 prose-td:border-t prose-td:border-border">
                  <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/###\s/g, '<h3>').replace(/##\s/g, '<h2>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\|(.*?)\|/g, (match) => {
                    const rows = match.split('\n').filter(row => row.trim());
                    if (rows.length === 0) return match;
                    
                    let tableHtml = '<table class="min-w-full divide-y divide-border my-8">';
                    rows.forEach((row, idx) => {
                      const cells = row.split('|').filter(cell => cell.trim());
                      if (idx === 0) {
                        tableHtml += '<thead><tr>';
                        cells.forEach(cell => {
                          tableHtml += `<th class="px-4 py-3 bg-muted text-left text-sm font-semibold">${cell.trim()}</th>`;
                        });
                        tableHtml += '</tr></thead><tbody>';
                      } else if (idx === 1 && row.includes('---')) {
                        // Skip separator row
                      } else {
                        tableHtml += '<tr>';
                        cells.forEach(cell => {
                          tableHtml += `<td class="px-4 py-3 border-t border-border">${cell.trim()}</td>`;
                        });
                        tableHtml += '</tr>';
                      }
                    });
                    tableHtml += '</tbody></table>';
                    return tableHtml;
                  }) }} />
                </div>

                {/* CTA Section */}
                <div className="mt-16 p-8 bg-gradient-to-br from-primary to-primary/95 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Quer implementar essas estratégias na sua clínica?
                  </h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Agende um diagnóstico comercial gratuito e descubra como nossa mentoria pode transformar seus resultados.
                  </p>
                  <Button variant="cta" size="lg" asChild>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      Agendar Diagnóstico Gratuito
                    </a>
                  </Button>
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
