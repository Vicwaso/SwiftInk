// ─── CONFIG ──────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "254111506710";
const EMAIL = "hello@swiftink.co.ke";

// ─── SERVICES DATA ───────────────────────────────────────────────────────────
const services = {
  eulogies: {
    title: "Eulogies",
    eyebrow: "Memorial programmes & funeral booklets",
    minOrder: "100 copies",
    tagline: "Sensitive, polished memorial printing when families need it most.",
    description: "SwiftInk designs and prints funeral programmes, eulogy booklets, tribute cards, and memorial keepsakes with care, speed, and professionalism.",
    formats: ["A5 booklet", "A4 folded programme", "Single-fold card", "Tribute card", "Order of service booklet"],
    finishes: ["Gloss cover", "Matte cover", "Staple binding", "Lamination on request"],
    turnaround: "Same-day or next-day options available depending on quantity and artwork readiness.",
  },
  weddings: {
    title: "Wedding Cards",
    eyebrow: "Invitations, RSVP inserts & thank-you cards",
    minOrder: "100 copies",
    tagline: "Elegant wedding stationery customised to your theme.",
    description: "From classic invitation cards to modern RSVP inserts and order-of-service booklets, we help couples create beautiful print pieces for their big day.",
    formats: ["Invitation cards", "RSVP inserts", "Thank-you cards", "Order-of-service booklets", "Envelope cards"],
    finishes: ["Matte", "Gloss", "Laminate", "Textured paper", "Rounded corners"],
    turnaround: "Usually 2-5 working days after design approval, depending on finishing and quantity.",
  },
  posters: {
    title: "Posters",
    eyebrow: "Indoor and outdoor posters",
    minOrder: "Poster designs",
    tagline: "Bold poster designs for events, announcements, promotions, and notices.",
    description: "SwiftInk creates poster designs and prints posters in common and custom sizes for businesses, churches, schools, campaigns, and community events.",
    formats: ["A3", "A2", "A1", "A0", "Custom size"],
    finishes: ["Standard poster paper", "Heavy paper", "Lamination", "Gloss finish"],
    turnaround: "Printing usually takes 1-3 working days after artwork approval.",
  },
  banners: {
    title: "Banners",
    eyebrow: "Rollup, flex and mesh banners",
    minOrder: "1 piece",
    tagline: "Large-format branding that gets noticed.",
    description: "We produce professional banners for exhibitions, events, storefronts, product launches, church events, and promotional campaigns.",
    formats: ["Pull-up banner", "Rollup banner", "Flex banner", "Mesh banner", "Custom event banner"],
    finishes: ["Matte banner material", "Outdoor flex", "Mesh", "Eyelets", "Stand included on request"],
    turnaround: "Typically 1-3 working days depending on size and finishing.",
  },
  wraps: {
    title: "Office Window Wraps",
    eyebrow: "Glass branding and privacy films",
    minOrder: "1 piece",
    tagline: "Turn office glass into branded, professional space.",
    description: "SwiftInk designs, prints, and installs vinyl graphics for office doors, windows, partitions, and storefront glass.",
    formats: ["Frosted vinyl", "Full-colour vinyl", "Perforated see-through film", "Door branding", "Partition branding"],
    finishes: ["Frosted film", "Full-colour print", "One-way vision", "Contour cut vinyl"],
    turnaround: "Production and installation scheduled after quote approval.",
  },
  businesscards: {
    title: "Business Cards",
    eyebrow: "Standard and custom business cards",
    minOrder: "200 copies",
    tagline: "Make every introduction look professional.",
    description: "We print sharp, professional business cards for individuals, teams, startups, churches, SMEs, and corporate clients.",
    formats: ["Standard size", "Custom size", "Single-sided", "Double-sided", "Rounded corners"],
    finishes: ["300gsm", "350gsm", "Gloss", "Matte", "Spot UV on request"],
    turnaround: "Usually 1-3 working days after design approval.",
  },
  flyers: {
    title: "Flyers & Brochures",
    eyebrow: "Marketing flyers, bi-folds and tri-folds",
    minOrder: "Flyers: 100 copies · Brochures: 50 copies",
    tagline: "Clear, colourful marketing print for promotions and events.",
    description: "SwiftInk prints single-page flyers, menus, event handouts, company brochures, and product brochures in small and bulk quantities.",
    formats: ["A5 flyers", "A4 flyers", "Bi-fold brochures", "Tri-fold brochures", "Menus"],
    finishes: ["Gloss paper", "Matte paper", "Heavy paper", "Folded brochure", "Lamination on request"],
    turnaround: "Usually 1-4 working days depending on quantity and finishing.",
  },
  idcards: {
    title: "ID Cards & Badges",
    eyebrow: "PVC cards, event badges and lanyards",
    minOrder: "50 copies",
    tagline: "Professional identification for teams, schools, churches, and events.",
    description: "We create durable ID cards and badges for organisations that need clean identification, visitor badges, staff cards, and event access cards.",
    formats: ["PVC ID cards", "Printed laminated cards", "Event badges", "Staff cards", "Visitor badges"],
    finishes: ["PVC", "Laminated card", "Single-sided", "Double-sided", "Lanyards on request"],
    turnaround: "Small batches completed quickly after approval.",
  },
  caketickets: {
    title: "Cake Tickets",
    eyebrow: "Custom cake tickets & event labels",
    minOrder: "50 tickets",
    tagline: "Beautiful printed cake tickets for weddings, birthdays, and special events.",
    description: "SwiftInk designs and prints custom cake tickets, cupcake toppers, dessert labels, and event food tags.",
    formats: ["Standard cake ticket (2x3 inch)", "Cupcake toppers", "Buffet labels", "Dessert tags", "Custom size"],
    finishes: ["Matte paper", "Gloss finish", "Card stock 250gsm", "Lamination on request", "Corner rounding"],
    turnaround: "Usually 2-4 working days after design approval.",
  },
};

