class Generator {
  static init() {
    this.languages = [{
        id: 'Latin-Inspired',
        words: ['Vallis', 'Venantem', 'Salus', 'Fortuna', 'Egregius', 'Felix', 'Nova', 'Vulcanus', 'Flumen', 'Tempestas', 'Aeternus', 'Bellator', 'Caelum', 'Dignus', 'Ignis', 'Lumen', 'Mirabilis', 'Pax', 'Regius', 'Sapientia', 'Veritas', 'Victoria', 'Virtus', 'Zephyrus', 'Amor', 'Arbor', 'Aurora', 'Civitas', 'Fortis', 'Gloria', 'Honor', 'Iuventus', 'Libertas', 'Lux', 'Magnus', 'Miles', 'Natura', 'Orbis', 'Patria', 'Pietas', 'Princeps', 'Rex', 'Roma', 'Sanctus', 'Sol', 'Terra', 'Unda', 'Urbs', 'Vita', 'Voluntas', 'Vitalis', 'Vestitus', 'Velox', 'Victorius', 'Caecus', 'Celsus', 'Cura', 'Fortisimus', 'Hilaris', 'Imperium', 'Indomitus', 'Ingenium', 'Iuvenilis', 'Laetus', 'Legionarius', 'Liberi', 'Lucus', 'Maior', 'Maximus', 'Medianus', 'Minimus', 'Nobilis', 'Obtrectator', 'Oceanus', 'Oculus', 'Opus', 'Perfidus', 'Peritus', 'Potentia', 'Potestas', 'Princepsa', 'Prudentia', 'Pulsus', 'Pugnax', 'Quadratus', 'Quintus', 'Rapidus', 'Rectus', 'Redemptor', 'Regalis', 'Sagittarius', 'Sapiens', 'Secundus', 'Sedentarius', 'Sensus', 'Sententia', 'Serenitas', 'Simplicitas', 'Spes', 'Stabilitas', 'Statua', 'Strenuus', 'Sublimis', 'Suscipere', 'Tectorius', 'Tempus', 'Tenax', 'Tremulus', 'Ubiquus', ' Universitas', 'Vacillare', 'Vehemens', 'Velatus', 'Veloxitas', 'Verax', 'Vicissitudo']
      },
      {
        id: 'Etruscan-Inspired',
        words: ['Tukul', 'Pelen', 'Turur', 'Kainu', 'Veleli', 'Velth', 'Caire', 'Cales', 'Trachas', 'Spuri', 'Larth', 'Tarquin', 'Velcha', 'Rasna', 'Tinia', 'Fufluns', 'Selvans', 'Charun', 'Thesan', 'Uni', 'Aita', 'Aplu', 'Atunis', 'Calu', 'Culsu', 'Etruria', 'Hercle', 'Lasa', 'Menrva', 'Nethuns', 'Phersu', 'Sethlans', 'Tarchon', 'Thalna', 'Tuchulcha', 'Vanth', 'Veive', 'Velth', 'Vipina', 'Zimra', 'Alpan', 'Aritimi', 'Arun', 'Epiur', 'Faland', 'Leinth', 'Malthi', 'Murina', 'Rath', 'Tul', 'Arali', 'Aruntha', 'Cathri', 'Kalasi', 'Larunal', 'Martri', 'Nethari', 'Panthu', 'Pharsuas', 'Rasnal', 'Spurinis', 'Tarchnin', 'Thesanis', 'Thesanu', 'Thesanri', 'Thesanro', 'Tulcin', 'Turutha', 'Turuthi', 'Turuthu', 'Turutni', 'Turutr', 'Turutus', 'Turutv', 'Uniari', 'Uninal', 'Uninas', 'Uninis', 'Uniti', 'Veveis', 'Veveil', 'Vevein', 'Veveis', 'Veleth', 'Veleths', 'Velethu', 'Velthar', 'Velthas', 'Velthi', 'Velthni', 'Velthu', 'Vipinas', 'Vipinis', 'Zimral', 'Zimras', 'Zimrei', 'Zimren', 'Zimrua', 'Zimrure', 'Zimrus', 'Alpna', 'Altna', 'Aruth', 'Aruthi', 'Epurn', 'Kalan', 'Kalsa', 'Kanthu', 'Kanthus', 'Laran', 'Leinthi', 'Malthin', 'Mathra', 'Murin', 'Rathri', 'Rathru']
      },
      {
        id: 'Oscan-Inspired',
        words: ['Brent', 'Dodon', 'Vesuv', 'Flusiu', 'Bantian', 'Pacstan', 'Mummis', 'Pupiu', 'Kuvaf', 'Aisarna', 'Herentas', 'Meddix', 'Niumsis', 'Safinim', 'Touto', 'Víteliú', 'Sakrim', 'Hirpus', 'Mefitis', 'Kunna', 'Anim', 'Arentare', 'Armentum', 'Ati', 'Aukl', 'Bant', 'Capua', 'Ceres', 'Dunum', 'Ekkum', 'Faalum', 'Fan', 'Hera', 'Hum', 'Iuvila', 'Kaisr', 'Kra', 'Lup', 'Maras', 'Nuvlan', 'Paak', 'Pompeii', 'Praist', 'Rufr', 'Sakara', 'Samn', 'Tever', 'Vestin', 'Viteli', 'Zik', 'Accius', 'Actiu', 'Aesern', 'Aituna', 'Alfid', 'Ament', 'Anagt', 'Aninna', 'Api', 'Archan', 'Arent', 'Bantia', 'Bantins', 'Bantius', 'Berin', 'Berinis', 'Brata', 'Bratia', 'Bratii', 'Bratiu', 'Bratae', 'Bratu', 'Caecl', 'Caeclus', 'Caecli', 'Caeclu', 'Ferent', 'Ferenti', 'Ferentus', 'Ferenus', 'Flavtu', 'Flavtus', 'Freson', 'Fresonium', 'Frusci', 'Fruscin', 'Herclo', 'Hercola', 'Hercolo', 'Hercolu', 'Herkis', 'Herkus', 'Herku', 'Herrens', 'Kapui', 'Kapuua', 'Kraunu', 'Kuesss', 'Kuent', 'Kuentu', 'Kuentus', 'Luvke', 'Luvki', 'Luvku', 'Marasas', 'Marasi', 'Marasus', 'Mefit', 'Mefita', 'Nerus', 'Nerusa', 'Nerusi', 'Nerusi', 'Nerut']
      },
      {
        id: 'Ligurian-Inspired',
        words: ['Ligus', 'Medu', 'Tigullia', 'Intemelius', 'Voc', 'Olas', 'Turre', 'Maritima', 'Umbria', 'Cervteri', 'Alba', 'Genua', 'Ventimiglia', 'Albium', 'Segusio', 'Veleia', 'Bormio', 'Cemenelum', 'Luna', 'Pisa', 'Aqua', 'Bard', 'Berg', 'Brig', 'Cava', 'Cen', 'Dert', 'Elva', 'Era', 'Fris', 'Gav', 'Iria', 'Laus', 'Lema', 'Ligor', 'Mago', 'Mant', 'Mon', 'Nava', 'Nim', 'Olbia', 'Orba', 'Peda', 'Pola', 'Riv', 'Sab', 'Sena', 'Tib', 'Vara', 'Vint', 'Abelu', 'Aben', 'Alpe', 'Alpes', 'Alpon', 'Ampitu', 'Aqueni', 'Ardu', 'Arei', 'Ariu', 'Arig', 'Arigi', 'Cant', 'Cantu', 'Cantuus', 'Carna', 'Carnaia', 'Carno', 'Carnu', 'Cher', 'Cheru', 'Cherus', 'Eir', 'Eira', 'Eiri', 'Eirimu', 'Eiro', 'Eirsu', 'Erus', 'Flamen', 'Flamn', 'Flamnu', 'Flau', 'Flavi', 'Flaviu', 'Gaud', 'Gaudi', 'Ingaun', 'Ingauni', 'Lar', 'Lari', 'Larion', 'Lartiu', 'Lem', 'Lemu', 'Lemus', 'Leri', 'Leriu', 'Lig', 'Lige', 'Ligu', 'Ligur', 'Lint', 'Lintsu', 'Litu', 'Lium', 'Lumu', 'Maia', 'Mali', 'Malu', 'Malus', 'Mana', 'Manu', 'Mantu', 'Mar', 'Mare', 'Mario', 'Marm', 'Maro', 'Mas', 'Masi', 'Maso', 'Medo', 'Medu', 'Meku']
      },
      {
        id: 'Mycenaean-Inspired',
        words: ['Me-ta-ku', 'Pi-ro-pa-ta', 'A-ki-re-u', 'Tirintha', 'Da-ma-te', 'O-pe-te-ro', '-re-ke', 'Pylos', 'Ko-re-te', 'Thespia', 'Wa-na-ka', 'E-qe-ta', 'Ra-wa-ke-ta', 'Te-o', 'A-pi-me-de', 'Ku-pi-ri-jo', 'Mi-ra-ti-ja', 'Ke-re-si-jo', 'Pa-ka-na', 'To-so', 'A-ko-so', 'A-re-pa', 'A-si-wi-ja', 'Da-i-pi', 'Di-wi-ja', 'E-ra', 'E-ri-ku', 'E-te-wo-ke', 'E-u-me', 'Go-u-ko', 'Ka-ke', 'Ko-ri', 'Ku-ru-so', 'Ma-na', 'Me-ri', 'Ne-wa', 'O-pa', 'Pa-ra', 'Pe-re', 'Po-se-da', 'Ra-pi', 'Sa-ra', 'Se-re-mo', 'Ta-mi', 'Te-ko', 'Ti-ri', 'U-pa', 'Wa-to', 'We-to', 'Wi-ka', 'A-ki-re-we', 'A-mu-ru', 'A-qi-ti-jo', 'A-re-ko-to', 'A-so-ma-te', 'De-ke-ru', 'De-ku-re', 'E-i-ru-pa', 'E-ka-ra-i', 'E-ko-ru-so', 'E-ma-na', 'E-u-ma-re', 'Go-u-ta', 'Ka-ku-re', 'Ka-pa-re', 'Ka-pi-ti', 'Ka-pu-so', 'Ka-re-ta', 'Ka-ru-so', 'Ke-re-to', 'Ki-ru-te', 'Ko-ke-re', 'Ko-no-so', 'Ko-ra-ta', 'Ko-re-ta', 'Ko-u-ru', 'Kru-so-jo', 'Ku-ma-re', 'Ku-ra-so', 'Ku-re-so', 'Ku-ru-po', 'Ku-te-ra', 'Ma-ke-re', 'Ma-ku-re', 'Ma-ri-ku', 'Ma-ti-na', 'Me-ke-re', 'Me-ri-su', 'Ne-u-so', 'Ni-ku-re', 'O-i-ku-so', 'O-pa-di-jo', 'O-pa-ti-jo', 'O-pi-ti', 'Pa-ko-so', 'Pa-na-so', 'Pa-ra-ku', 'Pa-so-jo', 'Pe-re-ru', 'Pe-ru-so', 'Pi-ku-re', 'Pi-so-jo', 'Po-ku-re', 'Po-ru-so', 'Pu-ku-re', 'Ra-ki-re', 'Ra-ku-so', 'Sa-ru-so', 'Se-ku-re', 'Se-ru-so', 'Ta-ku-re', 'Ta-pa-so']
      },
      {
        id: 'Venetic-Inspired',
        words: ['Meg', 'Ued', 'Veled', 'Lupi', 'Kadri', 'Tur', 'Veleda', 'Veleta', 'Satres', 'Kaikna', 'Reitia', 'Loudera', 'Vhugas', 'Trumusiati', 'Ekupetaris', 'Vineti', 'Voltiomnos', 'Kanales', 'Tolar', 'Vhugos', 'Aisus', 'Alk', 'Arut', 'Bona', 'Cava', 'Dona', 'Eka', 'Fal', 'Gamo', 'Hel', 'Iku', 'Kal', 'Lau', 'Mau', 'Nau', 'Ola', 'Pala', 'Quar', 'Ruma', 'Sala', 'Tala', 'Ula', 'Vara', 'Wara', 'Xalo', 'Yama', 'Zama', 'Kuta', 'Meta', 'Pisa', 'Ruta', 'Aika', 'Aiku', 'Alba', 'Alku', 'Ara', 'Arka', 'Arku', 'Arta', 'Asra', 'Asru', 'Atru', 'Bona', 'Bonu', 'Cail', 'Cali', 'Cama', 'Camu', 'Cara', 'Celu', 'Cena', 'Cenu', 'Dama', 'Danu', 'Denu', 'Dona', 'Donu', 'Eisu', 'Eit', 'Ekus', 'Ela', 'Elo', 'Epu', 'Eras', 'Erku', 'Esu', 'Eta', 'Etus', 'Fal', 'Faln', 'Falu', 'Fana', 'Fenu', 'Gail', 'Galn', 'Galu', 'Hama', 'Henu', 'Hoka', 'Iku', 'Irun', 'Isa', 'Ita', 'Itu', 'Kad', 'Kada', 'Kadu']
      },
      {
        id: 'Lemnian-Inspired',
        words: ['Aλs', 'Eski', 'Kor', 'Tur', 'Zikar', 'Hapla', 'Siori', 'Rasna', 'Uni', 'Alsi', 'Alsla', 'Alsku', 'Alskuas', 'Eskiu', 'Eskino', 'Eskinos', 'Korai', 'Koras', 'Koraku', 'Turku', 'Turkas', 'Zikari', 'Zikaru', 'Haplak', 'Haplas', 'Sioriu', 'Sioriok', 'Rasnal', 'Rasni', 'Unika', 'Unikas', 'Alpa', 'Alpnu', 'Alpsa', 'Eskil', 'Eskilu', 'Korin', 'Korins', 'Turkuas', 'Zikars', 'Haplo', 'Haplos', 'Sioris', 'Sorik', 'Rasniu', 'Uniar', 'Uniari', 'Alpsu', 'Alpsui', 'Korasu', 'Turkur', 'Zikaruas', 'Alke', 'Alkuo', 'Eskiou', 'Korasu', 'Turki', 'Zikariu', 'Haploku', 'Sioriku', 'Rasnoku', 'Unikuas', 'Althae', 'Althaku', 'Eskilku', 'Korkor', 'Turkte', 'Zikarte', 'Haplora', 'Sioritu', 'Rasnitu', 'Unikatu', 'Alpins', 'Alpinsu', 'Eskitku', 'Korkas', 'Turktas', 'Zikarku', 'Haplokuas', 'Siorikuas', 'Rasnokuas', 'Unikuaskas', 'Althakuas', 'Alpinskas', 'Eskilkuo', 'Korkorku', 'Turkteas', 'Zikarteas', 'Haploras', 'Sioritur', 'Rasnitur', 'Unikatim', 'Alpunakai', 'Alpunas', 'Eskitkulas', 'Korkasku', 'Turktosas', 'Zikarkuos', 'Haplokuosas', 'Siorikosas', 'Rasnokuosas', 'Unikuaskosas', 'Althakuoas', 'Alpinskoas', 'Eskilkuoas', 'Korkorkuos', 'Turkteosas', 'Zikarteosas', 'Haplorasos', 'Sioriturkos', 'Rasniturkos', 'Unikatimkos']
      },
      {
        id: 'Raetic-Inspired',
        words: ['Karlo', 'Rati', 'Pleku', 'Raeti', 'Sekani', 'Turai', 'Kares', 'Sotrai', 'Tesan', 'Veltri', 'Kalni', 'Luvki', 'Surku', 'Nirku', 'Tukra', 'Zilku', 'Vedri', 'Lemku', 'Kursu', 'Tursa', 'Kalniu', 'Turaku', 'Reti', 'Selku', 'Lupri', 'Sori', 'Korai', 'Torai', 'Rasui', 'Eriti', 'Turri', 'Kalta', 'Lentu', 'Sulku', 'Korku', 'Palni', 'Surri', 'Kalni', 'Nortu', 'Ratiu', 'Plekor', 'Raetiu', 'Sekanos', 'Turaio', 'Karesu', 'Sotraiu', 'Tesano', 'Veltriu', 'Kalmio', 'Luvkis', 'Surkio', 'Nirkio', 'Tukrio', 'Zilkus', 'Vedrio', 'Lemkio', 'Kursio', 'Tursio', 'Kalnio', 'Turakio', 'Retio', 'Selkio', 'Luprio', 'Sorio', 'Koraiu', 'Toraiu', 'Rasuiu', 'Eritio', 'Turrio', 'Kaltiu', 'Lentiu', 'Sulkan', 'Korkiu', 'Palniu', 'Surrio', 'Kalnius', 'Nortus', 'Ratiuo', 'Plekorus', 'Raetiou', 'Sekanous', 'Turaious', 'Karesous', 'Sotraious', 'Tesanous', 'Veltrious', 'Kalmious', 'Luvkious', 'Surkious', 'Nirkious', 'Tukrious', 'Zilkious', 'Vedrious', 'Lemkious', 'Kursious', 'Tursious', 'Kalniuos', 'Turakious', 'Retious', 'Selkious', 'Luprious', 'Sorious', 'Koraius', 'Toraius', 'Rasuious', 'Eritious', 'Turrious', 'Kaltious', 'Lentious', 'Sulkanos', 'Korkious', 'Palmious', 'Surrious', 'Kalniuosus', 'Nortuos', 'Ratiuos', 'Plekoros', 'Raetios', 'Sekanosus', 'Turaios', 'Karesus', 'Sotraiou', 'Tesanos', 'Veltrios', 'Kalmioi', 'Luvkisi', 'Surkioi', 'Nirkioi', 'Tukrio', 'Zilkuso']
      },
    ];
    this._initLanguageSwitches();
  }

