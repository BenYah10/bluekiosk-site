// ==========================
// BlueKiosk - script.js (bilingue + submit form + success)
// ==========================

// ---- i18n dictionnaires ----
const I18N = {
  fr: {
    "meta.title": "BlueKiosk.tech - Solution de désinfection de gourdes",
    "hero.title": "Votre gourde est un nid à bactéries",
    "hero.subtitle": "Découvrez la solution innovante qui élimine 99,99% des germes en moins de 2 minutes. Donnez votre avis pour nous aider à révolutionner l'hygiène dans les salles de sport !",
    "hero.cta": "Je donne mon avis",
    "problem.title": "Le problème invisible",
    "problem.h3": "Votre gourde peut être jusqu'à 100 000 fois plus sale qu'un siège de toilette",
    "problem.p1": "Les environnements chauds et humides comme l'intérieur d'une gourde sont le terrain de jeu parfait pour les bactéries (E. coli, Staphylocoques, Pseudomonas), les moisissures et les levures.",
    "problem.f1": "+ de 300 000 UFC (Unités Formant Colonie) peuvent se développer sur un bouchon en 24h.",
    "problem.f2": "Une gourde mal nettoyée peut contenir plus de bactéries qu'un smartphone ou qu'une gamelle de chien.",
    "problem.f3": "Jusqu'à 99.99% des germes ne sont pas éliminés par un simple rinçage à l'eau.",
    "problem.cons.title": "Conséquences :",
    "problem.cons.body": "Risques de maux de tête, maux de ventre, gastro-entérites, infections cutanées... Votre performance sportive et votre santé sont en jeu.",
    "solution.title": "Notre solution révolutionnaire",
    "solution.tagline": "Hygiene powered by clean tech",
    "solution.p1": "Notre machine de désinfection en libre-service <strong>éradique 99.99%</strong> des virus et bactéries de votre <strong>gourde et de son bouchon</strong>. Simple, rapide et efficace, elle s'intègre parfaitement dans votre routine sportive.",
    "solution.b1": "<strong>Désinfection Professionnelle :</strong> Technologie brevetée, fiable et performante, conçue en conformité avec l'ensemble des normes et certifications réglementaires en vigueur",
    "solution.b2": "<strong>Rapide et Efficace :</strong> Cycle complet en <mark>moins de 2 minutes</mark>",
    "solution.b3": "<strong>Écologique :</strong> Réduisez votre consommation de plastique en réutilisant votre gourde en toute sécurité",
    "solution.b4": "<strong>Libre-Service :</strong> Interface intuitive, paiement sans contact disponible 24/7.",
    "how.title": "Comment ça marche ?",
    "how.caption": "Notre technologie brevetée assure une désinfection complète en moins de 2 minutes",
    "how.s1.t": "Insérez", "how.s1.p": "Ouvrez le hublot et placez votre gourde et son bouchon à l'intérieur de la machine.",
    "how.s2.t": "Lancez",  "how.s2.p": "Sélectionnez le cycle sur l'écran tactile et validez le démarrage.",
    "how.s3.t": "Récupérez","how.s3.p": "En moins de 2 minutes, récupérez votre gourde parfaitement désinfectée, propre et sèche.",
    "form.title": "Aidez-nous à révolutionner l'hygiène sportive !",
    "form.intro": "Votre avis est crucial pour finaliser notre prototype. Répondez à ce petit questionnaire de 3 minutes et participez à l'aventure BlueKiosk.tech !",
    "select.placeholder": "Sélectionnez une option",
    "q.frequency.label": "À quelle fréquence allez-vous à la salle de sport ? *",
    "q.frequency.less": "Moins d'une fois par semaine",
    "q.frequency.1-2": "1 à 2 fois par semaine",
    "q.frequency.3-4": "3 à 4 fois par semaine",
    "q.frequency.5+": "5 fois ou plus par semaine",
    "q.bottle.label": "Quel type de gourde utilisez-vous ? *",
    "q.bottle.plastic": "Plastique",
    "q.bottle.aluminum": "Aluminium/inox",
    "q.bottle.glass": "Verre",
    "q.bottle.ceramic": "Céramique",
    "q.clean.label": "À quelle fréquence nettoyez-vous votre gourde ? (Pas avec simplement de l'eau) *",
    "q.clean.after": "Après chaque utilisation",
    "q.clean.3days": "Une fois chaque 3 jours",
    "q.clean.week": "Une fois par semaine",
    "q.clean.rarely": "Rarement",
    "q.clean.never": "Jamais",
    "q.concern.label": "Le manque d'hygiène des gourdes en salle de sport vous inquiète-t-il ? *",
    "q.concern.low": "Pas du tout",
    "q.concern.high": "Extrêmement",
    "q.willing.label": "Seriez-vous prêt à payer un petit fee pour ce service ? Un abonnement mensuel ou par utilisation *",
    "q.willing.yes": "Oui",
    "q.willing.no": "Non",
    "q.willing.maybe": "Pourquoi pas",
    "q.price.label": "Choisissez le prix que vous voyez juste pour un abonnement mensuel ? *",
    "q.price.35": "34.99$",
    "q.price.30": "29.99$",
    "q.price.25": "24.99$",
    "q.price.20": "19.99$",
    "q.loc.label": "Où aimeriez-vous trouver nos machines ? *",
    "q.loc.locker": "Près des vestiaires",
    "q.loc.entrance": "À l'entrée",
    "q.loc.cardio": "Dans la zone cardio",
    "q.loc.water": "Près des fontaines à eau",
    "q.email.label": "Souhaitez-vous suivre notre actualité ? Laissez-nous votre email (optionnel)",
    "q.comments.label": "Avez-vous des commentaires ou des suggestions ?",
    "q.comments.ph": "Vos idées nous intéressent...",
    "form.submit": "Envoyer mon avis",
    "form.thanks": "Merci ! Vos réponses ont été enregistrées.",
    "form.success.title": "Merci pour votre contribution précieuse !",
    "form.success.desc": "Votre avis a été transmis avec succès à notre équipe et nous aide à perfectionner notre solution.",
    "form.success.next.title": "Prochaines étapes :",
    "form.success.next.l1": "Notre équipe analysera vos retours dans les plus brefs délais",
    "form.success.next.l2": "Vous recevrez bientôt des nouvelles sur l'avancement du projet",
    "form.success.next.l3": "Soyez parmi les premiers à tester notre solution de désinfection innovante",
    "form.success.closing": "L'équipe BlueKiosk.tech vous remercie pour votre confiance."
  },
  en: {
    "meta.title": "BlueKiosk.tech - Bottle disinfection solution",
    "hero.title": "Your bottle is a bacteria hotspot",
    "hero.subtitle": "Discover the solution that removes 99.99% of germs in under 2 minutes. Share your opinion to help us reinvent hygiene in gyms!",
    "hero.cta": "Give feedback",
    "problem.title": "The invisible problem",
    "problem.h3": "Your bottle can be up to 100,000× dirtier than a toilet seat",
    "problem.p1": "Warm, humid environments inside bottles are perfect for bacteria (E. coli, Staphylococcus, Pseudomonas), molds and yeasts.",
    "problem.f1": "300k+ CFU (colony forming units) can develop on a cap in 24h.",
    "problem.f2": "A poorly cleaned bottle can host more bacteria than a smartphone or a pet bowl.",
    "problem.f3": "Up to 99.99% of germs aren’t removed by a simple water rinse.",
    "problem.cons.title": "Consequences:",
    "problem.cons.body": "Risk of headaches, stomach aches, gastroenteritis, skin infections… Your performance and health are at stake.",
    "solution.title": "Our revolutionary solution",
    "solution.tagline": "Hygiene powered by clean tech",
    "solution.p1": "Our self-service disinfection machine <strong>eliminates 99.99%</strong> of viruses and bacteria from your <strong>bottle and cap</strong>. Simple, fast, effective — it fits into your routine.",
    "solution.b1": "<strong>Professional disinfection:</strong> Patented, reliable and high-performance technology, compliant with current standards and certifications.",
    "solution.b2": "<strong>Fast & efficient:</strong> Full cycle in <mark>under 2 minutes</mark>",
    "solution.b3": "<strong>Eco-friendly:</strong> Reduce plastic use by safely reusing your bottle",
    "solution.b4": "<strong>Self-service:</strong> Intuitive interface, contactless payment 24/7.",
    "how.title": "How does it work?",
    "how.caption": "Our patented technology ensures complete disinfection in under 2 minutes",
    "how.s1.t": "Insert", "how.s1.p": "Open the hatch and place your bottle and cap inside.",
    "how.s2.t": "Start",  "how.s2.p": "Select the cycle on the touchscreen and start.",
    "how.s3.t": "Collect","how.s3.p": "In under 2 minutes, collect a perfectly disinfected, clean and dry bottle.",
    "form.title": "Help us reinvent hygiene in sports!",
    "form.intro": "Your feedback is crucial to finalize our prototype. Answer this 3-minute survey and join the BlueKiosk.tech journey!",
    "select.placeholder": "Select an option",
    "q.frequency.label": "How often do you go to the gym? *",
    "q.frequency.less": "Less than once per week",
    "q.frequency.1-2": "1–2× per week",
    "q.frequency.3-4": "3–4× per week",
    "q.frequency.5+": "5× or more per week",
    "q.bottle.label": "What bottle type do you use? *",
    "q.bottle.plastic": "Plastic",
    "q.bottle.aluminum": "Aluminum/steel",
    "q.bottle.glass": "Glass",
    "q.bottle.ceramic": "Ceramic",
    "q.clean.label": "How often do you clean your bottle? (Not just water) *",
    "q.clean.after": "After each use",
    "q.clean.3days": "Once every 3 days",
    "q.clean.week": "Once a week",
    "q.clean.rarely": "Rarely",
    "q.clean.never": "Never",
    "q.concern.label": "Does poor bottle hygiene in gyms worry you? *",
    "q.concern.low": "Not at all",
    "q.concern.high": "Extremely",
    "q.willing.label": "Would you pay a small fee? Monthly or per-use *",
    "q.willing.yes": "Yes",
    "q.willing.no": "No",
    "q.willing.maybe": "Maybe",
    "q.price.label": "What monthly price feels right? *",
    "q.price.35": "$34.99",
    "q.price.30": "$29.99",
    "q.price.25": "$24.99",
    "q.price.20": "$19.99",
    "q.loc.label": "Where should we place the machine? *",
    "q.loc.locker": "Near lockers",
    "q.loc.entrance": "At the entrance",
    "q.loc.cardio": "Cardio zone",
    "q.loc.water": "Near water fountains",
    "q.email.label": "Want updates? Leave your email (optional)",
    "q.comments.label": "Any comments or suggestions?",
    "q.comments.ph": "We’d love to hear your ideas...",
    "form.submit": "Send my feedback",
    "form.thanks": "Thanks! Your responses have been recorded.",
    "form.success.title": "Thanks for your valuable contribution!",
    "form.success.desc": "Your feedback has been sent to our team and helps us refine our solution.",
    "form.success.next.title": "Next steps:",
    "form.success.next.l1": "Our team will analyze your feedback shortly",
    "form.success.next.l2": "You’ll soon get updates on the project",
    "form.success.next.l3": "Be among the first to test our innovative disinfection solution",
    "form.success.closing": "The BlueKiosk.tech team thanks you for your trust."
  }
};