// ─── PRICING DATA ────────────────────────────────────────────────────────────
const pricingData = [
  { service: "Eulogies", items: ["100 copies A5 booklet from KSh 3,500", "Same-day rush available", "Design assistance from KSh 800"] },
  { service: "Wedding Cards", items: ["100 cards from KSh 4,000", "Custom design from KSh 1,200", "Bulk discounts available"] },
  { service: "Business Cards", items: ["200 cards from KSh 1,500", "350gsm matte or gloss", "Design from KSh 500"] },
  { service: "Banners", items: ["Rollup 85×200cm from KSh 3,500", "Flex banner per sqm from KSh 400", "Stand available on request"] },
  { service: "Posters", items: ["A3 from KSh 200", "A2 from KSh 350", "Bulk pricing available"] },
  { service: "Flyers & Brochures", items: ["100 A5 flyers from KSh 1,200", "Tri-fold 50 copies from KSh 1,800", "Design from KSh 500"] },
  { service: "ID Cards & Badges", items: ["50 PVC cards from KSh 3,000", "Laminated cards 50 pcs from KSh 1,500", "Lanyards on request"] },
  { service: "Office Window Wraps", items: ["Quoted per square metre", "Frosted or full-colour vinyl", "Installation included on request"] },
  { service: "Cake Tickets", items: ["50 tickets from KSh 800", "Custom shapes available", "Design from KSh 400"] },
];

// ─── PORTFOLIO ITEMS ─────────────────────────────────────────────────────────
const portfolioItems = [
  { category: "eulogies", label: "Eulogy Programme", color: "#6b7280" },
  { category: "weddings", label: "Wedding Invitation", color: "#d97706" },
  { category: "banners", label: "Event Banner", color: "#2563eb" },
  { category: "businesscards", label: "Business Card", color: "#7c3aed" },
  { category: "flyers", label: "Event Flyer", color: "#059669" },
  { category: "posters", label: "Promo Poster", color: "#dc2626" },
  { category: "idcards", label: "Staff ID Card", color: "#0891b2" },
  { category: "wraps", label: "Office Window Wrap", color: "#9d174d" },
  { category: "weddings", label: "RSVP Insert", color: "#b45309" },
  { category: "flyers", label: "Restaurant Menu", color: "#15803d" },
  { category: "eulogies", label: "Memorial Booklet", color: "#374151" },
  { category: "businesscards", label: "Premium Business Card", color: "#4f46e5" },
];

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function navigateTo(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active-page"));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active-page");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.getElementById("mobileMenu").classList.remove("open");
}

