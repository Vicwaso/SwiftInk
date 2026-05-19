const WHATSAPP_NUMBER = "254111506710";
const EMAIL = "hello@swiftink.co.ke";

const services = {
  eulogies: {
    title: "Eulogies",
    eyebrow: "Memorial programmes & funeral booklets",
    minOrder: "100 copies",
    tagline: "Sensitive, polished memorial printing when families need it most.",
    description: "SwiftInk designs and prints funeral programmes, eulogy booklets, tribute cards, and memorial keepsakes with care, speed, and professionalism.",
    image: "assets/images/Eulogy.jpg",
    formats: ["A5 booklet", "A4 folded programme", "Single-fold card", "Tribute card", "Order of service booklet"],
    finishes: ["Gloss cover", "Matte cover", "Staple binding", "Lamination on request"],
    turnaround: "Same-day or next-day options available depending on quantity and artwork readiness.",
    gallery: ["Memorial Booklet", "Tribute Programme", "Order of Service"],
  },
  weddings: {
    title: "Wedding Cards",
    eyebrow: "Invitations, RSVP inserts & thank-you cards",
    minOrder: "100 copies",
    tagline: "Elegant wedding stationery customised to your theme.",
    description: "From classic invitation cards to modern RSVP inserts and order-of-service booklets, we help couples create beautiful print pieces for their big day.",
    image: "assets/images/weddingcard.jpg",
    formats: ["Invitation cards", "RSVP inserts", "Thank-you cards", "Order-of-service booklets", "Envelope cards"],
    finishes: ["Matte", "Gloss", "Laminate", "Textured paper", "Rounded corners"],
    turnaround: "Usually 2-5 working days after design approval, depending on finishing and quantity.",
    gallery: ["Classic Ivory", "Floral Gold", "Modern Minimal"],
  },
  posters: {
    title: "Posters",
    eyebrow: "Indoor and outdoor posters",
    minOrder: "Poster designs",
    tagline: "Bold poster designs for events, announcements, promotions, and notices.",
    description: "SwiftInk creates poster designs and prints posters in common and custom sizes for businesses, churches, schools, campaigns, and community events.",
    image: "assets/images/poster.jpg",
    formats: ["A3", "A2", "A1", "A0", "Custom size"],
    finishes: ["Poster design", "Standard poster paper", "Heavy paper", "Lamination", "Gloss finish"],
    turnaround: "Design turnaround depends on content readiness. Printing usually takes 1-3 working days after artwork approval.",
    gallery: ["Event Poster", "Promo Poster", "Church Notice"],
  },
  banners: {
    title: "Banners",
    eyebrow: "Rollup, flex and mesh banners",
    minOrder: "1 piece",
    tagline: "Large-format branding that gets noticed.",
    description: "We produce professional banners for exhibitions, events, storefronts, product launches, church events, and promotional campaigns.",
    image: "assets/images/banner.jpg",
    formats: ["Pull-up banner", "Rollup banner", "Flex banner", "Mesh banner", "Custom event banner"],
    finishes: ["Matte banner material", "Outdoor flex", "Mesh", "Eyelets", "Stand included on request"],
    turnaround: "Typically 1-3 working days depending on size, finishing, and installation needs.",
    gallery: ["Rollup Banner", "Event Banner", "Storefront Banner"],
  },
  wraps: {
    title: "Office Window Wraps",
    eyebrow: "Glass branding and privacy films",
    minOrder: "1 piece",
    tagline: "Turn office glass into branded, professional space.",
    description: "SwiftInk designs, prints, and installs vinyl graphics for office doors, windows, partitions, and storefront glass.",
    image: "assets/images/wrap.jpg,
    formats: ["Frosted vinyl", "Full-colour vinyl", "Perforated see-through film", "Door branding", "Partition branding"],
    finishes: ["Frosted film", "Full-colour print", "One-way vision", "Contour cut vinyl"],
    turnaround: "Quotation depends on measurements. Production and installation are scheduled after approval.",
    gallery: ["Frosted Office", "Glass Door Branding", "Partition Wrap"],
  },
  businesscards: {
    title: "Business Cards",
    eyebrow: "Standard and custom business cards",
    minOrder: "200 copies",
    tagline: "Make every introduction look professional.",
    description: "We print sharp, professional business cards for individuals, teams, startups, churches, SMEs, and corporate clients.",
    image: "assets/images/businesscard.jpg",
    formats: ["Standard size", "Custom size", "Single-sided", "Double-sided", "Rounded corners"],
    finishes: ["300gsm", "350gsm", "Gloss", "Matte", "Spot UV on request"],
    turnaround: "Usually 1-3 working days after design approval.",
    gallery: ["Matte Card", "Corporate Card", "Premium Finish"],
  },
  flyers: {
    title: "Flyers & Brochures",
    eyebrow: "Marketing flyers, bi-folds and tri-folds",
    minOrder: "Flyers: 100 copies · Brochures: 50 copies",
    tagline: "Clear, colourful marketing print for promotions and events.",
    description: "SwiftInk prints single-page flyers, menus, event handouts, company brochures, and product brochures in small and bulk quantities.",
    image: "assets/images/flyer.jpg",
    formats: ["A5 flyers", "A4 flyers", "Bi-fold brochures", "Tri-fold brochures", "Menus"],
    finishes: ["Gloss paper", "Matte paper", "Heavy paper", "Folded brochure", "Lamination on request"],
    turnaround: "Usually 1-4 working days depending on quantity, folding, and finishing.",
    gallery: ["Promo Flyer", "Tri-fold Brochure", "Restaurant Menu"],
  },
  idcards: {
    title: "ID Cards & Badges",
    eyebrow: "PVC cards, event badges and lanyards",
    minOrder: "50 copies",
    tagline: "Professional identification for teams, schools, churches, and events.",
    description: "We create durable ID cards and badges for organisations that need clean identification, visitor badges, staff cards, and event access cards.",
    image: "assets/images/idcard.jpg",
    formats: ["PVC ID cards", "Printed laminated cards", "Event badges", "Staff cards", "Visitor badges"],
    finishes: ["PVC", "Laminated card", "Single-sided", "Double-sided", "Lanyards on request"],
    turnaround: "Turnaround depends on data readiness and quantity. Small batches can be completed quickly after approval.",
    gallery: ["Staff ID", "Event Badge", "School Card"],
  },
  caketickets: {
    title: "Cake Tickets",
    eyebrow: "Custom cake tickets & event labels",
    minOrder: "50 tickets",
    tagline: "Beautiful printed cake tickets for weddings, birthdays, and special events.",
    description: "SwiftInk designs and prints custom cake tickets, cupcake toppers, dessert labels, and event food tags. Perfect for weddings, birthday parties, baby showers, and corporate events.",
    image: "assets/images/cake.jpg",
    formats: ["Standard cake ticket (2x3 inch)", "Cupcake toppers", "Buffet labels", "Dessert tags", "Custom size", "Round or square shape"],
    finishes: ["Matte paper", "Gloss finish", "Card stock 250gsm", "Lamination on request", "Corner rounding"],
    turnaround: "Usually 2-4 working days after design approval, depending on quantity and finishing.",
    gallery: ["Wedding Cake Ticket", "Birthday Cupcake Topper", "Buffet Food Label"],
  },
};

