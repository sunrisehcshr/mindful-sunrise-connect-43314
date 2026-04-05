import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# We want to replace everything from {/* ROW 1: Status + Hours */} to the end of the motion.div containing ROW 2.
# Let's use a regex pattern.

pattern = re.compile(r'\{\/\* ROW 1: Status \+ Hours \*\/.*?\{\/\* ROW 2: Main Value Prop \+ Detail Cards \*\/\}.*?<\/motion\.div>', re.DOTALL)

new_grid = """{/* ROW 1: Main Value Prop + Detail Cards */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }}
                  className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10"
                >
                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white group" className="flex flex-col justify-between py-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-700" />
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform duration-500">
                        <HeartPulse className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold group-hover:border-orange-200 transition-colors duration-500">
                        All-In-One Care
                      </div>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <h3 className="text-4xl md:text-5xl font-normal leading-[0.95] tracking-tighter text-stone-900 group-hover:text-stone-950 transition-colors duration-300">
                        Everything your family needs <br />
                        <span className="font-instrument-serif italic text-orange-500 group-hover:text-orange-600 transition-colors duration-300">under one roof.</span>
                      </h3>
                      <p className="max-w-md text-stone-500 text-sm leading-relaxed font-medium group-hover:text-stone-600 transition-colors duration-300">
                        Stop bouncing between different clinics for therapy and psychiatry. From children struggling with behavioral issues to adults navigating depression or relationship conflict, our Darby clinic provides a unified, expert team for your entire family.
                      </p>
                    </div>
                  </Card>

                  <div className="flex flex-col gap-4">
                    <Card containerClassName="rounded-3xl bg-stone-900 text-white border-none group relative overflow-hidden" className="flex flex-col justify-between h-full z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                      <ShieldCheck className="h-8 w-8 text-orange-400 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-orange-300" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-orange-100 transition-colors duration-300">Zero Financial Surprises</h4>
                        <p className="text-stone-400 text-xs leading-relaxed group-hover:text-stone-300 transition-colors duration-300">We proudly and exclusively accept Medicaid. Get premium psychiatric care without the out-of-pocket costs.</p>
                      </div>
                    </Card>
                    <Card containerClassName="rounded-3xl bg-orange-500 text-stone-900 border-none group relative overflow-hidden" className="flex flex-col justify-between h-full z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                      <Users className="h-8 w-8 text-white mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">No More Starting Over</h4>
                        <p className="text-stone-900/70 text-xs leading-relaxed font-medium group-hover:text-stone-900/90 transition-colors duration-300">Your therapist and prescriber work together. Stop repeating your story to five different doctors.</p>
                      </div>
                    </Card>
                  </div>
                </motion.div>

                {/* ROW 2: Additional Value Props */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }}
                  className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10"
                >
                  <Card containerClassName="md:col-span-1 rounded-3xl bg-blue-50/80 border-blue-200/50 group relative overflow-hidden" className="flex flex-col justify-center items-start py-8 px-8 z-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-[30px] pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-500" />
                    <Calendar className="h-8 w-8 text-blue-600 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                    <h4 className="font-bold text-lg text-blue-950 mb-2">No Waitlists</h4>
                    <p className="text-blue-900/70 text-xs leading-relaxed font-medium">Stop waiting months for a psychiatric evaluation. We have immediate openings for new patients in Darby, PA.</p>
                  </Card>

                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white group relative overflow-hidden" className="flex flex-col justify-center items-start py-8 px-8 z-10 border-stone-200/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-50/0 to-stone-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 transition-transform duration-500 group-hover:scale-110">
                        <Stethoscope className="h-5 w-5 text-emerald-600" />
                      </div>
                      <h4 className="font-bold text-xl text-stone-900">Evidence-Based Practices</h4>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium max-w-lg">
                      We don't do guesswork. We exclusively utilize scientifically proven methods—like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Trauma-Informed Care—to ensure you see measurable progress in your daily life.
                    </p>
                  </Card>
                </motion.div>"""

# Need to find the exact match and replace
# It ends at </motion.div> for the ROW 2. But we have to be careful not to match too far.
# Let's read the file and do string replacement from `{/* ROW 1: Status + Hours */}` to `</motion.div>` before `</motion.div>`
start_marker = '{/* ROW 1: Status + Hours */}'
end_marker = '                </motion.div>\n              </motion.div>'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_grid + '\n' + content[end_idx:]
    with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
        f.write(new_content)
    print("Successfully replaced grid.")
else:
    print("Could not find markers.")

