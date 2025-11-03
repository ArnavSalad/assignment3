import Image from 'next/image';
import Link from 'next/link';

export default function BridgingTheGap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-green-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-3xl font-bold hover:text-green-200 transition-colors">
            Emerald Sprouts
          </Link>
          <p className="text-green-100 mt-2">Growing Together, One Plant at a Time</p>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          Bridging the Gap: From Peterborough Garden Centers to Your Doorstep
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>By Arnav</span>
          <span>•</span>
          <time>March 2025</time>
        </div>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://www.bhg.com/thmb/s7zKgZm5bwspGcTo8E3KTw-fn_s=/4000x0/filters:no_upscale():strip_icc()/bhg-best-choice-products-mobile-garden-potting-bench-ashley-schaubroeck-013-4fdfa513e2234bffba071d08ef9493d2.jpeg"
            alt="Hands planting seedlings in garden"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            There's something magical about walking through the aisles of a local garden center in Peterborough, Ontario.
            The earthy smell of potting soil, the vibrant greens catching afternoon light through greenhouse glass, and
            the friendly advice from staff who genuinely care about your gardening success. For years, this has been the
            heartbeat of our local plant-loving community.
          </p>

          <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4">Understanding Our Community</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            At Emerald Sprouts, we recognize that Peterborough's plant enthusiasts have built meaningful relationships
            with local nurseries and garden centers. These aren't just shopping trips—they're weekend rituals, learning
            experiences, and social gatherings. You know the owners by name, you trust their recommendations, and you
            can physically inspect every leaf and stem before making a purchase.
          </p>

          <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hips.hearstapps.com/hmg-prod/images/various-flower-pots-at-yard-royalty-free-image-1752162839.pjpeg?crop=0.668xw:1.00xh;0.147xw,0&resize=1120:*"
              alt="Various potted plants and containers"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            This attachment to in-person shopping isn't just about preference—it's about trust. When you're investing
            in a living organism that you'll nurture for months or years, you want to make informed decisions. You want
            to see the root health, check for pests, and get that tactile confirmation that you're bringing home a
            thriving plant.
          </p>

          <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4">The Challenge of Modern Gardening</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            However, we also understand the challenges that come with traditional shopping. The nurseries you love may
            be across town, their hours might not align with your schedule, and their seasonal inventory can be limiting.
            Perhaps you've stood in the gardening aisle, overwhelmed by choices, wishing you had comprehensive information
            at your fingertips. Or maybe you've purchased a beautiful plant only to watch it struggle because you weren't
            quite sure about its specific care requirements.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700 italic">
              "The transition to online plant shopping seemed daunting at first, but Emerald Sprouts made it seamless.
              Their detailed guides gave me confidence that I'd never felt even when shopping in person."
            </p>
            <p className="text-green-800 font-semibold mt-2">— Sarah M., Peterborough Plant Enthusiast</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            This is where the gap exists—between the trust and experience of in-person shopping and the convenience
            and resources that online platforms can provide. At Emerald Sprouts, our mission isn't to replace your
            beloved local garden centers but to complement them with a service designed specifically for the challenges
            of modern urban gardening.
          </p>

          <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4">Our Solution: Guided Online Plant Care</h2>

          <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://lovelygreens.com/wp-content/uploads/2025/04/recycled-seed-container-ideas.jpg"
              alt="DIY seedling containers with plants"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Emerald Sprouts bridges this gap through comprehensive education and complete preparation. When you order
            from us, you're not just getting a plant—you're receiving a complete roadmap to success. Each package
            includes detailed, plant-specific guides that cover everything from initial setup to long-term care strategies.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our guides address the questions you'd typically ask a knowledgeable nursery employee: What type of light
            does this plant need? How often should I water it in winter versus summer? What are the early warning signs
            of common problems? We've anticipated these questions and provided answers in clear, accessible language that
            beginners can understand and experienced gardeners will appreciate.
          </p>

          <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4">Easy-to-Setup Online Packages</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            One of the biggest hurdles to online plant shopping is the fear of receiving a product that doesn't match
            expectations or arrives damaged. We've addressed this through our carefully curated packages that remove all
            guesswork. When you browse our website, you'll find clear photos, detailed descriptions, and honest assessments
            of each plant's care difficulty level.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">For Beginners</h3>
              <p className="text-gray-700">
                Start with our "First Sprout" collection featuring hardy, forgiving plants with detailed video guides
                and 24/7 chat support for your questions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">For Enthusiasts</h3>
              <p className="text-gray-700">
                Explore our "Green Thumb" packages with more challenging varieties, advanced care techniques, and
                community forums to connect with fellow gardeners.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our online ordering system is designed with simplicity in mind. Filter by light requirements, maintenance
            level, or even by the room where you plan to keep your plant. Add to cart, and your complete kit—plant,
            tools, and comprehensive instructions—will arrive at your doorstep, ready to assemble and enjoy.
          </p>

          <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4">Building Trust in the Digital Age</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We know that trust is earned, not given. That's why every Emerald Sprouts package comes with our "Thriving
            Guarantee." If your plant doesn't arrive in excellent condition, we'll replace it immediately. If you follow
            our care guide and your plant struggles in the first 30 days, we'll work with you to diagnose the issue and
            provide solutions—or send a replacement.
          </p>

          <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://www.bhg.com/thmb/s7zKgZm5bwspGcTo8E3KTw-fn_s=/4000x0/filters:no_upscale():strip_icc()/bhg-best-choice-products-mobile-garden-potting-bench-ashley-schaubroeck-013-4fdfa513e2234bffba071d08ef9493d2.jpeg"
              alt="Garden potting bench with supplies"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Moreover, we've built a vibrant online community where Peterborough plant lovers share their successes,
            troubleshoot challenges, and exchange tips. It's the digital equivalent of chatting with fellow shoppers
            in the garden center aisle—except it's available whenever you need it, day or night.
          </p>

          <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4">Supporting Local, Embracing Convenience</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Emerald Sprouts is proudly based in Peterborough, Ontario. We source our plants from trusted local and
            regional growers, ensuring they're already acclimated to our climate. This means your plants arrive not just
            healthy, but ready to thrive in the specific conditions of our area—something that national retailers can't
            always guarantee.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            By choosing Emerald Sprouts, you're still supporting the local economy while gaining the convenience of
            shopping from home. You can browse our full catalog at 2 AM in your pajamas, compare options without feeling
            rushed, and have everything delivered when it's convenient for you. Your weekends are freed up for actually
            enjoying your plants rather than shopping for them.
          </p>

          <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4">Join the Emerald Sprouts Community</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The future of plant care doesn't mean abandoning the values that made local garden centers special—it means
            enhancing them with modern convenience and comprehensive education. At Emerald Sprouts, we're building a
            bridge between the trusted, hands-on experience you love and the accessibility that today's busy lifestyles
            demand.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're a longtime gardener looking to expand your collection without the drive across town, or a
            complete beginner who's always felt intimidated by the garden center, Emerald Sprouts welcomes you. Our
            commitment is simple: provide you with healthy plants, comprehensive knowledge, and all the tools you need
            to succeed—delivered right to your door in Peterborough and beyond.
          </p>

          <div className="bg-green-700 text-white p-8 rounded-lg my-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Plant Journey?</h3>
            <p className="mb-6">
              Discover our curated collection of plants perfect for Peterborough's climate, complete with everything
              you need to grow with confidence.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Welcome to a new era of plant care, where the wisdom of traditional gardening meets the convenience of
            modern technology. Welcome to Emerald Sprouts.
          </p>
        </div>
      </article>

      <footer className="bg-green-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-sm leading-relaxed space-y-4">
            <p className="font-semibold text-lg mb-4">Educational Disclaimer</p>
            <p>
              The information provided on this website is intended for educational purposes only.
              While every effort has been made to ensure the accuracy and reliability of the content,
              the university does not guarantee its completeness or effectiveness. This website will be
              deactivated once the course is completed. Some images used on this site have been
              sourced from the internet and are included for educational and practice purposes only.
              If you are the copyright owner of any image and believe it has been used without proper
              attribution, please contact us, and we will make the necessary corrections.
            </p>
            <p>
              The views expressed on this site do not necessarily reflect the official policies or
              positions of the university. The university is not responsible for any errors or omissions
              or the results obtained from using this information.
            </p>
            <p>
              By using this website, you acknowledge and agree to these terms.
            </p>
            <p className="mt-6 pt-4 border-t border-green-800 text-center text-green-200">
              &copy; 2025 Emerald Sprouts. Founded by Arnav in Peterborough, Ontario, Canada.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