const serviceList = Object.entries(services).map(([slug, service]) => ({ slug, ...service }));

const orderQuestions = {
  eulogies: [
    { name: "deceasedName", label: "Name of the deceased", placeholder: "Full name to appear on the programme" },
    { name: "programmeFormat", label: "Programme format", type: "select", options: ["A5 booklet", "A4 folded programme", "Single-fold card", "Tribute card", "Not sure yet"] },
    { name: "pages", label: "Estimated number of pages", type: "select", options: ["4 pages", "8 pages", "12 pages", "16+ pages", "Not sure yet"] },
    { name: "funeralDate", label: "Funeral / memorial date", type: "date" },
    { name: "contentReady", label: "Do you have text and photos ready?", type: "select", options: ["Yes, text and photos are ready", "Photos only", "Text only", "Need help arranging everything"] },
    { name: "urgency", label: "How urgent is it?", type: "select", options: ["Same day", "Next day", "2-3 working days", "Flexible"] },
  ],
  weddings: [
    { name: "cardType", label: "What do you need?", type: "select", options: ["Invitation cards", "Invitation + RSVP", "Thank-you cards", "Order-of-service booklet", "Full wedding stationery set"] },
    { name: "coupleNames", label: "Couple names", placeholder: "Names to appear on the design" },
    { name: "weddingDate", label: "Wedding date", type: "date" },
    { name: "themeColours", label: "Theme colours / style", placeholder: "e.g. ivory and gold, floral, minimalist" },
    { name: "paperFinish", label: "Preferred paper / finish", type: "select", options: ["Matte", "Gloss", "Textured paper", "Laminate", "Not sure yet"] },
    { name: "inserts", label: "Any inserts needed?", placeholder: "RSVP, directions, programme, envelope, etc." },
  ],
  posters: [
    { name: "posterUse", label: "What is the poster for?", placeholder: "Event, church notice, promotion, announcement, campaign" },
    { name: "posterService", label: "Do you need design only or design + print?", type: "select", options: ["Poster design only", "Poster design + printing", "Printing only, I have artwork"] },
    { name: "posterSize", label: "Poster size", type: "select", options: ["A3", "A2", "A1", "A0", "Custom size", "Not sure yet"] },
    { name: "posterPlacement", label: "Where will it be used?", type: "select", options: ["Indoor", "Outdoor", "Both indoor and outdoor"] },
    { name: "posterText", label: "Main text to appear", type: "textarea", placeholder: "Headline, dates, venue, contacts, offer details, etc." },
  ],
  banners: [
    { name: "bannerType", label: "Banner type", type: "select", options: ["Rollup / pull-up banner", "Flex banner", "Mesh banner", "Backdrop banner", "Not sure yet"] },
    { name: "bannerSize", label: "Size needed", placeholder: "e.g. 2m x 1m, standard rollup, custom" },
    { name: "standNeeded", label: "Do you need a stand?", type: "select", options: ["Yes", "No", "Not sure"] },
    { name: "bannerUse", label: "Use case", placeholder: "Exhibition, event, storefront, launch, church event" },
    { name: "artworkReady", label: "Is artwork ready?", type: "select", options: ["Yes", "No, I need design", "I have a rough idea only"] },
  ],
  wraps: [
    { name: "wrapType", label: "Vinyl type", type: "select", options: ["Frosted vinyl", "Full-colour vinyl", "Perforated / see-through film", "Not sure yet"] },
    { name: "glassArea", label: "Glass area", placeholder: "Door, office front, partition, boardroom, shopfront" },
    { name: "measurements", label: "Measurements", placeholder: "Width x height, or say if you need a site visit" },
    { name: "installationLocation", label: "Installation location", placeholder: "Building / area in Nairobi" },
    { name: "siteVisit", label: "Do you need measurement/site visit?", type: "select", options: ["Yes", "No, I have measurements", "Not sure"] },
  ],
  businesscards: [
    { name: "cardSides", label: "Print sides", type: "select", options: ["Single-sided", "Double-sided"] },
    { name: "paperThickness", label: "Paper thickness", type: "select", options: ["300gsm", "350gsm", "Not sure yet"] },
    { name: "businessFinish", label: "Finish", type: "select", options: ["Matte", "Gloss", "Spot UV", "Rounded corners", "Standard finish"] },
    { name: "staffVariants", label: "How many names/design variants?", placeholder: "e.g. 1 person, 5 staff members, same design for all" },
    { name: "businessDetails", label: "Details to appear on card", type: "textarea", placeholder: "Name, title, phone, email, website, location, social handles" },
  ],
  flyers: [
    { name: "flyerType", label: "Product type", type: "select", options: ["Single-page flyer", "Bi-fold brochure", "Tri-fold brochure", "Menu", "Company profile brochure"] },
    { name: "flyerSize", label: "Size", type: "select", options: ["A5", "A4", "DL", "Custom size", "Not sure yet"] },
    { name: "printSides", label: "Print sides", type: "select", options: ["Single-sided", "Double-sided"] },
    { name: "folding", label: "Folding needed?", type: "select", options: ["No folding", "Bi-fold", "Tri-fold", "Not sure"] },
    { name: "flyerPurpose", label: "Purpose / message", type: "textarea", placeholder: "Marketing, event, menu, promotion, product details, etc." },
  ],
  idcards: [
    { name: "idType", label: "Card type", type: "select", options: ["PVC ID cards", "Printed laminated cards", "Event badges", "Visitor badges", "Staff cards"] },
    { name: "peopleCount", label: "Number of people / badges", placeholder: "e.g. 50 staff, 120 students" },
    { name: "lanyards", label: "Need lanyards?", type: "select", options: ["Yes", "No", "Quote both options"] },
    { name: "idSides", label: "Print sides", type: "select", options: ["Single-sided", "Double-sided"] },
    { name: "dataReady", label: "Is the names/photos data ready?", type: "select", options: ["Yes, spreadsheet and photos are ready", "Photos only", "Names only", "Need guidance"] },
  ],
  caketickets: [
    { name: "eventType", label: "Event type", type: "select", options: ["Wedding", "Birthday", "Baby Shower", "Corporate Event", "Other"] },
    { name: "ticketFormat", label: "What do you need?", type: "select", options: ["Cake tickets", "Cupcake toppers", "Buffet labels", "Dessert tags", "Custom food labels"] },
    { name: "quantity", label: "How many tickets?", placeholder: "e.g. 100 tickets" },
    { name: "size", label: "Preferred size", placeholder: "e.g. 2x3 inches, round 2 inches, custom" },
    { name: "design", label: "Do you have a design?", type: "select", options: ["Yes, I have artwork ready", "No, need design help", "I have a rough idea"] },
    { name: "eventTheme", label: "Event theme / colours", placeholder: "e.g. gold and white, floral, pastel, superhero" },
    { name: "text", label: "Text to appear on tickets", type: "textarea", placeholder: "Names, date, thank you message, food item names, etc." },
    { name: "urgency", label: "When do you need them?", type: "select", options: ["Within 3 days", "Within a week", "2 weeks", "Flexible"] },
  ],
};

