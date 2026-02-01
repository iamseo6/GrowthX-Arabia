// GrowthX Arabia - Main JavaScript
const API_BASE = '/api';

// Language translations
const translations = {
  en: {
    'nav.services': 'Services',
    'nav.caseStudies': 'Case Studies',
    'nav.blog': 'Blog',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'hero.title': 'AI-Powered Growth for MENA Businesses',
    'hero.subtitle': 'Transform your operations with intelligent automation. We help businesses in the Middle East save time, reduce costs, and scale faster with cutting-edge AI solutions.',
    'hero.cta': 'Book Free Consultation',
    'hero.secondary': 'Explore Services',
    'hero.stat1': 'Businesses Automated',
    'hero.stat2': 'Average Time Saved',
    'hero.stat3': 'Cost Reduction',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive AI automation solutions tailored for Middle Eastern businesses',
    'services.workflow.title': 'Workflow Automation',
    'services.workflow.desc': 'Streamline operations with n8n and Make integrations',
    'services.chatbots.title': 'AI Chatbots & Agents',
    'services.chatbots.desc': '24/7 intelligent customer support automation',
    'services.crm.title': 'CRM Automation',
    'services.crm.desc': 'GoHighLevel powered sales pipeline automation',
    'services.analytics.title': 'Data Analytics',
    'services.analytics.desc': 'AI-driven business intelligence dashboards',
    'services.seo.title': 'AI Automated SEO',
    'services.seo.desc': 'Intelligent search engine optimization',
    'services.googleAds.title': 'AI Google Ads',
    'services.googleAds.desc': 'Automated PPC campaign management',
    'services.localSeo.title': 'AI Local SEO',
    'services.localSeo.desc': 'Google Business Profile optimization',
    'services.social.title': 'AI Social Scheduling',
    'services.social.desc': 'Automated content planning and posting',
    'process.title': 'How We Work',
    'process.subtitle': 'Our proven 4-step process to transform your business',
    'process.step1.title': 'Discovery',
    'process.step1.desc': 'We analyze your current workflows and identify automation opportunities',
    'process.step2.title': 'Strategy',
    'process.step2.desc': 'Custom automation roadmap designed for your business goals',
    'process.step3.title': 'Implementation',
    'process.step3.desc': 'Expert setup and integration of AI automation tools',
    'process.step4.title': 'Optimization',
    'process.step4.desc': 'Continuous monitoring and improvement of your automations',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by leading businesses across the Middle East',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our services',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to transform your business? Let\'s talk about your automation needs.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company Name',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'footer.description': 'Empowering MENA businesses with intelligent AI automation solutions. Transform your operations, scale faster, and stay ahead of the competition.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.legal': 'Legal',
    'popup.title': 'Wait! Don\'t Miss Out',
    'popup.description': 'Get a free AI automation consultation worth $500. Discover how we can transform your business operations.',
    'popup.cta': 'Claim Free Consultation'
  },
  ar: {
    'nav.services': 'الخدمات',
    'nav.caseStudies': 'دراسات الحالة',
    'nav.blog': 'المدونة',
    'nav.testimonials': 'آراء العملاء',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'تواصل معنا',
    'nav.getStarted': 'ابدأ الآن',
    'hero.title': 'نمو مدعوم بالذكاء الاصطناعي للشركات في الشرق الأوسط',
    'hero.subtitle': 'حوّل عملياتك باستخدام الأتمتة الذكية. نساعد الشركات في الشرق الأوسط على توفير الوقت وتقليل التكاليف والتوسع بشكل أسرع.',
    'hero.cta': 'احجز استشارة مجانية',
    'hero.secondary': 'استكشف الخدمات',
    'hero.stat1': 'شركة تمت أتمتتها',
    'hero.stat2': 'متوسط توفير الوقت',
    'hero.stat3': 'تخفيض التكلفة',
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول أتمتة ذكية شاملة مصممة للشركات في الشرق الأوسط',
    'services.workflow.title': 'أتمتة سير العمل',
    'services.workflow.desc': 'تبسيط العمليات باستخدام n8n و Make',
    'services.chatbots.title': 'روبوتات الدردشة الذكية',
    'services.chatbots.desc': 'دعم عملاء ذكي على مدار الساعة',
    'services.crm.title': 'أتمتة إدارة العملاء',
    'services.crm.desc': 'أتمتة خط المبيعات بقوة GoHighLevel',
    'services.analytics.title': 'تحليلات البيانات',
    'services.analytics.desc': 'لوحات معلومات ذكية للأعمال',
    'services.seo.title': 'تحسين محركات البحث',
    'services.seo.desc': 'تحسين ذكي لمحركات البحث',
    'services.googleAds.title': 'إعلانات جوجل الآلية',
    'services.googleAds.desc': 'إدارة حملات PPC الآلية',
    'services.localSeo.title': 'تحسين البحث المحلي',
    'services.localSeo.desc': 'تحسين ملف جوجل للأعمال',
    'services.social.title': 'جدولة وسائل التواصل',
    'services.social.desc': 'تخطيط ونشر المحتوى الآلي',
    'process.title': 'كيف نعمل',
    'process.subtitle': 'عمليتنا المثبتة من 4 خطوات لتحويل عملك',
    'process.step1.title': 'الاكتشاف',
    'process.step1.desc': 'نحلل سير العمل الحالي ونحدد فرص الأتمتة',
    'process.step2.title': 'الاستراتيجية',
    'process.step2.desc': 'خارطة طريق أتمتة مخصصة لأهداف عملك',
    'process.step3.title': 'التنفيذ',
    'process.step3.desc': 'إعداد ودمج أدوات الأتمتة الذكية',
    'process.step4.title': 'التحسين',
    'process.step4.desc': 'مراقبة وتحسين مستمر للأتمتة',
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'موثوق من قبل الشركات الرائدة في الشرق الأوسط',
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا',
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لتحويل عملك؟ لنتحدث عن احتياجات الأتمتة الخاصة بك.',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.company': 'اسم الشركة',
    'contact.message': 'الرسالة',
    'contact.submit': 'إرسال الرسالة',
    'footer.description': 'تمكين شركات الشرق الأوسط بحلول أتمتة ذكية. حوّل عملياتك وتوسّع أسرع.',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.legal': 'قانوني',
    'popup.title': 'انتظر! لا تفوت الفرصة',
    'popup.description': 'احصل على استشارة مجانية للأتمتة الذكية بقيمة 500 دولار. اكتشف كيف يمكننا تحويل عمليات عملك.',
    'popup.cta': 'احصل على الاستشارة المجانية'
  }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initFAQ();
  initContactForm();
  initExitIntent();
  initSmoothScroll();
});

