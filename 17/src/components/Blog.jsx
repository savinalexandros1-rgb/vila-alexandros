import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, X, MapPin, Mountain, Users } from 'lucide-react';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      slug: 'top-10-lucruri-de-facut-busteni',
      title: 'Top 10 Lucruri de Făcut în Bușteni',
      excerpt: 'Descoperă cele mai frumoase atracții și activități din Bușteni - de la drumeții spectaculoase la restaurante tradiționale.',
      image: '/images/VilaAlexandros-0025.jpg',
      date: '25 Feb 2026',
      readTime: '5 min',
      category: 'Ghid Local',
      content: `
        <h3>1. Crucea Eroilor de pe Caraiman</h3>
        <p>Monumentul emblematic al Bucegilor, vizibil din întreaga Vale a Prahovei. Traseul durează aproximativ 4-5 ore dus-întors și oferă priveliști spectaculoase.</p>
        
        <h3>2. Telecabina Bușteni</h3>
        <p>Urcă până la Babele și Sfinxul în doar 15 minute. Funcționează tot anul și oferă acces rapid la cele mai cunoscute formațiuni stâncoase din Bucegi.</p>
        
        <h3>3. Cascada Urlătoarea</h3>
        <p>La doar 30 de minute de mers pe jos din centrul Bușteni, cascada de 15 metri este perfectă pentru o plimbare ușoară în natură.</p>
        
        <h3>4. Pârtia Kalinderu</h3>
        <p>Iarna, Kalinderu oferă schi și snowboard pentru toate nivelurile. La doar 5 minute de Vila Alexandros!</p>
        
        <h3>5. Babele și Sfinxul</h3>
        <p>Formațiunile stâncoase iconice ale Bucegilor. Accesibile cu telecabina sau pe trasee de drumeție.</p>
        
        <h3>6. Peștera Ialomiței</h3>
        <p>O excursie de o zi perfectă - include mănăstirea din peșteră și formaćiuni carstice impresionante.</p>
        
        <h3>7. Muzeul Cantacuzino</h3>
        <p>Castelul în stil neo-românesc adăpostește o colecție fascinantă de artă și istorie locală.</p>
        
        <h3>8. Grătar la Vila Alexandros</h3>
        <p>Ce poate fi mai bun decât un grătar cu prietenii, cu vedere la Bucegi? Vila noastră oferă toate facilitățile necesare.</p>
        
        <h3>9. Restaurante tradiționale</h3>
        <p>Încearcă bucătăria locală la restaurantele din zonă - sarmale, tochitura, papanași.</p>
        
        <h3>10. Răsărit de pe terasă</h3>
        <p>Privește soarele răsărind peste Bucegi direct de pe terasa Vilei Alexandros - o experiență de neuitat!</p>
      `
    },
    {
      id: 2,
      slug: 'weekend-la-munte-cu-prietenii-ghid',
      title: 'Weekend la Munte cu Prietenii - Ghid Complet',
      excerpt: 'Cum să organizezi weekendul perfect la munte pentru un grup mare. Sfaturi practice de la cazare la activități.',
      image: '/images/VilaAlexandros-0057.jpg',
      date: '23 Feb 2026',
      readTime: '7 min',
      category: 'Sfaturi',
      content: `
        <h3>De ce să alegi o vilă pentru grup?</h3>
        <p>Spre deosebire de hotel, o vilă vă oferă intimitate, spațiu comun generos și libertatea de a vă organiza după propriul program. La Vila Alexandros, 15 persoane pot sta împreună, nu împrăștiate pe etaje diferite.</p>
        
        <h3>Checklist pentru weekend</h3>
        <p><strong>Cazare:</strong> Rezervă din timp, mai ales pentru weekend-uri. Verifică ce facilități sunt incluse - bucătărie, grătar, parcare.</p>
        <p><strong>Transport:</strong> Organizați-vă în 2-3 mașini pentru flexibilitate. Parcarea gratuită la vilă elimină grija locurilor de parcare.</p>
        <p><strong>Mâncare:</strong> Cumpărați provizii din oraș sau din Bușteni. Bucătăria complet utilată vă permite să gătiți împreună.</p>
        
        <h3>Activități pentru grup</h3>
        <p><strong>Vara:</strong> drumeții, vizite la cascade, grătar seara, jocuri de societate.</p>
        <p><strong>Iarna:</strong> schi la Kalinderu, sănii, băut vin fiert lângă șemineu.</p>
        
        <h3>Buget orientativ</h3>
        <p>La 1200-1500 RON/noapte pentru 15 persoane, costul per persoană e de doar 80-100 RON - mai ieftin decât orice pensiune!</p>
      `
    },
    {
      id: 3,
      slug: 'trasee-drumetie-bucegi-incepatori',
      title: 'Cele Mai Frumoase Trasee din Bucegi pentru Începători',
      excerpt: 'Nu trebuie să fii alpinist pentru a te bucura de Bucegi. Iată traseele perfecte pentru drumeți ocazionali.',
      image: '/images/VilaAlexandros-0026.jpg',
      date: '20 Feb 2026',
      readTime: '6 min',
      category: 'Drumeții',
      content: `
        <h3>1. Cascada Urlătoarea (ușor)</h3>
        <p><strong>Durată:</strong> 1-1.5 ore dus-întors<br/>
        <strong>Dificultate:</strong> Ușor, potrivit pentru copii<br/>
        <strong>Start:</strong> Centrul Bușteni</p>
        <p>Traseul perfect pentru o plimbare de dimineață. Poteca e bine marcată și ușor de urmat.</p>
        
        <h3>2. Telecabină + Babele (foarte ușor)</h3>
        <p><strong>Durată:</strong> 2-3 ore total<br/>
        <strong>Dificultate:</strong> Foarte ușor<br/>
        <strong>Start:</strong> Stația telecabină Bușteni</p>
        <p>Urcați cu telecabina și plimbați-vă pe platou. Priveliști spectaculoase fără efort.</p>
        
        <h3>3. Crucea Caraiman (moderat)</h3>
        <p><strong>Durată:</strong> 4-5 ore dus-întors<br/>
        <strong>Dificultate:</strong> Moderat<br/>
        <strong>Start:</strong> Cabana Piatra Arsă sau telecabină</p>
        <p>Traseul clasic al Bucegilor. Crucea de 28m se vede din toată Valea Prahovei.</p>
        
        <h3>Sfaturi importante</h3>
        <p>• Porniți dimineața devreme<br/>
        • Luați apă suficientă (min 1.5L/persoană)<br/>
        • Verificați vremea înainte<br/>
        • Încălțăminte de munte obligatorie<br/>
        • Telefonul încărcat pentru urgențe</p>
        
        <h3>După drumeție</h3>
        <p>Reveniți la Vila Alexandros pentru un grătar binemeritat și relaxare pe terasă cu vedere la munții pe care tocmai i-ați cucerit!</p>
      `
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Blog</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">Ghid Bușteni & Valea Prahovei</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Sfaturi locale, trasee și idei pentru vacanța ta la munte</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => setSelectedArticle(article)}>
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">{article.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest transition-colors">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center text-forest font-semibold group-hover:gap-2 transition-all">
                  Citește mai mult <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedArticle(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">{selectedArticle.category}</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{selectedArticle.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{selectedArticle.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedArticle.title}</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
              <div className="mt-8 p-6 bg-forest/10 rounded-xl">
                <h4 className="font-bold text-forest mb-2">Cazare în Bușteni?</h4>
                <p className="text-gray-700 mb-4">Vila Alexandros oferă cazare pentru până la 15 persoane, cu vedere la Bucegi, grătar și toate facilitățile pentru un weekend perfect.</p>
                <a href="#rezervare" onClick={() => setSelectedArticle(null)} className="btn-primary bg-forest inline-block">Verifică Disponibilitatea</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