const pricingSections = [
  { product: "Business Cards", min: "200 copies", base: "Design: KSh 500 one-sided / KSh 800 double-sided", affects: "Printing price depends on paper thickness, finish, single/double sided print, spot UV, urgency, and quantity." },
  { product: "Eulogies", min: "100 copies", base: "From KSh 8,200", affects: "Minimum order is 100 copies at KSh 82 per copy. Eulogy design charge is KSh 800. Final price depends on page count, booklet size, photos, cover finish, quantity, urgency, and design complexity." },
  { product: "Wedding Cards", min: "100 copies", base: "From KSh 7,000", affects: "Paper stock, inserts, envelopes, finishes, custom design, quantity, turnaround." },
  { product: "Posters", minLabel: "Service", min: "Poster designs", base: "Design: KSh 600", affects: "Poster printing price depends on size, paper weight, lamination, indoor/outdoor use, and quantity." },
  { product: "Banners", min: "1 piece", base: "Design: KSh 1,000", affects: "Printing price depends on banner type, size, stand, material, eyelets, installation, and artwork readiness." },
  { product: "Office Window Wraps", min: "1 piece", base: "Custom quote", affects: "Measurements, vinyl type, design complexity, installation site, durability needs." },
  { product: "Flyers & Brochures", min: "Flyers: 100 · Brochures: 50", base: "From KSh 15 each", affects: "Size, folds, paper weight, lamination, quantity, design work." },
  { product: "ID Cards & Badges", min: "50 copies", base: "From KSh 250 each", affects: "PVC vs laminated card, lanyards, double-sided print, data handling, quantity." },
  { product: "Cake Tickets", min: "50 tickets", base: "From KSh 1,500 (50 tickets)", affects: "Price depends on quantity, size, shape, paper quality, design complexity, and finishing options like lamination or corner rounding." },
];

