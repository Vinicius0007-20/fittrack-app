"use client";

import { Apple, Flame, Target, TrendingUp, ArrowRight, CheckCircle2, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FitTrackHome() {
  const features = [
    {
      icon: Flame,
      title: "Monitoramento de Refeições",
      description: "Registre suas refeições e acompanhe calorias em tempo real",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Target,
      title: "Metas Personalizadas",
      description: "Defina objetivos e acompanhe seu progresso diário",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Queima de Calorias",
      description: "Treinos personalizados para acelerar seus resultados",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com pessoas na mesma jornada que você",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const benefits = [
    "Banco de dados com +100.000 alimentos",
    "Planos de treino personalizados",
    "Acompanhamento de hidratação",
    "Receitas saudáveis e nutritivas",
    "Desafios mensais motivacionais",
    "Suporte de nutricionistas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-xl">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              FitTrack
            </h1>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme Sua Vida com
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Hábitos Saudáveis
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Perca peso de forma saudável, monitore suas refeições e queime calorias com o aplicativo mais completo de fitness e nutrição
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1">500k+</p>
                <p className="text-sm sm:text-base text-gray-600">Usuários Ativos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1">2M+</p>
                <p className="text-sm sm:text-base text-gray-600">Refeições Registradas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-1">15kg</p>
                <p className="text-sm sm:text-base text-gray-600">Perda Média</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que Você Precisa em Um Só Lugar
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ferramentas completas para sua jornada de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 group"
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} p-4 rounded-2xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Por Que Escolher o
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  FitTrack?
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Mais do que um aplicativo de dieta, o FitTrack é seu parceiro completo para uma vida mais saudável e equilibrada.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1 rounded-full mt-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-emerald-500/50 transition-all duration-300"
              >
                Experimente Grátis por 7 Dias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <Flame className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Calorias Hoje</p>
                      <p className="text-2xl font-bold text-gray-900">1,245 / 1,800</p>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full" style={{ width: "69%" }} />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Progresso Semanal</p>
                      <p className="text-2xl font-bold text-gray-900">-2.5 kg</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[65, 80, 70, 90, 85, 75, 95].map((height, i) => (
                      <div key={i} className="flex-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-t from-emerald-500 to-teal-400 rounded-full"
                          style={{ height: `${height}px` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-2 rounded-xl">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Comunidade</p>
                    <p className="font-bold text-gray-900">500k+ membros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl inline-block mb-6">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto Para Transformar Sua Vida?
          </h3>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já alcançaram seus objetivos com o FitTrack
          </p>
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-6 text-lg rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Começar Minha Jornada
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">FitTrack</span>
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 FitTrack. Transformando vidas através de hábitos saudáveis.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