// Lang courante + application
let currentLang = localStorage.getItem("lang") || (navigator.language && navigator.language.startsWith("fr") ? "fr" : "en");
function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  document.title = dict["meta.title"] || document.title;
  localStorage.setItem("lang", lang);
  currentLang = lang;
}

// ---- EmailJS (v3) ----
const EMAILJS_CONFIG = {
  USER_ID: "3QvY9XASuv6D2qIWH",          // <- garde tes IDs
  SERVICE_ID: "service_uez93g9",
  TEMPLATE_ID: "template_ytd4pg8"
};

// 1) Mets ici l'URL /exec de ton déploiement Apps Script
const SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw1J56pAEreUbolYiQ-hwPkTkOecxf0i15sRUpAX6aCBBC3TT2XpoYk2mnKQ1euJHiN/exec";


// 2) Construit l'objet avec EXACTEMENT les clés attendues par Code.gs
function buildSheetParams(fd) {
  return {
    frequency:           getFrequencyLabel(fd.get("frequency")),
    bottle_type:         getBottleTypeLabel(fd.get("bottle-type")),
    cleaning_frequency:  getCleaningFrequencyLabel(fd.get("cleaning-frequency")),
    concern:             fd.get("concern") ? Number(fd.get("concern")) : "",
    willingness:         ({ yes:3, maybe:2, no:1 }[fd.get("willingness")] ?? ""),
    price:               getPriceLabel(fd.get("prix")),
    location:            getLocationLabel(fd.get("location")),
    user_email:          fd.get("email") || "Non fourni",
    comments:            fd.get("comments") || ""
  };
}

