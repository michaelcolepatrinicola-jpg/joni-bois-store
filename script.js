console.log('Joni Bois A-RT System Online');

// Preloader Logic
window.addEventListener('load', () => {
    const progress = document.querySelector('.loader-progress');
    const preloader = document.querySelector('.preloader');

    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 10;
        if (width > 100) width = 100;
        if (progress) progress.style.width = width + '%';

        if (width === 100) {
            clearInterval(interval);
            setTimeout(() => {
                if (preloader) {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 500);
                }
            }, 500);
        }
    }, 100);

    // Failsafe: Force remove preloader after 4 seconds (in case of errors)
    setTimeout(() => {
        if (preloader && preloader.style.display !== 'none') {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }
    }, 4000);
});

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Interactive Element Detection
const interactives = document.querySelectorAll('a, button, .thumbnail');

if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Slight delay for follower
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Add hover effect listeners dynamically
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // Observer for lazy loaded/new elements
    const observer = new MutationObserver((mutations) => {
        const newInteractives = document.querySelectorAll('a, button, .thumbnail');
        newInteractives.forEach(el => {
            // Remove old listeners to avoid dupes (simple approach)
            el.onmouseenter = () => cursor.classList.add('hovered');
            el.onmouseleave = () => cursor.classList.remove('hovered');
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Countdown Logic
const countdownDate = new Date("Jan 1, 2026 00:00:00").getTime();

const updateCountdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const dEl = document.getElementById("days");
    if (dEl) dEl.innerText = days;
    const hEl = document.getElementById("hours");
    if (hEl) hEl.innerText = hours;
    const mEl = document.getElementById("minutes");
    if (mEl) mEl.innerText = minutes;

    if (distance < 0) {
        clearInterval(updateCountdown);
        const grid = document.querySelector('.future-drop-section');
        if (grid) grid.innerHTML = "<h2>THE DROP IS LIVE</h2>";
    }
}, 1000);

// Product Database
const products = {
    'neon-tee': {
        title: 'NEON SIGNATURE TEE',
        price: '$45.00',
        img: './assets/neon_tee.png',
        desc: 'The flagship piece of the collection. Constructed from 240gsm heavyweight cotton, this boxy-fit tee features our signature "Joni Bois" script in a high-density neon blue puff print. Pre-shrunk and garment dyed for a vintage feel from day one.\\n\\nDETAILS:\\n- 100% Cotton\\n- Dropped shoulders\\n- Ribbed crewneck\\n- Made in Portugal',
        thumbnails: [
            './assets/neon_tee.png',
            './assets/neon_tee_back_view.png',
            './assets/neon_tee_model_shot.png'
        ]
    },
    'smoke-hoodie': {
        title: 'SMOKE GRENADE HOODIE',
        price: '$90.00',
        img: './assets/smoke_hoodie.png',
        desc: 'Limited Run. The Smoke Grenade hoodie is built for the night. Featuring a custom "Smoke" graphic that wraps around the torso, printed in a reflective neon blue ink. The 14oz French Terry fleece provides substantial weight without overheating.\\n\\nDETAILS:\\n- 14oz Heavyweight Fleece\\n- Double-lined hood\\n- Kangaroo pocket\\n- Reflective print',
        thumbnails: [
            './assets/smoke_hoodie.png',
            './assets/smoke_hoodie_model.png'
        ]
    },
    'neon-cap': {
        title: 'JONI TRUCKER CAP',
        price: '$35.00',
        img: './assets/neon_cap.png',
        desc: 'Classic high-crown trucker fit with a modern twist. Features a 5-panel construction with a foam front and mesh back. The neon blue embroidery pops against the deep black poly-foam.\\n\\nDETAILS:\\n- Adjustable snapback\\n- Curved brim\\n- One size fits all',
        thumbnails: [
            './assets/neon_cap.png'
        ]
    },
    'neon-deck': {
        title: 'A-RT DECK [8.25"]',
        price: '$75.00',
        img: './assets/neon_deck.png',
        desc: 'Professional grade 7-ply Canadian Maple deck. Medium concave with a steep kick for maximum pop. The bottom ply features a full-dip matte black finish with our neon smoke graphic transfer.\\n\\nDETAILS:\\n- 8.25" Width\\n- 32" Length\\n- 14.25" Wheelbase',
        thumbnails: [
            './assets/neon_deck.png'
        ]
    },
    // Exclusive Collection
    'heaven-tee': {
        title: 'HEAVEN SENT TEE',
        price: '$80.00',
        img: './assets/exclusive_tee_1.png',
        desc: 'ARCHIVE 001. A study in duality. This lavender tee features the "Heaven Sent" motif in a liquid-metal chrome finish, contrasting softness with industrial edge. The "Fallen Angel" silhouette is centered on the lower back.\\n\\nDETAILS:\\n- 280gsm Ultra-heavy cotton\\n- Chrome foil print\\n- Limited Archive label',
        thumbnails: [
            './assets/exclusive_tee_1.png'
        ]
    },
    'fallen-tee': {
        title: 'FALLEN GRACE TEE',
        price: '$80.00',
        img: './assets/exclusive_tee_2.png',
        desc: 'ARCHIVE 002. Embracing the fall. The Fallen Grace tee uses a unique "melted" gothic typography stacked vertically. The matte lavender fabric absorbs light while the black gloss ink reflects it.\\n\\nDETAILS:\\n- Boxy, cropped fit\\n- Raw hem finish\\n- Puff print details',
        thumbnails: [
            './assets/exclusive_tee_2.png',
            './assets/fallen_tee_model.png'
        ]
    },
    'heaven-hoodie': {
        title: 'HEAVEN SENT HOODIE',
        price: '$120.00',
        img: './assets/exclusive_hoodie_1.png',
        desc: 'The heavyweight champion. 500gsm cotton fleece in a custom lavender dye. The entire back features the "Heaven Sent" liquid chrome graphic, while the front remains minimal with a small chest hit.\\n\\nDETAILS:\\n- 500gsm Cotton Fleece\\n- No drawstrings (Clean look)\\n- Chrome heat-transfer graphic',
        thumbnails: [
            './assets/exclusive_hoodie_1.png',
            './assets/heaven_hoodie_front.png',
            './assets/heaven_hoodie_model.png'
        ]
    },
    'fallen-hoodie': {
        title: 'FALLEN GRACE HOODIE',
        price: '$120.00',
        img: './assets/exclusive_hoodie_2.png',
        desc: 'Blackout edition. Deep black fleece with lavender chrome typography. Oversized fit with a balloon sleeve silhouette.\\n\\nDETAILS:\\n- 500gsm Cotton Fleece\\n- Lavender Chrome print\\n- Oversized hood',
        thumbnails: [
            './assets/exclusive_hoodie_2.png'
        ]
    },
    'heaven-cap': {
        title: 'HEAVEN CAP',
        price: '$45.00',
        img: './assets/exclusive_cap_1.png',
        desc: 'Vintage dad hat silhouette in a washed lavender cotton. Unstructured 6-panel crown with "HEAVEN" embroidered in black gothic letter.\\n\\nDETAILS:\\n- Washed Cotton Twill\\n- Antiqued brass buckle',
        thumbnails: [
            './assets/exclusive_cap_1.png'
        ]
    },
    'sent-cap': {
        title: 'SENT CAP',
        price: '$45.00',
        img: './assets/exclusive_cap_2.png',
        desc: 'Distressed black cotton cap. Features "SENT" in lavender embroidery. Pre-curved visor and unstructured fit for that worn-in look.\\n\\nDETAILS:\\n- Distressed detailing\\n- Embroidered logo',
        thumbnails: [
            './assets/exclusive_cap_2.png'
        ]
    },
    // The Origins Collection
    'free-gang-hoodie': {
        title: 'FREE GANG HOODIE',
        price: '$110.00',
        img: './assets/origins_hoodie_back.png',
        desc: 'THE ORIGINS: DROP 001. This is where it started. A heavyweight white hoodie featuring the iconic "FREE GANG" gothic arch text and cross motif. The "clubs" symbols represent the 3 founders.\\n\\nDETAILS:\\n- Heavyweight Cotton Fleece\\n- Puff Print Graphics\\n- The Original Cut',
        thumbnails: [
            './assets/origins_hoodie_back.png',
            './assets/origins_hoodie_model.png'
        ]
    },
    'pretty-girls-tee': {
        title: 'PRETTY GIRLS TEE',
        price: '$55.00',
        img: './assets/origins_lavender_tee_back.png',
        desc: 'THE ORIGINS: DROP 001. The controversial classic. Oversized lavender tee with "PRETTY GIRLS LOVE A-RT" in a chaotic brush script, flanked by silhouette AK-47s. A statement piece that defined our early attitude.\\n\\nDETAILS:\\n- 100% Cotton\\n- Oversized/Boyfriend Fit\\n- Soft Lavender Dye',
        thumbnails: [
            './assets/origins_lavender_tee_back.png',
            './assets/origins_lavender_tee_model.png'
        ]
    },
    'triple-cross-tee': {
        title: 'TRIPLE CROSS TEE',
        price: '$55.00',
        img: './assets/origins_white_tee_front.png',
        desc: 'THE ORIGINS: DROP 001. A study in repetition. Three fading gothic crosses printed on a pristine white tee. High-contrast, gritty, and raw. This piece set the tone for the design language to come.\\n\\nDETAILS:\\n- Standard Fit\\n- Screen Printed Graphic\\n- 100% Cotton',
        thumbnails: [
            './assets/origins_white_tee_front.png',
            './assets/origins_white_tee_model.jpg'
        ]
    },
    // Spanish Collection
    'spanish-tee-jefe': {
        title: 'EL JEFE TEE',
        price: '$45.00',
        img: './assets/spanish_tee_jefe.png',
        desc: 'COLECCIÓN ESPAÑOLA. Respect the rank. Heavyweight black tee featuring oversized Chicano-style "EL JEFE" typography on the back. A nod to the bosses and the leaders.\\n\\nDETAILS:\\n- 240gsm Cotton\\n- Silver/High-Gloss Screenprint\\n- Oversized Box Fit',
        thumbnails: ['./assets/spanish_tee_jefe.png']
    },
    'spanish-tee-aztec': {
        title: 'AZTEC WARRIOR TEE',
        price: '$45.00',
        img: './assets/spanish_tee_aztec.png',
        desc: 'COLECCIÓN ESPAÑOLA. Ancient roots, modern armor. White tee featuring a geometric interpretation of an Aztec warrior mask. Sharp lines meeting deep black ink.\\n\\nDETAILS:\\n- 100% Cotton\\n- Water-based soft hand print\\n- Standard Fit',
        thumbnails: ['./assets/spanish_tee_aztec.png']
    },
    'spanish-hoodie-viva': {
        title: 'VIVA HOODIE',
        price: '$90.00',
        img: './assets/spanish_hoodie_viva.png',
        desc: 'COLECCIÓN ESPAÑOLA. Viva la cultura. Black heavyweight hoodie with "VIVA" in a triple-layer gradient puff print (Green, White, Red). Represents the flag and the spirit.\\n\\nDETAILS:\\n- 14oz Fleece\\n- 3D Puff Embroidery/Print\\n- Kangaroo Pocket',
        thumbnails: ['./assets/spanish_hoodie_viva.png']
    },
    'spanish-hoodie-dead': {
        title: 'DESCANSO HOODIE',
        price: '$90.00',
        img: './assets/spanish_hoodie_dead.png',
        desc: 'COLECCIÓN ESPAÑOLA. Dia de los Muertos special. Features a massive, ornate Sugar Skull on the back, intricately woven with the Joni Bois logo. A tribute to those who came before.\\n\\nDETAILS:\\n- 14oz Fleece\\n- 5-Color Screenprint\\n- Relaxed Fit',
        thumbnails: ['./assets/spanish_hoodie_dead.png']
    },
    'spanish-cap-hecho': {
        title: 'HECHO EN JONI',
        price: '$40.00',
        img: './assets/spanish_cap_hecho.png',
        desc: 'COLECCIÓN ESPAÑOLA. Made in Joni. Black trucker cap with a premium gold-thread embroidered crest. Inspired by classic Mexican seal imagery.\\n\\nDETAILS:\\n- Gold Embroidery\\n- Mesh Back\\n- Snapback Closure',
        thumbnails: ['./assets/spanish_cap_hecho.png']
    },
    'spanish-cap-serape': {
        title: 'EL NORTE MONOTONE',
        price: '$40.00',
        img: './assets/spanish_cap_serape_monotone.png',
        desc: 'COLECCIÓN ESPAÑOLA. The 2025 Refurbishment. We stripped away the color to reveal the texture. Black-on-grey serape weave with metallic silver "JoniBoi" embroidery. Elegant, sharp, and timeless.\\n\\nDETAILS:\\n- Monotone Serape Brim\\n- Silver 3D Embroidery\\n- Limited Edition',
        thumbnails: ['./assets/spanish_cap_serape_monotone.png']
    }
};

// Snow Effect (Simple)
const snowContainer = document.querySelector('.snow-container');
if (snowContainer) {
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.innerText = '❄';
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDuration = Math.random() * 3 + 2 + 's';
        flake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowContainer.appendChild(flake);
    }
}

// Check if we are on the Product Page
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId && products[productId]) {
    const product = products[productId];

    // Load Data
    if (product) {
        // Assuming product structure has 'name' and 'images' now
        document.title = `${product.title} // JONI BOIS`; // Changed from product.name to product.title to match existing product structure
        document.getElementById('product-title').innerText = product.title;
        document.getElementById('product-price').innerText = product.price;
        document.getElementById('product-main-img').src = product.img;

        // Update both description locations
        const mainDesc = document.getElementById('product-description');
        if (mainDesc) mainDesc.innerText = "Premium heavyweight cotton. " + product.title + "."; // Short summary for top

        const accordionDesc = document.getElementById('product-desc');
        if (accordionDesc) accordionDesc.innerText = product.desc; // Full bio for accordion

        // Force main image to be a "White" version if possible for dyeing
        // For this demo, we assume the first image is tintable or we use a fallback if needed.
        // In a real scenario, we'd have a specific "base_white.png" in the product data.

        const gallery = document.getElementById('product-thumbnails');
        if (gallery) {
            gallery.innerHTML = '';
            product.thumbnails.forEach((img, index) => {
                const thumb = document.createElement('div');
                thumb.className = 'thumbnail';
                thumb.innerHTML = `<img src="${img}" alt="Thumb">`;
                if (index === 0) thumb.classList.add('active');
                thumb.onclick = () => {
                    document.getElementById('product-main-img').src = img;
                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');

                    // Reset dye when changing internal images (optional logic)
                    // document.getElementById('product-dye-layer').className = 'dye-overlay dye-white';
                };
                gallery.appendChild(thumb);
            });
        }

        // Initialize Accordion
        initAccordion();
    }
}