const portfolioItems = [
  { title: "Classic Memorial Programme", category: "eulogies" },
  { title: "Gold Floral Wedding Invite", category: "weddings" },
  { title: "Corporate Rollup Banner", category: "banners" },
  { title: "Matte Business Card Set", category: "businesscards" },
  { title: "Church Event Poster", category: "posters" },
  { title: "Office Frosted Door Wrap", category: "wraps" },
  { title: "Tri-fold Company Brochure", category: "flyers" },
  { title: "PVC Staff ID Cards", category: "idcards" },
  { title: "Thank-you Card Suite", category: "weddings" },
  { title: "Outdoor Promo Banner", category: "banners" },
  { title: "A5 Flyer Campaign", category: "flyers" },
  { title: "Funeral Order of Service", category: "eulogies" },
  { title: "Wedding Cake Ticket Set", category: "caketickets" },
  { title: "Birthday Cupcake Toppers", category: "caketickets" },
  { title: "Buffet Food Labels", category: "caketickets" },
];

const legalCopy = {
  privacy: {
    title: "Privacy Policy",
    paragraphs: [
      "SwiftInk collects client details such as name, phone number, service request, files, photos, and deadline so we can prepare accurate quotes and complete print jobs.",
      "Uploaded files are used only for quoting, designing, proofing, and printing the requested order.",
      "Client contact details may be used for order updates, delivery coordination, payment confirmation, and customer support.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    paragraphs: [
      "Orders begin after quote approval, artwork confirmation, and a 40% upfront payment.",
      "Clients are responsible for checking names, dates, phone numbers, spelling, and final proof details before printing.",
      "Turnaround times depend on artwork readiness, quantity, finish, supplier availability, urgency, and delivery or installation requirements.",
    ],
  },
  refund: {
    title: "Refund & Revision Policy",
    paragraphs: [
      "Because print products are customised, refunds are handled case by case depending on whether production has started.",
      "SwiftInk can revise design proofs before printing. Once a client approves the final proof, changes may attract extra cost if reprinting is required.",
      "If there is a confirmed production error from our side, we will work with the client on a fair correction, replacement, or agreed solution.",
    ],
  },
};

