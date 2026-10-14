(() => {
  const STORAGE_ADS = 'adpost_user_ads';
  const STORAGE_SAVED = 'adpost_saved_ids';
  const STORAGE_SELLER = 'adpost_seller_name';
  const STORAGE_USER = 'adpost_current_user';

  const categories = [
    ['Electronics & Technology', '💻'],
    ['Fashion & Accessories', '👕'],
    ['Home & Furniture', '🛋️'],
    ['Cars & Vehicles', '🚗'],
    ['Properties', '🏠'],
    ['Home Appliances', '🧊'],
    ['Education & Office', '📚'],
    ['Tools & Building', '🛠️'],
    ['Personal Care & Beauty', '💄'],
    ['Sports & Recreation', '⚽'],
    ['Travel & Essentials', '🧳'],
    ['Industrial & Business', '🏭']
  ];

  const seedAds = [
    {
      id: 'seed-electronics',
      title: 'MacBook Pro M2 - Flash Sale',
      category: 'Electronics & Technology',
      price: 1850000,
      location: 'Lagos',
      condition: 'New',
      description: 'Brand new sealed MacBook Pro M2, 16GB RAM. Limited stock flash sale!',
      phone: '08031234567',
      seller: 'TechHub Deals',
      date: '2026-10-10',
      featured: true,
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-fashion',
      title: "Men's Designer Sneakers (Promo)",
      category: 'Fashion & Accessories',
      price: 25000,
      location: 'Abuja',
      condition: 'New',
      description: 'High-quality trending sneakers. 50% discount for the next 24 hours only.',
      phone: '08069874532',
      seller: 'Kicks NG',
      date: '2026-10-09',
      featured: true,
      images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-furniture',
      title: 'L-Shaped Sectional Sofa',
      category: 'Home & Furniture',
      price: 320000,
      location: 'Lagos',
      condition: 'New',
      description: 'Luxurious grey velvet L-shaped sofa. Direct from the factory. Free throw pillows included.',
      phone: '08022553344',
      seller: 'Comfort Living',
      date: '2026-10-08',
      featured: false,
      images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-cars',
      title: 'Toyota Camry 2020 XLE',
      category: 'Cars & Vehicles',
      price: 18500000,
      location: 'Abuja',
      condition: 'Used',
      description: 'Foreign used Toyota Camry 2020. Accident-free, duty paid, fully loaded.',
      phone: '08049128765',
      seller: 'Autos Direct',
      date: '2026-10-07',
      featured: true,
      images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-properties',
      title: 'Luxury 3-Bed Apartment (Lekki)',
      category: 'Properties',
      price: 85000000,
      location: 'Lagos',
      condition: 'New',
      description: 'Newly built 3-bedroom apartment with a swimming pool and 24/7 security. Ready to move in.',
      phone: '08035771004',
      seller: 'Prime Estates',
      date: '2026-10-05',
      featured: false,
      images: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-appliances',
      title: 'Hisense 45L Refrigerator',
      category: 'Home Appliances',
      price: 155000,
      location: 'Ibadan',
      condition: 'New',
      description: 'Energy-saving mini-fridge. Perfect for offices and students. 1-year warranty.',
      phone: '08084561230',
      seller: 'Home Mart',
      date: '2026-10-04',
      featured: false,
      images: ['https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-education',
      title: 'Complete Office Desk Setup',
      category: 'Education & Office',
      price: 95000,
      location: 'Port Harcourt',
      condition: 'New',
      description: 'Ergonomic office chair and writing desk combo. Ideal for work-from-home.',
      phone: '08061624907',
      seller: 'OfficePro',
      date: '2026-10-03',
      featured: false,
      images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-tools',
      title: 'Bosch Professional Drill Set',
      category: 'Tools & Building',
      price: 85000,
      location: 'Lagos',
      condition: 'New',
      description: 'Heavy-duty power drill with full accessories set. Clearance sale, massive discount!',
      phone: '08071835402',
      seller: 'Hardware Hub',
      date: '2026-10-02',
      featured: true,
      images: ['https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-beauty',
      title: 'Premium Skincare Set - 30% Off',
      category: 'Personal Care & Beauty',
      price: 15000,
      location: 'Abuja',
      condition: 'New',
      description: 'Organic glow serum and moisturizer bundle. Limited time deal.',
      phone: '08033445566',
      seller: 'Glow Up NG',
      date: '2026-10-01',
      featured: false,
      images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-sports',
      title: 'Adjustable Dumbbell Set (20kg)',
      category: 'Sports & Recreation',
      price: 45000,
      location: 'Lagos',
      condition: 'New',
      description: 'Perfect for your home gym. Comes with plates, bars, and a secure case.',
      phone: '08077889900',
      seller: 'FitLife Store',
      date: '2026-09-30',
      featured: false,
      images: ['https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-travel',
      title: 'Hard Shell Luggage (Set of 3)',
      category: 'Travel & Essentials',
      price: 120000,
      location: 'Port Harcourt',
      condition: 'New',
      description: 'Scratch-resistant travel bags with 360-degree wheels. Travel in style.',
      phone: '08022334455',
      seller: 'Travel Gear',
      date: '2026-09-29',
      featured: false,
      images: ['https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&w=1000&q=82']
    },
    {
      id: 'seed-industrial',
      title: '5KVA Industrial Generator',
      category: 'Industrial & Business',
      price: 650000,
      location: 'Lagos',
      condition: 'Used',
      description: 'Sound-proof industrial generator. Perfectly maintained, very low hours.',
      phone: '08055667788',
      seller: 'Power Equipments',
      date: '2026-09-28',
      featured: true,
      images: ['https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=82']
    }
  ];

  // Local state & persistence
  let userAds = [];
  try {
    userAds = JSON.parse(localStorage.getItem(STORAGE_ADS) || '[]');
  } catch {
    userAds = [];
  }

  let savedIds = new Set();
  try {
    savedIds = new Set(JSON.parse(localStorage.getItem(STORAGE_SAVED) || '[]'));
  } catch {
    savedIds = new Set();
  }

  let currentUser = null;
  try {
    currentUser = JSON.parse(localStorage.getItem(STORAGE_USER) || 'null');
  } catch {
    currentUser = null;
  }

  let sellerName = localStorage.getItem(STORAGE_SELLER) || currentUser?.name || '';

  const app = document.querySelector('#app');
  const toastNode = document.querySelector('.toast');

  const state = {
    page: 'home',
    lastPage: 'home',
    query: '',
    category: 'All',
    location: 'All',
    condition: 'All',
    minPrice: '',
    maxPrice: '',
    detailId: null,
    detailImage: 0,
    editingId: null,
    formImages: [],
    formInitialized: false,
    mobileOpen: false
  };

  function persistAds() {
    localStorage.setItem(STORAGE_ADS, JSON.stringify(userAds));
  }

  function persistSaved() {
    localStorage.setItem(STORAGE_SAVED, JSON.stringify([...savedIds]));
  }

  function persistUser() {
    if (currentUser) {
      localStorage.setItem(STORAGE_USER, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(STORAGE_USER);
    }
  }

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));

  const money = value => '₦' + Number(value || 0).toLocaleString('en-NG');

  const allAds = () => {
    const map = new Map();
    [...userAds, ...seedAds].forEach(ad => {
      if (!map.has(ad.id)) {
        map.set(ad.id, ad);
      }
    });
    return [...map.values()];
  };

  const imageOf = ad => ad.images?.[0] || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=78';
  const photoSrc = src => escapeHtml(src);

  const blank = (title, message) => `
    <div class="empty-state">
      <div>
        <div class="empty-icon">✱</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  const adCard = ad => `
    <article class="ad-card animate-in">
      <div class="card-photo" data-detail="${escapeHtml(ad.id)}" role="link" tabindex="0" aria-label="View ${escapeHtml(ad.title)}">
        <img src="${photoSrc(imageOf(ad))}" alt="${escapeHtml(ad.title)}" loading="lazy">
        ${ad.featured ? '<span class="featured-tag">✧ &nbsp;FEATURED</span>' : ''}
        <button class="heart-button ${savedIds.has(ad.id) ? 'is-saved' : ''}" data-save="${escapeHtml(ad.id)}" aria-label="${savedIds.has(ad.id) ? 'Remove saved ad' : 'Save ad'}" aria-pressed="${savedIds.has(ad.id)}">
          ${savedIds.has(ad.id) ? '♥' : '♡'}
        </button>
      </div>
      <div class="card-info" data-detail="${escapeHtml(ad.id)}" role="link" tabindex="0">
        <div class="card-kicker">${escapeHtml(ad.category)}</div>
        <h3 class="card-title">${escapeHtml(ad.title)}</h3>
        <div class="card-price">${money(ad.price)}</div>
        <div class="card-foot">
          <span>📍 &nbsp;${escapeHtml(ad.location)}</span>
          <span class="condition">${escapeHtml(ad.condition)}</span>
        </div>
      </div>
    </article>
  `;

  const heading = (title, subtitle = '') => `
    <h1 class="page-title">${escapeHtml(title)}</h1>
    ${subtitle ? `<p class="page-subtitle">${escapeHtml(subtitle)}</p>` : ''}
  `;

  function renderHome() {
    const products = allAds().slice().sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 8);
    const featured = allAds().filter(ad => ad.featured).slice(0, 4);

    return `
      <section class="hero animate-in">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-dot"></span> Your neighbourhood marketplace</div>
          <h1>Advertise Anything.<br><span>Reach More People.</span></h1>
          <p>Shop local finds, compare prices and connect directly with sellers in your community.</p>
          <form class="hero-search" id="hero-search">
            <input name="search" aria-label="Search products" placeholder="What are you looking for? Try iPhone or Toyota" autocomplete="off">
            <button class="button" type="submit">Find a product &nbsp;→</button>
          </form>
          <div class="hero-note">Free to browse &nbsp;·&nbsp; Made for local connections in Nigeria</div>
        </div>
        <div class="hero-photo">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85" alt="Sunlit living room">
          <div class="photo-sticker"><span>✧ &nbsp;LOCAL FINDS</span><br>Something good is close by</div>
          <div class="photo-caption">Find something you'll love.</div>
        </div>
      </section>

      <section class="category-section">
        <div class="section-heading">
          <div>
            <h2>Shop by category</h2>
            <p>Explore what's available near you</p>
          </div>
        </div>
        <div class="category-grid">
          ${categories.map(([name, emoji]) => `
            <button class="category-tile" data-category="${escapeHtml(name)}">
              <span class="category-emoji">${emoji}</span>
              <span class="category-name">${escapeHtml(name)}</span>
            </button>
          `).join('')}
        </div>
      </section>

      <section class="listing-section">
        <div class="section-heading">
          <div>
            <h2>Fresh finds</h2>
            <p>Recently added products and services from local sellers</p>
          </div>
          <button class="section-link" data-page="browse">Browse all products &nbsp;→</button>
        </div>
        <div class="card-grid">
          ${products.map(adCard).join('')}
        </div>
      </section>

      <section class="listing-section" style="padding-top:0">
        <div class="section-heading">
          <div>
            <h2>Featured picks</h2>
            <p>Standout finds worth a closer look</p>
          </div>
        </div>
        <div class="card-grid">
          ${featured.map(adCard).join('')}
        </div>
      </section>
    `;
  }

  function filteredAds() {
    const q = state.query.trim().toLowerCase();
    return allAds().filter(ad => {
      const text = [ad.title, ad.description, ad.category, ad.location, ad.seller].join(' ').toLowerCase();
      return (!q || text.includes(q))
        && (state.category === 'All' || ad.category === state.category)
        && (state.location === 'All' || ad.location === state.location)
        && (state.condition === 'All' || ad.condition === state.condition)
        && (!state.minPrice || Number(ad.price) >= Number(state.minPrice))
        && (!state.maxPrice || Number(ad.price) <= Number(state.maxPrice));
    }).sort((a, b) => {
      const featuredDiff = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featuredDiff !== 0) return featuredDiff;
      return (b.date || '').localeCompare(a.date || '');
    });
  }

  function renderBrowse() {
    const locations = [...new Set(allAds().map(ad => ad.location))].sort();
    const results = filteredAds();

    return `
      <section class="page">
        ${heading('Find your next good thing', state.category === 'All' ? 'Good stuff, useful things and friendly services in your community.' : `Browse ${escapeHtml(state.category.toLowerCase())} available near you.`)}
        <form class="browse-toolbar" id="browse-search">
          <div class="browse-search">
            <span aria-hidden="true">🔍</span>
            <input name="search" aria-label="Search ads" placeholder="Try “iPhone”, “Toyota”, or “electrician”…" value="${escapeHtml(state.query)}">
          </div>
          <button class="button button-small" type="submit">Search &nbsp;→</button>
        </form>

        <div class="filter-row">
          <select class="field-control" name="category" aria-label="Filter by category">
            <option>All</option>
            ${categories.map(([cat]) => `<option ${state.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
          </select>
          <select class="field-control" name="location" aria-label="Filter by location">
            <option>All</option>
            ${locations.map(loc => `<option ${state.location === loc ? 'selected' : ''}>${escapeHtml(loc)}</option>`).join('')}
          </select>
          <select class="field-control" name="condition" aria-label="Filter by condition">
            <option>All</option>
            <option ${state.condition === 'New' ? 'selected' : ''}>New</option>
            <option ${state.condition === 'Used' ? 'selected' : ''}>Used</option>
          </select>
          <label class="price-field">
            <span>₦</span>
            <input name="min" aria-label="Minimum price" type="number" min="0" placeholder="Min price" value="${escapeHtml(state.minPrice)}">
          </label>
          <label class="price-field">
            <span>₦</span>
            <input name="max" aria-label="Maximum price" type="number" min="0" placeholder="Max price" value="${escapeHtml(state.maxPrice)}">
          </label>
          <button class="button button-light button-small" type="button" data-action="clear-filters">Clear filters</button>
        </div>

        <p class="results-meta">${results.length} ${results.length === 1 ? 'product' : 'products'}${state.query ? ` for “${escapeHtml(state.query)}”` : ''}</p>
        <div class="card-grid">
          ${results.length ? results.map(adCard).join('') : blank('Nothing here just yet', 'Try a different search or adjust your filters.')}
        </div>
      </section>
    `;
  }

  function renderPost() {
    const current = state.editingId ? userAds.find(ad => ad.id === state.editingId) : null;
    if (state.editingId && !state.formInitialized) {
      state.formImages = [...(current?.images || [])];
      state.formInitialized = true;
    }
    const images = state.formImages;
    const categoriesOptions = categories.map(([cat]) => `<option ${current?.category === cat ? 'selected' : ''}>${cat}</option>`).join('');

    return `
      <section class="page">
        ${heading(current ? 'Edit your ad' : 'Share something good', current ? 'Update the details below and save your changes.' : 'A few details, a good photo, and it’s out in the world.')}
        <div class="form-layout">
          <form class="ad-form" id="ad-form" novalidate>
            <div class="form-section">
              <h2>The essentials</h2>
              <div class="form-grid">
                <div class="form-field full">
                  <label for="ad-title">Ad title *</label>
                  <input id="ad-title" name="title" required maxlength="70" placeholder="e.g. Toyota Camry 2020" value="${escapeHtml(current?.title || '')}">
                </div>
                <div class="form-field">
                  <label for="ad-category">Category *</label>
                  <select id="ad-category" name="category" required>
                    <option value="">Choose a category</option>
                    ${categoriesOptions}
                  </select>
                </div>
                <div class="form-field">
                  <label for="ad-condition">Condition *</label>
                  <select id="ad-condition" name="condition" required>
                    <option value="">Choose condition</option>
                    <option ${(current?.condition || '') === 'New' ? 'selected' : ''}>New</option>
                    <option ${(current?.condition || '') === 'Used' ? 'selected' : ''}>Used</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="ad-price">Price in naira (₦) *</label>
                  <input id="ad-price" name="price" type="number" required min="1" placeholder="e.g. 450000" value="${escapeHtml(current?.price || '')}">
                </div>
                <div class="form-field">
                  <label for="ad-location">City *</label>
                  <input id="ad-location" name="location" required maxlength="50" placeholder="e.g. Lagos" value="${escapeHtml(current?.location || '')}">
                </div>
                <div class="form-field full">
                  <label for="ad-description">Description *</label>
                  <textarea id="ad-description" name="description" required maxlength="1800" placeholder="Tell people what makes your item or service worth a look…">${escapeHtml(current?.description || '')}</textarea>
                </div>
              </div>
            </div>

            <div class="form-section">
              <h2>Make it easy to picture</h2>
              <label class="upload-zone" for="ad-images">
                <input id="ad-images" name="images" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple>
                <span>
                  <span class="upload-symbol">▧</span>
                  <strong>Add photos</strong>
                  <small>Choose up to 4 photos · JPG, PNG, GIF or WebP</small>
                </span>
              </label>
              <div class="preview-grid" id="image-preview">
                ${images.map((src, index) => `
                  <div class="preview-thumb">
                    <img src="${photoSrc(src)}" alt="Listing photo ${index + 1}">
                    <button type="button" data-remove-image="${index}" aria-label="Remove photo">×</button>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="form-section">
              <h2>Let buyers reach you</h2>
              <div class="form-grid">
                <div class="form-field">
                  <label for="seller-name">Your name *</label>
                  <input id="seller-name" name="seller" required maxlength="50" autocomplete="name" placeholder="What should buyers call you?" value="${escapeHtml(current?.seller || currentUser?.name || sellerName)}">
                </div>
                <div class="form-field">
                  <label for="seller-phone">Phone / WhatsApp *</label>
                  <input id="seller-phone" name="phone" required type="tel" maxlength="20" autocomplete="tel" placeholder="e.g. 08012345678" value="${escapeHtml(current?.phone || '')}">
                </div>
              </div>
            </div>

            <button class="button form-submit" type="submit">${current ? 'Save changes' : 'Publish your ad'} &nbsp;→</button>
          </form>

          <aside class="form-aside">
            <h3>A good ad gets noticed.</h3>
            <p>Clear, honest descriptions help people know exactly what you’re offering. Mention the details you’d want to know yourself.</p>
            <p>Photos make all the difference. A bright, straightforward picture is a great place to start.</p>
            <p>Your phone number is only shared with people viewing your listing.</p>
          </aside>
        </div>
      </section>
    `;
  }

  function renderDetail() {
    const ad = allAds().find(item => item.id === state.detailId);
    if (!ad) {
      state.page = 'browse';
      return renderBrowse();
    }
    const images = ad.images?.length ? ad.images : [imageOf(ad)];
    const number = String(ad.phone || '').replace(/\D/g, '');
    const whatsapp = number.startsWith('0') ? '234' + number.slice(1) : number;
    const date = new Date(`${ad.date || new Date().toISOString().slice(0, 10)}T12:00:00`).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const waText = encodeURIComponent(`Hello, I saw your ad for "${ad.title}" on AdPost. Is it still available?`);

    return `
      <section class="page">
        <button class="detail-back" data-action="back-to-browse">← &nbsp;Back</button>
        <div class="detail-layout">
          <div>
            <div class="detail-image">
              <img id="detail-main-image" src="${photoSrc(images[state.detailImage] || images[0])}" alt="${escapeHtml(ad.title)}">
            </div>
            ${images.length > 1 ? `
              <div class="detail-thumbs">
                ${images.map((src, i) => `
                  <button class="detail-thumb ${i === state.detailImage ? 'active' : ''}" data-image-index="${i}" aria-label="Show photo ${i + 1}">
                    <img src="${photoSrc(src)}" alt="">
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <aside class="detail-panel">
            <div class="detail-category">${ad.featured ? '✧ Featured · ' : ''}${escapeHtml(ad.category)} &nbsp;·&nbsp; ${escapeHtml(ad.condition)}</div>
            <h1>${escapeHtml(ad.title)}</h1>
            <div class="detail-price">${money(ad.price)}</div>
            <div class="detail-location">📍 &nbsp;${escapeHtml(ad.location)}</div>
            <div class="detail-divider"></div>
            <h2>About this ad</h2>
            <p class="detail-description">${escapeHtml(ad.description)}</p>
            <div class="detail-divider"></div>
            <h2>Seller</h2>
            <div class="seller-contact">
              <div class="avatar">${escapeHtml((ad.seller || 'A').trim().charAt(0).toUpperCase())}</div>
              <div>
                <strong>${escapeHtml(ad.seller || 'AdPost seller')}</strong>
                <small>Posted ${escapeHtml(date)}</small>
              </div>
            </div>
            <div class="detail-actions">
              ${number ? `<a class="button" href="tel:${escapeHtml(number)}">📞 &nbsp;Call seller</a>` : `<button class="button" data-action="demo-contact">📞 &nbsp;Call seller</button>`}
              ${whatsapp ? `<a class="button whatsapp-button" href="https://wa.me/${escapeHtml(whatsapp)}?text=${waText}" target="_blank" rel="noopener noreferrer">WhatsApp seller &nbsp;↗</a>` : `<button class="button whatsapp-button" data-action="demo-contact">WhatsApp seller &nbsp;↗</button>`}
              <button class="button button-light" data-save="${escapeHtml(ad.id)}">
                ${savedIds.has(ad.id) ? '♥ &nbsp;Saved' : '♡ &nbsp;Save this ad'}
              </button>
              ${userAds.some(item => item.id === ad.id) ? `<button class="button button-light" data-action="edit-ad" data-id="${escapeHtml(ad.id)}">Edit your ad</button>` : ''}
            </div>
            <div style="margin-top: 15px; text-align: center;">
              <button class="button-light" data-action="report-ad" style="border: none; background: none; font-size: 11px; text-decoration: underline; color: #a44938; padding: 0; cursor: pointer;">Report this ad</button>
            </div>
            <p class="safety-note">Always arrange to meet safely in public and inspect the item before sending money.</p>
          </aside>
        </div>
      </section>
    `;
  }

  function renderSaved() {
    const saved = allAds().filter(ad => savedIds.has(ad.id));
    return `
      <section class="page">
        ${heading('Your saved finds', 'A shortlist of things you’d like to come back to.')}
        ${saved.length ? `<div class="card-grid">${saved.map(adCard).join('')}</div>` : `<div class="saved-empty">${blank('Your saved list is empty', 'Tap the heart on any ad to keep it close by.')}</div>`}
      </section>
    `;
  }

  function renderDashboard() {
    const mine = userAds;
    return `
      <section class="page">
        ${heading('My products', 'Everything you’ve listed from this browser, all in one place.')}
        <div class="dashboard-actions">
          <button class="button button-small" data-page="post">＋ &nbsp; Post another product</button>
          <span class="results-meta">${mine.length} ${mine.length === 1 ? 'product' : 'products'} listed</span>
        </div>
        ${mine.length ? `
          <div style="margin-top:17px">
            ${mine.map(ad => `
              <div class="listing-row">
                <img src="${photoSrc(imageOf(ad))}" alt="">
                <div>
                  <h3>${escapeHtml(ad.title)}</h3>
                  <p>${money(ad.price)} &nbsp;·&nbsp; ${escapeHtml(ad.location)} &nbsp;·&nbsp; ${escapeHtml(ad.category)}</p>
                </div>
                <div class="listing-row-actions">
                  <button data-action="edit-ad" data-id="${escapeHtml(ad.id)}">Edit</button>
                  <button data-action="delete-ad" data-id="${escapeHtml(ad.id)}">Delete</button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="saved-empty">
            ${blank('Your first product starts here', 'Products you publish will show up here so you can manage them.')}
          </div>
        `}
      </section>
    `;
  }

  function renderAbout() {
    return `
      <section class="page">
        ${heading('Good things happen nearby.', 'A simpler way to find what you need and share what you have in Nigeria.')}
        <div class="about-grid">
          <article class="about-item">
            <h2>Find your next good thing.</h2>
            <p>Browse local listings across cars, phones, fashion, electronics, property and services. Search, filter by location, and save the finds you love.</p>
          </article>
          <article class="about-item">
            <h2>Give something a second life.</h2>
            <p>List an item or service with a few details, a photo and a way for interested buyers to reach you directly.</p>
          </article>
          <article class="about-item">
            <h2>Made for Nigeria.</h2>
            <p>Listings are priced in naira (₦) and organised around Nigerian cities, so it feels a little closer to home.</p>
          </article>
          <article class="about-item">
            <h2>Connect thoughtfully.</h2>
            <p>Talk to sellers directly. Meet in a public place, check items before paying, and never share payment information with someone you don’t trust.</p>
          </article>
        </div>
        <button class="button" data-page="browse" style="margin-top:28px">Start browsing &nbsp;→</button>
      </section>
    `;
  }

  function renderAuth() {
    if (currentUser) {
      return `
        <section class="auth-shell" style="background: var(--paper); display: grid; place-items: center; min-height: calc(100vh - 161px);">
          <div class="auth-panel" style="width: min(100%, 420px); padding: 40px; background: white; border-radius: 12px; box-shadow: var(--shadow); border: 1px solid var(--line); text-align: center;">
            <div class="avatar" style="width: 56px; height: 56px; font-size: 24px; margin: 0 auto 16px;">${escapeHtml(currentUser.name.charAt(0).toUpperCase())}</div>
            <h1 style="font-family: var(--display); font-size: 24px; margin: 0 0 6px;">Signed in as ${escapeHtml(currentUser.name)}</h1>
            <p style="color: var(--muted); font-size: 13px; margin: 0 0 24px;">${escapeHtml(currentUser.email)}</p>
            <div style="display: grid; gap: 10px;">
              <button type="button" class="button" data-page="dashboard" style="width: 100%;">View my products &nbsp;→</button>
              <button type="button" class="button button-light" data-page="post" style="width: 100%;">＋ Post a new product</button>
              <button type="button" class="button button-light" data-action="logout" style="width: 100%; color: var(--coral);">Sign out</button>
            </div>
          </div>
        </section>
      `;
    }

    return `
      <section class="auth-shell" style="background: var(--paper); display: grid; place-items: center; min-height: calc(100vh - 161px);">
        <div class="auth-panel" style="width: min(100%, 400px); padding: 40px; background: white; border-radius: 12px; box-shadow: var(--shadow); border: 1px solid var(--line);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-family: var(--display); font-size: 28px; margin: 0 0 10px;">Welcome back</h1>
            <p style="color: var(--muted); font-size: 14px; margin: 0;">Sign in to continue to AdPost.</p>
          </div>
          <form class="auth-form" id="login-form" style="display: grid; gap: 16px;">
            <label style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; font-weight: bold; color: #555;">
              Username or Email
              <input id="auth-email" type="email" required placeholder="you@example.com" value="demo@adpost.com" style="min-height: 44px; padding: 0 12px; border: 1px solid #ccc; border-radius: 6px; width: 100%; box-sizing: border-box;">
            </label>
            <label style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; font-weight: bold; color: #555;">
              Password
              <input id="auth-password" type="password" required placeholder="••••••••" value="password123" style="min-height: 44px; padding: 0 12px; border: 1px solid #ccc; border-radius: 6px; width: 100%; box-sizing: border-box;">
            </label>
            <button type="submit" class="button" style="width: 100%; min-height: 48px; margin-top: 10px;">Sign in &nbsp;→</button>
          </form>
        </div>
      </section>
    `;
  }

  let toastTimer;
  function showToast(message) {
    if (!toastNode) return;
    toastNode.textContent = message;
    toastNode.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastNode.classList.remove('show'), 2800);
  }

  function go(page) {
    if (state.page !== 'detail') {
      state.lastPage = state.page;
    }
    state.page = page;
    state.mobileOpen = false;
    state.detailId = null;
    if (page !== 'post') {
      state.editingId = null;
      state.formImages = [];
      state.formInitialized = false;
    }
    history.pushState({ page }, '', `#${page === 'home' ? 'home' : page}`);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateFilters() {
    const selects = app.querySelectorAll('.filter-row select');
    if (selects.length >= 3) {
      state.category = selects[0].value;
      state.location = selects[1].value;
      state.condition = selects[2].value;
    }
    const minimum = app.querySelector('[name=min]');
    const maximum = app.querySelector('[name=max]');
    if (minimum) state.minPrice = minimum.value;
    if (maximum) state.maxPrice = maximum.value;
    render();
  }

  function resizeImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const image = new Image();
        image.onerror = reject;
        image.onload = () => {
          const maxDim = 1200;
          const ratio = Math.min(1, maxDim / Math.max(image.width, image.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(image.width * ratio);
          canvas.height = Math.round(image.height * ratio);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function render() {
    const savedCountEl = document.querySelector('#saved-count');
    if (savedCountEl) {
      savedCountEl.textContent = savedIds.size ? `(${savedIds.size})` : '';
    }

    // Update active state across all nav elements
    document.querySelectorAll('[data-page]').forEach(button => {
      button.classList.toggle('active', button.dataset.page === state.page);
    });

    // Update Auth buttons in navbars
    const authBtn = document.querySelector('#auth-nav-btn');
    const mobileAuthBtn = document.querySelector('#mobile-auth-btn');
    const authLabel = currentUser ? `Hi, ${currentUser.name.split(' ')[0]}` : 'Sign in';
    if (authBtn) authBtn.textContent = authLabel;
    if (mobileAuthBtn) mobileAuthBtn.textContent = currentUser ? `Account (${currentUser.name})` : 'Sign in';

    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
      mobileNav.classList.toggle('open', state.mobileOpen);
    }
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', String(state.mobileOpen));
    }

    const routes = {
      home: renderHome,
      browse: renderBrowse,
      post: renderPost,
      detail: renderDetail,
      saved: renderSaved,
      dashboard: renderDashboard,
      about: renderAbout,
      auth: renderAuth
    };

    app.innerHTML = (routes[state.page] || renderHome)();

    const titles = {
      home: 'AdPost — Good finds, close by',
      browse: 'Browse products — AdPost',
      post: state.editingId ? 'Edit your ad — AdPost' : 'Post a product — AdPost',
      detail: 'Product details — AdPost',
      saved: 'Saved products — AdPost',
      dashboard: 'My products — AdPost',
      about: 'About — AdPost',
      auth: currentUser ? 'My Account — AdPost' : 'Sign in — AdPost'
    };
    document.title = titles[state.page] || 'AdPost';
  }

  // Event Listeners
  document.addEventListener('click', event => {
    const page = event.target.closest('[data-page]');
    if (page) {
      go(page.dataset.page);
      return;
    }

    const category = event.target.closest('[data-category]');
    if (category) {
      state.category = category.dataset.category;
      state.query = '';
      go('browse');
      return;
    }

    const save = event.target.closest('[data-save]');
    if (save) {
      event.preventDefault();
      event.stopPropagation();
      const id = save.dataset.save;
      if (savedIds.has(id)) {
        savedIds.delete(id);
        showToast('Removed from your saved ads.');
      } else {
        savedIds.add(id);
        showToast('Added to your saved ads.');
      }
      persistSaved();
      render();
      return;
    }

    const details = event.target.closest('[data-detail]');
    if (details && !event.target.closest('[data-save]')) {
      state.lastPage = state.page;
      state.detailId = details.dataset.detail;
      state.detailImage = 0;
      state.page = 'detail';
      history.pushState({ page: 'detail' }, '', `#ad/${encodeURIComponent(state.detailId)}`);
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const thumb = event.target.closest('[data-image-index]');
    if (thumb) {
      state.detailImage = Number(thumb.dataset.imageIndex);
      const mainImg = document.querySelector('#detail-main-image');
      const ad = allAds().find(item => item.id === state.detailId);
      const images = ad?.images?.length ? ad.images : [imageOf(ad)];
      if (mainImg && images[state.detailImage]) {
        mainImg.src = images[state.detailImage];
      }
      document.querySelectorAll('.detail-thumb').forEach((el, i) => {
        el.classList.toggle('active', i === state.detailImage);
      });
      return;
    }

    const action = event.target.closest('[data-action]');
    if (action) {
      const act = action.dataset.action;
      if (act === 'clear-filters') {
        state.query = '';
        state.category = 'All';
        state.location = 'All';
        state.condition = 'All';
        state.minPrice = '';
        state.maxPrice = '';
        render();
      }
      if (act === 'back-to-browse') {
        if (state.lastPage && state.lastPage !== 'detail') {
          go(state.lastPage);
        } else {
          go('browse');
        }
      }
      if (act === 'edit-ad') {
        state.editingId = action.dataset.id;
        const current = userAds.find(ad => ad.id === state.editingId);
        state.formImages = [...(current?.images || [])];
        state.formInitialized = true;
        state.page = 'post';
        history.pushState({ page: 'post' }, '', '#post');
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (act === 'delete-ad') {
        const ad = userAds.find(item => item.id === action.dataset.id);
        if (ad && confirm(`Delete “${ad.title}”? This can't be undone.`)) {
          userAds = userAds.filter(item => item.id !== action.dataset.id);
          persistAds();
          go('dashboard');
          showToast('Your product has been deleted.');
        }
      }
      if (act === 'report-ad') {
        showToast('Thank you. This listing has been flagged for administrative review.');
      }
      if (act === 'demo-contact') {
        showToast('No direct phone number provided for this sample ad.');
      }
      if (act === 'logout') {
        currentUser = null;
        persistUser();
        showToast('You have been signed out.');
        render();
      }
      return;
    }

    const removeImg = event.target.closest('[data-remove-image]');
    if (removeImg) {
      const idx = Number(removeImg.dataset.removeImage);
      if (idx >= 0 && idx < state.formImages.length) {
        state.formImages.splice(idx, 1);
        render();
      }
      return;
    }

    if (event.target.closest('.mobile-toggle')) {
      state.mobileOpen = !state.mobileOpen;
      render();
    }
  });

  document.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('[data-detail]') && !event.target.closest('[data-save]')) {
      event.preventDefault();
      event.target.closest('[data-detail]').click();
    }
  });

  document.addEventListener('input', event => {
    if (event.target.matches('[name=min], [name=max]')) {
      updateFilters();
    }
  });

  document.addEventListener('submit', event => {
    if (event.target.id === 'login-form') {
      event.preventDefault();
      const email = document.querySelector('#auth-email')?.value.trim() || 'demo@adpost.com';
      const name = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      currentUser = { email, name, loggedIn: true };
      sellerName = name;
      persistUser();
      localStorage.setItem(STORAGE_SELLER, sellerName);
      showToast(`Welcome back, ${name}!`);
      go('home');
      return;
    }

    if (event.target.id === 'hero-search' || event.target.id === 'browse-search') {
      event.preventDefault();
      const data = new FormData(event.target);
      state.query = String(data.get('search') || '').trim();
      state.page = 'browse';
      state.mobileOpen = false;
      history.pushState({ page: 'browse' }, '', '#browse');
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (event.target.id === 'ad-form') {
      event.preventDefault();
      const form = event.target;
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const phone = String(data.get('phone') || '').trim();
      if (phone.replace(/\D/g, '').length < 7) {
        showToast('Add a valid phone number so buyers can reach you.');
        form.elements.phone?.focus();
        return;
      }

      const existing = state.editingId ? userAds.find(ad => ad.id === state.editingId) : null;
      const images = state.formImages.length ? [...state.formImages] : (existing?.images?.length ? existing.images : ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=78']);

      const ad = {
        id: existing?.id || `ad-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        title: String(data.get('title')).trim(),
        category: String(data.get('category')),
        price: Number(data.get('price')),
        location: String(data.get('location')).trim(),
        condition: String(data.get('condition')),
        description: String(data.get('description')).trim(),
        seller: String(data.get('seller')).trim() || (currentUser?.name || 'Local Seller'),
        phone,
        images,
        date: existing?.date || new Date().toISOString().slice(0, 10),
        featured: existing?.featured || false
      };

      if (existing) {
        userAds = userAds.map(item => item.id === existing.id ? ad : item);
      } else {
        userAds.unshift(ad);
      }

      sellerName = ad.seller;
      localStorage.setItem(STORAGE_SELLER, sellerName);

      try {
        persistAds();
      } catch {
        if (!existing) userAds.shift();
        showToast('Browser storage is full. Try uploading smaller photos.');
        return;
      }

      state.editingId = null;
      state.formImages = [];
      state.formInitialized = false;
      state.page = 'detail';
      state.detailId = ad.id;
      state.detailImage = 0;
      history.pushState({ page: 'detail' }, '', `#ad/${encodeURIComponent(ad.id)}`);
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(existing ? 'Your ad has been updated.' : 'Your ad is live! Happy connecting!');
    }
  });

  document.addEventListener('change', event => {
    if (event.target.closest('.filter-row') && !event.target.matches('[name=min], [name=max]')) {
      updateFilters();
      return;
    }

    if (event.target.id === 'ad-images') {
      const files = [...(event.target.files || [])];
      if (state.formImages.length + files.length > 4) {
        showToast('Choose up to 4 photos altogether.');
        return;
      }

      const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (files.some(file => !allowed.includes(file.type))) {
        showToast('Please choose JPG, PNG, GIF or WebP photos.');
        return;
      }

      Promise.all(files.map(resizeImage)).then(newImages => {
        state.formImages.push(...newImages);
        render();
      }).catch(() => {
        showToast('One of those photos could not be loaded.');
      });
    }
  });

  window.addEventListener('popstate', () => {
    const hash = location.hash;
    if (hash.startsWith('#ad/')) {
      state.detailId = decodeURIComponent(hash.slice(4));
      state.page = 'detail';
    } else {
      const page = hash.replace(/^#/, '');
      state.page = ['browse', 'post', 'saved', 'dashboard', 'about', 'auth'].includes(page) ? page : 'home';
    }
    render();
  });

  const yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const initialHash = location.hash;
  if (initialHash.startsWith('#ad/')) {
    state.detailId = decodeURIComponent(initialHash.slice(4));
    state.page = 'detail';
  } else {
    const page = initialHash.replace(/^#/, '');
    if (['browse', 'post', 'saved', 'dashboard', 'about', 'auth'].includes(page)) {
      state.page = page;
    }
  }

  render();
})();