// Language functions
function initLanguage() {
  applyLanguage(currentLang);
  
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem('language', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// FAQ Accordion
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isActive = item.classList.contains('active');
      
      // Close all other items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value
    };
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
    
    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert(currentLang === 'ar' ? 'شكراً لتواصلك معنا! سنرد عليك قريباً.' : 'Thank you for contacting us! We\'ll get back to you soon.');
        form.reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      alert(currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// Newsletter Form
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = form.querySelector('input[type="email"]').value;
    
    try {
      const response = await fetch(`${API_BASE}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        alert(currentLang === 'ar' ? 'شكراً لاشتراكك!' : 'Thank you for subscribing!');
        form.reset();
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      alert(currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.');
    }
  });
}

// Exit Intent Popup
function initExitIntent() {
  const popup = document.getElementById('exit-popup');
  const closeBtn = document.getElementById('popup-close');
  
  if (!popup) return;
  
  // Check if already shown
  if (localStorage.getItem('exitPopupShown')) return;
  
  // Show on mouse leave (top of page)
  document.addEventListener('mouseout', (e) => {
    if (e.clientY < 10 && !localStorage.getItem('exitPopupShown')) {
      showPopup();
    }
  });
  
  // Fallback: Show after 30 seconds
  setTimeout(() => {
    if (!localStorage.getItem('exitPopupShown')) {
      showPopup();
    }
  }, 30000);
  
  function showPopup() {
    popup.classList.add('active');
    localStorage.setItem('exitPopupShown', 'true');
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }
  
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Lead Funnel Functions (for get-started.html)
let currentStep = 1;
let selectedService = '';
let leadData = {};

function selectService(service) {
  selectedService = service;
  document.querySelectorAll('.service-option').forEach(opt => {
    opt.classList.remove('selected');
    if (opt.getAttribute('data-service') === service) {
      opt.classList.add('selected');
    }
  });
}

function nextStep() {
  if (currentStep === 1 && !selectedService) {
    alert(currentLang === 'ar' ? 'يرجى اختيار خدمة' : 'Please select a service');
    return;
  }
  
  // Save current step data
  saveStepData();
  
  currentStep++;
  updateStepUI();
}

function prevStep() {
  currentStep--;
  updateStepUI();
}

function saveStepData() {
  const form = document.getElementById('lead-form');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    if (input.name) {
      leadData[input.name] = input.value;
    }
  });
  
  if (selectedService) {
    leadData.service = selectedService;
  }
}

function updateStepUI() {
  // Update step indicators
  document.querySelectorAll('.funnel-step').forEach((step, index) => {
    step.classList.remove('active', 'completed');
    if (index + 1 === currentStep) {
      step.classList.add('active');
    } else if (index + 1 < currentStep) {
      step.classList.add('completed');
    }
  });
  
  // Show/hide step content
  document.querySelectorAll('.step-content').forEach((content, index) => {
    content.style.display = index + 1 === currentStep ? 'block' : 'none';
  });
}

async function submitLead() {
  saveStepData();
  
  const submitBtn = document.querySelector('button[onclick="submitLead()"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Submitting...';
  }
  
  try {
    const response = await fetch(`${API_BASE}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
    
    if (response.ok) {
      // Show success
      document.getElementById('lead-form').style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    alert(currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === 'ar' ? 'إرسال' : 'Submit';
    }
  }
}

// Admin Functions (for admin.html)
let adminData = { leads: [], contacts: [], newsletters: [] };
let currentTab = 'leads';

async function initAdmin() {
  // Check if logged in
  const isLoggedIn = await checkAuth();
  if (!isLoggedIn) {
    showLoginForm();
    return;
  }
  
  await loadAdminData();
  renderAdminTabs();
}

async function checkAuth() {
  try {
    const response = await fetch(`${API_BASE}/user`, { credentials: 'include' });
    return response.ok;
  } catch {
    return false;
  }
}

function showLoginForm() {
  document.getElementById('admin-content').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

async function adminLogin(e) {
  e.preventDefault();
  const form = e.target;
  
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: form.username.value,
        password: form.password.value
      })
    });
    
    if (response.ok) {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('admin-content').style.display = 'block';
      await loadAdminData();
      renderAdminTabs();
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    alert('Login failed');
  }
}