function page(pageName) {
  document.querySelectorAll(".page").forEach((section) => section.classList.remove("active-page"));
  const target = document.getElementById(pageName);
  if (target) target.classList.add("active-page");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) mobileMenu.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function serviceBadge(service) {
  return service.slug === "posters" ? service.minOrder : `Minimum: ${service.minOrder}`;
}

function renderServiceCard(service) {
  return `
    <article class="service-card">
      <img src="${service.image}" alt="${service.title}">
      <div class="service-card-content">
        <span class="badge">${serviceBadge(service)}</span>
        <h3>${service.title}</h3>
        <p>${service.tagline}</p>
        <button class="dark-button" data-service-link="${service.slug}">View details / order →</button>
      </div>
    </article>
  `;
}

function renderServices() {
  const homeServices = document.getElementById("homeServices");
  const servicesGrid = document.getElementById("servicesGrid");
  if (homeServices) homeServices.innerHTML = serviceList.map(renderServiceCard).join("");
  if (servicesGrid) servicesGrid.innerHTML = serviceList.map(renderServiceCard).join("");
}

function renderServiceDetail(slug) {
  const service = services[slug];
  if (!service) return;
  const serviceHero = document.getElementById("serviceHero");
  if (serviceHero) {
    serviceHero.style.setProperty("--service-image", `url("${service.image}")`);
    serviceHero.innerHTML = `
      <div class="container service-hero-inner">
        <button class="back-button" data-page-link="services">← Back to services</button>
        <p class="eyebrow">${service.eyebrow}</p>
        <h1>${service.title}</h1>
        <p>${service.description}</p>
        <span class="badge">${slug === "posters" ? service.minOrder : `Minimum order: ${service.minOrder}`}</span>
      </div>
    `;
  }

  const serviceContent = document.getElementById("serviceContent");
  if (serviceContent) {
    serviceContent.innerHTML = `
      <div class="info-block"><h2>What we offer</h2><div class="info-list">${service.formats.map((item) => `<span>✓ ${item}</span>`).join("")}</div></div>
      <div class="info-block"><h2>Finish and material options</h2><div class="info-list">${service.finishes.map((item) => `<span>✓ ${item}</span>`).join("")}</div></div>
      <div class="info-block"><h2>Turnaround time</h2><p>${service.turnaround}</p></div>
      <div><div class="section-intro"><p class="eyebrow">Samples</p><h2>Sample ${service.title.toLowerCase()} designs</h2><p>Replace these placeholders with real photos of finished printed pieces for the strongest sales impact.</p></div><div class="samples-grid">${service.gallery.map((item, index) => `<article class="sample-card"><div class="sample-image">0${index + 1}</div><h3>${item}</h3><p>Printed sample placeholder</p></article>`).join("")}</div></div>
    `;
  }

  const serviceQuoteForm = document.getElementById("serviceQuoteForm");
  if (serviceQuoteForm) {
    serviceQuoteForm.innerHTML = buildQuoteForm(slug);
    attachFormHandlers(document.querySelector("#serviceQuoteForm form"));
  }
  page("serviceDetail");
}