  static _initLanguageSwitches() {
    const langSwitchBox = document.getElementById('languageSwitches');
    this.languages.forEach(lang => {
      const checkbox = document.createElement('div');
      checkbox.className = 'form-check form-switch mb-2';
      const input = document.createElement('input');
      input.className = 'form-check-input';
      input.type = 'checkbox';
      input.id = `lang-${lang.id.replace(' ','_')}`;
      input.checked = true;
      const label = document.createElement('label');
      label.className = 'form-check-label ms-2';
      label.textContent = lang.id;
      label.htmlFor = input.id;

      checkbox.appendChild(input);
      checkbox.appendChild(label);
      langSwitchBox.appendChild(checkbox);
    });
  }

  static generate() {
    const output = document.getElementById('output');
    const paragraphs = parseInt(document.getElementById('paragraphs').value);
    const min = parseInt(document.getElementById('minWords').value);
    const max = parseInt(document.getElementById('maxWords').value);

    const selectedLanguages = this.languages.filter(lang =>
      document.getElementById(`lang-${lang.id.replace(' ','_')}`).checked
    );

    output.innerHTML = [...Array(paragraphs).keys()].map(() => {
      const phraseCount = Math.floor(Math.random() * (max - min + 1)) + min;
      return `<p>${Array.from({length: phraseCount}, () => this._getRandomWord(selectedLanguages)).join(' ')}</p>`;
    }).join('\n');

    this._initTooltips();
  }

  static _getRandomWord(languages) {
    const lang = languages[Math.floor(Math.random() * languages.length)];
    return `<span class="extinct-word data-bs-toggle='tooltip'" 
                        data-bs-title="${lang.id}" 
                        data-bs-custom-class="extinct-tooltip">
                        ${lang.words[Math.floor(Math.random() * lang.words.length)]}
                    </span>`;
  }

  static _initTooltips() {
    const tooltips = document.querySelectorAll('.extinct-word');
    tooltips.forEach(tip => {
      new bootstrap.Tooltip(tip, {
        customClass: 'extinct-tooltip',
        delay: {
          show: 200,
          hide: 100
        },
        placement: 'top'
      });
    });
  }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  Generator.init();
  document.querySelectorAll('.extinct-word').forEach(tip => new bootstrap.Tooltip(tip, {
    customClass: 'extinct-tooltip'
  }));
});