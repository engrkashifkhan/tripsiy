import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  ArrowLeft,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useFiltersStore } from "../../store/packagesFiltrationsData";
import emailjs from '@emailjs/browser';

// ========== COMMON DATA FOR ALL PACKAGES ==========
const COMMON_ITINERARY = [
  { day: "Day 1", desc: "Arrival at destination, airport pickup and hotel check-in with welcome drinks" },
  { day: "Day 2", desc: "Guided city tour exploring main attractions and cultural sites" },
  { day: "Day 3", desc: "Adventure activities and local experiences with professional guides" },
  { day: "Day 4", desc: "Relaxation day with optional spa treatments and leisure activities" },
  { day: "Day 5", desc: "Cultural immersion and traditional cuisine tasting experience" },
  { day: "Day 6", desc: "Shopping at local markets and souvenir hunting" },
  // { day: "Day 7", desc: "Free day for personal exploration and optional tours" },
  // { day: "Day 8", desc: "Farewell breakfast and departure transfer to airport" }
];

const COMMON_GALLERY = [
  "/australia.jpg",
  "/bali_3.jpg", 
  "/maldives_2.jpg",
  "/maldives_1.jpg",
  "/gallery_img_5.jpg",
  "/istanbul.jpg"
];

const COMMON_INCLUSIONS = [
  "Luxury Hotel Accommodation",
  "Daily Breakfast Buffet", 
  "Airport Transfers",
  "All Guided Tours",
  "Entrance Fees to Attractions",

];

const COMMON_EXCLUSIONS = [
  "Personal Expenses",
  "Tips & Gratuities", 
  "Additional Meals",
  // "Optional Activities",
  // "Visa Fees",
  // "International Flights"
];

// ------------------ DYNAMIC DATA ------------------
const packagesData = [
  {
    id: 1,
    country: "Dubai",
    desc: "Experience the luxury and modern marvels of Dubai",
    days: "8 Days / 7 Nights",
    price: "1299",
    rating: 4.8,
    image: "/dubai_2.jpg",
    gallery: COMMON_GALLERY, // SAME FOR ALL
    itinerary: COMMON_ITINERARY, // SAME FOR ALL
    inclusions: COMMON_INCLUSIONS, // SAME FOR ALL
    exclusions: COMMON_EXCLUSIONS, // SAME FOR ALL
  },
  {
    id: 2,
    country: "Bali",
    desc: "Relax in the tropical paradise of Bali",
    days: "6 Days / 5 Nights",
    price: "899",
    rating: 4.7,
    image: "/bali_2.jpg",
    gallery: COMMON_GALLERY, // SAME FOR ALL
    itinerary: COMMON_ITINERARY, // SAME FOR ALL
    inclusions: COMMON_INCLUSIONS, // SAME FOR ALL
    exclusions: COMMON_EXCLUSIONS, // SAME FOR ALL
  },
  {
    id: 3,
    country: "Cappadocia",
    desc: "Magical hot air balloon experience in Turkey",
    days: "4 Days / 3 Nights",
    price: "1299",
    rating: 4.9,
    image: "/cappadocia_2.jpg",
    gallery: COMMON_GALLERY, // SAME FOR ALL
    itinerary: COMMON_ITINERARY, // SAME FOR ALL
    inclusions: COMMON_INCLUSIONS, // SAME FOR ALL
    exclusions: COMMON_EXCLUSIONS, // SAME FOR ALL
  }
];

// ------------------ HOMEPAGE PACKAGES DATA ------------------
const homepagePackagesData = [
  {
    id: 101,
    country: "Dubai",
    name: "Dubai City Tour",
    desc: "Experience the luxury and modern marvels of Dubai",
    days: "3 Days / 2 Nights",
    price: "499",
    rating: 4.8,
    image: "/dubai_2.jpg",
    gallery: COMMON_GALLERY, // SAME FOR ALL
    itinerary: COMMON_ITINERARY, // SAME FOR ALL
    inclusions: COMMON_INCLUSIONS, // SAME FOR ALL
    exclusions: COMMON_EXCLUSIONS, // SAME FOR ALL
  },
  {
    id: 102,
    country: "Bali",
    name: "Luxury Island Escape",
    desc: "Relax in the tropical paradise of Bali",
    days: "5 Days / 4 Nights",
    price: "1999",
    rating: 4.7,
    image: "/bali_2.jpg",
    gallery: COMMON_GALLERY, // SAME FOR ALL
    itinerary: COMMON_ITINERARY, // SAME FOR ALL
    inclusions: COMMON_INCLUSIONS, // SAME FOR ALL
    exclusions: COMMON_EXCLUSIONS, // SAME FOR ALL
  },
  {
    id: 103,
    country: "Cappadocia",
    name: "Hot Air Balloon Experience",
    desc: "Magical hot air balloon experience in Turkey",
    days: "4 Days / 3 Nights",
    price: "1299",
    rating: 4.9,
    image: "/cappadocia_2.jpg",
    gallery: COMMON_GALLERY, // SAME FOR ALL
    itinerary: COMMON_ITINERARY, // SAME FOR ALL
    inclusions: COMMON_INCLUSIONS, // SAME FOR ALL
    exclusions: COMMON_EXCLUSIONS, // SAME FOR ALL
  },
  {
    id: 104,
    country: "Greece",
    name: "Romantic Greek Getaway",
    desc: "Experience the beauty of Greek islands",
    days: "5 Days / 4 Nights",
    price: "1799",
    rating: 4.6,
    image: "/greece_1.jpg",
    gallery: COMMON_GALLERY, // SAME FOR ALL
    itinerary: COMMON_ITINERARY, // SAME FOR ALL
    inclusions: COMMON_INCLUSIONS, // SAME FOR ALL
    exclusions: COMMON_EXCLUSIONS, // SAME FOR ALL
  }
];