// Color Logic for Product Page
function updateProductColor(color) {
    // Update active swatch
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
    // event.target is not defined here, assuming it's called from an event listener
    // For a standalone function, you might pass the element or find it.
    // For now, I'll assume 'event' is available in the context of its call.
    if (event && event.target) {
        event.target.classList.add('selected');
    }


    // Apply Dye
    const dyeLayer = document.getElementById('product-dye-layer');
    if (dyeLayer) {
        dyeLayer.className = 'dye-overlay dye-' + color;
    }
}

// Accordion Logic
// Accordion Logic
function initAccordion() {
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        // Clone to remove old listeners
        const newAcc = acc.cloneNode(true);
        acc.parentNode.replaceChild(newAcc, acc);

        newAcc.addEventListener('click', () => {
            newAcc.classList.toggle('active');
            const panel = newAcc.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove('open');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add('open');
            }
        });
    });
}
// Initialize on load
initAccordion(); // For static pages

// Cart Interaction
const cartBtns = document.querySelectorAll('.btn-add, .btn-add-large, .btn-exclusive');
const cartIcon = document.querySelector('.cart-icon');
let cartCount = 0;

cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartIcon.innerText = `CART (${cartCount})`;

        // Visual feedback
        btn.innerText = 'ADDED';
        setTimeout(() => {
            btn.innerText = 'ADD TO CART'; // Reset text
            if (btn.classList.contains('btn-add-large')) btn.innerText = 'BUILD PROTOTYPE ($80)'; // Reset specific buttons
        }, 1000);
    });
});
if (cartIcon) cartIcon.textContent = `CART (${cartCount})`;

