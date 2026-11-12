
'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    CalendarCheck,
    Heart,
    Sparkles,
    Mail,
    PartyPopper,
    X,
    Send,
} from 'lucide-react';

const EMAIL = 'prashanthbanoth23@gmail.com';

const confetti = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 2 + Math.random() * 2,
    rotation: Math.random() * 360,
}));

export default function HireMeGame({
    darkMode,
}: {
    darkMode: boolean;
}) {
    const gameRef = useRef<HTMLDivElement>(null);
    const lastMoveRef = useRef(0);

    const [rejectedPosition, setRejectedPosition] = useState({
        x: 75,
        y: 75,
    });

    const [hired, setHired] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState('');
    const [visitorEmail, setVisitorEmail] = useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');

    const [dateError, setDateError] = useState('');

    const getToday = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const moveRejected = () => {
        const now = Date.now();

        if (now - lastMoveRef.current < 180) return;

        lastMoveRef.current = now;

        const positions = [
            { x: 12, y: 20 },
            { x: 50, y: 18 },
            { x: 85, y: 22 },
            { x: 20, y: 45 },
            { x: 75, y: 48 },
            { x: 15, y: 80 },
            { x: 55, y: 85 },
            { x: 88, y: 78 },
            { x: 45, y: 55 },
        ];

        const availablePositions = positions.filter(
            (position) =>
                Math.abs(position.x - rejectedPosition.x) > 12 ||
                Math.abs(position.y - rejectedPosition.y) > 12
        );

        const next =
            availablePositions[
            Math.floor(Math.random() * availablePositions.length)
            ];

        setRejectedPosition(next);
    };

    const handleGamePointerMove = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        const button = gameRef.current?.querySelector(
            '[data-rejected-button]'
        ) as HTMLButtonElement | null;

        if (!button) return;

        const rect = button.getBoundingClientRect();

        const distance = Math.hypot(
            event.clientX - (rect.left + rect.width / 2),
            event.clientY - (rect.top + rect.height / 2)
        );

        if (distance < 100) {
            moveRejected();
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!interviewDate || !interviewTime) {
            setDateError('Please select an interview date and time.');
            return;
        }

        if (interviewDate < getToday()) {
            setDateError('Please select today or a future date.');
            return;
        }

        setDateError('');

        const subject = 'Interview Request - Prashanth Banoth';

        const body = `
Hello Prashanth,

I would like to schedule an interview with you.

My Details:
Name: ${name}
Email: ${visitorEmail}

Requested Interview:
Date: ${interviewDate}
Time: ${interviewTime}

I found your portfolio interesting and would like to discuss an opportunity.

Regards,
${name}
`;

        const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    };

    return (
        <section
            id="hire-me"
            className={`relative overflow-hidden px-6 py-28 transition-colors duration-700 ${darkMode
                    ? "bg-[#080817] text-white"
                    : "bg-[#f4f7ff] text-[#111827]"
                }`}
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />

            <div className="relative mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
                        <Sparkles size={16} />
                        A little hiring challenge
                    </div>

                    <h2 className="text-4xl font-bold md:text-6xl">
                        So, Are You{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Hiring Me?
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-gray-400">
                        Two choices. One impossible button. Let's see if
                        you can catch it!
                    </p>
                </motion.div>

                {/* Interactive game box */}
                <motion.div
                    ref={gameRef}
                    onPointerMove={handleGamePointerMove}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mx-auto mt-12 min-h-[420px] max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:min-h-[460px] md:p-10"
                >
                    <div className="pointer-events-none relative z-10 flex flex-col items-center gap-3">
                        <div className="rounded-full bg-pink-500/10 p-4 text-pink-400">
                            <Heart size={30} />
                        </div>

                        <h3 className="text-xl font-semibold">
                            Your decision matters!
                        </h3>

                        <p className="text-sm text-gray-400">
                            Try to catch the Rejected button!
                        </p>
                    </div>

                    {/* Hire button */}
                    <motion.button
                        onClick={() => setHired(true)}
                        disabled={hired}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute bottom-[12%] left-[12%] z-20 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-green-500/30"
                    >
                        Hire Me!
                    </motion.button>

                    {/* Escaping rejected button */}
                    <motion.button
                        data-rejected-button
                        animate={{
                            left: `${rejectedPosition.x}%`,
                            top: `${rejectedPosition.y}%`,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 20,
                        }}
                        onMouseEnter={moveRejected}
                        onTouchStart={(event) => {
                            event.preventDefault();
                            moveRejected();
                        }}
                        onClick={(event) => {
                            event.preventDefault();
                            moveRejected();
                        }}
                        className="absolute z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-7 py-4 font-bold text-white shadow-lg shadow-red-500/30"
                    >
                        Rejected
                    </motion.button>
                </motion.div>

                {/* Celebration and interview form */}
                <AnimatePresence>
                    {hired && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-5 backdrop-blur-md"
                        >
                            {/* Confetti */}
                            {!showForm &&
                                confetti.map((piece) => (
                                    <motion.div
                                        key={piece.id}
                                        initial={{
                                            opacity: 1,
                                            x: `${piece.x}vw`,
                                            y: '-10vh',
                                            rotate: 0,
                                        }}
                                        animate={{
                                            opacity: 0,
                                            y: '110vh',
                                            rotate: piece.rotation + 720,
                                        }}
                                        transition={{
                                            duration: piece.duration,
                                            delay: piece.delay,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className="pointer-events-none fixed left-0 top-0 h-3 w-2 rounded-sm bg-purple-400"
                                    />
                                ))}

                            <motion.div
                                initial={{ scale: 0.6, y: 50, rotate: -5 }}
                                animate={{ scale: 1, y: 0, rotate: 0 }}
                                exit={{ scale: 0.7, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 180 }}
                                className="relative my-auto w-full max-w-lg rounded-3xl border border-green-400/20 bg-[#111122] p-7 text-center shadow-2xl md:p-9"
                            >
                                <button
                                    onClick={() => {
                                        setHired(false);
                                        setShowForm(false);
                                    }}
                                    className="absolute right-5 top-5 text-gray-500 hover:text-white"
                                    aria-label="Close"
                                >
                                    <X size={22} />
                                </button>


                                <AnimatePresence>
                                    {hired && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-md"
                                        >
                                            <motion.div
                                                initial={{ scale: 0.6, y: 40, rotate: -5 }}
                                                animate={{ scale: 1, y: 0, rotate: 0 }}
                                                exit={{ scale: 0.7, opacity: 0 }}
                                                transition={{ type: 'spring', stiffness: 180 }}
                                                className="relative w-full max-w-md rounded-3xl border border-green-400/20 bg-[#111122] p-8 text-center shadow-2xl"
                                            >
                                                <button
                                                    onClick={() => setHired(false)}
                                                    className="absolute right-5 top-5 text-gray-500 hover:text-white"
                                                    aria-label="Close"
                                                >
                                                    <X size={22} />
                                                </button>

                                                <motion.div
                                                    animate={{
                                                        rotate: [0, -15, 15, -10, 10, 0],
                                                        scale: [1, 1.2, 1],
                                                    }}
                                                    transition={{ duration: 1, repeat: 2 }}
                                                    className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/15 text-green-400"
                                                >
                                                    <PartyPopper size={48} />
                                                </motion.div>

                                                <h3 className="text-3xl font-bold text-green-400">
                                                    IT'S A MATCH!
                                                </h3>

                                                <p className="mt-4 text-lg font-semibold text-white">
                                                    Congratulations! You made an excellent hiring decision!
                                                </p>

                                                <p className="mt-3 text-sm leading-6 text-gray-400">
                                                    Looks like we should work together!
                                                    Let's connect and make something amazing happen.
                                                </p>

                                                <div className="my-7 rounded-2xl border border-purple-400/20 bg-purple-500/5 p-6">
                                                    <Sparkles className="mx-auto mb-3 text-yellow-400" size={28} />

                                                    <p className="mb-3 text-sm text-gray-400">
                                                        Let's connect!
                                                    </p>

                                                    <a
                                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=prashanthbanoth23%40gmail.com&su=Interview%20Opportunity"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="break-all text-lg font-semibold text-purple-300 transition hover:text-cyan-300"
                                                    >
                                                        prashanthbanoth23@gmail.com
                                                    </a>
                                                </div>

                                                <a
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=prashanthbanoth23%40gmail.com&su=Interview%20Opportunity"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 font-bold text-white transition hover:scale-[1.03]"
                                                >
                                                    <Mail size={20} />
                                                    Email Me
                                                </a>

                                                <button
                                                    onClick={() => setHired(false)}
                                                    className="mt-5 text-sm text-gray-500 transition hover:text-white"
                                                >
                                                    Play Again
                                                </button>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