function buildQuestionField(question) {
  if (question.type === "select") {
    return `<label>${question.label}<select name="${question.name}" required><option value="">Select option</option>${question.options.map((option) => `<option value="${option}">${option}</option>`).join("")}</select></label>`;
  }
  if (question.type === "textarea") {
    return `<label>${question.label}<textarea name="${question.name}" rows="3" required placeholder="${question.placeholder || ""}"></textarea></label>`;
  }
  return `<label>${question.label}<input name="${question.name}" type="${question.type || "text"}" required placeholder="${question.placeholder || ""}"></label>`;
}

function buildQuoteForm(defaultService = "") {
  const selected = services[defaultService] || null;
  const questions = defaultService ? orderQuestions[defaultService] || [] : [];
  return `
    <form class="quote-form" data-selected-service="${defaultService}">
      <p class="eyebrow">Quote / order form</p>
      <h2>${selected ? `Order ${selected.title}` : "Request a print quote"}</h2>
      <p>Choose a product and the form will ask the questions needed for that exact order. Work begins after a 40% upfront payment. After submission, a formatted order summary appears below.</p>
      <div class="form-grid">
        <label>Client name<input name="clientName" placeholder="Your full name" required></label>
        <label>Phone number<input name="phone" type="tel" placeholder="e.g. +254 7XX XXX XXX" required></label>
        <label>Service type<select name="serviceType" required><option value="">Select service</option>${serviceList.map((service) => `<option value="${service.slug}" ${service.slug === defaultService ? "selected" : ""}>${service.title}</option>`).join("")}</select></label>
        ${selected ? `<div class="badge">${defaultService === "posters" ? selected.minOrder : `Minimum order for ${selected.title}: ${selected.minOrder}`}</div>` : ""}
        <div class="form-row"><label>Quantity<input name="quantity" placeholder="${selected ? selected.minOrder : "e.g. 200"}" required></label><label>Deadline<input name="deadline" type="date" required></label></div>
        ${questions.length ? `<div class="product-questions"><h3>Product questions</h3>${questions.map(buildQuestionField).join("")}</div>` : ""}
        <label>Upload artwork/photos<div class="upload-box">Choose file or drag it here<input name="files" type="file" multiple></div></label>
        <label>Extra message<textarea name="message" rows="4" placeholder="Tell us about delivery, wording, Design ideas or any special request."></textarea></label>
        <button class="dark-button" type="submit">Generate order request</button>
      </div>
      <div class="order-summary"></div>
    </form>
  `;
}

function getLabel(name) {
  const base = { clientName: "Client name", phone: "Phone number", serviceType: "Service type", quantity: "Quantity", deadline: "Deadline", files: "Uploaded files", message: "Extra message" };
  const found = Object.values(orderQuestions).flat().find((question) => question.name === name);
  return found ? found.label : base[name] || name;
}

