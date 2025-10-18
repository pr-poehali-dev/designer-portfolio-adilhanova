import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const skills = [
    { name: 'Adobe Illustrator', level: 95 },
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'Adobe InDesign', level: 88 },
    { name: 'Figma', level: 92 },
    { name: 'CorelDRAW', level: 85 }
  ];

  const services = [
    { title: 'Визитки', icon: 'CreditCard', description: 'Создание запоминающихся визиток для вашего бизнеса' },
    { title: 'Буклеты', icon: 'BookOpen', description: 'Дизайн информативных и стильных буклетов' },
    { title: 'Баннеры', icon: 'Frame', description: 'Разработка эффектных баннеров для рекламы' },
    { title: 'Листовки', icon: 'FileText', description: 'Яркие листовки для продвижения ваших услуг' },
    { title: 'Сертификаты', icon: 'Award', description: 'Элегантные сертификаты и дипломы' },
    { title: 'Логотипы', icon: 'Sparkles', description: 'Уникальные логотипы, отражающие суть бренда' },
    { title: 'Инфографика', icon: 'BarChart3', description: 'Визуализация данных и информации' },
    { title: 'Дизайн веб-сайтов', icon: 'Monitor', description: 'Современные и функциональные веб-дизайны' }
  ];

  const portfolio = [
    {
      title: 'Фирменный стиль',
      category: 'Брендинг',
      image: 'https://cdn.poehali.dev/projects/9e88ae48-37f2-49a7-a1d0-4dd7441d3c6b/files/17777f29-9805-4a28-b901-87fd0f3817e0.jpg'
    },
    {
      title: 'Веб-дизайн',
      category: 'Digital',
      image: 'https://cdn.poehali.dev/projects/9e88ae48-37f2-49a7-a1d0-4dd7441d3c6b/files/da0c723c-fde2-460a-af3d-779bd2bcdb8a.jpg'
    },
    {
      title: 'Печатная продукция',
      category: 'Полиграфия',
      image: 'https://cdn.poehali.dev/projects/9e88ae48-37f2-49a7-a1d0-4dd7441d3c6b/files/774f423e-2296-4585-90e4-584f80451d83.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Спасибо за обращение. Я свяжусь с вами в ближайшее время.'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
              ADILHANOVA
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary mb-4 italic">
              Graphic designer
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
              Графический дизайнер
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-12 text-center animate-slide-up">Обо мне</h2>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Я — креативный графический дизайнер с опытом работы в создании уникальных визуальных решений. 
              Моя цель — разработать индивидуальный дизайн, который подчеркнёт уникальность вашего бренда 
              и привлечёт внимание целевой аудитории.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Обладаю навыками в различных областях дизайна, включая логотипы, упаковку, веб-дизайн 
              и рекламные материалы. Постоянно стремлюсь к обучению и саморазвитию, чтобы быть в курсе 
              новых трендов и технологий в дизайне.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-light mb-1">{item.category}</p>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-12 text-center">Навыки</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold mb-12 text-center">Контакты</h2>
          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@example.com"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full min-h-32"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="mt-12 flex justify-center gap-6">
            <a 
              href="mailto:adilhanova@example.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Mail" size={24} />
              <span>adilhanova@example.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ADILHANOVA. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
