import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Sparkles, Check, Zap, Heart, Calendar, Users } from 'lucide-react'
import bannerImage from './assets/banner-maravilhosa.png'
import transformationImage from './assets/eu.png'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validação básica
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor, preencha todos os campos')
      setIsSubmitting(false)
      return
    }

    try {
      // Enviar dados para o email via FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/renataborbanutri@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          _subject: '🔥 Novo Lead Black Friday +Maravilhosa',
          _template: 'table'
        })
      })

      if (response.ok) {
        // Disparar evento Lead no Meta Pixel
        if (window.fbq) {
          // Gera um novo eventID para o Lead
          const leadEventId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
          
          window.fbq('track', 'Lead', {
            content_name: 'Black Friday +Maravilhosa',
            content_category: 'Lead Capture',
            value: 0,
            currency: 'BRL'
          }, {
            eventID: leadEventId
          });
        }
        
        // Mostrar página de confirmação
        setShowConfirmation(true)
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        alert('Ocorreu um erro. Por favor, tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Ocorreu um erro. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <Check className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🎉 Parabéns, sua vaga está quase garantida!
            </h1>
            
            <Card className="mb-8 border-2 border-purple-200 shadow-xl">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-6">
                  Para finalizar e receber todos os detalhes da <strong>oferta Black Friday +Maravilhosa</strong>, 
                  entre agora no nosso grupo VIP e fechado no WhatsApp.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <p className="text-xl font-semibold text-purple-900 mb-4">👉 Lá você vai receber:</p>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">O <strong>link exclusivo</strong> da oferta antes de todo mundo</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Dicas especiais de emagrecimento e controle hormonal</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Suporte e informações em primeira mão</span>
                    </li>
                  </ul>
                </div>
                
                <a 
                  href="https://chat.whatsapp.com/Hm8zcuWD6fdDng7VVG6xMP?mode=ems_copy_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                <Button
                size="lg"
                aria-label="Entrar no grupo VIP de WhatsApp"
                className="
                w-full inline-flex items-center justify-center gap-2
                px-4 sm:px-6 py-4 sm:py-5 md:py-6 min-h-[52px]
                text-base sm:text-lg md:text-xl leading-snug text-center
                bg-green-600 md:hover:bg-green-700
                text-white font-semibold sm:font-bold
                rounded-lg sm:rounded-xl
                shadow-lg md:hover:shadow-xl
                motion-safe:transition-transform duration-200
                active:scale-[0.99] md:hover:scale-[1.02]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600
                disabled:opacity-70 disabled:cursor-not-allowed
                select-none touch-manipulation
                "
                >
                {/* Ícone: aparece a partir de sm; escondido no mobile para ganhar espaço */}
                <svg
                className="hidden sm:block w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>

                {/* Rótulos: curto no mobile, completo em telas maiores */}
                <span className="sm:hidden">Entrar no grupo VIP</span>
                <span className="hidden sm:inline">Entrar agora no grupo VIP de WhatsApp</span>
                </Button>

                </a>
              </CardContent>
            </Card>
            
            <p className="text-sm text-gray-600">
              Parabéns por se colocar em primeiro lugar! 💜
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Banner Logo */}
          <div className="mb-8">
            <img 
              src={bannerImage} 
              alt="Renata Borba Nutricionista +Maravilhosa" 
              className="mx-auto max-w-md w-full h-auto"
            />
          </div>
          
          <div className="inline-block mb-4 sm:mb-6 text-center">
          <span
          className="
          inline-block
          bg-red-600 text-white
          px-4 sm:px-6 py-1.5 sm:py-2
          rounded-full
          text-xs sm:text-sm md:text-base
          font-bold uppercase tracking-wide
          animate-pulse
          whitespace-normal sm:whitespace-nowrap
          "
          >
          🔥 Black Friday — Oferta Exclusiva
          </span>
          </div>

          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua chance única de ter o +Maravilhosa por um  <span className="text-purple-600">preço que não volta nunca mais!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
          No <strong>+Maravilhosa</strong>, você terá <strong>acesso por 1 ano inteiro</strong> à <strong>Tata</strong>,
          minha calculadora exclusiva que monta todas as suas refeições de forma prática,
          à <strong>suplementação individualizada</strong> pensada só para você — revisada a cada 3 meses para acompanhar sua evolução —
          e ainda contará com um <strong>encontro mensal ao vivo no Zoom</strong>, em grupo, para tirar todas as suas dúvidas.
          </p>

          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 md:p-8 mb-8 border-2 border-purple-200 shadow-lg">
          <p className="text-lg md:text-xl text-gray-800 mb-4">
          <strong>E tem mais:</strong> você também recebe o <strong className="text-purple-700">JAFE – Jejum Acelerador Feminino</strong>,
          com um <strong>tracker exclusivo</strong> que mostra <strong>passo a passo como iniciar o jejum com segurança</strong>,
          disponível em <strong>versão digital</strong> e para <strong>imprimir</strong>.
          </p>
          </div>

        </div>

        {/* Benefits Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Calculadora Tata</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Monte suas refeições de forma prática e personalizada</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle className="text-xl">Suplementação Individual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Protocolo pensado especialmente para o seu corpo</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Encontro Mensal no Zoom</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Tire suas dúvidas ao vivo em grupo</p>
            </CardContent>
          </Card>
        </div>

        {/* Transformation Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-200 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Minha Transformação 💪
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Eu sei exatamente como você se sente, porque <strong>eu já estive no seu lugar</strong>.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Transformei meu corpo e minha saúde hormonal, e agora quero ajudar você a fazer o mesmo!
                  </p>
                  <p className="text-xl font-semibold text-purple-700">
                    Se eu consegui, você também consegue! ✨
                  </p>
                </div>
                <div className="relative h-full min-h-[400px]">
                  <img 
                    src={transformationImage} 
                    alt="Transformação Renata Borba - Antes e Depois" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Objection Breaker */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-white border-2 border-gray-200 shadow-xl">
            <CardContent className="pt-8">
              <div className="space-y-4 mb-6">
              <div className="flex items-center p-4 mb-3 bg-red-50 border border-red-200 rounded-xl shadow-sm">
              <span className="text-red-600 text-2xl mr-3">❌</span>
              <p className="text-lg text-red-700 font-medium">
              Você não precisa de dietas restritivas.
              </p>
              </div>
              <div className="flex items-center p-4 mb-3 bg-red-50 border border-red-200 rounded-xl shadow-sm">
              <span className="text-red-600 text-2xl mr-3">❌</span>
                  <p className="text-lg text-gray-700">Não precisa de cardápios engessados.</p>
                </div>
                <div className="flex items-center p-4 mb-3 bg-red-50 border border-red-200 rounded-xl shadow-sm">
                <span className="text-red-600 text-2xl mr-3">❌</span>
                  <p className="text-lg text-gray-700">Nem de suplementos aleatórios.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                <div className="flex items-start">
                  <Check className="w-8 h-8 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-xl text-gray-800">
                    Aqui tudo é <strong className="text-green-700">personalizado para o seu corpo e seus hormônios</strong> — 
                    sem achismos, sem modinhas, sem sofrimento.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lead Capture Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-4 border-purple-300 shadow-2xl bg-white">
            <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl mb-2">
                <Zap className="inline-block w-8 h-8 mr-2 mb-1" />
                Garanta Sua Vaga Exclusiva
              </CardTitle>
              <CardDescription className="text-purple-100 text-lg">
                Preencha para garantir sua vaga na Black Friday
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold">Nome completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg border-2 border-gray-300 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-semibold">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg border-2 border-gray-300 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg font-semibold">WhatsApp *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg border-2 border-gray-300 focus:border-purple-500"
                  />
                </div>

                <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-live="polite"
                className="
                w-full inline-flex items-center justify-center gap-2
                px-4 sm:px-6 py-4 sm:py-5 md:py-6 min-h-[52px] sm:min-h-[56px]
                text-base sm:text-lg md:text-xl leading-snug text-center
                bg-gradient-to-r from-green-500 to-green-600
                md:hover:from-green-600 md:hover:to-green-700
                text-white font-bold shadow-lg md:hover:shadow-xl
                motion-safe:transition-transform motion-reduce:transition-none duration-200
                rounded-lg sm:rounded-xl
                active:scale-[0.99] md:hover:scale-[1.02]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600
                disabled:opacity-70 disabled:cursor-not-allowed select-none touch-manipulation
                "
                >
                {isSubmitting ? (
                  <>
                  <div
                  className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"
                  aria-hidden="true"
                  />
                  <span>Enviando…</span>
                  </>
                ) : (
                  <>
                  <Sparkles className="hidden sm:block w-6 h-6" aria-hidden="true" />
                  <span className="sm:hidden">Quero minha vaga</span>
                  <span className="hidden sm:inline">
                  Quero garantir minha vaga no +Maravilhosa Black Friday
                  </span>
                  </>
                )}
                </Button>

              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                🔒 Seus dados estão seguros e protegidos
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Section */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              <span>Você +Maravilhosa</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-pink-600" />
              <span>Resultados definitivos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