function attachFormHandlers(form) {
  if (!form) return;
  const serviceSelect = form.querySelector('select[name="serviceType"]');
  if (serviceSelect) {
    serviceSelect.addEventListener("change", (event) => {
      const parent = form.parentElement;
      if (parent) {
        parent.innerHTML = buildQuoteForm(event.target.value);
        attachFormHandlers(parent.querySelector("form"));
      }
    });
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const details = [];
    const data = new FormData(form);
    for (const [key, value] of data.entries()) {
      if (value instanceof File) {
        if (value.name) details.push([getLabel(key), value.name]);
        continue;
      }
      const clean = String(value).trim();
      if (!clean) continue;
      if (key === "serviceType") details.push([getLabel(key), services[clean]?.title || clean]);
      else details.push([getLabel(key), clean]);
    }
    
    const orderDetails = {
      clientName: details.find(d => d[0] === "Client name")?.[1] || "",
      phone: details.find(d => d[0] === "Phone number")?.[1] || "",
      serviceType: details.find(d => d[0] === "Service type")?.[1] || "",
      quantity: details.find(d => d[0] === "Quantity")?.[1] || "",
      deadline: details.find(d => d[0] === "Deadline")?.[1] || "",
      message: details.find(d => d[0] === "Extra message")?.[1] || "",
      urgency: details.find(d => d[0] === "How urgent is it?")?.[1] || ""
    };
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Saving order...";
    submitButton.disabled = true;
    
    if (typeof saveOrderToDatabase === 'function') {
      await saveOrderToDatabase(orderDetails);
    } else {
      console.log("Firebase not loaded, skipping save");
    }
    
    submitButton.textContent = originalText;
    submitButton.disabled = false;
    
    const orderText = ["Hi SwiftInk, I have a new order request:", "Work begins after a 40% upfront payment.", "", ...details.map(([label, value]) => `${label}: ${value}`)].join("\n");
    const summary = form.querySelector(".order-summary");
    if (summary) {
      summary.classList.add("active");
      summary.innerHTML = `<p class="eyebrow">Order ready</p><h3>${details.find((d) => d[0] === "Service type")?.[1] || "General order"}</h3>${details.map(([label, value]) => `<div class="summary-item"><strong>${label}:</strong> ${value}</div>`).join("")}<a class="whatsapp-summary" target="_blank" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}">Send order to WhatsApp</a>`;
    }
  });
}

function renderPricing() {
  const pricingGrid = document.getElementById("pricingGrid");
  if (pricingGrid) {
    pricingGrid.innerHTML = pricingSections.map((item) => `
      <article class="pricing-card">
        <h3>${item.product}</h3>
        <div class="price">${item.base}</div>
        <div class="minimum-box"><small>${item.minLabel || "Minimum order"}</small><strong>${item.min}</strong></div>
        <p>${item.affects}</p>
      </article>
    `).join("");
  }
}

function renderPortfolio(filter = "all") {
  const categories = [{ slug: "all", title: "All" }, ...serviceList.map(({ slug, title }) => ({ slug, title }))];
  const portfolioFilters = document.getElementById("portfolioFilters");
  if (portfolioFilters) {
    portfolioFilters.innerHTML = categories.map((cat) => `<button data-filter="${cat.slug}" class="${filter === cat.slug ? "active" : ""}">${cat.title}</button>`).join("");
  }
  const visible = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);
  const portfolioGrid = document.getElementById("portfolioGrid");
  if (portfolioGrid) {
    portfolioGrid.innerHTML = visible.map((item, index) => `
      <article class="portfolio-item">
        <div class="portfolio-image">${String(index + 1).padStart(2, "0")}</div>
        <div class="portfolio-copy"><small>${services[item.category].title}</small><h3>${item.title}</h3><button class="dark-button" data-service-link="${item.category}">View service →</button></div>
      </article>
    `).join("");
  }
}

