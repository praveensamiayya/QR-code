import React, { useState, useEffect } from 'react';

const BookFlipBrochure = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [snowflakes, setSnowflakes] = useState([]);

    const pages = [
        {
            title: "Welcome",
            content: "Welcome sanjai",
            gradient: "linear-gradient(135deg, #a855f7, #ec4899)"
        },
        {
            title: "Our Vision",
            content: "how was your day",
            gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
        },
        {
            title: "Services",
            content: "are you happy",
            gradient: "linear-gradient(135deg, #22c55e, #14b8a6)"
        },
        {
            title: "Portfolio",
            content: "Then what was your dinner",
            gradient: "linear-gradient(135deg, #f97316, #ef4444)"
        },
        {
            title: "Team",
            content: "is it a",
            gradient: "linear-gradient(135deg, #6366f1, #a855f7)"
        },
        {
            title: "Contact Us",
            content: "Let's start building something great together",
            gradient: "linear-gradient(135deg, #ec4899, #f43f5e)"
        }
    ];

    // Auto flip pages every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isFlipping) {
                setIsFlipping(true);
                setTimeout(() => {
                    setCurrentPage((prev) => {
                        // Loop back to first page when reaching the end
                        return prev === pages.length - 1 ? 0 : prev + 1;
                    });
                    setIsFlipping(false);
                }, 600);
            }
        }, 3000); // Change page every 3 seconds

        return () => clearInterval(interval);
    }, [isFlipping, pages.length]);

    // Generate snowflakes
    useEffect(() => {
        const flakes = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDuration: Math.random() * 3 + 2,
            animationDelay: Math.random() * 5,
            fontSize: Math.random() * 10 + 10,
            opacity: Math.random() * 0.6 + 0.4
        }));
        setSnowflakes(flakes);
    }, []);

    const jumpToPage = (index) => {
        if (!isFlipping && index !== currentPage) {
            setIsFlipping(true);
            setTimeout(() => {
                setCurrentPage(index);
                setIsFlipping(false);
            }, 600);
        }
    };

    return (
        <div style={styles.container}>
            {/* Snowflakes */}
            <div style={styles.snowContainer}>
                {snowflakes.map((flake) => (
                    <div
                        key={flake.id}
                        style={{
                            ...styles.snowflake,
                            left: `${flake.left}%`,
                            animationDuration: `${flake.animationDuration}s`,
                            animationDelay: `${flake.animationDelay}s`,
                            fontSize: `${flake.fontSize}px`,
                            opacity: flake.opacity
                        }}
                    >
                           ★
                    </div>
                ))}
            </div>

            <div style={styles.bookWrapper}>
                {/* Book Container */}
                <div style={styles.bookContainer}>
                    {/* Book Shadow */}
                    <div style={styles.bookShadow}></div>

                    {/* Left Page (Static) */}
                    <div style={styles.leftPage}>
                        <div style={styles.pageContent}>
                            <h2 style={{
                                ...styles.pageTitle,
                                background: currentPage > 0 ? pages[currentPage - 1].gradient : pages[0].gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                {currentPage > 0 ? pages[currentPage - 1].title : ""}
                            </h2>
                            <p style={styles.pageText}>
                                {currentPage > 0 ? pages[currentPage - 1].content : ""}
                            </p>
                        </div>
                    </div>

                    {/* Right Page (Flipping) */}
                    <div
                        style={{
                            ...styles.rightPage,
                            animation: isFlipping ? 'flip 0.5s ease-in-out' : 'none'
                        }}
                    >
                        <div style={styles.rightPageInner}>
                            <div style={styles.pageContent}>
                                <h2 style={{
                                    ...styles.pageTitle,
                                    background: pages[currentPage].gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    {pages[currentPage].title}
                                </h2>
                                <p style={styles.pageText}>
                                    {pages[currentPage].content}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Book Spine */}
                    <div style={styles.bookSpine}></div>
                </div>

                {/* Page Indicators */}
                <div style={styles.indicatorsWrapper}>
                    <div style={styles.indicators}>
                        {pages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => jumpToPage(index)}
                                style={{
                                    ...styles.indicator,
                                    ...(index === currentPage ? styles.indicatorActive : {})
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Page Counter */}
                <div style={styles.pageCounter}>
                    Page {currentPage + 1} of {pages.length}
                </div>
            </div>

            <style>{`
        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }

        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(110vh) translateX(100px);
          }
        }
      `}</style>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        backgroundImage: 'url(/magical-winter-landscape.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: 'relative',
        overflow: 'hidden'
    },
    snowContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 999
    },
    snowflake: {
        position: 'absolute',
        top: '-10vh',
        color: 'white',
        textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
        animation: 'snowfall linear infinite',
        userSelect: 'none'
    },
    bookWrapper: {
        position: 'relative',
        width: '100%',
        maxWidth: '700px',
        zIndex: 1
    },
    bookContainer: {
        position: 'relative',
        height: '320px',
        perspective: '1000px'
    },
    bookShadow: {
        position: 'absolute',
        inset: '0',
        background: 'rgba(0, 0, 0, 0.2)',
        filter: 'blur(40px)',
        transform: 'translateY(16px)'
    },
    leftPage: {
        position: 'absolute',
        left: '0',
        width: '50%',
        height: '100%',
        background: 'white',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px 0 0 8px',
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightPage: {
        position: 'absolute',
        right: '0',
        width: '50%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transformOrigin: 'left',
        transition: 'transform 0.6s ease-in-out'
    },
    rightPageInner: {
        position: 'absolute',
        inset: '0',
        background: 'white',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRadius: '0 8px 8px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden'
    },
    bookSpine: {
        position: 'absolute',
        left: '50%',
        top: '0',
        width: '4px',
        height: '100%',
        background: 'linear-gradient(to bottom, #d1d5db, #9ca3af, #d1d5db)',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        transform: 'translateX(-50%)',
        zIndex: '10'
    },
    pageContent: {
        padding: '24px',
        textAlign: 'center'
    },
    pageTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '12px'
    },
    pageText: {
        color: '#4b5563',
        fontSize: '16px',
        lineHeight: '1.6'
    },
    indicatorsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '32px'
    },
    indicators: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    indicator: {
        width: '8px',
        height: '8px',
        borderRadius: '999px',
        background: '#4b5563',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        padding: '0'
    },
    indicatorActive: {
        background: 'white',
        width: '32px'
    },
    pageCounter: {
        textAlign: 'center',
        marginTop: '16px',
        color: 'white',
        fontSize: '14px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
    }
};

export default BookFlipBrochure;