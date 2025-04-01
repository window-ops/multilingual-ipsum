class Generator {
  static init() {
    this.languages = [{
        id: 'Latin',
        words: ['Vallis', 'Venantem', 'Salus', 'Fortuna', 'Egregius', 'Felix', 'Nova', 'Vulcanus', 'Flumen', 'Tempestas', 'Aeternus', 'Bellator', 'Caelum', 'Dignus', 'Ignis', 'Lumen', 'Mirabilis', 'Pax', 'Regius', 'Sapientia', 'Veritas', 'Victoria', 'Virtus', 'Zephyrus', 'Amor', 'Arbor', 'Aurora', 'Civitas', 'Fortis', 'Gloria', 'Honor', 'Iuventus', 'Libertas', 'Lux', 'Magnus', 'Miles', 'Natura', 'Orbis', 'Patria', 'Pietas', 'Princeps', 'Rex', 'Roma', 'Sanctus', 'Sol', 'Terra', 'Unda', 'Urbs', 'Vita', 'Voluntas']
      },
      {
        id: 'Etruscan',
        words: ['Tukul', 'Pelen', 'Turur', 'Kainu', 'Veleli', 'Velth', 'Caire', 'Cales', 'Trachas', 'Spuri', 'Larth', 'Tarquin', 'Velcha', 'Rasna', 'Tinia', 'Fufluns', 'Selvans', 'Charun', 'Thesan', 'Uni', 'Aita', 'Aplu', 'Atunis', 'Calu', 'Culsu', 'Etruria', 'Hercle', 'Lasa', 'Menrva', 'Nethuns', 'Phersu', 'Sethlans', 'Tarchon', 'Thalna', 'Tuchulcha', 'Vanth', 'Veive', 'Velth', 'Vipina', 'Zimra', 'Alpan', 'Aritimi', 'Arun', 'Epiur', 'Faland', 'Leinth', 'Malthi', 'Murina', 'Rath', 'Tul']
      },
      {
        id: 'Oscan',
        words: ['Brent', 'Dodon', 'Vesuv', 'Flusiu', 'Bantian', 'Pacstan', 'Mummis', 'Pupiu', 'Kuvaf', 'Aisarna', 'Herentas', 'Meddix', 'Niumsis', 'Safinim', 'Touto', 'Víteliú', 'Sakrim', 'Hirpus', 'Mefitis', 'Kunna', 'Anim', 'Arentare', 'Armentum', 'Ati', 'Aukl', 'Bant', 'Capua', 'Ceres', 'Dunum', 'Ekkum', 'Faalum', 'Fan', 'Hera', 'Hum', 'Iuvila', 'Kaisr', 'Kra', 'Lup', 'Maras', 'Nuvlan', 'Paak', 'Pompeii', 'Praist', 'Rufr', 'Sakara', 'Samn', 'Tever', 'Vestin', 'Viteli', 'Zik']
      },
      {
        id: 'Ligurian',
        words: ['Ligus', 'Medu', 'Tigullia', 'Intemelius', 'Voc', 'Olas', 'Turre', 'Maritima', 'Umbria', 'Cervteri', 'Alba', 'Genua', 'Ventimiglia', 'Albium', 'Segusio', 'Veleia', 'Bormio', 'Cemenelum', 'Luna', 'Pisa', 'Aqua', 'Bard', 'Berg', 'Brig', 'Cava', 'Cen', 'Dert', 'Elva', 'Era', 'Fris', 'Gav', 'Iria', 'Laus', 'Lema', 'Ligor', 'Mago', 'Mant', 'Mon', 'Nava', 'Nim', 'Olbia', 'Orba', 'Peda', 'Pola', 'Riv', 'Sab', 'Sena', 'Tib', 'Vara', 'Vint']
      },
      {
        id: 'Mycenaean',
        words: ['Me-ta-ku', 'Pi-ro-pa-ta', 'A-ki-re-u', 'Tirintha', 'Da-ma-te', 'O-pe-te-ro', '-re-ke', 'Pylos', 'Ko-re-te', 'Thespia', 'Wa-na-ka', 'E-qe-ta', 'Ra-wa-ke-ta', 'Te-o', 'A-pi-me-de', 'Ku-pi-ri-jo', 'Mi-ra-ti-ja', 'Ke-re-si-jo', 'Pa-ka-na', 'To-so', 'A-ko-so', 'A-re-pa', 'A-si-wi-ja', 'Da-i-pi', 'Di-wi-ja', 'E-ra', 'E-ri-ku', 'E-te-wo-ke', 'E-u-me', 'Go-u-ko', 'Ka-ke', 'Ko-ri', 'Ku-ru-so', 'Ma-na', 'Me-ri', 'Ne-wa', 'O-pa', 'Pa-ra', 'Pe-re', 'Po-se-da', 'Ra-pi', 'Sa-ra', 'Se-re-mo', 'Ta-mi', 'Te-ko', 'Ti-ri', 'U-pa', 'Wa-to', 'We-to', 'Wi-ka']
      },
      {
        id: 'Venetic',
        words: ['Meg', 'Ued', 'Veled', 'Lupi', 'Kadri', 'Tur', 'Veleda', 'Veleta', 'Satres', 'Kaikna', 'Reitia', 'Loudera', 'Vhugas', 'Trumusiati', 'Ekupetaris', 'Vineti', 'Voltiomnos', 'Kanales', 'Tolar', 'Vhugos', 'Aisus', 'Alk', 'Arut', 'Bona', 'Cava', 'Dona', 'Eka', 'Fal', 'Gamo', 'Hel', 'Iku', 'Kal', 'Lau', 'Mau', 'Nau', 'Ola', 'Pala', 'Quar', 'Ruma', 'Sala', 'Tala', 'Ula', 'Vara', 'Wara', 'Xalo', 'Yama', 'Zama', 'Kuta', 'Meta', 'Pisa', 'Ruta']
      }
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