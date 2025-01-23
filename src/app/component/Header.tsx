"use client";

const Header = () => (
  <div className="flex items-center justify-between p-4 bg-white border-b">
    <input
      type="text"
      placeholder="Search anything..."
      className="border rounded-lg p-2 w-80"
    />
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
      Submit Ticket
    </button>
  </div>
);

export default Header;