// Check if we are hovered or not to determine style
// Parallax / Scroll Effects for Hero (Simplified)
const heroGlow = document.querySelector('.hero-bg-glow');
if (heroGlow) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Scale the glow down as we scroll away
        const scale = 1 + (scrolled * 0.001);
        heroGlow.style.transform = `translate(-50%, -50%) scale(${scale})`;
        heroGlow.style.opacity = Math.max(0, 0.8 - (scrolled / 500));
    });
}

// Fade In Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

/* =========================================
   PRODUCT PAGE ADD TO CART WIRING
   ========================================= */
const productAddToBagBtn = document.querySelector('.product-actions .btn-add');
if (productAddToBagBtn) {
    // Remove old listeners by cloning
    const newBtn = productAddToBagBtn.cloneNode(true);
    productAddToBagBtn.parentNode.replaceChild(newBtn, productAddToBagBtn);

    newBtn.addEventListener('click', () => {
        // Get current product details from DOM
        const title = document.getElementById('product-title').innerText;
        const price = document.getElementById('product-price').innerText;
        const img = document.getElementById('product-main-img').src;
        
        // Get selected size (if any)
        let size = 'ONE SIZE';
        const sizeSelect = document.querySelector('.size-selector .size-btn.active');
        if (sizeSelect) size = sizeSelect.innerText;

        // Get ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const pid = urlParams.get('id');

        window.cart.addItem({
            id: pid,
            title: title,
            price: price,
            img: img,
            size: size
        });
    });
}

