import re

path = "src/components/FAQSection.tsx"
with open(path, "r") as f:
    content = f.read()

# We need to replace FAQItem with SpotlightItem
# First let's add `useMotionValue`, `useMotionTemplate` and `useRef` to imports if not present.
if "useMotionValue" not in content:
    content = content.replace('import { AnimatePresence, motion } from "framer-motion";', 'import { AnimatePresence, motion, useMotionValue, useMotionTemplate } from "framer-motion";\nimport { useRef } from "react";')
elif "useRef" not in content:
    content = content.replace('import React, { useEffect, useMemo, useState }', 'import React, { useEffect, useMemo, useState, useRef }')

# SpotlightItem code
spotlight_item_code = """
const SpotlightItem = React.memo(({ faq, cardBgColor, cardBorderColor, cardTextColor, hoverCardTextColor, answerTextColor, iconColor, hoverIconColor, spotlightColor }: { faq: { question: string, answer: string, meta?: string }, cardBgColor: string, cardBorderColor: string, cardTextColor: string, hoverCardTextColor: string, answerTextColor: string, iconColor: string, hoverIconColor: string, spotlightColor: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef<HTMLLIElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.li
            variants={itemVariants}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-[2rem] border overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300 list-none"
            style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background }}
            />
            <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <h3 className="text-lg font-barlow font-medium leading-tight tracking-tight transition-colors group-hover:text-orange-500" style={{ color: cardTextColor }}>{faq.question}</h3>
                        {faq.meta && (
                            <span className="inline-flex w-fit items-center rounded-full border border-stone-100 bg-stone-50/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 transition-opacity duration-300 sm:ml-auto shrink-0">
                                {faq.meta}
                            </span>
                        )}
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white border border-stone-100 shadow-sm transition-colors duration-300 group-hover:border-orange-200"
                        style={{ color: iconColor }}
                    >
                        <Plus size={20} className="group-hover:text-orange-500 transition-colors" />
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="pt-4 font-barlow text-base leading-relaxed" style={{ color: answerTextColor }}>{faq.answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.li>
    );
});

SpotlightItem.displayName = "SpotlightItem";
"""

# Replace the existing FAQItem with SpotlightItem
content = re.sub(r'const FAQItem = \(\{[^\}]+\}: \{[^\}]+\}\) => \{.*?\n\s*</motion\.li>\n\s*\);\n\};', spotlight_item_code, content, flags=re.DOTALL)

# In FAQSection, replace <FAQItem ... /> with <SpotlightItem ... />
faq_item_usage = """              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                meta={faq.meta}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />"""

spotlight_item_usage = """              <SpotlightItem
                key={index}
                faq={faq}
                cardBgColor="#ffffff"
                cardBorderColor="rgba(249, 115, 22, 0.15)"
                cardTextColor="#1c1917"
                hoverCardTextColor="#ea580c"
                answerTextColor="#78716c"
                iconColor="#f97316"
                hoverIconColor="#ffffff"
                spotlightColor="rgba(249, 115, 22, 0.08)"
              />"""

content = content.replace(faq_item_usage, spotlight_item_usage)

# Remove `openIndex`, `setOpenIndex` and `toggleFAQ` since SpotlightItem manages its own state
content = re.sub(r'const \[openIndex, setOpenIndex\] = useState<number \| null>\(0\);\n\s*', '', content)
content = re.sub(r'const toggleFAQ = \(index: number\) => \{.*?\n\s*\};\n\s*', '', content, flags=re.DOTALL)

with open(path, "w") as f:
    f.write(content)