function wireNavButtons() {
  document.querySelectorAll("[data-page-link]").forEach(btn => {
    btn.addEventListener("click", () => navigateTo(btn.dataset.pageLink));
  });
}

// ─── THEME ───────────────────────────────────────────────────────────────────
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  const icon = isDark ? "☀️" : "🌙";
  ["themeIcon", "mobileThemeIcon"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = icon;
  });
  ["themeKnob", "mobileThemeKnob"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.transform = isDark ? "translateX(28px)" : "translateX(0)";
  });
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function initTheme() {
  if (localStorage.getItem("theme") === "dark") toggleTheme();
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuButton");
  const menu = document.getElementById("mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("open"));
  }
}

// ─── HOME SERVICES ───────────────────────────────────────────────────────────
function renderHomeServices() {
  const grid = document.getElementById("homeServices");
  if (!grid) return;
  const keys = Object.keys(services).slice(0, 4);
  grid.innerHTML = keys.map(key => {
    const s = services[key];
    return `<article class="service-card" onclick="openService('${key}')">
      <h3>${s.title}</h3>
      <p>${s.tagline}</p>
      <span class="card-link">Learn more →</span>
    </article>`;
  }).join("");
}

// ─── SERVICES GRID ───────────────────────────────────────────────────────────
function renderServicesGrid() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = Object.entries(services).map(([key, s]) => `
    <article class="service-card" onclick="openService('${key}')">
      <h3>${s.title}</h3>
      <p class="eyebrow">${s.eyebrow}</p>
      <p>${s.tagline}</p>
      <p><small>Min order: ${s.minOrder}</small></p>
      <span class="card-link">View details →</span>
    </article>`).join("");
}

// ─── SERVICE DETAIL ──────────────────────────────────────────────────────────
function openService(key) {
  const s = services[key];
  if (!s) return;

  document.getElementById("serviceHero").innerHTML = `
    <div class="container">
      <p class="eyebrow">${s.eyebrow}</p>
      <h1>${s.title}</h1>
      <p>${s.tagline}</p>
    </div>`;

  document.getElementById("serviceContent").innerHTML = `
    <div>
      <h2>About this service</h2>
      <p>${s.description}</p>
      <h3>Formats available</h3>
      <ul>${s.formats.map(f => `<li>${f}</li>`).join("")}</ul>
      <h3>Finishing options</h3>
      <ul>${s.finishes.map(f => `<li>${f}</li>`).join("")}</ul>
      <h3>Turnaround</h3>
      <p>${s.turnaround}</p>
      <br/>
      <button class="outline-button" onclick="navigateTo('services')">← Back to all services</button>
    </div>`;

  document.getElementById("serviceQuoteForm").innerHTML = buildQuoteForm(key, s);
  wireQuoteForm("quoteForm_" + key, s.title);
  navigateTo("serviceDetail");
}

// ─── QUOTE FORM ──────────────────────────────────────────────────────────────
function buildQuoteForm(key, s) {
  return `
    <div class="quote-form-box">
      <h3>Request a quote</h3>
      <p>Fill in the details and we'll reply on WhatsApp.</p>
      <form id="quoteForm_${key}">
        <label>Your name<input type="text" name="name" placeholder="e.g. Jane Mwangi" required /></label>
        <label>Phone / WhatsApp<input type="tel" name="phone" placeholder="+254..." required /></label>
        <label>Format
          <select name="format">${s.formats.map(f => `<option>${f}</option>`).join("")}</select>
        </label>
        <label>Quantity<input type="number" name="quantity" placeholder="e.g. 200" min="1" /></label>
        <label>Finishing
          <select name="finish">${s.finishes.map(f => `<option>${f}</option>`).join("")}</select>
        </label>
        <label>Deadline<input type="date" name="deadline" /></label>
        <label>Do you have artwork ready?
          <select name="artwork">
            <option>Yes, artwork is ready</option>
            <option>No, I need design help</option>
            <option>I have photos/text only</option>
          </select>
        </label>
        <label>Additional notes<textarea name="notes" rows="3" placeholder="Any special requirements?"></textarea></label>
        <button type="submit" class="primary-button">Send quote on WhatsApp</button>
      </form>
    </div>`;
}