function renderLegal() {
  Object.entries(legalCopy).forEach(([id, item]) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = `
        <div class="page-hero"><div class="container"><p class="eyebrow">Legal</p><h1>${item.title}</h1><p>Use this as starter copy and adapt it with your final business details before launch.</p></div></div>
        <section class="section container"><div class="legal-box">${item.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div></section>
      `;
    }
  });
}

function setTheme(isDark) {
  const body = document.body;
  const themeKnob = document.getElementById('themeKnob');
  const themeIcon = document.getElementById('themeIcon');
  const mobileThemeKnob = document.getElementById('mobileThemeKnob');
  const mobileThemeIcon = document.getElementById('mobileThemeIcon');
  
  if (isDark) {
    body.classList.add('dark-mode');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (mobileThemeIcon) mobileThemeIcon.textContent = '🌙';
    if (themeKnob) themeKnob.style.transform = 'translateX(24px)';
    if (mobileThemeKnob) mobileThemeKnob.style.transform = 'translateX(24px)';
  } else {
    body.classList.remove('dark-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (mobileThemeIcon) mobileThemeIcon.textContent = '☀️';
    if (themeKnob) themeKnob.style.transform = 'translateX(0)';
    if (mobileThemeKnob) mobileThemeKnob.style.transform = 'translateX(0)';
  }
  
  localStorage.setItem('swiftinkTheme', isDark ? 'dark' : 'light');
}

window.toggleTheme = function() {
  const isDark = !document.body.classList.contains('dark-mode');
  setTheme(isDark);
};

function setupNavigation() {
  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page-link]");
    if (pageButton) page(pageButton.dataset.pageLink);
    const serviceButton = event.target.closest("[data-service-link]");
    if (serviceButton) renderServiceDetail(serviceButton.dataset.serviceLink);
    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) renderPortfolio(filterButton.dataset.filter);
  });

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileMenu) mobileMenu.classList.toggle("open");
    });
  }
}

function setupChat() {
  const panel = document.getElementById("chatPanel");
  const messages = document.getElementById("chatMessages");
  const input = document.getElementById("chatInput");
  const whatsapp = document.getElementById("chatWhatsapp");
  const chat = [{ from: "agent", text: "Hi, welcome to SwiftInk. I'm here to help with quotes, orders, files, deadlines, and delivery questions." }];

  function renderChat() {
    if (messages) {
      messages.innerHTML = chat.map((item) => `<div class="chat-message ${item.from}">${item.text}</div>`).join("");
    }
    const latestClient = [...chat].reverse().find((item) => item.from === "client")?.text || "Hi SwiftInk, I need help with a print order.";
    if (whatsapp) {
      whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(latestClient)}`;
    }
  }

  const openChat = document.getElementById("openChat");
  if (openChat) {
    openChat.addEventListener("click", () => {
      if (panel) panel.classList.toggle("open");
    });
  }
  
  const closeChat = document.getElementById("closeChat");
  if (closeChat) {
    closeChat.addEventListener("click", () => {
      if (panel) panel.classList.remove("open");
    });
  }
  
  const chatForm = document.getElementById("chatForm");
  if (chatForm) {
    chatForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;
      chat.push({ from: "client", text });
      chat.push({ from: "agent", text: "Thanks. A SwiftInk agent can help you with that. For the fastest response, continue on WhatsApp with this message." });
      input.value = "";
      renderChat();
    });
  }
  renderChat();
}

function init() {
  console.log("Initializing SwiftInk website...");
  renderServices();
  renderPricing();
  renderPortfolio();
  renderLegal();
  setupNavigation();
  setupChat();
  
  const contactQuoteForm = document.getElementById("contactQuoteForm");
  if (contactQuoteForm) {
    contactQuoteForm.innerHTML = buildQuoteForm("");
    attachFormHandlers(document.querySelector("#contactQuoteForm form"));
  }
  
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  const savedTheme = localStorage.getItem('swiftinkTheme');
  const isDark = savedTheme === 'dark';
  setTheme(isDark);
  
  console.log("SwiftInk website initialized!");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