// 3) Envoi vers la Web App (non bloquant dans ton code)
async function saveToSheet(payload) {
  try {
      await fetch(SHEET_WEB_APP_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    // si ton Apps Script renvoie { ok: true }, on peut tester :
    let data = null;
    try { data = await res.json(); } catch {}
    return res.ok && (!data || data.ok !== false);
  } catch (err) {
    console.warn("Sheet POST failed:", err);
    return false;
  }
}
// ---- Highlight bouton langue ----
function markActiveLang(lang){
  const fr = document.getElementById("lang-fr");
  const en = document.getElementById("lang-en");
  if (!fr || !en) return;
  fr.classList.toggle("is-active", lang === "fr");
  en.classList.toggle("is-active", lang === "en");
  fr.setAttribute("aria-pressed", String(lang === "fr"));
  en.setAttribute("aria-pressed", String(lang === "en"));
}

// ---------- Utils ----------
function validateEmail(email) {
  if (!email) return true;
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
}
function showError(fieldName) {
  const field = document.querySelector(`[name="${fieldName}"]`) || document.getElementById(fieldName);
  const label = document.querySelector(`label[for="${fieldName}"]`);
  const err = document.getElementById(`${fieldName}-error`);
  if (label) label.classList.add("error-label");
  if (field) field.classList.add("error");
  if (err) { err.style.display = "block"; err.textContent = currentLang === "fr" ? "Ce champ est requis" : "This field is required"; }
}
function hideError(fieldName) {
  const field = document.querySelector(`[name="${fieldName}"]`) || document.getElementById(fieldName);
  const label = document.querySelector(`label[for="${fieldName}"]`);
  const err = document.getElementById(`${fieldName}-error`);
  if (label) label.classList.remove("error-label");
  if (field) field.classList.remove("error");
  if (err) err.style.display = "none";
}

// ---------- Mapping (code -> libellé selon la langue) ----------
function getFrequencyLabel(v) {
  const m = { "less-than-once":"Moins d'une fois par semaine", "1-2":"1 à 2 fois par semaine", "3-4":"3 à 4 fois par semaine", "5-plus":"5 fois ou plus par semaine" };
  const e = { "less-than-once":"Less than once per week", "1-2":"1–2× per week", "3-4":"3–4× per week", "5-plus":"5× or more per week" };
  return (currentLang === "fr" ? m[v] : e[v]) || v || "—";
}
function getBottleTypeLabel(v) {
  const m = { plastic:"Plastique", aluminum:"Aluminium/acier", glass:"Verre", ceramic:"Céramique" };
  const e = { plastic:"Plastic",  aluminum:"Aluminum/steel", glass:"Glass", ceramic:"Ceramic" };
  return (currentLang === "fr" ? m[v] : e[v]) || v || "—";
}
function getCleaningFrequencyLabel(v) {
  const m = { "after-each-use":"Après chaque utilisation", "once-every-3-days":"Une fois chaque 3 jours", "once-week":"Une fois par semaine", "rarely":"Rarement", "never":"Jamais" };
  const e = { "after-each-use":"After each use", "once-every-3-days":"Once every 3 days", "once-week":"Once a week", "rarely":"Rarely", "never":"Never" };
  return (currentLang === "fr" ? m[v] : e[v]) || v || "—";
}
function getWillingnessLabel(v) {
  const m = { yes:"Oui", no:"Non", maybe:"Pourquoi pas" };
  const e = { yes:"Yes", no:"No",  maybe:"Maybe" };
  return (currentLang === "fr" ? m[v] : e[v]) || v || "—";
}
function getPriceLabel(v) {
  const m = { "35":"34.99$", "30":"29.99$", "25":"24.99$", "20":"19.99$" };
  const e = { "35":"$34.99", "30":"$29.99", "25":"$24.99", "20":"$19.99" };
  return (currentLang === "fr" ? m[v] : e[v]) || v || "—";
}
function getLocationLabel(v) {
  const m = { locker:"Près des vestiaires", "entrance":"À l'entrée", cardio:"Dans la zone cardio", water:"Près des fontaines à eau" };
  const e = { locker:"Near lockers", "entrance":"At the entrance", cardio:"Cardio zone", water:"Near water fountains" };
  return (currentLang === "fr" ? m[v] : e[v]) || v || "—";
}

// ---------- Payloads ----------
function buildTemplateParams(fd) {
  const userEmail = fd.get("email");
  let replyToEmail = "admin@bluekiosk.tech";
  if (userEmail && validateEmail(userEmail)) replyToEmail = userEmail;

  return {
    to_email: "admin@bluekiosk.tech",
    reply_to: replyToEmail,
    from_name: "BlueKiosk tech Team",
    subject: (currentLang === "fr" ? "Nouvel Avis Client - " : "New Customer Feedback - ") +
             new Date().toLocaleDateString(currentLang === "fr" ? "fr-FR" : "en-US"),
    frequency: getFrequencyLabel(fd.get("frequency")),
    bottle_type: getBottleTypeLabel(fd.get("bottle-type")),
    cleaning_frequency: getCleaningFrequencyLabel(fd.get("cleaning-frequency")),
    concern: fd.get("concern") ? fd.get("concern") + "/5" : (currentLang === "fr" ? "Non spécifié" : "Not specified"),
    willingness: getWillingnessLabel(fd.get("willingness")),
    price: getPriceLabel(fd.get("prix")),
    location: getLocationLabel(fd.get("location")),
    user_email: userEmail || (currentLang === "fr" ? "Non fourni" : "Not provided"),
    comments: fd.get("comments") || (currentLang === "fr" ? "Aucun commentaire" : "No comment"),
    submission_date: new Date().toLocaleString(currentLang === "fr" ? "fr-FR" : "en-US")
  };
}

const willingnessScore = { yes:3, maybe:2, no:1 };
function buildSheetParams(fd) {
  return {
    frequency: getFrequencyLabel(fd.get("frequency")),
    bottle_type: getBottleTypeLabel(fd.get("bottle-type")),
    cleaning_frequency: getCleaningFrequencyLabel(fd.get("cleaning-frequency")),
    concern: fd.get("concern") ? Number(fd.get("concern")) : "",
    willingness: willingnessScore[fd.get("willingness")] ?? "",
    price: getPriceLabel(fd.get("prix")),
    location: getLocationLabel(fd.get("location")),
    user_email: fd.get("email") || (currentLang === "fr" ? "Non fourni" : "Not provided"),
    comments: fd.get("comments") || "",
    submission_date: new Date().toLocaleString(currentLang === "fr" ? "fr-FR" : "en-US")
  };
}

// ---------- EmailJS ----------
function initializeEmailJS() {
  if (typeof emailjs === "undefined") return false;
  try { emailjs.init(EMAILJS_CONFIG.USER_ID); return true; } catch { return false; }
}
async function sendFeedbackEmail(formData) {
  const initialized = initializeEmailJS();
  if (!initialized) return { success:false };
  try {
    const params = buildTemplateParams(formData);
    // Nettoyage de base des types (EmailJS v3 tolère des strings)
    Object.keys(params).forEach(k => { if (params[k] == null) params[k] = ""; params[k] = String(params[k]); });
    const resp = await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, params);
    console.log("EmailJS:", resp);
    return { success:true };
  } catch (e) {
    console.error("EmailJS error:", e);
    return { success:false };
  }
}