// ... REST OF YOUR CODE REMAINS EXACTLY THE SAME ...
// Keep all your existing imports, functions, and JSX code below

// ------------------ PUBLIC IMAGES ARRAY ------------------
const publicGalleryImages = [
  "/australia.jpg",
  "/bali_1.jpg",
  "/bali_3.jpg",
  "/newzealand.jpg",
  "/dubai_3.jpg",
  "/greece_1.jpg",
];

// Default itinerary in case package doesn't have one
const defaultItinerary = [
  {
    day: "Day 1",
    desc: "Arrival and check-in"
  },
  {
    day: "Day 2",
    desc: "Sightseeing and activities"
  },
  {
    day: "Day 3",
    desc: "Cultural experiences"
  },
  {
    day: "Day 4",
    desc: "Leisure and departure"
  }
];

// Default inclusions/exclusions
const defaultInclusions = ["Hotel", "Breakfast", "Airport", "Tours"];
const defaultExclusions = ["Personal Expenses", "Tips", "Additional Activities"];

// Related packages data
const relatedPackagesData = [
  {
    id: 29,
    img: "/dubai_2.jpg",
    name: "Dubai City Tour",
    days: "3 Days / 2 Nights",
    price: "AED 499",
  },
  {
    id: 30,
    img: "/bali_2.jpg",
    name: "Luxury Island Escape",
    days: "5 Days / 4 Nights",
    price: "AED 1999",
  },
  {
    id: 31,
    img: "/cappadocia_2.jpg",
    name: "Hot Air Ballon Experience",
    days: "4 Days / 3 Nights",
    price: "AED 1299",
  }
];

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_9g975sf',
  TEMPLATE_ID: 'template_mn7x3ja',
  PUBLIC_KEY: '1dmtECDsd_Cqla7C9',
};

