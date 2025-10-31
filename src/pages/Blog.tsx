import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  // Posts mockados para exemplo
  const blogPosts = [
    {
      id: 1,
      title: "Como Estruturar o Setor Comercial da Sua Clínica",
      description: "Descubra os 5 pilares fundamentais para criar um setor comercial eficiente e aumentar sua taxa de conversão.",
      date: "15 Mar 2024",
      category: "Gestão Comercial",
    },
    {
      id: 2,
      title: "Estratégias para Aumentar a Conversão de Leads",
      description: "Aprenda técnicas validadas que aumentaram a conversão de mais de 250 clínicas em todo o Brasil.",
      date: "10 Mar 2024",
      category: "Marketing",
    },
    {
      id: 3,
      title: "O Poder de um Processo Comercial Bem Definido",
      description: "Entenda por que sua clínica precisa de processos estruturados antes de investir em mais marketing.",
      date: "05 Mar 2024",
      category: "Processos",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyan font-semibold">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Ler artigo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State / Coming Soon */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Novos artigos em breve...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