function wireQuoteForm(formId, serviceTitle) {
  setTimeout(() => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const msg =
        `Hi SwiftInk! I'd like a quote for *${serviceTitle}*.\n\n` +
        `Name: ${d.name}\n` +
        `Phone: ${d.phone}\n` +
        `Format: ${d.format}\n` +
        `Quantity: ${d.quantity || "TBD"}\n` +
        `Finish: ${d.finish}\n` +
        `Deadline: ${d.deadline || "TBD"}\n` +
        `Artwork: ${d.artwork}\n` +
        `Notes: ${d.notes || "None"}`;
      openWhatsApp(msg);
    });
  }, 100);
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
function renderContactForm() {
  const el = document.getElementById("contactQuoteForm");
  if (!el) return;
  el.innerHTML = `
    <div class="quote-form-box">
      <h3>Get a quote</h3>
      <p>Tell us what you need and we'll respond quickly.</p>
      <form id="mainContactForm">
        <label>Your name<input type="text" name="name" placeholder="e.g. John Kamau" required /></label>
        <label>Phone / WhatsApp<input type="tel" name="phone" placeholder="+254..." required /></label>
        <label>Service needed
          <select name="service">
            ${Object.values(services).map(s => `<option>${s.title}</option>`).join("")}
            <option>Other / Not sure</option>
          </select>
        </label>
        <label>Quantity<input type="number" name="quantity" placeholder="e.g. 500" min="1" /></label>
        <label>Deadline<input type="date" name="deadline" /></label>
        <label>Do you have artwork ready?
          <select name="artwork">
            <option>Yes, artwork is ready</option>
            <option>No, I need design help</option>
            <option>I have photos/text only</option>
          </select>
        </label>
        <label>Details<textarea name="notes" rows="4" placeholder="Describe size, finish, urgency, etc."></textarea></label>
        <button type="submit" class="primary-button">Send on WhatsApp</button>
      </form>
    </div>`;

  document.getElementById("mainContactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(this));
    const msg =
      `Hi SwiftInk! I'd like to place an order / get a quote.\n\n` +
      `Name: ${d.name}\n` +
      `Phone: ${d.phone}\n` +
      `Service: ${d.service}\n` +
      `Quantity: ${d.quantity || "TBD"}\n` +
      `Deadline: ${d.deadline || "TBD"}\n` +
      `Artwork: ${d.artwork}\n` +
      `Details: ${d.notes || "None"}`;
    openWhatsApp(msg);
  });
}

