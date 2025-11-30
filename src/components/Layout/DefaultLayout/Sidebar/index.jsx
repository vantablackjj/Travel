import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

function Sidebar() {
    const [activeItem, setActiveItem] = useState('home');

    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            path: '/',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            ),
        },
        {
            id: 'destinations',
            label: 'Destinations',
            path: '/destinations',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            ),
        },
        {
            id: 'flights',
            label: 'Flights',
            path: '/flights',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                </svg>
            ),
        },
        {
            id: 'hotels',
            label: 'Hotels',
            path: '/hotels',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                </svg>
            ),
        },
        {
            id: 'activities',
            label: 'Activities',
            path: '/activities',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                </svg>
            ),
        },
        {
            id: 'my-trips',
            label: 'My Trips',
            path: '/my-trips',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
    ];

    const quickLinks = [
        {
            id: 'trending',
            label: 'Trending Now',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
        },
        {
            id: 'top-rated',
            label: 'Top Rated',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            ),
        },
        {
            id: 'deals',
            label: 'Special Deals',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                </svg>
            ),
        },
        {
            id: 'group-tours',
            label: 'Group Tours',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.inner}>
                <nav className={styles.mainNav}>
                    {menuItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.path}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveItem(item.id);
                            }}
                            className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                <div className={styles.divider}></div>

                <div className={styles.quickLinks}>
                    <h3 className={styles.title}>Quick Links</h3>
                    <div className={styles.linksList}>
                        {quickLinks.map((item) => (
                            <button key={item.id} className={styles.linkItem}>
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.promoCard}>
                    <h3>Summer Sale!</h3>
                    <p>Get up to 40% off on selected destinations</p>
                    <button>Explore Deals</button>
                </div>

                <div className={styles.popularDestinations}>
                    <h3 className={styles.title}>Popular Destinations</h3>
                    <div className={styles.destinationsList}>
                        {['Paris', 'Bali', 'Tokyo', 'New York'].map((destination) => (
                            <a
                                key={destination}
                                href={`/destinations/${destination.toLowerCase()}`}
                                className={styles.destinationItem}
                            >
                                <span>{destination}</span>
                                <span className={styles.arrow}>→</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