// ---------- Sheets (non bloquant) ----------
async function saveToSheet(payload) {
  if (!SHEET_ENDPOINT || !/^https?:\/\//.test(SHEET_ENDPOINT)) return;
  try {
    // IMPORTANT : pas de Content-Type pour éviter preflight CORS
    await fetch(SHEET_ENDPOINT, { method: "POST", body: JSON.stringify(payload) });
  } catch (err) {
    console.warn("Sheet POST failed (non bloquant):", err);
  }
}

// ---------- Main ----------
document.addEventListener("DOMContentLoaded", () => {
  // i18n + switch
  applyI18n(currentLang);
  markActiveLang(currentLang);
  document.getElementById("lang-fr")?.addEventListener("click", () => { applyI18n("fr"); markActiveLang("fr"); });
  document.getElementById("lang-en")?.addEventListener("click", () => { applyI18n("en"); markActiveLang("en"); });

  const form = document.getElementById("feedback-form");
  const successMessage = document.getElementById("success-message");
  if (!form) return;

  // cacher erreurs à la saisie
  form.querySelectorAll("select, input, textarea").forEach(el => {
    el.addEventListener("input", () => hideError(el.name || el.id));
    if (el.type === "radio") {
      el.addEventListener("change", () => hideError(el.name));
    }
  });

  function validateForm() {
    let ok = true;
    const requiredSelects = ["frequency","bottle-type","cleaning-frequency","willingness","prix","location"];
    requiredSelects.forEach(name => {
      const field = form.querySelector(`[name="${name}"]`);
      if (!field || !field.value) { ok = false; showError(name); }
    });
    // radios concern
    const concernRadios = form.querySelectorAll('input[name="concern"]');
    if (!Array.from(concernRadios).some(r => r.checked)) { ok = false; showError("concern"); }
    // email format si rempli
    const email = form.querySelector('#email')?.value;
    if (email && !validateEmail(email)) {
      ok = false;
      const err = document.getElementById("email-error");
      if (err) { err.style.display = "block"; err.textContent = currentLang === "fr" ? "Email invalide" : "Invalid email"; }
    }
    return ok;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // reset erreurs
    form.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
    form.querySelectorAll(".error").forEach(el => el.classList.remove("error"));

    if (!validateForm()) return;

    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = currentLang === "fr" ? "Envoi..." : "Sending..."; }

    try {
      const fd = new FormData(form);
      // Sheets (en parallèle, non bloquant)
      saveToSheet(buildSheetParams(fd));
      // Email (attendu)
      const emailOk = await sendFeedbackEmail(fd);

      if (emailOk.success) {
        // Affiche le succès
        if (successMessage) {
          successMessage.style.display = "block";
          successMessage.scrollIntoView({ behavior: "smooth" });
        } else {
          alert(currentLang === "fr" ? "Merci ! Vos réponses ont été enregistrées." : "Thanks! Your responses have been recorded.");
        }
        // Reset + réactiver bouton après qq secondes
        setTimeout(() => {
          form.reset();
          if (successMessage) successMessage.style.display = "none";
          if (btn) { btn.disabled = false; btn.textContent = I18N[currentLang]["form.submit"]; }
        }, 5000);
      } else {
        alert(currentLang === "fr" ? "Une erreur est survenue lors de l'envoi de l'email." : "An error occurred while sending the email.");
        if (btn) { btn.disabled = false; btn.textContent = I18N[currentLang]["form.submit"]; }
      }
    } catch (err) {
      console.error(err);
      alert(currentLang === "fr" ? "Erreur inattendue." : "Unexpected error.");
      if (btn) { btn.disabled = false; btn.textContent = I18N[currentLang]["form.submit"]; }
    }
  });
});
