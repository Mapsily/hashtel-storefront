function Map() {
  return (
    <div className="h-full w-full bg-gray-50">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.369454364116!2d77.35957093257907!3d28.626318872340622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56404baf705%3A0xf55d816acb88e2ea!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1687148773503!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default Map;
