export default function NewsLetter() {
  return (
    <div className="w-full bg-gray-50 py-6 px-4 my-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter subscription section */}
        <div className="bg-black text-white rounded-full flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6">
          <div className="font-bold text-lg sm:text-xl ml-2">
            Join Our Newsletter
          </div>

          <form className="flex flex-1 max-w-md mx-4 my-3 sm:my-0">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-6 py-3 rounded-l-full text-black outline-none bg-white"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full border border-white -ml-6 font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Benefits section */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 text-sm text-gray-700 px-2">
          <div className="flex items-center mb-3 sm:mb-0">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <span>Free delivery for order over $70</span>
          </div>

          <div className="flex items-center mb-3 sm:mb-0">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Daily Mega Discounts</span>
          </div>

          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Best price on the market</span>
          </div>
        </div>
      </div>
    </div>
  );
}