// ─── PORTFOLIO ───────────────────────────────────────────────────────────────
function renderPortfolio(filter) {
  filter = filter || "all";
  const categories = ["all", ...new Set(portfolioItems.map(i => i.category))];

  const filterBar = document.getElementById("portfolioFilters");
  if (filterBar) {
    filterBar.innerHTML = categories.map(c => {
      const label = c === "all" ? "All" : (services[c] ? services[c].title : c);
      return `<button class="filter-btn ${filter === c ? "active" : ""}" onclick="renderPortfolio('${c}')">${label}</button>`;
    }).join("");
  }

  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;
  const items = filter === "all" ? portfolioItems : portfolioItems.filter(i => i.category === filter);
  grid.innerHTML = items.map(item => `
    <article class="portfolio-item" style="border: 1px solid ${item.color}40;">
      <div class="portfolio-thumb" style="background:${item.color}20; color:${item.color};">
        <p>🖨</p>
        <p>Photo coming soon</p>
      </div>
      <div class="portfolio-label">
        <strong>${item.label}</strong>
        <span>${services[item.category] ? services[item.category].title : item.category}</span>
      </div>
    </article>`).join("");
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
function renderPricing() {
  const grid = document.getElementById("pricingGrid");
  if (!grid) return;
  grid.innerHTML = pricingData.map(p => `
    <article class="pricing-card">
      <h3>${p.service}</h3>
      <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
      <button class="outline-button" onclick="navigateTo('contact')">Get exact quote</button>
    </article>`).join("");
}

// ─── LEGAL PAGES ─────────────────────────────────────────────────────────────
function renderLegalPages() {
  const privacy = document.getElementById("privacy");
  if (privacy) privacy.innerHTML = `
    <div class="page-hero"><div class="container"><p class="eyebrow">Legal</p><h1>Privacy Policy</h1></div></div>
    <div class="section container legal-content">
      <p>SwiftInk collects only the information needed to process your print order — your name, phone number, and any artwork or files you share. We do not sell or share your personal data with third parties.</p>
      <p>Files shared for production are used solely for that purpose and deleted after the job is complete.</p>
      <p>For questions: <a href="mailto:hello@swiftink.co.ke">hello@swiftink.co.ke</a></p>
    </div>`;

  const terms = document.getElementById("terms");
  if (terms) terms.innerHTML = `
    <div class="page-hero"><div class="container"><p class="eyebrow">Legal</p><h1>Terms & Conditions</h1></div></div>
    <div class="section container legal-content">
      <ul>
        <li>A 40% deposit is required before production begins.</li>
        <li>Final balance is due before delivery or collection.</li>
        <li>SwiftInk is not liable for errors in client-submitted content.</li>
        <li>A digital proof is shared for approval before printing.</li>
        <li>SwiftInk reserves the right to decline any order.</li>
      </ul>
      <p>For questions: <a href="mailto:hello@swiftink.co.ke">hello@swiftink.co.ke</a></p>
    </div>`;

  const refund = document.getElementById("refund");
  if (refund) refund.innerHTML = `
    <div class="page-hero"><div class="container"><p class="eyebrow">Legal</p><h1>Refund & Revision Policy</h1></div></div>
    <div class="section container legal-content">
      <ul>
        <li>Once printing has started, orders cannot be cancelled or refunded.</li>
        <li>If the error is on SwiftInk's side (wrong quantity, colour, or size), we will reprint or refund at no charge.</li>
        <li>Design revisions are included up to 2 rounds. Further revisions are charged separately.</li>
        <li>The client is responsible for approving the proof. SwiftInk is not liable for client-approved errors.</li>
      </ul>
      <p>For disputes: <a href="mailto:hello@swiftink.co.ke">hello@swiftink.co.ke</a></p>
    </div>`;
}

// ─── LIVE CHAT ───────────────────────────────────────────────────────────────
function initChat() {
  const openBtn = document.getElementById("openChat");
  const closeBtn = document.getElementById("closeChat");
  const panel = document.getElementById("chatPanel");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");
  const waLink = document.getElementById("chatWhatsapp");

  if (!openBtn) return;

  openBtn.addEventListener("click", () => {
    panel.classList.toggle("open");
    if (panel.classList.contains("open") && messages.children.length === 0) {
      addChatMessage("agent", "Hi! 👋 Welcome to SwiftInk. What can we help you print today?");
    }
  });

  closeBtn.addEventListener("click", () => panel.classList.remove("open"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addChatMessage("user", text);
    input.value = "";
    waLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      addChatMessage("agent", "Thanks! Click the WhatsApp button below to continue with our team directly. 📲");
    }, 800);
  });
}

function addChatMessage(sender, text) {
  const messages = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg " + sender;
  div.innerHTML = `<span>${text}</span>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// ─── UTILS ───────────────────────────────────────────────────────────────────
function openWhatsApp(message) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initTheme();
  initMobileMenu();
  wireNavButtons();
  renderHomeServices();
  renderServicesGrid();
  renderPortfolio();
  renderPricing();
  renderContactForm();
  renderLegalPages();
  initChat();
  navigateTo("home");
});