async function adminLogout() {
  await fetch(`${API_BASE}/logout`, { method: 'POST', credentials: 'include' });
  location.reload();
}

async function loadAdminData() {
  try {
    const [leads, contacts, newsletters] = await Promise.all([
      fetch(`${API_BASE}/leads`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_BASE}/contact`, { credentials: 'include' }).then(r => r.json()),
      fetch(`${API_BASE}/newsletter`, { credentials: 'include' }).then(r => r.json())
    ]);
    
    adminData = { leads, contacts, newsletters };
    updateStats();
  } catch (error) {
    console.error('Failed to load admin data:', error);
  }
}

function updateStats() {
  document.getElementById('stat-leads').textContent = adminData.leads.length;
  document.getElementById('stat-contacts').textContent = adminData.contacts.length;
  document.getElementById('stat-newsletters').textContent = adminData.newsletters.length;
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.admin-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tab);
  });
  renderTable();
}

function renderAdminTabs() {
  renderTable();
}

function renderTable() {
  const container = document.getElementById('table-container');
  let html = '';
  
  switch (currentTab) {
    case 'leads':
      html = `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${adminData.leads.map(lead => `
              <tr>
                <td>${lead.serviceInterest || '-'}</td>
                <td>${lead.fullName || '-'}</td>
                <td>${lead.email || '-'}</td>
                <td>${lead.companyName || '-'}</td>
                <td>${new Date(lead.createdAt).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      break;
    case 'contacts':
      html = `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${adminData.contacts.map(contact => `
              <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.company || '-'}</td>
                <td>${contact.message.substring(0, 50)}...</td>
                <td>${new Date(contact.createdAt).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      break;
    case 'newsletters':
      html = `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Subscribed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${adminData.newsletters.map(sub => `
              <tr>
                <td>${sub.email}</td>
                <td>${new Date(sub.subscribedAt).toLocaleDateString()}</td>
                <td><button class="btn btn-outline" onclick="deleteNewsletter(${sub.id})">Delete</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      break;
  }
  
  container.innerHTML = html;
}

async function deleteNewsletter(id) {
  if (!confirm('Are you sure you want to delete this subscriber?')) return;
  
  try {
    await fetch(`${API_BASE}/newsletter/${id}`, { 
      method: 'DELETE',
      credentials: 'include'
    });
    await loadAdminData();
    renderTable();
  } catch (error) {
    alert('Failed to delete');
  }
}
