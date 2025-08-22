"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Youtube, Music2, Radio, ArrowRight, Heart, Users, Globe, Mic } from "lucide-react"

export default function PodcastEtikPage() {
  const platformLinks = {
    youtube: "https://www.youtube.com/@djilalifeghouli",
    spotify: "https://open.spotify.com/show/7cOykFWnMaKOTHcmaToInn",
    apple: "#",
    deezer: "#"
  };

  const themes = [
    { icon: "💡", title: "Valeurs & éthique", text: "Comment rester aligné dans son projet" },
    { icon: "🌍", title: "Humain & planète", text: "Mettre l’impact au cœur de son activité" },
    { icon: "🔥", title: "Parcours inspirants", text: "Des histoires vraies et sans filtre" },
    { icon: "🚀", title: "Entreprendre autrement", text: "Sortir du modèle classique" }
  ];

  const stats = [
    { value: "20+", label: "Épisodes" },
    { value: "5K+", label: "Auditeurs" },
    { value: "4.8/5", label: "Avis" }
  ];

  return (
    <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold">🎙️ Podcast Étik</div>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:underline">À propos</a>
          <a href="#themes" className="hover:underline">Thèmes</a>
          <a href="#listen" className="hover:underline">Écouter</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <Button variant="outline" className="bg-white text-orange-600 hover:bg-orange-100">
          S’abonner
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-3xl mx-auto">
        <div className="inline-block p-3 bg-white/20 rounded-full backdrop-blur-sm mb-6">
          <Mic size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Le Podcast Étik – Entreprendre sans compromis</h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Chaque semaine, des entrepreneurs partagent leurs parcours et leurs choix.
          Pas de bullshit. Pas de success stories déconnectées.
          👉 Juste de vraies histoires d’ambition guidée par les valeurs.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <Button
            className="bg-white text-orange-600 hover:bg-orange-100 px-6 py-3"
            onClick={() => window.open(platformLinks.spotify, "_blank")}
          >
            <Music2 className="mr-2" /> Écouter sur Spotify
          </Button>
          <Button
            className="bg-white text-orange-600 hover:bg-orange-100 px-6 py-3"
            onClick={() => window.open(platformLinks.youtube, "_blank")}
          >
            <Youtube className="mr-2" /> Regarder sur YouTube
          </Button>
        </div>

        {/* Statistiques */}
        <div className="flex justify-center gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Présentation */}
      <section id="about" className="bg-white text-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">🌱 Pourquoi écouter Le Podcast Étik ?</h2>
          <p className="text-lg leading-relaxed mb-10">
            Parce qu’entreprendre, ce n’est pas seulement chercher la croissance. C’est aussi préserver l’humain, la planète… et soi-même.
            Dans chaque épisode, découvrez des parcours inspirants, des réflexions vraies, et des conseils pour réussir sans compromis.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg">
              <Users className="mb-4 text-orange-600" size={32} />
              <h3 className="font-bold text-lg mb-2">Communauté engagée</h3>
              <p className="text-center">Rejoignez des entrepreneurs qui partagent vos valeurs</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg">
              <Heart className="mb-4 text-orange-600" size={32} />
              <h3 className="font-bold text-lg mb-2">Contenu authentique</h3>
              <p className="text-center">Des interviews sans filtre avec des entrepreneurs transparents</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg">
              <Globe className="mb-4 text-orange-600" size={32} />
              <h3 className="font-bold text-lg mb-2">Impact positif</h3>
              <p className="text-center">Des conseils pour concilier performance et responsabilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thèmes */}
      <section id="themes" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Les thèmes abordés</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {themes.map((item, i) => (
            <Card key={i} className="bg-white shadow-lg border-0 transition-all hover:scale-105">
              <CardContent className="p-6 text-gray-900">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Dernier épisode */}
      <section className="py-16 px-6 bg-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Dernier épisode</h2>
          <div className="bg-white rounded-xl p-6 text-gray-900 shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <PlayCircle size={48} className="mx-auto text-orange-600" />
                <p className="mt-2">Bande-annonce du podcast</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Épisode 20&nbsp;: Entrepreneuriat à impact avec Jane Doe</h3>
            <p className="mb-6">Découvrez comment Jane a créé une entreprise prospère tout en ayant un impact positif sur la société et l’environnement.</p>
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              Écouter maintenant <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Ce que disent nos auditeurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-orange-500 text-2xl mb-4">"</div>
              <p className="italic mb-4">Enfin un podcast qui montre la réalité de l’entrepreneuriat, avec ses hauts et ses bas. Inspirant et rafraîchissant&nbsp;!</p>
              <p className="font-semibold">- Marie, entrepreneuse</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-orange-500 text-2xl mb-4">"</div>
              <p className="italic mb-4">Les conseils pratiques et les récits authentiques m’ont aidé à prendre des décisions importantes pour mon entreprise.</p>
              <p className="font-semibold">- Thomas, fondateur de startup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plateformes */}
      <section id="listen" className="bg-orange-800 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">🚀 Où écouter Le Podcast Étik ?</h2>
          <p className="mb-10">Disponible sur toutes les plateformes d’écoute</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="outline"
              className="bg-white text-orange-700 hover:bg-orange-200 px-6 py-3"
              onClick={() => window.open(platformLinks.spotify, "_blank")}
            >
              <Music2 className="mr-2" /> Spotify
            </Button>
            <Button
              variant="outline"
              className="bg-white text-orange-700 hover:bg-orange-200 px-6 py-3"
              onClick={() => window.open(platformLinks.youtube, "_blank")}
            >
              <Youtube className="mr-2" /> YouTube
            </Button>
            <Button
              variant="outline"
              className="bg-white text-orange-700 hover:bg-orange-200 px-6 py-3"
              onClick={() => window.open(platformLinks.apple, "_blank")}
            >
              <Radio className="mr-2" /> Apple Podcasts
            </Button>
            <Button
              variant="outline"
              className="bg-white text-orange-700 hover:bg-orange-200 px-6 py-3"
              onClick={() => window.open(platformLinks.deezer, "_blank")}
            >
              <Radio className="mr-2" /> Deezer
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="py-16 px-6 bg-white text-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Restez informé</h2>
          <p className="mb-8">Inscrivez-vous à la newsletter pour être alerté des nouveaux épisodes et recevoir du contenu exclusif</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3">
              S’inscrire
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">🎙️ Podcast Étik</div>
            <p>Entreprendre avec éthique et authenticité</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white">À propos</a></li>
              <li><a href="#themes" className="hover:text-white">Thèmes</a></li>
              <li><a href="#listen" className="hover:text-white">Écouter</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p>contact@podcastetik.fr</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          © 2025 Devenir Freelance IT – Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}
