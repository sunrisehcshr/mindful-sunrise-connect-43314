import re

path = "src/components/FAQSection.tsx"
with open(path, "r") as f:
    content = f.read()

# Replace the specific FAQItem rendering section completely using regex
old_map = """            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                meta={faq.meta}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}"""

new_map = """            {faqs.map((faq, index) => (
              <SpotlightItem
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
              />
            ))}"""

content = content.replace(old_map, new_map)

# Replace the component definition
# Since my previous regex might have missed it if there were slight differences
old_comp = """const FAQItem = ({
  question,
  answer,
  meta,
  isOpen,
  onClick,
  index
}: {
  question: string;
  answer: string;
  meta?: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {"""

spotlight_item_code = """const SpotlightItem = React.memo(({ faq, cardBgColor, cardBorderColor, cardTextColor, hoverCardTextColor, answerTextColor, iconColor, hoverIconColor, spotlightColor }: { faq: { question: string, answer: string, meta?: string }, cardBgColor: string, cardBorderColor: string, cardTextColor: string, hoverCardTextColor: string, answerTextColor: string, iconColor: string, hoverIconColor: string, spotlightColor: string }) => {
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
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <h3 className="text-lg md:text-xl font-barlow font-bold leading-tight tracking-tight transition-colors group-hover:text-orange-500" style={{ color: cardTextColor }}>{faq.question}</h3>
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
                            <p className="pt-4 font-barlow text-lg leading-relaxed max-w-3xl" style={{ color: answerTextColor }}>{faq.answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.li>
    );
});

SpotlightItem.displayName = "SpotlightItem";

const FAQSection = () => {"""

# Replace FAQItem with SpotlightItem
# We need to remove the whole FAQItem function and replace it.
content = re.sub(r'const FAQItem = \(\{.*?</motion\.li>\n\s*\);\n\};\n\nconst FAQSection = \(\) => \{', spotlight_item_code, content, flags=re.DOTALL)

with open(path, "w") as f:
    f.write(content)
