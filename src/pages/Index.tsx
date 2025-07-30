import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-source">
      {/* Header */}
      <header className="py-6 px-6 lg:px-8 border-b border-primary/10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-playfair text-2xl lg:text-3xl font-semibold text-primary">
            ДЕБИНЬ САЛОН
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-secondary hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-secondary leading-tight">
                Ваша мечта о 
                <span className="text-primary block">идеальной свадьбе</span>
              </h2>
              <p className="text-lg text-secondary/80 leading-relaxed">
                Создаем незабываемые моменты вашего особенного дня. 
                Полный спектр свадебных услуг от профессионалов с многолетним опытом.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4">
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4">
                  Посмотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/558cbb70-6269-43fc-9a5a-40c333f9058e.jpg" 
                alt="Свадебный салон интерьер"
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold font-playfair">500+</div>
                <div className="text-sm">Счастливых пар</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-secondary">
              Наши услуги
            </h3>
            <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
              Полный комплекс свадебных услуг для создания вашего идеального торжества
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in border-primary/10">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-secondary">
                  Свадебные платья
                </h4>
                <p className="text-secondary/70">
                  Эксклюзивная коллекция свадебных платьев от ведущих дизайнеров мира
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in border-primary/10">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-secondary">
                  Аксессуары
                </h4>
                <p className="text-secondary/70">
                  Фата, украшения, обувь и все необходимые аксессуары для невесты
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in border-primary/10">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Scissors" size={32} className="text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-secondary">
                  Подгонка и пошив
                </h4>
                <p className="text-secondary/70">
                  Индивидуальная подгонка и пошив платьев под ваши параметры
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in border-primary/10">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-secondary">
                  Наряды для гостей
                </h4>
                <p className="text-secondary/70">
                  Элегантные наряды для подружек невесты и близких родственников
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in border-primary/10">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Crown" size={32} className="text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-secondary">
                  Стилист-консультант
                </h4>
                <p className="text-secondary/70">
                  Персональное сопровождение и консультации по выбору образа
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in border-primary/10">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-secondary">
                  Прокат нарядов
                </h4>
                <p className="text-secondary/70">
                  Аренда эксклюзивных нарядов для особых случаев
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-secondary">
                О салоне
              </h3>
              <div className="space-y-6 text-secondary/80 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-secondary">ДЕБИНЬ САЛОН</strong> — это место, где мечты о идеальной свадьбе становятся реальностью. 
                  Уже более 10 лет мы помогаем невестам найти свой неповторимый образ.
                </p>
                <p>
                  Наша команда состоит из опытных стилистов, дизайнеров и мастеров швейного дела, 
                  которые с любовью и вниманием к деталям создают уникальные свадебные образы.
                </p>
                <p>
                  Мы работаем только с лучшими материалами и следуем последним тенденциям 
                  свадебной моды, при этом сохраняя классическую элегантность и изысканность.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-secondary/70">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-secondary/70">счастливых пар</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-secondary/70">моделей платьев</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/5041a333-0da5-4d59-8fb4-a88c6de1048a.jpg" 
                alt="Свадебный букет"
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-primary fill-current" />
                  <span className="font-semibold text-secondary">4.9/5</span>
                </div>
                <div className="text-xs text-secondary/70">рейтинг клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-secondary">
              Свяжитесь с нами
            </h3>
            <p className="text-secondary/70 text-lg max-w-2xl mx-auto">
              Готовы обсудить детали вашей свадьбы? Мы всегда рады помочь
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Адрес</h4>
                    <p className="text-secondary/70">
                      г. Москва, ул. Свадебная, д. 25<br />
                      ТЦ "Элегант", 2 этаж
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Телефон</h4>
                    <p className="text-secondary/70">
                      +7 (495) 123-45-67<br />
                      +7 (903) 123-45-67
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Режим работы</h4>
                    <p className="text-secondary/70">
                      Пн-Пт: 10:00 - 20:00<br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Email</h4>
                    <p className="text-secondary/70">
                      info@debinsalon.ru
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 border-primary/10">
              <CardContent className="space-y-6">
                <h4 className="font-playfair text-xl font-semibold text-secondary">
                  Записаться на консультацию
                </h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" className="border-primary/20" />
                    <Input placeholder="Телефон" className="border-primary/20" />
                  </div>
                  <Input placeholder="Email" className="border-primary/20" />
                  <Textarea 
                    placeholder="Расскажите о ваших пожеланиях..."
                    className="min-h-[120px] border-primary/20"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-playfair text-2xl font-semibold mb-4 text-primary">
                ДЕБИНЬ САЛОН
              </h4>
              <p className="text-secondary-foreground/80">
                Создаем незабываемые моменты вашего особенного дня
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Свадебные платья</li>
                <li>Аксессуары</li>
                <li>Подгонка и пошив</li>
                <li>Консультации стилиста</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-secondary-foreground/80">
                <p>г. Москва, ул. Свадебная, д. 25</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@debinsalon.ru</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 ДЕБИНЬ САЛОН. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;