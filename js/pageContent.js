/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content">
            <!-- Main Hero Container (Full-Screen Background) -->
            <div id="hero-main-wrapper" class="hero-main-container">
                <!-- Animated Particle Background -->
                <div id="particles-canvas" class="absolute inset-0 z-0"></div>
                
                <!-- Prominent Top-Centered Logo Section -->
                <div class="hero-logo-section">
                    <img src="./assets/images/tochislogo.png" alt="Tochi's Hot Chicken" class="hero-logo-prominent animate-hero-logo">
                </div>
                
                <!-- Main Content Flex Area (Text and Image Side-by-Side) -->
                <div class="hero-content-flex-area">
                    
                    <!-- Left Column (Text & Button) -->
                    <div class="hero-left-column">
                        <!-- Headline -->
                        <h1 class="hero-main-headline animate-hero-text">
                            <div>The <span class="hero-hottest-word">Hottest Chicken</span></div>
                            <div>in Myrtle Beach</div>
                        </h1>
                        
                        <!-- Description -->
                        <p class="hero-main-description animate-hero-description">
                            Nashville-style heat meets coastal flavor.
                        </p>
                        
                        <!-- Call to Action -->
                        <button class="hero-main-cta animate-hero-button"
                                onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                            View Our Menu
                        </button>
                    </div>
                    
                    <!-- Right Column (Dynamic Product Image) -->
                    <div class="hero-right-column">
                        <img src="./assets/images/chickenpng.png" 
                             alt="Delicious Hot Chicken" 
                             class="hero-chicken-image animate-hero-image">
                    </div>
                    
                </div>
            </div>

            <!-- Signature Wings & Sauces -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6">Nashville-Style Hot Chicken<br><span class="text-[#ff6b00]">Made Fresh to Order</span></h2>
                            <p class="text-xl text-gray-700 mb-6">At Tochi's Hot Chicken, we bring authentic Nashville-style hot chicken to Myrtle Beach. Each piece is brined, breaded, and fried to perfection, then tossed in your choice of heat level from mild to extra hot.</p>
                            <button class="bg-[#ff6b00] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e65100] transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                View Our Menu
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-white rounded-xl p-1 border border-gray-200 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                                         alt="Delicious Hot Chicken at Tochi's Hot Chicken" 
                                         class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-orange-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-orange-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Fan Favorite Chicken</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Our most popular chicken dishes that keep our customers coming back for more</p>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <!-- Tochi's #1 -->
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative bg-gradient-to-br from-orange-400 to-red-500 h-48 flex items-center justify-center">
                              <div class="text-6xl">🍗</div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Tochi's #1</h3>
                                  <p class="text-yellow-200 text-sm">$11.99</p>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Two Tenders with Fries. Served with sliced bread, pickles and Tochi sauce.</p>
                              <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Add to Cart
                              </button>
                          </div>
                      </div>
                    </div>
                    
                    <!-- Tochi's #2 -->
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative bg-gradient-to-br from-yellow-400 to-orange-500 h-48 flex items-center justify-center">
                              <div class="text-6xl">🍔</div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Tochi's #2</h3>
                                  <p class="text-yellow-200 text-sm">$13.99</p>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Two Sliders with Fries. Served with coleslaw, pickles and Tochi sauce.</p>
                              <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Add to Cart
                              </button>
                          </div>
                      </div>
                    </div>
                    
                    <!-- Mac & Cheese -->
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative bg-gradient-to-br from-yellow-300 to-orange-400 h-48 flex items-center justify-center">
                              <div class="text-6xl">🧀</div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Mac & Cheese</h3>
                                  <p class="text-yellow-200 text-sm">$3.49</p>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Creamy, cheesy macaroni that perfectly complements our spicy chicken. A customer favorite!</p>
                              <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Add to Cart
                              </button>
                          </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View All Chicken Dishes
                    </a>
                </div>
            </div>

            <!-- Wing Lovers Testimonials -->
            <div class="bg-yellow-50 backdrop-blur-sm rounded-xl p-8 mx-4 border border-yellow-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">What Tochi's Fans Say</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Don't just take our word for it - hear from our Nashville hot chicken lovers</p>
                </div>
                <div class="swiper fans-say-swiper max-w-4xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">MW</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Mike W.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"Tochi's Nashville Hot Chicken is INCREDIBLE! Perfectly crispy with just the right amount of heat. I've tried hot chicken all over the country, and this is hands down the best in Myrtle Beach!"</p>
                              <div class="text-xs text-gray-500">Hot Chicken Enthusiast</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">JL</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Jen L.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"Tochi's #2 sliders are addictive! The perfect combination of heat and flavor. I drive 30 minutes just to get my fix. Their family combos are always our go-to for game nights!"</p>
                              <div class="text-xs text-gray-500">Tochi's Regular Since 2022</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">DR</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Dana R.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"Tochi's tenders are a flavor explosion! The perfect balance of crispy coating and juicy chicken. I love that they're always fresh and never greasy. The best hot chicken in Myrtle Beach, hands down!"</p>
                              <div class="text-xs text-gray-500">Self-Proclaimed Hot Chicken Expert</div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content" class="max-w-4xl mx-auto px-4 py-8">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-lg text-[var(--text-medium)]">Review your items before checkout</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-6 pb-2 border-b border-gray-100">Your Cart</h2>
                <div id="cart-items-list" class="divide-y divide-gray-100">
                    <!-- Cart items will be dynamically inserted here -->
                </div>
                
                <div class="mt-8 pt-6 border-t border-gray-100">
                    <div class="flex justify-between py-2">
                        <span class="text-gray-600">Subtotal</span>
                        <span id="cart-subtotal" class="font-medium">$0.00</span>
                    </div>
                    <div class="flex justify-between py-2">
                        <span class="text-gray-600">Tax (7%)</span>
                        <span id="cart-tax" class="font-medium">$0.00</span>
                    </div>
                    <div class="flex justify-between py-4 mt-2 text-lg font-bold border-t border-gray-100">
                        <span>Total</span>
                        <span id="cart-total" class="text-[var(--primary-color)]">$0.00</span>
                    </div>
                </div>
                
                <div class="mt-6 pt-6 border-t border-gray-100">
                    <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        Proceed to Checkout
                    </button>
                    <div class="text-center mt-4">
                        <a href="#menu" class="text-[var(--primary-color)] hover:underline text-sm font-medium">
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,

    about: `
        <div id="about-content" class="max-w-6xl mx-auto px-4 py-8">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-[var(--text-dark)] mb-4">Our Story</h1>
                <p class="text-lg text-[var(--text-medium)] max-w-2xl mx-auto">Discover the passion and dedication behind Tochi's Hot Chicken</p>
            </div>

            <!-- Main Story Section -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-[#ff6b00]">
                <div class="flex items-center mb-6">
                    <div class="w-2 h-8 bg-[#ff6b00] mr-4 rounded"></div>
                    <h2 class="text-3xl font-bold text-gray-900">From Nashville to Myrtle Beach</h2>
                </div>
                <div class="prose prose-lg max-w-none">
                    <p class="text-gray-700 leading-relaxed text-lg mb-6">
                        Tochi's Hot Chicken opened its doors in 2025 with a simple yet powerful vision: to bring the authentic taste of Nashville-style hot chicken to the beautiful shores of Myrtle Beach. Our journey began with a deep passion for perfecting the art of hot chicken - that perfect balance of crispy, juicy chicken with just the right amount of heat that makes your taste buds dance.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-lg mb-6">
                        Founded by chicken enthusiasts who spent years mastering traditional Nashville techniques, we wanted to create more than just a restaurant - we wanted to build a place where bold flavors meet warm Southern hospitality. Every recipe has been carefully crafted and tested to ensure that each bite delivers an unforgettable experience.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-lg">
                        Located in the heart of Myrtle Beach at 214 9th Ave N, we've quickly become the go-to destination for locals and tourists alike who crave authentic hot chicken. Whether you're a heat seeker looking for our spiciest offerings or someone who prefers milder flavors, we have something special waiting for you.
                    </p>
                </div>
            </div>

            <!-- Mission & Values Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div class="w-16 h-1 bg-[#ff6b00] mb-6 rounded"></div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p class="text-gray-700 leading-relaxed text-lg">
                        To serve the most authentic Nashville-style hot chicken on the Grand Strand, using only the highest quality ingredients and time-honored cooking techniques. We're committed to delivering bold flavors with genuine Southern hospitality in every interaction.
                    </p>
                </div>
                <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div class="w-16 h-1 bg-[#ff6b00] mb-6 rounded"></div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
                    <p class="text-gray-700 leading-relaxed text-lg">
                        Every piece of chicken is hand-breaded, perfectly seasoned, and cooked to order. We promise fresh ingredients, consistent quality, and heat levels that range from mild to "are you sure about this?" - all served with a smile and genuine care for your dining experience.
                    </p>
                </div>
            </div>

            <!-- What Makes Us Special -->
            <div class="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-12">
                <div class="text-center mb-8">
                    <div class="w-20 h-1 bg-[#ff6b00] mb-6 mx-auto rounded"></div>
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">What Makes Us Special</h3>
                    <p class="text-[#ff6b00] font-semibold text-lg">"The Hottest Chicken in Myrtle Beach"</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white rounded-lg p-6 shadow-md text-center">
                        <div class="text-3xl mb-3">🔥</div>
                        <h4 class="font-bold text-gray-900 mb-2">Authentic Heat Levels</h4>
                        <p class="text-gray-600 text-sm">From mild to extra hot, we've perfected the Nashville spice blend</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-md text-center">
                        <div class="text-3xl mb-3">🍗</div>
                        <h4 class="font-bold text-gray-900 mb-2">Fresh Daily</h4>
                        <p class="text-gray-600 text-sm">Hand-breaded and cooked to order, never sitting under heat lamps</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-md text-center">
                        <div class="text-3xl mb-3">❤️</div>
                        <h4 class="font-bold text-gray-900 mb-2">Family Owned</h4>
                        <p class="text-gray-600 text-sm">Local business committed to serving our Myrtle Beach community</p>
                    </div>
                </div>
            </div>

            <!-- Our Commitment -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Commitment to You</h3>
                <p class="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                    Whether you're stopping by for a quick lunch, bringing the family for dinner, or grabbing takeout for a beach day, we're committed to making every visit exceptional. Our team takes pride in serving not just great food, but creating an experience that keeps you coming back. At Tochi's Hot Chicken, you're not just a customer - you're part of our growing family of hot chicken lovers.
                </p>
                <div class="mt-8">
                    <button class="bg-[#ff6b00] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e65100] transition-colors" 
                            onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                        Try Our Hot Chicken Today
                    </button>
                </div>
            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto px-4 py-8 mt-8">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex justify-center space-x-6">
                            <a href="https://www.instagram.com/tochis_hot_chicken" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center text-[#ff6b00] hover:opacity-80 transition-opacity" title="Follow us on Instagram">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/p/Tochis-Hot-Chicken-61575069452542/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center text-[#ff6b00] hover:opacity-80 transition-opacity" title="Visit us on Facebook">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center gap-x-3 pt-4">
                            <span class="text-[var(--text-medium)] text-center">214 9th Ave N,<br>Myrtle Beach, SC 29577</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Monday - Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 2:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

};

// Export the PageContent object for use in other modules
export { PageContent };
