import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 ">
                <div className="container mx-auto py-8 px-4">
                    {/* Footer sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* About section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        {/* Categories section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <ul className="text-sm">
                                <li>Men's Clothing</li>
                                <li>Women's Clothing</li>
                                <li>Electronics</li>
                                <li>Home & Living</li>
                            </ul>
                        </div>

                        {/* Contact section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-sm">Email: info@example.com</p>
                            <p className="text-sm">Phone: +1234567890</p>
                        </div>

                        {/* Social media section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <ul className="text-sm flex gap-4">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-800 mt-8 pt-4 text-center">
                        <p className="text-sm">&copy; 2024 E-Commerce Website. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