function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          className={
            i < filledStars
              ? "w-6 h-6 text-yellow-400 fill-yellow-400"
              : "w-6 h-6 text-gray-300"
          }
        />
      ))}
      <span className="text-lg text-gray-600 ml-2">({rating}/5)</span>
    </div>
  );
}

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { filteredPackages } = useFiltersStore();

  // Find package - check all data sources
  const packageItem = 
    filteredPackages.find(item => item.id === parseInt(id)) ||
    packagesData.find(item => item.id === parseInt(id)) ||
    homepagePackagesData.find(item => item.id === parseInt(id));

  // ------------------ STATE FOR BOOKING FORM ------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.travelers.trim())
      newErrors.travelers = "Number of travelers is required";
    else if (isNaN(formData.travelers) || formData.travelers <= 0)
      newErrors.travelers = "Enter a valid number of travelers";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (templateParams) => {
    try {
      console.log('Sending email with params:', templateParams);
      
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', response);
      return { success: true, response };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { 
        success: false, 
        error: error.text || error.message || 'Unknown error occurred' 
      };
    }
  };

  const generateRandomId = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters[randomIndex];
    }

    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    if (!validate()) {
      console.log('Validation failed');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Prepare template parameters for EmailJS - SIMPLIFIED VERSION
    const templateParams = {
      to_name: "Travel Agency",
      to_email: formData.email, // Use customer's email as recipient
      from_name: formData.name,
      from_email: formData.email,
      user_email: formData.email, // Additional email field
      user_name: formData.name,
      user_phone: formData.phone,
      travel_date: formData.date,
      travelers: formData.travelers,
      package_name: packageItem?.country || "Unknown Package",
      package_days: packageItem?.days || "Not specified",
      package_price: packageItem?.price || "Not specified",
      package_description: packageItem?.desc || "No description",
      package_image: packageItem?.image || "/default-package.jpg",
      booking_id: generateRandomId(10),
      booking_ID: generateRandomId(10), // Both variations
      reply_to: formData.email,
      subject: `New Booking: ${packageItem?.country} - ${formData.name}`,
      message: `New booking request received:
      
Package: ${packageItem?.country}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Travel Date: ${formData.date}
Travelers: ${formData.travelers}
Booking ID: ${generateRandomId(10)}
      `,
    };

    console.log('Template params:', templateParams);

    try {
      const result = await sendEmail(templateParams);

      if (result.success) {
        console.log('Booking successful');
        setSubmitStatus({
          type: 'success',
          message: 'Booking request sent successfully! We will contact you soon.'
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          travelers: "",
        });
        setErrors({});
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Booking Error:', error);
      
      // More specific error handling
      let errorMessage = error.message;
      if (errorMessage.includes('recipients address is empty')) {
        errorMessage = 'Please check your EmailJS template settings. The recipient email is not configured.';
      }
      
      setSubmitStatus({
        type: 'error',
        message: `Failed to send booking request: ${errorMessage}. Please try again or contact us directly.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!packageItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Package not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 py-2 bg-[rgba(244,156,11,1)] text-white rounded-lg"
          >
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  // ------------------ SAFE DATA ACCESS WITH FALLBACKS ------------------
  const galleryImages = packageItem.gallery?.length
    ? packageItem.gallery
    : publicGalleryImages;

  const itinerary = packageItem.itinerary?.length
    ? packageItem.itinerary
    : defaultItinerary;

  const inclusions = packageItem.inclusions?.length
    ? packageItem.inclusions
    : defaultInclusions;

  const exclusions = packageItem.exclusions?.length
    ? packageItem.exclusions
    : defaultExclusions;

  // Get related packages excluding current package
  const relatedPackages = relatedPackagesData.filter(pkg => pkg.id !== parseInt(id));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[linear-gradient(183.62deg,#2B2B2B_2.97%,#242424_97.03%)] p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-orange-300 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Packages
          </button>
        </div>
      </div>

      {/* PACKAGE DETAILS */}
      <div className="w-full py-4">
        <div className="max-w-7xl mx-auto bg-white shadow-lg overflow-hidden">
          {/* IMAGE + TEXT */}
          <div className="relative w-full h-96">
            <img
              src={packageItem.image || "/default-package.jpg"}
              alt={packageItem.country}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                {packageItem.country}
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mt-3 drop-shadow-md">
                {packageItem.desc}
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:px-20 px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 pb-2">
                  {packageItem.country}
                </h1>
                <StarRating rating={packageItem.rating || 4.5} />
                <p className="text-gray-600 mt-1">{packageItem.days}</p>
                <p className="text-gray-600 text-lg mt-2">{packageItem.desc}</p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-orange-300">
                  from ${packageItem.price}
                </p>
                <button
                  onClick={() => document.getElementById('trip-booking').scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 px-4 py-3 bg-[rgba(244,156,11,1)] hover:bg-orange-300 text-white rounded-lg font-semibold transition"
                >
                  Book this Package
                </button>
              </div>
            </div>

            {/* Itinerary */}
            <section className="max-w-5xl mx-auto py-10">
              <h1 className="font-poppins font-medium text-[30px] leading-[100%] tracking-[0.5%] mb-4">Itinerary</h1>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {itinerary.map((d, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl shadow-md px-6 py-4 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg font-semibold mb-2">{d.day}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{d.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Inclusion & Exclusion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Inclusions</h2>
                <ul className="space-y-3">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="text-green-500 w-6 h-6" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Exclusions</h2>
                <ul className="space-y-3">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <XCircle className="text-red-500 w-6 h-6" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ⭐ GALLERY SECTION ⭐ */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
              <div className="relative">
                <button
                  onClick={() =>
                    document
                      .getElementById("gallerySlider")
                      .scrollBy({ left: -300, behavior: "smooth" })
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div
                  id="gallerySlider"
                  className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar"
                >
                  {galleryImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="h-58 w-60 object-cover rounded-xl shadow-md flex-shrink-0"
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("gallerySlider")
                      .scrollBy({ left: 300, behavior: "smooth" })
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Booking Form */}
            <div id="trip-booking" className="mx-auto p-6 bg-white rounded-md mt-10">
              <h2 className="text-2xl font-semibold mb-4 text-center">Book Your Trip Now</h2>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`mb-4 p-4 rounded-md text-center ${submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Date & Travelers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.date ? "border-red-500" : "border-gray-300"
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <input
                      type="number"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      placeholder="Number of Travelers"
                      min="1"
                      className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.travelers ? "border-red-500" : "border-gray-300"
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.travelers && <p className="text-red-500 text-sm mt-1">{errors.travelers}</p>}
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-orange-300 text-white p-3 mt-5 shadow-md rounded-md transition min-w-32 ${isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-orange-400'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                  </button>
                </div>
              </form>
            </div>

            {/* Related Packages */}
            <section className="w-full py-16 px-2">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-bold mb-10">
                  You may also like
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {relatedPackages.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition w-[300px]"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-58 object-cover"
                      />
                      <div className="px-5 py-3 pb-5">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.days}</p>
                        <p className="pt-3 text-lg font-semibold">
                          <span className="text-gray-500">Starting from </span>
                          <span className="text-[rgba(244,156,11,1)]">{item.price}</span>
                        </p>
                        <div className="flex justify-center">
                          <Link to={`/package/${item.id}`}>
                            <button className="mt-3 px-6 bg-[rgba(244,156,11,1)] hover:bg-orange-300 text-white py-2 rounded-lg font-medium transition">
                              View packages
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}