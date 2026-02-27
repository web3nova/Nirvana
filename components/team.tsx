import Image from 'next/image';

const teamMembers = [
    {
        name: "XeusTheGreat",
        role: "Founder",
        roleColor: "text-[#00B2B2]", // Teal/Cyan
        roleBorder: "border-[#00B2B2]",
        image: "/Rectangle 20 (4).png",
        bio: "Guides newbies to millions with DeFi wisdom.",
        socials: [
            { name: "instagram", url: "#" },
            { name: "x", url: "#" },
            { name: "facebook", url: "#" }
        ]
    },
    {
        name: "Noah",
        role: "Technical Director",
        roleColor: "text-[#4A4A4A]", // Dark Gray
        roleBorder: "border-[#4A4A4A]",
        image: "/Rectangle 20 (5).png",
        bio: "Built systems to scale wealth exponentially.",
        socials: [
            { name: "x", url: "#" }
        ]
    },
    {
        name: "Zebulun",
        role: "Creative Director",
        roleColor: "text-[#D48B4B]", // Orange/Amber
        roleBorder: "border-[#D48B4B]",
        image: "/Rectangle 20 (6).png",
        bio: "Crafts visionary creatives for innovative protocols.",
        socials: [
            { name: "x", url: "#" }
        ]
    },
    {
        name: "Akazamarz",
        role: "Developer",
        roleColor: "text-[#FF3366]", // Pink/Red
        roleBorder: "border-[#FF3366]",
        image: "/Rectangle 20 (7).png",
        bio: "Architects the digital systems that powers the academy.",
        socials: [
            { name: "x", url: "#" },
            { name: "linkedin", url: "#" }
        ]
    },
    {
        name: "MrTohbi",
        role: "Community Manager",
        roleColor: "text-[#A133FF]", // Purple
        roleBorder: "border-[#A133FF]",
        image: "/Rectangle 20 (8).png",
        bio: "Manages the community and ensures everyone is having a good time.",
        socials: [
            { name: "x", url: "#" }
        ]
    }
];

const SocialIcon = ({ name, url }: { name: string; url: string }) => {
    return (
        <a
            href={url}
            className="inline-flex items-center justify-center w-6 h-6 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            aria-label={name}
        >
            {name === 'instagram' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            )}
            {name === 'x' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
            )}
            {name === 'facebook' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            )}
            {name === 'linkedin' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            )}
        </a>
    );
};

export default function Team() {
    return (
        <section className="py-16 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-medium text-gray-900 mb-3 tracking-tight">Meet the Team</h2>
                    <p className="max-w-xl mx-auto text-[15px] text-gray-500 leading-relaxed">
                        Meet the crew driving Nirvana—mentors, traders, and Web3<br className="hidden sm:block" />
                        pioneers who live for the grind.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col bg-[#F7F8F9] rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                            <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-100 flex-shrink-0">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <h3 className="text-[17px] font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600">{member.name}</h3>
                                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${member.roleColor} ${member.roleBorder}`}>
                                        {member.role}
                                    </span>
                                </div>

                                <p className="text-[13px] text-gray-500 leading-snug mb-4 flex-grow">
                                    {member.bio}
                                </p>

                                <div className="flex items-center gap-1.5 mt-auto">
                                    {member.socials.map((social, idx) => (
                                        <SocialIcon key={idx} name={social.name} url={social.url} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
