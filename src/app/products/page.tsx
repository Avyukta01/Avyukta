// Taxi/Ride Booking Product Page
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi/Ride Booking App | Avyukta Solutions",
  description: "Launch your own professional, scalable, and user-friendly taxi or ride booking platform with Avyukta. Empower your business with real-time tracking, seamless payments, and a superior customer experience.",
};

const TaxiRideBookingPage = () => (
  <main className="container-max py-12">
    <h1 className="text-4xl font-bold mb-6 text-primary">Taxi/Ride Booking App Development</h1>
    <p className="text-lg mb-4 text-muted-foreground">
      Transform your transportation business with a cutting-edge, white-label taxi and ride booking solution from Avyukta. Our platform is designed for startups, taxi companies, and entrepreneurs seeking to deliver a seamless, safe, and efficient ride experience for both drivers and passengers.
    </p>
    <ul className="list-disc pl-6 mb-6 text-base text-foreground">
      <li>Real-time ride tracking and intelligent dispatch system</li>
      <li>Easy booking for customers via web and mobile</li>
      <li>Secure, integrated payment gateways</li>
      <li>Driver and passenger management dashboards</li>
      <li>Automated fare calculation and invoicing</li>
      <li>Ratings, reviews, and customer support integration</li>
      <li>Scalable, cloud-based infrastructure for growth</li>
      <li>Custom branding and feature enhancements available</li>
    </ul>
    <p className="text-lg mb-8">
      Ready to launch your own ride-hailing platform? <strong>Contact Avyukta</strong> today for a free consultation and see how we can accelerate your business success.
    </p>
    <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">Get Started</a>
  </main>
);

export default TaxiRideBookingPage; 