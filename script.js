/* ============================================================
   Rakesh Kuntigorla — Portfolio behaviour
   ============================================================ */

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById('nav-toggle');
const navPanel = document.getElementById('nav-mobile-panel');
navToggle.addEventListener('click', () => {
  const open = navPanel.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navPanel.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navPanel.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Scroll reveal (restrained, single fade-up per section) ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

/* ============================================================
   WHAT CAN I BUILD — service explorer
   ============================================================ */
const SERVICE_DATA = [
  {
    label: 'Websites',
    colTitles: ['What\u2019s Included', 'Typical Features', 'Optional Add-ons'],
    items: [
      {
        name: 'Business Websites', eyebrow: 'Website',
        desc: 'A professional website that represents your business online — what you do, who you serve, and how to reach you.',
        cols: [
          ['Home, About, Services, Contact pages', 'Content written around your business', 'Mobile-first responsive layout'],
          ['Enquiry / contact form', 'Google Maps & location', 'Image gallery'],
          ['Blog / updates section', 'Multi-language content', 'Basic SEO setup']
        ]
      },
      {
        name: 'School & College Websites', eyebrow: 'Website',
        desc: 'An informational site for an educational institution — admissions, faculty, announcements and facilities in one place.',
        cols: [
          ['Home, About, Academics, Admissions', 'Faculty & facilities pages', 'Notices / announcements'],
          ['Admission enquiry form', 'Photo gallery', 'Downloadable circulars/PDFs'],
          ['Events calendar', 'Alumni section', 'Online admission form']
        ]
      },
      {
        name: 'Portfolio Websites', eyebrow: 'Website',
        desc: 'A personal site to showcase your work, skills and experience to clients or employers.',
        cols: [
          ['About, Work, Skills, Contact', 'Project showcase', 'Resume / CV download'],
          ['Contact form', 'Social links', 'Testimonials'],
          ['Blog section', 'Custom animations', 'Case study pages']
        ]
      },
      {
        name: 'Landing Pages', eyebrow: 'Website',
        desc: 'A single, focused page built to promote one product, service or event and drive one clear action.',
        cols: [
          ['Hero, benefits, call-to-action', 'Single-page structure', 'Fast loading, lightweight'],
          ['Lead capture form', 'FAQ section', 'Countdown / urgency elements'],
          ['A/B-ready layout', 'Analytics integration', 'Email signup']
        ]
      },
      {
        name: 'Institutional Websites', eyebrow: 'Website',
        desc: 'A structured website for an organization, trust, or institution that needs to communicate credibility and information clearly.',
        cols: [
          ['Home, About, Programs, Contact', 'Leadership / team pages', 'Document downloads'],
          ['Enquiry form', 'News & updates', 'Multi-page navigation'],
          ['Donation / support section', 'Event listings', 'Newsletter signup']
        ]
      }
    ]
  },
  {
    label: 'Web Applications',
    colTitles: ['Client Side', 'Admin Side', 'Optional'],
    items: [
      {
        name: 'Admin Dashboards', eyebrow: 'Web Application',
        desc: 'A central dashboard to view, manage and act on your business data in one place.',
        cols: [
          ['Login-protected access', 'Overview widgets & charts', 'Role-based views'],
          ['Data management screens', 'User & permission control', 'Activity logs'],
          ['Excel/PDF export', 'Notifications', 'Custom reports']
        ]
      },
      {
        name: 'Student Management Systems', eyebrow: 'Web Application',
        desc: 'A system to manage student records, attendance, marks and communication for a school, college or institute.',
        cols: [
          ['Student login / portal', 'View marks & attendance', 'Fee status'],
          ['Student records management', 'Attendance & marks entry', 'Class/section management'],
          ['SMS/email notifications', 'Fee tracking', 'Report card generation']
        ]
      },
      {
        name: 'Customer Management Systems', eyebrow: 'Web Application',
        desc: 'A CRM-style system to track customers, interactions and follow-ups in one organized place.',
        cols: [
          ['Customer self-service portal (optional)', 'Enquiry submission', 'Order/service history'],
          ['Customer database', 'Follow-up & status tracking', 'Notes & interaction history'],
          ['Reports & analytics', 'Email/WhatsApp integration', 'Lead scoring']
        ]
      },
      {
        name: 'Booking / Appointment Systems', eyebrow: 'Web Application',
        desc: 'Let clients book a service or appointment online, while you manage schedules from one dashboard.',
        cols: [
          ['Service selection', 'Date/time selection', 'Booking form & confirmation'],
          ['Appointment dashboard', 'Customer records', 'Status updates'],
          ['Notifications', 'Reports', 'Payment integration']
        ]
      },
      {
        name: 'Mock-Test / Examination Platforms', eyebrow: 'Web Application',
        desc: 'A CBT-style platform for online tests — the same category as my TS SI/PC Mock Test Platform project.',
        cols: [
          ['Timed test interface', 'Question palette & review marking', 'Instant results & percentile'],
          ['Question bank management', 'Test scheduling', 'Analytics dashboard'],
          ['Negative marking', 'Excel reports', 'Ranking system']
        ]
      },
      {
        name: 'Employee Management Systems', eyebrow: 'Web Application',
        desc: 'A system to manage employee records, attendance and basic HR workflows.',
        cols: [
          ['Employee self-service login', 'Attendance / leave requests', 'Payslip view (optional)'],
          ['Employee records', 'Attendance management', 'Role & department control'],
          ['Payroll integration', 'Reports', 'Document uploads']
        ]
      },
      {
        name: 'Inventory / Business Management Systems', eyebrow: 'Web Application',
        desc: 'Track stock, orders and business operations without spreadsheets.',
        cols: [
          ['Order placement (optional)', 'Stock lookup', 'Order status tracking'],
          ['Inventory management', 'Stock alerts', 'Supplier/order records'],
          ['Reports & analytics', 'Barcode support', 'Multi-location tracking']
        ]
      },
      {
        name: 'Custom Portals', eyebrow: 'Web Application',
        desc: 'A purpose-built portal for a workflow that doesn\u2019t fit an off-the-shelf system.',
        cols: [
          ['Role-based login', 'Custom forms & workflows', 'Status tracking'],
          ['Content/data management', 'User management', 'Approval workflows'],
          ['Reports', 'Notifications', 'Third-party integrations']
        ]
      }
    ]
  },
  {
    label: 'Business & Data Features',
    colTitles: ['What It Does', 'Typically Used In', 'Optional Extras'],
    items: [
      {
        name: 'Database-backed Applications', eyebrow: 'Feature',
        desc: 'Your data is stored properly in a real database instead of spreadsheets or files, so it stays reliable as it grows.',
        cols: [
          ['Structured, persistent data storage', 'Reliable read/write operations', 'Data validation'],
          ['Management systems', 'Dashboards', 'Any app with records to track'],
          ['Backups', 'Data migration', 'Multi-table relationships']
        ]
      },
      {
        name: 'Authentication / Login', eyebrow: 'Feature',
        desc: 'Secure login so only the right people can access the right parts of your application.',
        cols: [
          ['Login & signup', 'Password protection', 'Session handling'],
          ['Dashboards', 'Portals', 'Any multi-user system'],
          ['Role-based access', 'OTP / email verification', 'Social login']
        ]
      },
      {
        name: 'Reports & Analytics', eyebrow: 'Feature',
        desc: 'Turn raw data into summaries and charts that are actually useful for decisions.',
        cols: [
          ['Charts & summaries', 'Filterable views', 'Trend tracking'],
          ['Admin dashboards', 'Management systems', 'Business tools'],
          ['Scheduled reports', 'Custom metrics', 'Comparison views']
        ]
      },
      {
        name: 'Excel Reports', eyebrow: 'Feature',
        desc: 'Export data to Excel so it can be shared, filtered or archived outside the application.',
        cols: [
          ['One-click export', 'Formatted spreadsheets', 'Filtered exports'],
          ['Admin dashboards', 'Student/employee systems', 'Inventory tools'],
          ['Scheduled auto-export', 'Multi-sheet reports']
        ]
      },
      {
        name: 'PDF Reports', eyebrow: 'Feature',
        desc: 'Generate clean, printable PDF documents directly from your application\u2019s data.',
        cols: [
          ['Formatted PDF generation', 'Downloadable documents', 'Print-ready layout'],
          ['Certificates & receipts', 'Result sheets', 'Invoices'],
          ['Email delivery', 'Branded templates']
        ]
      },
      {
        name: 'Search & Filtering', eyebrow: 'Feature',
        desc: 'Find what you need quickly, even as your data grows into the thousands of records.',
        cols: [
          ['Keyword search', 'Multi-field filters', 'Sorting'],
          ['Dashboards', 'Directories', 'Management systems'],
          ['Advanced/faceted filters', 'Saved searches']
        ]
      },
      {
        name: 'Admin Management', eyebrow: 'Feature',
        desc: 'A dedicated area for you to control content, users and settings without touching code.',
        cols: [
          ['Content & data controls', 'User management', 'Settings panel'],
          ['Every system with an admin role', 'Dashboards', 'Portals'],
          ['Multiple admin roles', 'Audit logs']
        ]
      },
      {
        name: 'Deployment & Hosting Setup', eyebrow: 'Feature',
        desc: 'Getting your finished website or application properly live, configured and reachable.',
        cols: [
          ['Server / hosting setup', 'Domain connection', 'Basic go-live checks'],
          ['Every project I deliver', '', ''],
          ['Custom domain email', 'SSL setup', 'Ongoing maintenance']
        ]
      }
    ]
  }
];

const categoriesEl = document.getElementById('explorer-categories');
const panelEl = document.getElementById('explorer-panel');

function renderPanel(catIdx, itemIdx) {
  const cat = SERVICE_DATA[catIdx];
  const item = cat.items[itemIdx];
  const cols = cat.colTitles.map((title, i) => {
    const rows = item.cols[i].filter(Boolean);
    if (!rows.length) return '';
    return `<div class="explorer-col">
      <div class="explorer-col-title">${title.toUpperCase()}</div>
      <ul>${rows.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>`;
  }).join('');

  panelEl.innerHTML = `
    <span class="explorer-panel-eyebrow">${item.eyebrow}</span>
    <h3>${item.name}</h3>
    <p class="explorer-panel-desc">${item.desc}</p>
    <div class="explorer-columns">${cols}</div>
    <a href="#configurator" class="btn btn--primary btn--sm" id="explorer-cta">Build Something Like This \u2192</a>
  `;
  document.getElementById('explorer-cta').addEventListener('click', () => {
    // preselect matching type in configurator if present
    prefillConfigurator(item.name);
  });
}

function renderCategories() {
  categoriesEl.innerHTML = '';
  SERVICE_DATA.forEach((cat, ci) => {
    const label = document.createElement('div');
    label.className = 'explorer-cat-label';
    label.textContent = cat.label;
    categoriesEl.appendChild(label);
    cat.items.forEach((item, ii) => {
      const btn = document.createElement('button');
      btn.className = 'service-item';
      btn.type = 'button';
      btn.textContent = item.name;
      btn.dataset.cat = ci;
      btn.dataset.item = ii;
      btn.addEventListener('click', () => selectService(ci, ii));
      categoriesEl.appendChild(btn);
    });
  });
}

function selectService(ci, ii) {
  categoriesEl.querySelectorAll('.service-item').forEach(b => b.classList.remove('is-active'));
  const activeBtn = categoriesEl.querySelector(`.service-item[data-cat="${ci}"][data-item="${ii}"]`);
  if (activeBtn) activeBtn.classList.add('is-active');
  renderPanel(ci, ii);
}

renderCategories();
selectService(1, 4); // default: Mock-Test / Examination Platforms — ties directly to the featured project

/* ============================================================
   TELL ME WHAT YOU NEED — configurator
   ============================================================ */
const TYPE_OPTIONS = [
  'Business Website', 'School / College Website', 'Portfolio Website', 'Landing Page',
  'Booking System', 'Student Management System', 'Customer Management System',
  'Admin Dashboard', 'Mock Test Platform', 'Inventory Management', 'Custom Web Application'
];

const FEATURE_OPTIONS = [
  'Login / Authentication', 'Database', 'Admin Panel', 'Dashboard', 'Search & Filters',
  'Reports', 'Excel Export', 'PDF Reports', 'Notifications', 'Payment Integration',
  'User Management', 'Mobile Responsive Design', 'Custom Features'
];

const typeChipsEl = document.getElementById('type-chips');
const featureChipsEl = document.getElementById('feature-chips');
const summaryBody = document.getElementById('summary-body');
const whatsappCta = document.getElementById('whatsapp-cta');
const emailCta = document.getElementById('email-cta');
const stepLabels = document.querySelectorAll('[data-step-label]');

let selectedType = null;
let selectedFeatures = new Set();

TYPE_OPTIONS.forEach(opt => {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'chip';
  chip.textContent = opt;
  chip.addEventListener('click', () => {
    selectedType = opt;
    typeChipsEl.querySelectorAll('.chip').forEach(c => c.classList.remove('is-selected'));
    chip.classList.add('is-selected');
    setStep(2);
    updateSummary();
  });
  typeChipsEl.appendChild(chip);
});

FEATURE_OPTIONS.forEach(opt => {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'chip';
  chip.textContent = opt;
  chip.addEventListener('click', () => {
    if (selectedFeatures.has(opt)) {
      selectedFeatures.delete(opt);
      chip.classList.remove('is-selected');
    } else {
      selectedFeatures.add(opt);
      chip.classList.add('is-selected');
    }
    updateSummary();
  });
  featureChipsEl.appendChild(chip);
});

function setStep(n) {
  stepLabels.forEach(el => {
    el.classList.toggle('is-active', Number(el.dataset.stepLabel) <= n);
  });
}

function updateSummary() {
  if (!selectedType) {
    summaryBody.innerHTML = '<p class="summary-empty">Choose a project type above to see a live summary here.</p>';
    whatsappCta.href = buildWhatsappLink();
    emailCta.href = buildEmailLink();
    return;
  }
  setStep(selectedFeatures.size ? 3 : 2);
  const featureItems = Array.from(selectedFeatures).map(f => `<li>${f}</li>`).join('');
  summaryBody.innerHTML = `
    <div class="summary-type">${selectedType}</div>
    ${featureItems ? `<ul class="summary-feature-list">${featureItems}</ul>` : '<p class="summary-empty" style="margin-bottom:20px;">No extra features selected yet — that\u2019s fine, we can figure it out together.</p>'}
  `;
  whatsappCta.href = buildWhatsappLink();
  emailCta.href = buildEmailLink();
}

function buildMessage() {
  let msg = 'Hi Rakesh, I\'d like to discuss a project.\n\n';
  msg += `Project type: ${selectedType || 'Not specified yet'}\n`;
  if (selectedFeatures.size) {
    msg += `Features needed: ${Array.from(selectedFeatures).join(', ')}\n`;
  }
  return msg;
}

function buildWhatsappLink() {
  return `https://wa.me/919666255226?text=${encodeURIComponent(buildMessage())}`;
}
function buildEmailLink() {
  const subject = encodeURIComponent(`Project enquiry: ${selectedType || 'New project'}`);
  const body = encodeURIComponent(buildMessage());
  return `mailto:rakeshkuntigorla@gmail.com?subject=${subject}&body=${body}`;
}

function prefillConfigurator(serviceName) {
  const match = TYPE_OPTIONS.find(t => serviceName.toLowerCase().includes(t.toLowerCase().split(' ')[0].toLowerCase()))
    || (serviceName.includes('Mock') ? 'Mock Test Platform' : null)
    || (serviceName.includes('Booking') ? 'Booking System' : null)
    || (serviceName.includes('Admin') ? 'Admin Dashboard' : null)
    || (serviceName.includes('Student') ? 'Student Management System' : null)
    || (serviceName.includes('Customer') ? 'Customer Management System' : null)
    || (serviceName.includes('Inventory') ? 'Inventory Management' : null)
    || 'Custom Web Application';
  const chip = Array.from(typeChipsEl.querySelectorAll('.chip')).find(c => c.textContent === match);
  if (chip) chip.click();
}

updateSummary();
